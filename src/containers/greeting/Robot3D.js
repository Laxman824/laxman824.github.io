// using glb link

// import React, { useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";
// import * as THREE from "three";

// // Avatar Model Component
// function AvatarModel({ mousePosition }) {
//   const group = useRef();
//   const { scene } = useGLTF("https://models.readyplayer.me/690cc6c248062250a4342702.glb");

//   useFrame((state) => {
//     if (group.current) {
//       // Smooth rotation based on mouse
//       const targetRotationY = mousePosition.x * 0.5;
//       const targetRotationX = mousePosition.y * 0.3;

//       group.current.rotation.y = THREE.MathUtils.lerp(
//         group.current.rotation.y,
//         targetRotationY,
//         0.1
//       );

//       // Subtle floating animation
//       group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.1;
//     }
//   });

//   return (
//     <group ref={group} dispose={null}>
//       <primitive object={scene} scale={1.8} position={[0, -1.5, 0]} />
//     </group>
//   );
// }

// // Loading indicator
// function Loader() {
//   const ref = useRef();

//   useFrame((state) => {
//     if (ref.current) {
//       ref.current.rotation.y = state.clock.elapsedTime;
//     }
//   });

//   return (
//     <mesh ref={ref}>
//       <torusGeometry args={[1, 0.3, 16, 100]} />
//       <meshStandardMaterial color="#7CD1F7" emissive="#7CD1F7" emissiveIntensity={0.5} />
//     </mesh>
//   );
// }

// // Main 3D Scene
// export default function Robot3D() {
//   const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

//   const handleMouseMove = (event) => {
//     const rect = event.currentTarget.getBoundingClientRect();
//     const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
//     const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
//     setMousePosition({ x, y });
//   };

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "600px",
//         borderRadius: "20px",
//         overflow: "hidden",
//         position: "relative",
//         boxShadow: "0 10px 50px rgba(0,0,0,0.3)",
//       }}
//       onMouseMove={handleMouseMove}
//     >
//       <Canvas
//         shadows
//         camera={{ position: [0, 0, 3], fov: 50 }}
//         style={{
//           background: "linear-gradient(180deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
//         }}
//       >
//         {/* Dramatic Lighting */}
//         <ambientLight intensity={0.4} />
//         <spotLight
//           position={[5, 5, 5]}
//           angle={0.3}
//           penumbra={1}
//           intensity={1}
//           castShadow
//         />
//         <pointLight position={[-5, -5, -5]} intensity={0.5} color="#7CD1F7" />
//         <pointLight position={[5, 0, 0]} intensity={0.5} color="#ff00ff" />

//         {/* Environment for realistic reflections */}
//         <Environment preset="city" />

//         {/* 3D Avatar with loading fallback */}
//         <Suspense fallback={<Loader />}>
//           <AvatarModel mousePosition={mousePosition} />

//           {/* Ground shadow */}
//           <ContactShadows
//             position={[0, -1.5, 0]}
//             opacity={0.6}
//             scale={5}
//             blur={2.5}
//             far={4}
//           />
//         </Suspense>

//         {/* Optional: Enable manual rotation */}
//         <OrbitControls
//           enableZoom={false}
//           enablePan={false}
//           minPolarAngle={Math.PI / 3}
//           maxPolarAngle={Math.PI / 2}
//         />
//       </Canvas>

//       {/* Instruction overlay */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "20px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           color: "rgba(255, 255, 255, 0.8)",
//           fontSize: "14px",
//           fontFamily: "Google Sans Regular",
//           textAlign: "center",
//           pointerEvents: "none",
//           textShadow: "0 2px 10px rgba(0,0,0,0.5)",
//         }}
//       >
//         Drag to rotate • Move mouse to interact ✨
//       </div>
//     </div>
//   );
// }

// import React, { useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei";
// import * as THREE from "three";

// // Minimal Phoenix/Mascot Model
// function MascotModel({ mousePosition }) {
//   const group = useRef();
//   const { scene } = useGLTF("/cute_robot_mascot.glb");

//   useFrame((state) => {
//     if (group.current) {
//       // Smooth follow mouse - very responsive
//       const targetRotationY = -mousePosition.x * 0.8;
//       const targetRotationX = mousePosition.y * 0.5;

