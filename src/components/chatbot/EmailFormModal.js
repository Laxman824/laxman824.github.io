// components/EmailFormModal.jsx
import React, { useState, useEffect, useRef } from "react";
import styled, { ThemeProvider, keyframes, css } from "styled-components";

// --- Animations ---
const slideUp = keyframes`
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const popIn = keyframes`
  0% { opacity: 0; transform: scale(0.95) translateY(30px); filter: blur(8px); }
  60% { transform: scale(1.02) translateY(-5px); }
  100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
  50% { box-shadow: 0 0 0 12px rgba(16, 185, 129, 0); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
`;

// --- Theme Definitions ---
const darkTheme = {
  mode: "dark",
  bg: "rgba(15, 23, 42, 0.85)",
  bgGradient:
    "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.85) 100%)",
  text: "#ffffff",
  border: "rgba(255, 255, 255, 0.12)",
  borderTop: "rgba(255, 255, 255, 0.2)",
  borderBottom: "rgba(0, 0, 0, 0.4)",
  highlight: "rgba(255, 255, 255, 0.18)",
  shadow:
    "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 10px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
  shadowDrag:
    "0 40px 80px -15px rgba(0, 0, 0, 0.8), 0 20px 40px rgba(0, 0, 0, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.15)",
  inputBg: "rgba(0, 0, 0, 0.3)",
  accent: "#10b981",
  accentSecondary: "#047857",
  accentGlow: "0 0 25px rgba(16, 185, 129, 0.4)",
  hoverOverlay: "rgba(255, 255, 255, 0.03)",
};

const lightTheme = {
  mode: "light",
  bg: "rgba(255, 255, 255, 0.9)",
  bgGradient:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)",
  text: "#1e293b",
  border: "rgba(226, 232, 240, 0.8)",
  borderTop: "rgba(255, 255, 255, 0.9)",
  borderBottom: "rgba(203, 213, 225, 0.5)",
  highlight: "rgba(255, 255, 255, 0.95)",
  shadow:
    "0 20px 40px -12px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
  shadowDrag:
    "0 35px 70px -15px rgba(0, 0, 0, 0.2), 0 15px 30px rgba(0, 0, 0, 0.12), inset 0 2px 0 rgba(255, 255, 255, 1)",
  inputBg: "rgba(241, 245, 249, 0.7)",
  accent: "#059669",
  accentSecondary: "#047857",
  accentGlow: "0 0 20px rgba(5, 150, 105, 0.25)",
  hoverOverlay: "rgba(0, 0, 0, 0.02)",
};

// --- Styled Components ---

const PanelContainer = styled.div`
  position: fixed;
  z-index: 10001;

  /* Enhanced Glassmorphism */
  background: ${(props) => props.theme.bgGradient};
  backdrop-filter: blur(32px) saturate(160%);
  -webkit-backdrop-filter: blur(32px) saturate(160%);

  /* Premium Borders with 3D Effect */
  border: 1px solid ${(props) => props.theme.border};
  border-top: 1px solid ${(props) => props.theme.borderTop};
  border-bottom: 1px solid ${(props) => props.theme.borderBottom};

  /* Dynamic Shadow Based on State */
  box-shadow: ${(props) =>
    props.isDragging ? props.theme.shadowDrag : props.theme.shadow};

  color: ${(props) => props.theme.text};
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  overflow: hidden;

  /* Smooth Transitions */
  transition: box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
    width 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    height 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;

  /* Prevent text selection during drag */
  user-select: ${(props) => (props.isDragging ? "none" : "auto")};
  -webkit-user-select: ${(props) => (props.isDragging ? "none" : "auto")};

  /* DESKTOP STYLES */
  ${(props) =>
    !props.isMobile &&
    css`
      width: ${props.minimized ? "280px" : "400px"};
      height: ${props.minimized ? "64px" : "auto"};
      border-radius: 24px;
      left: ${props.x}px;
      top: ${props.y}px;

      /* Enhanced 3D Transform */
      transform-style: preserve-3d;
      transform: perspective(1200px)
        rotateX(${props.isDragging ? "1.5deg" : "0deg"})
        rotateY(${props.isDragging ? "0.5deg" : "0deg"})
        translateZ(${props.isDragging ? "20px" : "0px"})
        scale(${props.isDragging ? "1.02" : "1"});

      animation: ${popIn} 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: ${props.isDragging ? "grabbing" : "grab"};

      /* Drag Hint Overlay */
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${props.isDragging
          ? "radial-gradient(circle at center, rgba(16, 185, 129, 0.05), transparent)"
          : "transparent"};
        pointer-events: none;
        transition: background 0.3s ease;
        border-radius: inherit;
      }

      /* Active State Glow */
      ${(props) =>
        props.isDragging &&
        css`
          &::after {
            content: "";
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(
              135deg,
              ${props.theme.accent}30,
              transparent
            );
            border-radius: inherit;
            z-index: -1;
            filter: blur(8px);
            opacity: 0.6;
          }
        `}
    `}

  /* MOBILE STYLES */
  ${(props) =>
    props.isMobile &&
    css`
      left: 16px;
      right: 16px;
      bottom: ${props.minimized ? "20px" : "50%"};
      width: auto;
      max-width: 500px;
      margin: 0 auto;
      transform: ${props.minimized ? "translateY(0)" : "translateY(50%)"};
      border-radius: 24px;
      animation: ${slideUp} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: default;
    `}
`;

// --- Drag Handle Indicator ---
const DragHandle = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background: ${(props) => props.theme.border};
  opacity: ${(props) => (props.isDragging ? 0.8 : 0.3)};
  transition: all 0.3s ease;
  pointer-events: none;

  ${(props) =>
    !props.isMobile &&
    css`
      &::after {
        content: "";
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        background: ${props.isDragging
          ? `radial-gradient(ellipse, ${props.theme.accent}40, transparent)`
          : "transparent"};
        filter: blur(4px);
        border-radius: inherit;
      }
    `}
`;

// --- Minimized View ---
const MinimizedBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${(props) => props.theme.hoverOverlay};

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        ${(props) => props.theme.highlight},
        transparent
      );
      animation: ${shimmer} 2s infinite;
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;

