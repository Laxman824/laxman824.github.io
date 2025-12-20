import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import Type from "./typewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// ✅ Import Firebase modules
import { db } from "../../firebase/config";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  onSnapshot,
} from "firebase/firestore";

import {
  FaCode,
  FaServer,
  FaRobot,
  FaDatabase,
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
} from "react-icons/fa";

// ✅ COMPONENT 1: Premium Smooth Animated Number
function AnimatedNumber({ value }) {
  const [displayValue, setDisplayValue] = useState(0);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const startValueRef = useRef(0);

  useEffect(() => {
    if (value === null || value === undefined) return;

    // Longer duration for smoother effect
    const duration = 2000;
    startValueRef.current = displayValue;
    startTimeRef.current = null;

    // Ease-out Expo function for "Spinning Wheel" effect
    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const animate = (currentTime) => {
      if (!startTimeRef.current) startTimeRef.current = currentTime;
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeOutExpo(progress);
      const currentValue = Math.floor(
        startValueRef.current + (value - startValueRef.current) * easedProgress
      );

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [value]);

  return (
    <span className="animated-count">{displayValue.toLocaleString()}</span>
  );
}

// ✅ COMPONENT 2: Premium 3D Eye with Mouse Tracking
function PremiumEye({ isLoading, isHovered }) {
  const eyeRef = useRef(null);
  const pupilRef = useRef(null);
  const [isBlinking, setIsBlinking] = useState(false);

  // Mouse tracking logic
  const handleMouseMove = useCallback(
    (e) => {
      if (!eyeRef.current || !pupilRef.current) return;

      const eye = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = eye.left + eye.width / 2;
      const eyeCenterY = eye.top + eye.height / 2;

      const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
      // Limit movement distance so pupil stays in eye
      const distance = Math.min(
        Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 15,
        4
      );

      const pupilX = Math.cos(angle) * distance;
      const pupilY = Math.sin(angle) * distance;

      pupilRef.current.style.transform = `translate(${pupilX}px, ${pupilY}px) scale(${
        isHovered ? 1.1 : 1
      })`;
    },
    [isHovered]
  );

  // Random blinking logic
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 100);
    }, 1000 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      ref={eyeRef}
      className={`premium-eye-container ${isBlinking ? "blinking" : ""} ${
        isLoading ? "loading" : ""
      }`}
    >
      {/* Glow Rings */}
      <div className="eye-glow-outer"></div>
      <div className="eye-glow-middle"></div>

      {/* Eye Ball */}
      <div className="eye-sclera">
        {/* Iris */}
        <div className="eye-iris">
          <div className="iris-pattern"></div>
          {/* Pupil */}
          <div ref={pupilRef} className="eye-pupil">
            <div className="pupil-highlight-main"></div>
            <div className="pupil-highlight-secondary"></div>
          </div>
        </div>

        {/* Veins */}
        <div className="eye-vein vein-1"></div>
        <div className="eye-vein vein-2"></div>
        <div className="eye-vein vein-3"></div>
      </div>

      {/* Eyelids */}
      <div className="eyelid eyelid-top"></div>
      <div className="eyelid eyelid-bottom"></div>

      {/* Tech Overlay */}
      <div className="scan-line"></div>
      <div className="scan-grid"></div>
    </div>
  );
}

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();
  const greetingRef = useRef(null);
  const skillsRef = useRef(null);
  const achievementsRef = useRef(null);

  // ✅ VISITOR COUNTER STATE
  const [visitorCount, setVisitorCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCounterHovered, setIsCounterHovered] = useState(false);

  // ✅ FIRESTORE LOGIC
  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        const counterRef = doc(db, "portfolio", "stats");
        const docSnap = await getDoc(counterRef);

        if (docSnap.exists()) {
          await updateDoc(counterRef, {
            visits: increment(1),
            lastVisit: new Date().toISOString(),
          });
        } else {
          await setDoc(counterRef, {
            visits: 1,
            lastVisit: new Date().toISOString(),
          });
        }
      } catch (error) {
        console.error("Error updating visitor count:", error);
      }
    };

    updateVisitorCount();

    const counterRef = doc(db, "portfolio", "stats");
    const unsubscribe = onSnapshot(counterRef, (doc) => {
      if (doc.exists()) {
        setVisitorCount(doc.data().visits);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Mouse 3D Tilt Effect for Card
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!greetingRef.current) return;
      const {
        left,
        top,
        width,
        height,
      } = greetingRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      greetingRef.current.style.transform = `perspective(1000px) rotateY(${
        x * 1
      }deg) rotateX(${y * -1}deg)`;
    };

    const handleMouseLeave = () => {
      if (greetingRef.current) {
        greetingRef.current.style.transform =
          "perspective(1000px) rotateY(0) rotateX(0)";
      }
    };

    const greetingEl = greetingRef.current;
    if (greetingEl) {
      greetingEl.addEventListener("mousemove", handleMouseMove);
      greetingEl.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (greetingEl) {
        greetingEl.removeEventListener("mousemove", handleMouseMove);
        greetingEl.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesConfig = {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: theme.secondaryText },
      shape: { type: "circle" },
      opacity: { value: 0.3, random: true },
      size: { value: 3, random: true },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
    },
    retina_detect: true,
  };

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="particles-container">
            <Particles
              id="tsparticles"
              init={particlesInit}
              options={particlesConfig}
            />
          </div>

          <div className="floating-shapes">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
          </div>

          <div className="greeting-text-div">
            <div className="greeting-content" ref={greetingRef}>
              <h1 className="greeting-text">
                {greeting.title}{" "}
                <span
                  className="wave-emoji"
                  role="img"
                  aria-label="waving hand"
                >
                  👋
                </span>
              </h1>
              <h2 className="greeting-text-p">
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}
                </span>
              </h2>
              <div className="greeting-text-p subTitle">
                <Type />
              </div>

              <p
                className="greeting-text-p subTitle2"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle2}

                {/* ✅ PREMIUM 3D VISITOR COUNTER */}
                <span
                  className="premium-counter-wrapper"
                  onMouseEnter={() => setIsCounterHovered(true)}
                  onMouseLeave={() => setIsCounterHovered(false)}
                >
                  <PremiumEye
                    isLoading={isLoading}
                    isHovered={isCounterHovered}
                  />

                  <div className="counter-text">
                    <div className="counter-number">
                      {isLoading ? (
                        <span className="loading-text">...</span>
                      ) : (
                        <AnimatedNumber value={visitorCount} />
                      )}
                    </div>
                    <div className="counter-label">
                      <span>visitors</span>
                      <span className="live-dot"></span>
                    </div>
                  </div>
                </span>
              </p>

              <div className="skills-highlights" ref={skillsRef}>
                <div className="skill-item">
                  <FaCode className="skill-icon" />
                  <span>Full Stack Development</span>
                </div>
                <div className="skill-item">
                  <FaServer className="skill-icon" />
                  <span>System Architecture</span>
                </div>
                <div className="skill-item">
                  <FaRobot className="skill-icon" />
                  <span>AI & Machine Learning</span>
                </div>
                <div className="skill-item">
                  <FaDatabase className="skill-icon" />
                  <span>Database Systems</span>
                </div>
              </div>

              <div className="achievements-section" ref={achievementsRef}>
                <div className="achievement-item">
                  <FaBriefcase className="achievement-icon" />
                  <div className="achievement-content">
                    <h3>Software Developer</h3>
                    <p>CAMS Mutual Funds</p>
                  </div>
                </div>
                <div className="achievement-item">
                  <FaGraduationCap className="achievement-icon" />
                  <div className="achievement-content">
                    <h3>IIT Delhi</h3>
                    <p>Computer Science Graduate</p>
                  </div>
                </div>
                <div className="achievement-item">
                  <FaTrophy className="achievement-icon" />
                  <div className="achievement-content">
                    <h3>Multiple Internships</h3>
                    <p>Eamvey,IITD,Virtual Intern Goldman Sachs</p>
                  </div>
                </div>
              </div>

              <SocialMedia location="home" />
              <div className="portfolio-repo-btn-div">
                <button
                  className="button"
                  onClick={() => {
                    history.push("/contact");
                  }}
                >
                  Get in Touch
                </button>
                <button
                  className="button secondary"
                  onClick={() => {
                    history.push("/projects");
                  }}
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>

          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>

          <div className="scroll-indicator">
            <span className="scroll-indicator-text">Scroll Down</span>
            <div className="scroll-indicator-container">
              <div className="scroll-indicator-dot"></div>
              <div className="scroll-indicator-line"></div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