//       group.current.rotation.y = THREE.MathUtils.lerp(
//         group.current.rotation.y,
//         targetRotationY,
//         0.1
//       );

//       group.current.rotation.x = THREE.MathUtils.lerp(
//         group.current.rotation.x,
//         targetRotationX,
//         0.1
//       );

//       // Subtle idle floating
//       group.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
//     }
//   });

//   return (
//     <group ref={group} dispose={null}>
//       <primitive object={scene} scale={1} position={[0, 0, 0]} />
//     </group>
//   );
// }

// // Minimal loader
// function Loader() {
//   return (
//     <mesh>
//       <sphereGeometry args={[0.3, 32, 32]} />
//       <meshStandardMaterial color="#9B59B6" emissive="#9B59B6" emissiveIntensity={0.5} />
//     </mesh>
//   );
// }

// // Main Scene - Minimal Setup
// export default function Robot3D() {
//   const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

//   const handleMouseMove = (event) => {
//     // Track mouse across entire screen
//     const x = (event.clientX / window.innerWidth) * 2 - 1;
//     const y = -(event.clientY / window.innerHeight) * 2 + 1;
//     setMousePosition({ x, y });
//   };

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "600px",
//         position: "relative",
//         overflow: "visible",
//       }}
//       onMouseMove={handleMouseMove}
//     >
//       <Canvas
//         camera={{ position: [0, 0, 4], fov: 50 }}
//         gl={{ alpha: true, antialias: true }}
//         style={{
//           background: "transparent",
//           width: "100%",
//           height: "100%",
//         }}
//       >
//         {/* Minimal lighting - clean look */}
//         <ambientLight intensity={0.8} />
//         <spotLight position={[5, 5, 5]} intensity={0.8} />
//         <pointLight position={[-3, 2, -3]} intensity={0.3} color="#A78BFA" />

//         {/* Mascot */}
//         <Suspense fallback={<Loader />}>
//           <MascotModel mousePosition={mousePosition} />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }

// #working best compute scence

import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ============================================
// 1. ENHANCED CUSTOM CURSOR
// ============================================
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState([]);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPosition(newPos);
      setTrail((prev) => [...prev.slice(-10), newPos]);
    };

    const handleMouseOver = (e) => {
      const isInteractive =
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A" ||
        e.target.classList.contains("interactive") ||
        e.target.closest("canvas");
      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {trail.map((pos, i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            left: pos.x,
            top: pos.y,
            width: `${(i + 1) * 2.5}px`,
            height: `${(i + 1) * 2.5}px`,
            borderRadius: "50%",
            background: `rgba(100, 255, 218, ${(i + 1) * 0.05})`,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 9998,
            transition: "all 0.15s ease-out",
          }}
        />
      ))}

      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: isHovering ? "50px" : "30px",
          height: isHovering ? "50px" : "30px",
          borderRadius: "50%",
          border: `2px solid ${
            isHovering ? "#64FFDA" : "rgba(100, 255, 218, 0.5)"
          }`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
          pointerEvents: "none",
          zIndex: 9999,
          transition: "all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          background: isHovering
            ? "radial-gradient(circle, rgba(100,255,218,0.1), transparent)"
            : "transparent",
        }}
      />

      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#64FFDA",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 10000,
          boxShadow: "0 0 10px rgba(100, 255, 218, 0.8)",
        }}
      />
    </>
  );
}