const StatusPulse = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.theme.accent};
  animation: ${pulse} 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  box-shadow: 0 0 10px ${(props) => props.theme.accent};
`;

const MinimizedText = styled.span`
  font-size: 14px;
  font-weight: 600;
  opacity: 0.95;
  flex: 1;
  margin-left: 14px;
  letter-spacing: 0.3px;
`;

const MaximizeBtn = styled.button`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 10px;
  width: 32px;
  height: 32px;
  font-size: 18px;
  color: inherit;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-2px) rotate(45deg);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0) rotate(45deg) scale(0.95);
  }
`;

// --- Expanded View ---
const Header = styled.div`
  padding: 24px 24px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.border};
  position: relative;
  background: ${(props) => props.theme.hoverOverlay};

  ${(props) =>
    !props.isMobile &&
    css`
      cursor: inherit;
    `}
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  animation: ${float} 3s ease-in-out infinite;
`;

const Icon = styled.div`
  font-size: 24px;
  filter: drop-shadow(0 2px 8px rgba(16, 185, 129, 0.3));
  transition: transform 0.3s ease;

  ${PanelContainer}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.3px;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.text},
      ${(props) => props.theme.accent}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  span {
    font-size: 10px;
    opacity: 0.65;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${(props) => props.theme.accent};
  }
`;

const WindowControls = styled.div`
  display: flex;
  gap: 10px;
`;

const ControlBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.border};
  background: rgba(255, 255, 255, 0.06);
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: ${(props) =>
      props.danger ? "rgba(239, 68, 68, 0.2)" : "rgba(255,255,255,0.1)"};
    transform: translate(-50%, -50%);
    transition: width 0.4s, height 0.4s;
  }

  &:hover {
    background: ${(props) =>
      props.danger ? "rgba(239, 68, 68, 0.15)" : "rgba(255,255,255,0.12)"};
    border-color: ${(props) => (props.danger ? "#ef4444" : props.theme.accent)};
    color: ${(props) => (props.danger ? "#ef4444" : props.theme.accent)};
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &:active {
    transform: translateY(0) scale(0.95);
  }
`;

