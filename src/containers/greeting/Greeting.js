import React, { useEffect, useRef } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import Type from "./typewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  FaCode,
  FaServer,
  FaRobot,
  FaDatabase,
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
} from "react-icons/fa";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();
  const greetingRef = useRef(null);
  const skillsRef = useRef(null);
  const achievementsRef = useRef(null);

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
        x * 5
      }deg) rotateX(${y * -5}deg)`;
    };

    const handleMouseLeave = () => {
      if (greetingRef.current) {
        greetingRef.current.style.transform =
          "perspective(1000px) rotateY(0) rotateX(0)";
      }
    };

    const greeting = greetingRef.current;
    if (greeting) {
      greeting.addEventListener("mousemove", handleMouseMove);
      greeting.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (greeting) {
        greeting.removeEventListener("mousemove", handleMouseMove);
        greeting.removeEventListener("mouseleave", handleMouseLeave);
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
          {/* Particle background */}
          <div className="particles-container">
            <Particles
              id="tsparticles"
              init={particlesInit}
              options={particlesConfig}
            />
          </div>

          {/* Floating shapes */}
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
              </p>

              {/* Skills Highlights with ref */}
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

              {/* Achievements Section with ref */}
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

          {/* Scroll indicator */}
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