// ============================================
// 2. FLOATING LAPTOP WITH SCREEN
// ============================================
function FloatingLaptop({ mousePosition }) {
  const laptopRef = useRef();
  const screenRef = useRef();
  const [codeLines, setCodeLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLines((prev) => (prev + 1) % 10);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1 + mousePosition.x * 0.3;
      laptopRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <group ref={laptopRef} position={[0, -0.5, 0]}>
      {/* Laptop Base */}
      <mesh position={[0, -0.15, 0]} receiveShadow>
        <boxGeometry args={[2.5, 0.15, 1.8]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Keyboard area */}
      <mesh position={[0, -0.07, 0.1]}>
        <boxGeometry args={[2.2, 0.02, 1.4]} />
        <meshStandardMaterial color="#0f172a" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Touchpad */}
      <mesh position={[0, -0.06, 0.6]}>
        <boxGeometry args={[0.8, 0.01, 0.5]} />
        <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Screen back */}
      <mesh position={[0, 0.85, -0.88]} rotation={[-0.2, 0, 0]} castShadow>
        <boxGeometry args={[2.5, 1.6, 0.1]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Screen - Active Display */}
      <mesh ref={screenRef} position={[0, 0.85, -0.83]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[2.3, 1.5, 0.02]} />
        <meshStandardMaterial
          color="#0a192f"
          emissive="#64FFDA"
          emissiveIntensity={0.3}
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Screen glow */}
      <pointLight
        position={[0, 0.85, -0.8]}
        intensity={1.5}
        color="#64FFDA"
        distance={3}
      />

      {/* Code lines on screen */}
      <group position={[0, 0.85, -0.82]} rotation={[-0.2, 0, 0]}>
        {[...Array(8)].map((_, i) => (
          <mesh key={i} position={[-0.9, 0.5 - i * 0.15, 0]}>
            <boxGeometry args={[Math.random() * 1.5 + 0.5, 0.04, 0.01]} />
            <meshStandardMaterial
              color={i === codeLines ? "#64FFDA" : "#8892b0"}
              emissive={i === codeLines ? "#64FFDA" : "#8892b0"}
              emissiveIntensity={i === codeLines ? 1 : 0.3}
            />
          </mesh>
        ))}
      </group>

      {/* Hinge */}
      <mesh position={[0, 0, -0.9]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 2.5, 32]} />
        <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

