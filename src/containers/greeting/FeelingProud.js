import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { Icon } from "@iconify/react";
import "./FeelingProud.css";

function FeelingProud(props) {
  const theme = props.theme;
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [eyesFollowMouse, setEyesFollowMouse] = useState(true);
  const [orbitPaused, setOrbitPaused] = useState(false);

  const funMessages = [
    "👋 Hey! I'm coding something cool!",
    "💻 Let me show you my latest projects",
    "☕ Coffee first, code later!",
  ];

  // Developer Tools with Iconify 3D-style icons
  const devTools = [
    {
      name: "VS Code",
      icon: "vscode-icons:file-type-vscode",
      color: "#007ACC",
    },
    { name: "Git", icon: "logos:git-icon", color: "#F05032" },
    {
      name: "Terminal",
      icon: "vscode-icons:file-type-shell",
      color: "#4EAA25",
    },
    { name: "Docker", icon: "logos:docker-icon", color: "#2496ED" },
    { name: "npm", icon: "logos:npm-icon", color: "#CB3837" },
    { name: "React", icon: "logos:react", color: "#61DAFB" },
    { name: "Node.js", icon: "logos:nodejs-icon", color: "#339933" },
    { name: "GitHub", icon: "skill-icons:github-dark", color: "#181717" },
  ];

  // Load animation
  useEffect(() => {
    if (containerRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://assets2.lottiefiles.com/packages/lf20_ofa3xwo7.json",
      });

      return () => {
        if (animationRef.current) {
          animationRef.current.destroy();
        }
      };
    }
  }, []);

  // Mouse tracking for tilt effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMousePos({ x, y });
  };

  // Click interaction
  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    const randomMessage =
      funMessages[Math.floor(Math.random() * funMessages.length)];
    setCurrentMessage(randomMessage);
    setShowMessage(true);

    // Speed up animation temporarily
    if (animationRef.current) {
      animationRef.current.setSpeed(2);
      setTimeout(() => {
        if (animationRef.current) {
          animationRef.current.setSpeed(1);
        }
      }, 1000);
    }

    // Hide message after 3 seconds
    setTimeout(() => setShowMessage(false), 3000);
  };

  // Double click - play backwards
  const handleDoubleClick = () => {
    if (animationRef.current) {
      animationRef.current.setDirection(-1);
      animationRef.current.play();

      setTimeout(() => {
        if (animationRef.current) {
          animationRef.current.setDirection(1);
        }
      }, 2000);
    }
  };

  // Handlers for pausing orbit when hovering the entire interactive area
  const handleInteractiveAreaEnter = () => {
    setOrbitPaused(true);
  };

  const handleInteractiveAreaLeave = () => {
    setOrbitPaused(false);
  };

  // Calculate tilt based on mouse position
  const tiltX = mousePos.y * 15;
  const tiltY = -mousePos.x * 15;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        perspective: "1000px",
        minHeight: "600px",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Floating badges - Hidden on mobile */}
      <div
        className="desktop-only-badges"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 10,
        }}
      >
        {/* <div style={{
          background: 'rgba(0, 0, 0, 0.7)',
          padding: '8px 16px',
          borderRadius: '20px',
          color: theme.accentColor,
          fontSize: '12px',
          fontFamily: 'monospace',
          border: `2px solid ${theme.accentColor}`,
          animation: 'fadeInRight 0.5s ease'
        }}>
           Clicks: {clickCount}
        </div> */}

        {/* <button
          onClick={() => setEyesFollowMouse(!eyesFollowMouse)}
          style={{
            background: eyesFollowMouse ? theme.accentColor : 'rgba(255,255,255,0.1)',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
        >
          👀 {eyesFollowMouse ? 'Following' : 'Static'}
        </button> */}
      </div>

      {/* Main interactive wrapper that detects hover for entire area */}
      <div
        onMouseEnter={handleInteractiveAreaEnter}
        onMouseLeave={handleInteractiveAreaLeave}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "600px",
        }}
      >
        <div
          className="character-container"
          style={{
            transform: isHovered
              ? `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`
              : "rotateX(0deg) rotateY(0deg) scale(1)",
            transition: "transform 0.3s ease",
            position: "relative",
          }}
        >
          {/* Minimal Holographic Ring */}
          <div
            className="holographic-ring"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "450px",
              height: "450px",
              borderRadius: "50%",
              border: `2px solid ${theme.accentColor}22`,
              opacity: isHovered ? 0.3 : 0.6,
              transition: "opacity 0.5s ease",
              pointerEvents: "none",
              zIndex: 1,
              animation: "holoRotate 30s linear infinite",
              animationPlayState: orbitPaused ? "paused" : "running",
              background: `conic-gradient(from 0deg, transparent 0%, ${theme.accentColor}11 50%, transparent 100%)`,
              boxShadow: `0 0 40px ${theme.accentColor}22, inset 0 0 40px ${theme.accentColor}11`,
            }}
          />

          {/* Orbiting Developer Tools Icons with Iconify */}
          <div
            className="orbit-container"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "500px",
              height: "500px",
              pointerEvents: "none",
              zIndex: 2,
            }}
          >
            {devTools.map((tool, i) => (
              <div
                key={i}
                className="orbiting-icon"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "60px",
                  height: "60px",
                  marginLeft: "-30px",
                  marginTop: "-30px",
                  transformOrigin: "30px 30px",
                  animation: `orbit 25s linear infinite`,
                  animationDelay: `${-i * (25 / devTools.length)}s`,
                  animationPlayState: orbitPaused ? "paused" : "running",
                  opacity: orbitPaused ? 0.9 : 0.7,
                  transition: "opacity 0.5s ease",
                  pointerEvents: "auto",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "50%",
                    border: `1px solid ${tool.color}22`,
                    boxShadow: `0 0 20px ${tool.color}33`,
                    animation: "counterRotate 25s linear infinite",
                    animationPlayState: orbitPaused ? "paused" : "running",
                    transition: "all 0.3s ease",
                  }}
                  title={tool.name}
                >
                  <Icon icon={tool.icon} style={{ fontSize: "32px" }} />
                </div>
              </div>
            ))}
          </div>

          {/* Pause indicator - Hidden on mobile */}
          {orbitPaused && (
            <div
              className="desktop-only-indicator"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "rgba(0, 0, 0, 0.8)",
                color: theme.accentColor,
                padding: "10px 20px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "bold",
                border: `2px solid ${theme.accentColor}`,
                zIndex: 25,
                pointerEvents: "none",
                animation: "fadeIn 0.3s ease",
              }}
            >
              ⏸ Orbit Paused
            </div>
          )}

          {/* Dynamic energy field */}
          <div
            className="energy-field"
            style={{
              background: `radial-gradient(circle at ${50 + mousePos.x * 50}% ${
                50 + mousePos.y * 50
              }%, ${theme.accentColor}44 0%, transparent 70%)`,
              transform: `scale(${isHovered ? 1.2 : 1})`,
              transition: "all 0.5s ease",
            }}
          />

          {/* Animation Display */}
          <div
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            style={{
              width: "100%",
              height: "100%",
              filter: `drop-shadow(0 0 ${isHovered ? "50px" : "30px"} ${
                theme.accentColor
              })`,
              cursor: "pointer",
              transition: "filter 0.3s ease",
              position: "relative",
              zIndex: 3,
            }}
          />

          {/* Speech bubble with random messages */}
          {showMessage && (
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#fff",
                color: "#000",
                padding: "15px 25px",
                borderRadius: "25px",
                fontSize: "16px",
                fontWeight: "bold",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                animation: "bounceIn 0.5s ease, fadeOut 0.5s ease 2.5s",
                zIndex: 20,
                maxWidth: "80%",
                textAlign: "center",
                fontFamily: "sans-serif",
              }}
            >
              {currentMessage}
              <div
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 0,
                  height: 0,
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderTop: "10px solid #fff",
                }}
              />
            </div>
          )}

          {/* Floating particles that react to mouse */}
          <div className="floating-elements">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="floating-orb"
                style={{
                  transform: `translate(${mousePos.x * 20}px, ${
                    mousePos.y * 20
                  }px)`,
                  transition: "transform 0.3s ease",
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>

          {/* Interactive instruction panel - Simplified on mobile */}
          <div
            className="instruction-panel"
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(0, 0, 0, 0.85)",
              padding: "15px 30px",
              borderRadius: "30px",
              color: "#fff",
              fontSize: "13px",
              fontFamily: "monospace",
              textAlign: "center",
              border: `2px solid ${theme.accentColor}`,
              boxShadow: `0 0 30px ${theme.accentColor}55`,
              zIndex: 10,
              backdropFilter: "blur(10px)",
              maxWidth: "90%",
            }}
          >
            <div
              className="desktop-instructions"
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {/* <span style={{ color: theme.accentColor, fontWeight: 'bold' }}>
                 Hover to pause orbit
              </span> */}
              {/* <span style={{ opacity: 0.7 }}>•</span> */}
              <span style={{ color: theme.accentColor, fontWeight: "bold" }}>
                tap
              </span>
              {/* <span style={{ opacity: 0.7 }}>•</span> */}
              {/* <span style={{ color: theme.accentColor, fontWeight: 'bold' }}>
                🖱️🖱️ Double-click to reverse
              </span> */}
            </div>
            <div className="mobile-instructions" style={{ display: "none" }}>
              <span style={{ color: theme.accentColor, fontWeight: "bold" }}>
                Tap
              </span>
            </div>
          </div>

          {/* Progress indicator - Hidden on mobile */}
          <div
            className="desktop-only-progress"
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              width: "4px",
              height: "60px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "2px",
              overflow: "hidden",
              zIndex: 5,
            }}
          >
            <div
              style={{
                width: "100%",
                height: `${clickCount % 100}%`,
                background: theme.accentColor,
                borderRadius: "2px",
                transition: "height 0.3s ease",
                boxShadow: `0 0 10px ${theme.accentColor}`,
              }}
            />
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: translateX(-50%) scale(0.3);
          }
          50% {
            transform: translateX(-50%) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
        }

        @keyframes fadeOut {
          to {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(250px);
          }
          to {
            transform: rotate(360deg) translateX(250px);
          }
        }

        @keyframes counterRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes holoRotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        /* Mobile optimizations - Hide UI elements on small screens */
        @media (max-width: 768px) {
          .character-container {
            transform: none !important;
          }

          .orbit-container {
            width: 350px !important;
            height: 350px !important;
          }

          .holographic-ring {
            width: 320px !important;
            height: 320px !important;
          }

          /* Hide desktop-only elements on mobile */
          .desktop-only-badges,
          .desktop-only-indicator,
          .desktop-only-progress {
            display: none !important;
          }

          /* Simplify instruction panel for mobile */
          .desktop-instructions {
            display: none !important;
          }

          .mobile-instructions {
            display: block !important;
          }

          .instruction-panel {
            padding: 10px 20px !important;
            font-size: 11px !important;
            bottom: 10px !important;
          }

          /* Adjust orbit for smaller icons on mobile */
          .orbiting-icon {
            width: 45px !important;
            height: 45px !important;
            margin-left: -22.5px !important;
            margin-top: -22.5px !important;
          }

          .orbiting-icon > div {
            font-size: 24px !important;
          }
        }

        /* Extra small mobile devices */
        @media (max-width: 480px) {
          .orbit-container {
            width: 280px !important;
            height: 280px !important;
          }

          .holographic-ring {
            width: 250px !important;
            height: 250px !important;
          }

          .orbiting-icon {
            width: 40px !important;
            height: 40px !important;
            margin-left: -20px !important;
            margin-top: -20px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default FeelingProud;
