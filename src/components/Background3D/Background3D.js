import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import styled from "styled-components";

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(to bottom, #0a192f, #0a192f);
`;

const CursorEffect = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
`;

const Background3D = () => {
  const containerRef = useRef();
  const cursorRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const controlsRef = useRef();
  const spheresRef = useRef([]);
  const particlesRef = useRef();
  const raycasterRef = useRef();
  const clockRef = useRef(new THREE.Clock());
  const mouseRef = useRef({ x: 0, y: 0, worldX: 0, worldY: 0 });
  const cursorTrailRef = useRef([]);
  const targetRotationRef = useRef({ x: 0, y: 0 });

  const createScene = () => {
    const HEIGHT = window.innerHeight;
    const WIDTH = window.innerWidth;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a192f);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
    camera.position.z = 50;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controlsRef.current = controls;

    // Raycaster
    raycasterRef.current = new THREE.Raycaster();
  };

  const createLights = () => {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0x64ffda, 1);
    pointLight.position.set(5, 5, 5);

    const pointLight2 = new THREE.PointLight(0x64ffda, 0.5);
    pointLight2.position.set(-5, -5, 5);

    sceneRef.current.add(ambientLight, pointLight, pointLight2);
  };

  const createParticles = () => {
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    const color1 = new THREE.Color(0x64ffda);
    const color2 = new THREE.Color(0x0a192f);

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 100;

      const mixedColor = color1.clone().lerp(color2, Math.random() * 0.5);
      colors[i] = mixedColor.r;
      colors[i + 1] = mixedColor.g;
      colors[i + 2] = mixedColor.b;

      scales[i / 3] = Math.random();
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );
    particlesGeometry.setAttribute(
      "scale",
      new THREE.BufferAttribute(scales, 1)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.3,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    sceneRef.current.add(particles);
    particlesRef.current = particles;
  };

  const createBubbles = () => {
    const bubbleGeometry = new THREE.SphereGeometry(1, 32, 32);
    const bubbleMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x64ffda,
      transparent: true,
      opacity: 0.2,
      roughness: 0.2,
      metalness: 0.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    for (let i = 0; i < 25; i++) {
      const bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial.clone());

      bubble.position.x = (Math.random() - 0.5) * 80;
      bubble.position.y = (Math.random() - 0.5) * 80;
      bubble.position.z = (Math.random() - 0.5) * 80;

      bubble.scale.setScalar(Math.random() * 3 + 1);
      bubble.userData = {
        originalScale: bubble.scale.x,
        speed: Math.random() * 0.02 + 0.01,
        offset: Math.random() * Math.PI * 2,
        originalPosition: bubble.position.clone(),
        targetPosition: bubble.position.clone(),
        velocity: new THREE.Vector3(),
      };

      spheresRef.current.push(bubble);
      sceneRef.current.add(bubble);
    }
  };

  const handleMouseMove = (event) => {
    // Update 2D mouse coordinates
    mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Calculate world coordinates
    const vector = new THREE.Vector3(
      mouseRef.current.x,
      mouseRef.current.y,
      0.5
    );
    vector.unproject(cameraRef.current);
    const dir = vector.sub(cameraRef.current.position).normalize();
    const distance = -cameraRef.current.position.z / dir.z;
    const pos = cameraRef.current.position
      .clone()
      .add(dir.multiplyScalar(distance));
    mouseRef.current.worldX = pos.x;
    mouseRef.current.worldY = pos.y;

    // Update target rotation for camera
    targetRotationRef.current.x = mouseRef.current.y * 0.5;
    targetRotationRef.current.y = mouseRef.current.x * 0.5;

    if (raycasterRef.current && cameraRef.current) {
      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
      const intersects = raycasterRef.current.intersectObjects(
        spheresRef.current
      );
      updateCursorTrail(event.clientX, event.clientY, intersects.length > 0);

      // Highlight intersected bubbles
      spheresRef.current.forEach((bubble) => {
        if (intersects.find((intersect) => intersect.object === bubble)) {
          bubble.material.opacity = 0.6;
          bubble.material.emissive.set(0x64ffda);
          bubble.material.emissiveIntensity = 0.5;
        } else {
          bubble.material.opacity = 0.2;
          bubble.material.emissive.set(0x000000);
          bubble.material.emissiveIntensity = 0;
        }
      });
    }
  };

  const createCursorTrail = () => {
    const trail = document.createElement("div");
    trail.style.position = "absolute";
    trail.style.width = "10px";
    trail.style.height = "10px";
    trail.style.borderRadius = "50%";
    trail.style.backgroundColor = "rgba(100, 255, 218, 0.5)";
    trail.style.pointerEvents = "none";
    trail.style.transform = "translate(-50%, -50%)";
    trail.style.transition =
      "width 0.3s, height 0.3s, opacity 0.3s, background-color 0.3s";
    trail.style.opacity = "0";
    cursorRef.current?.appendChild(trail);
    return trail;
  };

  const updateCursorTrail = (x, y, isHovering) => {
    if (!cursorRef.current) return;

    if (cursorTrailRef.current.length === 0) {
      cursorTrailRef.current = Array.from({ length: 20 }, createCursorTrail);
    }

    cursorTrailRef.current.forEach((trail, index) => {
      const delay = index * 0.05;
      const trailX =
        x + Math.sin(Date.now() * 0.001 + index) * (isHovering ? 10 : 5);
      const trailY =
        y + Math.cos(Date.now() * 0.001 + index) * (isHovering ? 10 : 5);

      trail.style.left = `${trailX}px`;
      trail.style.top = `${trailY}px`;

      if (isHovering) {
        trail.style.width = `${25 + index * 5}px`;
        trail.style.height = `${25 + index * 5}px`;
        trail.style.backgroundColor = `rgba(100, 255, 218, ${
          0.8 - index * 0.03
        })`;
        trail.style.opacity = "1";
      } else {
        trail.style.width = "10px";
        trail.style.height = "10px";
        trail.style.backgroundColor = `rgba(100, 255, 218, ${
          0.5 - index * 0.02
        })`;
        trail.style.opacity = "0.7";
      }
    });
  };

  const handleWindowResize = () => {
    if (!cameraRef.current || !rendererRef.current) return;

    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;

    cameraRef.current.aspect = WIDTH / HEIGHT;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(WIDTH, HEIGHT);
  };

  const animate = () => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

    requestAnimationFrame(animate);
    const elapsedTime = clockRef.current.getElapsedTime();

    // Update particles
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      const scales = particlesRef.current.geometry.attributes.scale.array;

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];

        // Calculate distance to mouse
        const dx = x - mouseRef.current.worldX;
        const dy = y - mouseRef.current.worldY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Update particle positions based on mouse proximity
        if (dist < 20) {
          const angle = Math.atan2(dy, dx);
          const force = (20 - dist) * 0.05;
          positions[i] += Math.cos(angle) * force;
          positions[i + 1] += Math.sin(angle) * force;

          // Pulse effect
          scales[i / 3] = Math.min(2, scales[i / 3] + 0.02);
        } else {
          // Return to original scale
          scales[i / 3] = Math.max(Math.random(), scales[i / 3] - 0.01);
        }

        // Add some natural movement
        positions[i] += Math.sin(elapsedTime * 0.5 + i / 3) * 0.02;
        positions[i + 1] += Math.cos(elapsedTime * 0.5 + i / 3) * 0.02;
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.geometry.attributes.scale.needsUpdate = true;
      particlesRef.current.rotation.y = elapsedTime * 0.05;
    }

    // Update bubbles with smooth movement
    spheresRef.current.forEach((bubble, i) => {
      const {
        speed,
        offset,
        originalPosition,
        targetPosition,
        velocity,
      } = bubble.userData;

      // Calculate distance to mouse
      const dx = bubble.position.x - mouseRef.current.worldX;
      const dy = bubble.position.y - mouseRef.current.worldY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 30) {
        // Repel from mouse
        const angle = Math.atan2(dy, dx);
        const force = (30 - dist) * 0.03;
        targetPosition.x = bubble.position.x + Math.cos(angle) * force;
        targetPosition.y = bubble.position.y + Math.sin(angle) * force;
      } else {
        // Return to original position with oscillation
        targetPosition.x =
          originalPosition.x + Math.sin(elapsedTime * speed + offset) * 5;
        targetPosition.y =
          originalPosition.y + Math.cos(elapsedTime * speed + offset) * 5;
      }

      // Smooth movement using velocity
      velocity.x += (targetPosition.x - bubble.position.x) * 0.1;
      velocity.y += (targetPosition.y - bubble.position.y) * 0.1;
      velocity.multiplyScalar(0.95); // Damping

      bubble.position.x += velocity.x;
      bubble.position.y += velocity.y;

      // Rotation and scale effects
      bubble.rotation.x = elapsedTime * speed * 0.5;
      bubble.rotation.z = elapsedTime * speed * 0.3;

      const scale =
        bubble.userData.originalScale +
        Math.sin(elapsedTime * speed + offset) * 0.2;
      bubble.scale.setScalar(scale);
    });

    // Smooth camera rotation
    cameraRef.current.rotation.x +=
      (targetRotationRef.current.x - cameraRef.current.rotation.x) * 0.1;
    cameraRef.current.rotation.y +=
      (targetRotationRef.current.y - cameraRef.current.rotation.y) * 0.1;

    // Update controls
    controlsRef.current?.update();

    // Render
    rendererRef.current.render(sceneRef.current, cameraRef.current);
  };

  useEffect(() => {
    createScene();
    createLights();
    createParticles();
    createBubbles();
    animate();

    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("mousemove", handleMouseMove);

      // Cleanup cursor trail
      cursorTrailRef.current.forEach((trail) => {
        trail.parentNode?.removeChild(trail);
      });

      // Cleanup Three.js resources
      spheresRef.current.forEach((bubble) => {
        bubble.geometry.dispose();
        bubble.material.dispose();
      });

      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        particlesRef.current.material.dispose();
      }

      rendererRef.current?.dispose();
      containerRef.current?.removeChild(rendererRef.current?.domElement);
    };
  }, []);

  return (
    <>
      <BackgroundContainer ref={containerRef} />
      <CursorEffect ref={cursorRef} />
    </>
  );
};

export default Background3D;