const FormBody = styled.form`
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: ${(props) =>
    `linear-gradient(180deg, transparent, ${props.theme.hoverOverlay})`};
`;

const InputWrapper = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.accent};
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 2px;
  }

  &:focus-within::after {
    width: 100%;
  }
`;

const InputLabel = styled.label`
  display: block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin-bottom: 10px;
  opacity: 0.85;
  color: ${(props) => props.theme.accent};
  transition: all 0.3s ease;

  ${InputWrapper}:focus-within & {
    opacity: 1;
    transform: translateX(2px);
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px 18px;
  border-radius: 14px;
  background: ${(props) => props.theme.inputBg};
  border: 1.5px solid ${(props) => props.theme.border};
  color: inherit;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.08);

  &::placeholder {
    color: rgba(150, 150, 150, 0.5);
    font-weight: 400;
  }

  &:hover {
    border-color: ${(props) => props.theme.accent}60;
    background: ${(props) => props.theme.inputBg}dd;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.accent};
    background: ${(props) => props.theme.inputBg}ff;
    box-shadow: 0 0 0 4px ${(props) => props.theme.accent}20,
      inset 0 2px 8px rgba(0, 0, 0, 0.1), ${(props) => props.theme.accentGlow};
    transform: translateY(-2px);
  }

  /* Prevent dragging on input */
  &:active {
    cursor: text;
  }
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 14px;
  border: none;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.accent} 0%,
    ${(props) => props.theme.accentSecondary} 100%
  );
  color: white;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 20px ${(props) => props.theme.accent}50,
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;

  /* Shimmer Effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px ${(props) => props.theme.accent}70,
      inset 0 1px 0 rgba(255, 255, 255, 0.3);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

// --- Main Component ---
export default function EmailFormModal({
  show,
  onClose,
  inquiryType,
  onSubmit,
  isMobile,
  themeMode: propThemeMode,
}) {
  // Theme Detection
  const [activeTheme, setActiveTheme] = useState(propThemeMode || "dark");

  useEffect(() => {
    const checkTheme = () => {
      const isLight =
        document.body.classList.contains("light-mode") ||
        document.body.getAttribute("data-theme") === "light";
      setActiveTheme(isLight ? "light" : "dark");
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });
    return () => observer.disconnect();
  }, [propThemeMode]);

  // UI State
  const [minimized, setMinimized] = useState(false);
  const [email, setEmail] = useState("");

  // Dragging State
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const panelRef = useRef(null);
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  // Initialize Position (Bottom Right with padding)
  useEffect(() => {
    if (!isMobile && show) {
      const initX = window.innerWidth - 440;
      const initY = window.innerHeight - 380;
      setPosition({
        x: Math.max(20, initX),
        y: Math.max(20, initY),
      });
    }
  }, [isMobile, show]);

  // Enhanced Drag Handlers with Smooth Movement
  const handleDragStart = (e) => {
    if (isMobile) return;

    // Prevent dragging if clicking on interactive elements
    const target = e.target;
    if (
      target.tagName === "INPUT" ||
      target.tagName === "BUTTON" ||
      target.closest("button") ||
      target.closest("input")
    ) {
      return;
    }

    setIsDragging(true);
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    lastPositionRef.current = { x: e.clientX, y: e.clientY };
    velocityRef.current = { x: 0, y: 0 };

    // Add global cursor style
    document.body.style.cursor = "grabbing";
  };

  const handleDragMove = (e) => {
    if (!isDragging || isMobile) return;
    e.preventDefault();

    const newX = e.clientX - dragOffset.current.x;
    const newY = e.clientY - dragOffset.current.y;

    // Calculate velocity for momentum
    velocityRef.current = {
      x: e.clientX - lastPositionRef.current.x,
      y: e.clientY - lastPositionRef.current.y,
    };
    lastPositionRef.current = { x: e.clientX, y: e.clientY };

    // Smooth boundary constraints with padding
    const padding = 20;
    const maxX = window.innerWidth - (minimized ? 280 : 400) - padding;
    const maxY = window.innerHeight - (minimized ? 64 : 400) - padding;

    setPosition({
      x: Math.max(padding, Math.min(newX, maxX)),
      y: Math.max(padding, Math.min(newY, maxY)),
    });
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);
    document.body.style.cursor = "";

    // Optional: Add momentum effect
    const applyMomentum = () => {
      const friction = 0.92;
      const threshold = 0.5;

      if (
        Math.abs(velocityRef.current.x) > threshold ||
        Math.abs(velocityRef.current.y) > threshold
      ) {
        velocityRef.current.x *= friction;
        velocityRef.current.y *= friction;

        setPosition((prev) => {
          const padding = 20;
          const maxX = window.innerWidth - (minimized ? 280 : 400) - padding;
          const maxY = window.innerHeight - (minimized ? 64 : 400) - padding;

          return {
            x: Math.max(
              padding,
              Math.min(prev.x + velocityRef.current.x, maxX)
            ),
            y: Math.max(
              padding,
              Math.min(prev.y + velocityRef.current.y, maxY)
            ),
          };
        });

        animationFrameRef.current = requestAnimationFrame(applyMomentum);
      }
    };

    applyMomentum();
  };

  // Event Listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDragMove);
      window.addEventListener("mouseup", handleDragEnd);
      return () => {
        window.removeEventListener("mousemove", handleDragMove);
        window.removeEventListener("mouseup", handleDragEnd);
      };
    }
  }, [isDragging, minimized]);

  // Cleanup animation frame
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!isMobile) {
        setPosition((prev) => {
          const padding = 20;
          const maxX = window.innerWidth - (minimized ? 280 : 400) - padding;
          const maxY = window.innerHeight - (minimized ? 64 : 400) - padding;

          return {
            x: Math.max(padding, Math.min(prev.x, maxX)),
            y: Math.max(padding, Math.min(prev.y, maxY)),
          };
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile, minimized]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      onSubmit({ email });
      setEmail("");
    }
  };

  const currentTheme = activeTheme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <PanelContainer
        ref={panelRef}
        show={show}
        isMobile={isMobile}
        minimized={minimized}
        x={position.x}
        y={position.y}
        isDragging={isDragging}
        onMouseDown={handleDragStart}
      >
        {!isMobile && <DragHandle isDragging={isDragging} />}

        {minimized ? (
          <MinimizedBar onClick={() => setMinimized(false)}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <StatusPulse />
              <MinimizedText>Secure Link Active</MinimizedText>
            </div>
            <MaximizeBtn
              onClick={(e) => {
                e.stopPropagation();
                setMinimized(false);
              }}
            >
              ↗
            </MaximizeBtn>
          </MinimizedBar>
        ) : (
          <>
            <Header isMobile={isMobile}>
              <TitleGroup>
                <Icon>📧</Icon>
                <TitleText>
                  <h3>Connect via Email</h3>
                  <span>JARVIS Secure Gateway</span>
                </TitleText>
              </TitleGroup>
              <WindowControls>
                <ControlBtn
                  onClick={(e) => {
                    e.stopPropagation();
                    setMinimized(true);
                  }}
                  title="Minimize"
                >
                  –
                </ControlBtn>
                <ControlBtn
                  danger
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  title="Close"
                >
                  ×
                </ControlBtn>
              </WindowControls>
            </Header>

            <FormBody
              onSubmit={handleSubmit}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <InputWrapper>
                <InputLabel htmlFor="email-input">
                  Enter Email Address
                </InputLabel>
                <StyledInput
                  id="email-input"
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                  required
                />
              </InputWrapper>

              <ActionButton
                type="submit"
                disabled={!email || !email.includes("@")}
              >
                Continue to Voice Chat 🎙️
              </ActionButton>
            </FormBody>
          </>
        )}
      </PanelContainer>
    </ThemeProvider>
  );
}