// ============================================
// 3. CUTE CODING CAT MASCOT - FIXED FOR THREE.JS 0.135
// ============================================
function CodingCat({ mousePosition }) {
  const catRef = useRef();
  const leftEarRef = useRef();
  const rightEarRef = useRef();
  const tailRef = useRef();
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 200);
    }, 3000);
    return () => clearInterval(blinkInterval);
  }, []);

  useFrame((state) => {
    if (catRef.current) {
      catRef.current.rotation.y = THREE.MathUtils.lerp(
        catRef.current.rotation.y,
        mousePosition.x * 0.3,
        0.1
      );
      catRef.current.position.y =
        0.5 + Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    }

    if (leftEarRef.current && rightEarRef.current) {
      leftEarRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 2) * 0.1;
      rightEarRef.current.rotation.z =
        -Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }

    if (tailRef.current) {
      tailRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 1.5) * 0.3;
      tailRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 1.2) * 0.2;
    }
  });

  return (
    <group ref={catRef} position={[2.5, 0.5, 1]}>
      {/* Body - replaced capsule with cylinder + spheres */}
      <mesh position={[0, -0.3, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.5, 32]} />
        <meshStandardMaterial color="#f1f5f9" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Body top cap */}
      <mesh position={[0, -0.05, 0]} castShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#f1f5f9" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Body bottom cap */}
      <mesh position={[0, -0.55, 0]} castShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#f1f5f9" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.25, 0]} castShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#f1f5f9" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Left Ear */}
      <mesh ref={leftEarRef} position={[-0.2, 0.5, 0]} castShadow>
        <coneGeometry args={[0.12, 0.25, 32]} />
        <meshStandardMaterial color="#f1f5f9" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Right Ear */}
      <mesh ref={rightEarRef} position={[0.2, 0.5, 0]} castShadow>
        <coneGeometry args={[0.12, 0.25, 32]} />
        <meshStandardMaterial color="#f1f5f9" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Left Eye */}
      <mesh position={[-0.12, 0.3, 0.25]}>
        <sphereGeometry args={[blinking ? 0.03 : 0.08, 32, 32]} />
        <meshStandardMaterial
          color="#0f172a"
          emissive="#64FFDA"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Right Eye */}
      <mesh position={[0.12, 0.3, 0.25]}>
        <sphereGeometry args={[blinking ? 0.03 : 0.08, 32, 32]} />
        <meshStandardMaterial
          color="#0f172a"
          emissive="#64FFDA"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0.22, 0.33]}>
        <sphereGeometry args={[0.04, 32, 32]} />
        <meshStandardMaterial color="#ec4899" />
      </mesh>

      {/* Whiskers */}
      {[-1, 1].map((side) => (
        <group key={side}>
          {[0, 0.05, -0.05].map((offset, i) => (
            <mesh
              key={i}
              position={[side * 0.15, 0.2 + offset, 0.3]}
              rotation={[0, 0, side * 0.3]}
            >
              <cylinderGeometry args={[0.005, 0.005, 0.4, 8]} />
              <meshStandardMaterial color="#94a3b8" />
            </mesh>
          ))}
        </group>
      ))}

      {/* Tail - replaced capsule with cylinder + sphere */}
      <group ref={tailRef} position={[0, -0.3, -0.4]}>
        <mesh position={[0, 0, -0.2]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.5, 16]} />
          <meshStandardMaterial
            color="#f1f5f9"
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>
        <mesh position={[0, 0.25, -0.2]} castShadow>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#f1f5f9"
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>
        <mesh position={[0, -0.25, -0.2]} castShadow>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#f1f5f9"
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>
      </group>

      {/* Paws */}
      {[
        [-0.2, -0.65, 0.15],
        [0.2, -0.65, 0.15],
        [-0.15, -0.65, -0.15],
        [0.15, -0.65, -0.15],
      ].map((pos, i) => (
        <mesh key={i} position={pos} castShadow>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshStandardMaterial
            color="#f1f5f9"
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

// ============================================
// 4. FLOATING COFFEE CUP
// ============================================
function FloatingCoffee() {
  const coffeeRef = useRef();
  const steamRefs = useRef([]);

  useFrame((state) => {
    if (coffeeRef.current) {
      coffeeRef.current.position.y =
        0.3 + Math.sin(state.clock.elapsedTime * 0.7 + Math.PI) * 0.1;
      coffeeRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }

    steamRefs.current.forEach((steam, i) => {
      if (steam) {
        steam.position.y = (state.clock.elapsedTime * 0.5 + i * 0.3) % 1;
        steam.material.opacity = 1 - steam.position.y;
      }
    });
  });

  return (
    <group ref={coffeeRef} position={[-2.5, 0.3, 0.5]}>
      {/* Cup */}
      <mesh castShadow>
        <cylinderGeometry args={[0.25, 0.2, 0.5, 32]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Coffee liquid */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.24, 0.24, 0.2, 32]} />
        <meshStandardMaterial color="#4a2511" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Handle */}
      <mesh position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.15, 0.03, 16, 32]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Steam particles */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(el) => (steamRefs.current[i] = el)}
          position={[Math.sin(i) * 0.1, 0.3, Math.cos(i) * 0.1]}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

// ============================================
// 5. FLOATING CODE SYMBOLS
// ============================================
function FloatingCodeSymbols() {
  const symbols = ["{ }", "< >", "( )", "[ ]", "< / >", "="];
  const symbolRefs = useRef([]);

  useFrame((state) => {
    symbolRefs.current.forEach((symbol, i) => {
      if (symbol) {
        const offset = (i * Math.PI * 2) / symbols.length;
        symbol.position.x =
          Math.sin(state.clock.elapsedTime * 0.5 + offset) * 3;
        symbol.position.y =
          Math.cos(state.clock.elapsedTime * 0.3 + offset) * 2;
        symbol.position.z =
          Math.sin(state.clock.elapsedTime * 0.4 + offset) * 2 - 1;
        symbol.rotation.y = state.clock.elapsedTime * 0.5;
      }
    });
  });

  return (
    <>
      {symbols.map((_, i) => (
        <mesh key={i} ref={(el) => (symbolRefs.current[i] = el)}>
          <boxGeometry args={[0.3, 0.3, 0.05]} />
          <meshStandardMaterial
            color="#64FFDA"
            emissive="#64FFDA"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </>
  );
}

// ============================================
// 6. PARTICLES SYSTEM
// ============================================
function ParticleField() {
  const particlesRef = useRef();
  const count = 500;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 25;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 25;

    const color = new THREE.Color();
    const colorChoice = Math.random();
    if (colorChoice < 0.33) {
      color.setHex(0x64ffda);
    } else if (colorChoice < 0.66) {
      color.setHex(0x8892b0);
    } else {
      color.setHex(0xccd6f6);
    }

    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// ============================================
// 7. FLOATING PLANTS (for workspace feel)
// ============================================
function FloatingPlant({ position }) {
  const plantRef = useRef();

  useFrame((state) => {
    if (plantRef.current) {
      plantRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      plantRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.1;
    }
  });

  return (
    <group ref={plantRef} position={position}>
      {/* Pot */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.15, 0.3, 32]} />
        <meshStandardMaterial color="#fb923c" metalness={0.2} roughness={0.8} />
      </mesh>

      {/* Leaves */}
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={i}
          position={[
            Math.sin((i * Math.PI * 2) / 4) * 0.15,
            0.2 + i * 0.1,
            Math.cos((i * Math.PI * 2) / 4) * 0.15,
          ]}
          rotation={[0, (i * Math.PI * 2) / 4, Math.PI / 4]}
          castShadow
        >
          <sphereGeometry args={[0.12, 8, 8]} />
          <meshStandardMaterial
            color="#10b981"
            metalness={0.1}
            roughness={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}

// ============================================
// 8. HOLOGRAPHIC DISPLAY
// ============================================
function HolographicDisplay() {
  const displayRef = useRef();
  const [value, setValue] = useState(0);

  useFrame((state) => {
    if (displayRef.current) {
      displayRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      displayRef.current.position.y =
        1.5 + Math.sin(state.clock.elapsedTime) * 0.2;
    }
    setValue(Math.sin(state.clock.elapsedTime) * 50 + 50);
  });

  return (
    <group ref={displayRef} position={[0, 1.5, 0]}>
      {/* Frame */}
      <mesh>
        <torusGeometry args={[0.8, 0.03, 16, 32]} />
        <meshStandardMaterial
          color="#64FFDA"
          emissive="#64FFDA"
          emissiveIntensity={1}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Inner rings */}
      {[0.6, 0.4, 0.2].map((radius, i) => (
        <mesh key={i} rotation={[0, 0, (Math.PI / 3) * i]}>
          <torusGeometry args={[radius, 0.015, 16, 32]} />
          <meshStandardMaterial
            color="#8892b0"
            emissive="#8892b0"
            emissiveIntensity={0.5}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}

      <pointLight
        position={[0, 0, 0]}
        intensity={2}
        color="#64FFDA"
        distance={4}
      />
    </group>
  );
}

// ============================================
// MAIN COMPONENT - TRANSPARENT VERSION
// ============================================
export default function DeveloperPortfolio3D({
  height = "650px",
  className = "",
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef();

  const handleMouseMove = (event) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      setMousePosition({ x, y });
    }
  };

  return (
    <>
      <CustomCursor />
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className={className}
        style={{
          width: "100%",
          height: height,
          position: "relative",
          cursor: "none",
          background: "transparent",
        }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 2, 8], fov: 50 }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
          }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#64FFDA" />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8892b0" />
          <spotLight
            position={[0, 10, 0]}
            angle={0.6}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />

          {/* Scene Elements */}
          <ParticleField />
          <FloatingLaptop mousePosition={mousePosition} />
          <CodingCat mousePosition={mousePosition} />
          <FloatingCoffee />
          <FloatingCodeSymbols />
          <HolographicDisplay />
          <FloatingPlant position={[-3, -0.5, -1]} />
          <FloatingPlant position={[3, -0.5, -1.5]} />

          {/* Subtle transparent floor for shadows */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1, 0]}
            receiveShadow
          >
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial
              color="#0a192f"
              metalness={0.1}
              roughness={0.9}
              transparent
              opacity={0.1}
            />
          </mesh>
        </Canvas>

        {/* UI Overlay - optional, remove if not needed */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#64FFDA",
            fontSize: "24px",
            fontFamily: "'Fira Code', monospace",
            textAlign: "center",
            pointerEvents: "none",
            textShadow: "0 0 20px rgba(100, 255, 218, 0.5)",
            fontWeight: "600",
          }}
        >
          &lt; Developer Workspace /&gt;
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#8892b0",
            fontSize: "14px",
            fontFamily: "'Fira Code', monospace",
            textAlign: "center",
            pointerEvents: "none",
            textShadow: "0 0 10px rgba(136, 146, 176, 0.3)",
          }}
        >
          ✨ Move your mouse to interact ✨
        </div>
      </div>
    </>
  );
}
