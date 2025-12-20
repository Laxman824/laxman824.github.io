import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import chatbotLottie from "./chatbot_lottie.json";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import Siri from "./Siri"; // Import the Siri component
import styled, { keyframes, css } from "styled-components";
import AIAssistant from "./AIAssistant"; // Import the AI component

const isMobile = window.innerWidth <= 480;
// --- Animations for a "Wow Experience" ---
const slideInUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// --- MODIFIED ---: A more subtle, breathing shadow effect for the idle state
const pulse = keyframes`
  0% { box-shadow: 0 6px 16px rgba(79, 70, 229, 0.3); }
  50% { box-shadow: 0 8px 24px rgba(79, 70, 229, 0.5); }
  100% { box-shadow: 0 6px 16px rgba(79, 70, 229, 0.3); }
`;

// --- MODIFIED ---: A slower, more graceful floating animation for the idle state
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
`;

// --- NEW ---: A more energetic bounce animation for the hover state
const bounce = keyframes`
  0%, 100% {  
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

// Add popUp animation keyframe before OnlineStatus
const popUp = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  40% {
    transform: scale(1.1);
  }
  60% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Online Status Component (moved to top, before it's used)
const OnlineStatus = styled.div`
  position: fixed;
  bottom: 30px;
  right: 95px;
  background: rgba(255, 255, 255, 0.95);
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 14px;
  color: #4f46e5;
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.15);
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 998;

  /* Chain the animations with optimized timing */
  animation: ${popUp} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards,
    ${float} 3s ease-in-out infinite 0.4s;

  /* Reverse the order of dot and text to keep dot on right side */
  flex-direction: row-reverse;

  @media screen and (max-width: 480px) {
    bottom: 25px;
    right: 85px;
    padding: 4px 12px;
    font-size: 13px;
  }

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    background: #22c55e;
    border-radius: 50%;
    display: inline-block;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 0.5;
      transform: scale(0.95);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0.5;
      transform: scale(0.95);
    }
  }
`;

// Adding new animations
const ripple = keyframes`
  0% { transform: scale(0.8); opacity: 0.6; }
  50% { transform: scale(1.5); opacity: 0.2; }
  100% { transform: scale(0.8); opacity: 0.6; }
`;

// Adding Welcome Screen Components
const WelcomeScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #fdfbfb, #ebedee);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: ${slideInUp} 0.6s ease;
`;

const WelcomeText = styled.h2`
  font-size: 24px;
  margin-top: 20px;
  color: #333;
  text-align: center;
`;

const StartButton = styled.button`
  margin-top: 30px;
  padding: 12px 24px;
  font-size: 16px;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
`;

// NEW: Sound Toggle Button Component
const SoundToggleButton = styled.button`
  margin-top: 15px;
  margin-left: 15px;
  padding: 10px 20px;
  font-size: 14px;
  background: ${(props) =>
    props.soundEnabled
      ? "linear-gradient(135deg, #22C55E, #16A34A)"
      : "linear-gradient(135deg, #EF4444, #DC2626)"};
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }
`;

// NEW: Welcome Buttons Container
const WelcomeButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
`;

// NEW: In-Chat Sound Toggle
const InChatSoundToggle = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: ${(props) => (props.soundEnabled ? "#22C55E" : "#EF4444")};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  cursor: pointer;
  z-index: 1001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

const RippleEffect = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${(props) => props.theme.accentBright || "#4F46E5"};
  opacity: 0.1;
`;

const ButtonContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 28px;

  ${(props) =>
    props.isOpen &&
    `
    animation: none;
    transform: rotate(0);
  `}
`;

// --- MODIFIED ---: Updated FloatingButton for the best experience
const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  overflow: visible;

  /* Default idle animation */
  animation: ${float} 4s ease-in-out infinite;

  /* The shadow is now the primary pulsing element */
  box-shadow: 0 6px 16px rgba(79, 70, 229, 0.3);
  animation: ${pulse} 2.5s ease-in-out infinite,
    ${float} 4s ease-in-out infinite;

  /* On hover, override the idle animation with the bounce */
  &:hover {
    animation: ${bounce} 0.8s ease;
    box-shadow: 0 12px 28px rgba(79, 70, 229, 0.6);
  }

  &:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }
`;

// --- MODIFIED ---: Improved button for Siri component
// ============= ENHANCED JARVIS AI BUTTON COMPONENTS =============

// Jarvis Button with Advanced Styling
const JarvisButton = styled.button`
  position: fixed;
  bottom: ${(props) => (props.isMobile ? "16px" : "20px")};
  left: ${(props) => (props.isMobile ? "15px" : "20px")};
  width: auto;
  min-width: ${(props) => (props.isMobile ? "140px" : "180px")};
  padding: ${(props) => (props.isMobile ? "12px 20px" : "15px 25px")};
  height: ${(props) => (props.isMobile ? "55px" : "65px")};
  border-radius: 35px;

  /* Advanced Gradient */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  /* Glass morphism effect */
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);

  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.isMobile ? "6px" : "10px")};
  font-size: ${(props) => (props.isMobile ? "15px" : "18px")};
  font-weight: 700;

  /* 3D Shadow Effect */
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4),
    0 4px 10px rgba(118, 75, 162, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2),
    inset 0 -2px 4px rgba(0, 0, 0, 0.1);

  /* Smooth Animation */
  animation: ${float} 4s ease-in-out infinite;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 999;

  /* Icon Animation Container */
  .jarvis-icon {
    font-size: ${(props) => (props.isMobile ? "20px" : "24px")};
    display: inline-block;
    animation: ${pulse} 2s ease-in-out infinite;
  }

  /* Text Glow */
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  /* Hover State */
  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.6),
      0 8px 20px rgba(118, 75, 162, 0.5),
      inset 0 2px 6px rgba(255, 255, 255, 0.3),
      0 0 30px rgba(102, 126, 234, 0.4);

    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);

    .jarvis-icon {
      animation: ${bounce} 0.6s ease;
    }
  }

  /* Active/Click State */
  &:active {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4),
      0 2px 8px rgba(118, 75, 162, 0.3);
  }

  /* Pulsing Ring Effect */
  &::before {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 40px;
    background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.5),
      rgba(118, 75, 162, 0.5)
    );
    opacity: 0;
    z-index: -1;
    animation: pulseRing 3s ease-in-out infinite;
  }

  @keyframes pulseRing {
    0%,
    100% {
      transform: scale(1);
      opacity: 0;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.5;
    }
  }
`;

// Greeting Popup Animation
const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%) scale(0.8);
    opacity: 0;
  }
  to {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
  to {
    transform: translateX(-100%) scale(0.8);
    opacity: 0;
  }
`;

// Greeting Popup Component
const JarvisGreeting = styled.div`
  position: fixed;
  bottom: ${(props) => (props.isMobile ? "160px" : "95px")};
  left: ${(props) => (props.isMobile ? "15px" : "20px")};

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95),
    rgba(255, 255, 255, 0.9)
  );
  backdrop-filter: blur(15px);

  padding: ${(props) => (props.isMobile ? "12px 16px" : "15px 20px")};
  border-radius: 20px;

  max-width: ${(props) => (props.isMobile ? "250px" : "320px")};

  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3),
    0 4px 15px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.8);

  border: 2px solid rgba(102, 126, 234, 0.2);

  z-index: 998;

  animation: ${(props) => (props.isClosing ? fadeOut : slideInFromLeft)} 0.5s
    cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* Speech Bubble Arrow */
  &::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 30px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid rgba(255, 255, 255, 0.9);
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
`;

const GreetingText = styled.p`
  margin: 0;
  color: #4a5568;
  font-size: ${(props) => (props.isMobile ? "13px" : "14px")};
  line-height: 1.5;
  font-weight: 500;

  /* Gradient Text for "JARVIS" */
  .jarvis-name {
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
    font-size: ${(props) => (props.isMobile ? "14px" : "16px")};
  }

  /* Icon styling */
  .emoji {
    display: inline-block;
    margin: 0 2px;
    animation: ${bounce} 1s ease infinite;
  }
`;

const GreetingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const GreetingTitle = styled.h4`
  margin: 0;
  font-size: ${(props) => (props.isMobile ? "15px" : "16px")};
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CloseGreetingButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #a0aec0;
  transition: all 0.3s ease;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
    transform: rotate(90deg);
  }
`;

// Quick Action Buttons in Greeting
const QuickActionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

const QuickActionButton = styled.button`
  flex: 1;
  padding: ${(props) => (props.isMobile ? "6px 10px" : "8px 12px")};
  font-size: ${(props) => (props.isMobile ? "11px" : "12px")};
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  background: ${(props) =>
    props.primary
      ? "linear-gradient(135deg, #667eea, #764ba2)"
      : "rgba(102, 126, 234, 0.1)"};

  color: ${(props) => (props.primary ? "white" : "#667eea")};

  box-shadow: ${(props) =>
    props.primary
      ? "0 4px 12px rgba(102, 126, 234, 0.3)"
      : "0 2px 6px rgba(0, 0, 0, 0.05)"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) =>
      props.primary
        ? "0 6px 16px rgba(102, 126, 234, 0.5)"
        : "0 4px 10px rgba(102, 126, 234, 0.2)"};
  }

  &:active {
    transform: translateY(0);
  }
`;

// Badge Notification (e.g., "New!" or "Try me!")
const NotificationBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: white;
  font-size: ${(props) => (props.isMobile ? "9px" : "10px")};
  font-weight: 700;
  padding: ${(props) => (props.isMobile ? "3px 6px" : "4px 8px")};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(245, 87, 108, 0.4);
  animation: ${pulse} 2s ease-in-out infinite;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

// ============= JARVIS GREETING MESSAGES =============

const jarvisGreetings = [
  {
    title: "🎙️ Voice Assistant",
    message:
      "Say QUICK OVERVIEW about Laxman' <span class='jarvis-name'>voice commands</span>! I will Navigate, highlight sections, and more!",
    actions: ["Start Now", "See Demo"],
  },
  {
    title: "🚀 New Feature!",
    message:
      "Experience <span class='jarvis-name'>Agentic AI❤️</span> with smart navigation say 'give me Quick overview of Laxman' and contextual memory! <span class='emoji'>✨</span>",
    actions: ["Try It", "More Info"],
  },
  {
    title: "💡 Pro Tip",
    message:
      "Say <span class='jarvis-name'>'show me projects'</span> or <span class='jarvis-name'>'Tell me everything about him'</span> - I'll navigate and highlight for you!",
    actions: ["Voice Demo", "Skip"],
  },
  {
    title: "🤖 Meet JARVIS ",
    message:
      "I'm not just a chatbot - I'm an <span class='jarvis-name'>intelligent agent</span> that understands context and remembers our conversation! <span class='emoji'>🧠</span>",
    actions: ["Amazing!", "Tell Me More"],
  },

  {
    title: "🧠 Context Aware",
    message:
      "Ask follow-ups. I actually remember them. <span class='jarvis-name'>context</span>. <span class='emoji'>💭</span>",
    actions: ["Test It", "Cool!"],
  },

  {
    title: "📧 Autonomous Email Agent",
    message:
      "Want to <span class='jarvis-name'>recruit Laxman</span>? Just tell me! I'll collect your details and send him an email - all by voice! <span class='emoji'>🤖</span>",
    actions: ["Try It", "Cool!"],
  },
];

// Optional: Get greeting by category
const getGreetingByCategory = (category) => {
  const categories = {
    welcome: [0, 1, 4, 9, 15], // Welcome messages
    features: [2, 3, 6, 8, 13, 14], // Feature highlights
    tips: [3, 11, 20, 23, 33], // Pro tips
    technical: [22, 34, 35], // Technical details
    fun: [20, 33, 37], // Fun/Easter eggs
    quick: [5, 10, 15, 39], // Quick start messages
  };

  const indices = categories[category] || [0];
  const randomIndex = indices[Math.floor(Math.random() * indices.length)];
  return jarvisGreetings[randomIndex];
};
// Function to get random greeting
const getRandomGreeting = () => {
  return jarvisGreetings[Math.floor(Math.random() * jarvisGreetings.length)];
};
// --- MODIFIED FOR GLASSMORPHISM ---
const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 1000;
  width: 450px; /* Increased from 400px */
  min-height: 500px;
  animation: ${slideInUp} 0.5s ease-in-out;

  /* Key properties for the glass effect */
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);

  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  overflow: visible; /* Changed from hidden to ensure mic is visible */

  /* Add mobile responsiveness */
  @media screen and (max-width: 480px) {
    width: 95%; /* Increased from 90% */
    right: 2.5%; /* Adjusted for new width */
    left: 2.5%; /* Adjusted for new width */
    bottom: 80px;
    min-height: 450px;
  }

  /* Add styles to ensure chat bubbles don't get cut off */
  .rsc-ts-bubble {
    max-width: 95% !important;
    white-space: pre-wrap !important;
  }

  .rsc-cs-message {
    max-width: 100% !important;
  }
`;

// iOS Speech Enable Button
const IOSSpeechButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #4f46e5;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  cursor: pointer;
  z-index: 1001;
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: #3730a3;
    transform: translateY(-1px);
  }
`;

// Add WelcomeContainer for the full-screen welcome message
const WelcomeContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  padding: 20px;

  @media screen and (max-width: 480px) {
    height: 450px;
    padding: 15px;
  }
`;

// Theme with Gradient Header
const botTheme = {
  background: "transparent",
  fontFamily: "inherit",
  headerBgColor: "linear-gradient(90deg, #00529B, #00284D)",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#00529B",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

// Animated SVG Avatars
const botEmojiSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <defs>
    <linearGradient id="botGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4F46E5;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#7C3AED;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <style>
    .bot-head { animation: float 3s ease-in-out infinite; }
    .bot-eye { animation: blink 4s infinite; }
    .bot-antenna { animation: antenna 2s ease-in-out infinite; }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-2px); }
    }
    @keyframes blink {
      0%, 45%, 55%, 100% { transform: scaleY(1); }
      50% { transform: scaleY(0.1); }
    }
    @keyframes antenna {
      0%, 100% { transform: rotate(-5deg); }
      50% { transform: rotate(5deg); }
    }
  </style>
  <g class="bot-head" fill="url(#botGradient)" filter="url(#glow)">
    <rect x="8" y="15" width="24" height="20" rx="8"/>
    <circle cx="20" cy="13" r="8"/>
    <line class="bot-antenna" x1="20" y1="5" x2="20" y2="2" stroke="url(#botGradient)" stroke-width="2" stroke-linecap="round"/>
  </g>
  <g class="bot-eye" fill="#FFFFFF">
    <circle cx="15" cy="18" r="2"/>
    <circle cx="25" cy="18" r="2"/>
  </g>
  <path class="bot-mouth" d="M14 26 Q20 30 26 26" stroke="#FFFFFF" stroke-width="1.5" fill="none"/>
</svg>`;
const botAvatarUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  botEmojiSVG
)}`;
const userEmojiSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><text x="5" y="30" font-family="sans-serif" font-size="28">👤</text></svg>`;
const userAvatarUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  userEmojiSVG
)}`;

// --- Custom Interactive Components ---
const Typing = () => (
  <div style={{ display: "flex", alignItems: "center", marginLeft: "6px" }}>
    <div className="typing-indicator">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

const ProjectCard = ({ name, description, imageUrl, link }) => (
  <div style={{ width: "100%", padding: "10px", fontFamily: "inherit" }}>
    {imageUrl && (
      <img
        src={imageUrl}
        alt={name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
    )}
    <h4 style={{ margin: "10px 0 5px 0", color: "#00284D" }}>{name}</h4>
    <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        textAlign: "center",
        padding: "8px",
        backgroundColor: "#00529B",
        color: "white",
        borderRadius: "5px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      View Project
    </a>
  </div>
);

// --- NEW: Resume Component ---
const ResumeCard = () => (
  <div
    style={{
      width: "100%",
      padding: "15px",
      fontFamily: "inherit",
      textAlign: "center",
      background:
        "linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(124, 58, 237, 0.1))",
      borderRadius: "10px",
      margin: "10px 0",
    }}
  >
    <div style={{ fontSize: "40px", marginBottom: "10px" }}>📄</div>
    <h4 style={{ margin: "10px 0 5px 0", color: "#00284D" }}>
      Laxman's Resume
    </h4>
    <p style={{ margin: "0 0 15px 0", fontSize: "14px", color: "#666" }}></p>
    <a
      href="https://drive.google.com/file/d/1aKH71pAlFOGhlEqr3gnJ6A8BFhdkcUrP/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#00529B",
        color: "white",
        borderRadius: "25px",
        textDecoration: "none",
        fontWeight: "bold",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 12px rgba(0, 82, 155, 0.3)",
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = "#003d73";
        e.target.style.transform = "translateY(-2px)";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "#00529B";
        e.target.style.transform = "translateY(0)";
      }}
    >
      📄 View Resume
    </a>
  </div>
);

// --- THE MAIN COMPONENT ---
function PortfolioChatBot({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isIOSInitialized, setIsIOSInitialized] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false); // UPDATED: Changed to false by default
  const [showSiri, setShowSiri] = useState(false); // State for Siri UI
  const [userQuestion, setUserQuestion] = useState(""); // NEW: Store user's typed question
  // NEW: JARVIS Greeting States
  const [showJarvisGreeting, setShowJarvisGreeting] = useState(false);
  const [currentGreeting, setCurrentGreeting] = useState(getRandomGreeting());
  const [isGreetingClosing, setIsGreetingClosing] = useState(false);
  const [hasShownGreeting, setHasShownGreeting] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  // iOS Detection
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  // UPDATED: Enhanced checkUserInput function that stores the question
  const checkUserInput = ({ value, steps }) => {
    const lowerCaseValue = value.toLowerCase();

    // Store the user's question for AI fallback
    setUserQuestion(value);

    // Check for keywords first
    if (lowerCaseValue.includes("project")) return "project_options";
    if (lowerCaseValue.includes("skill") || lowerCaseValue.includes("tech"))
      return "skills";
    if (lowerCaseValue.includes("contact") || lowerCaseValue.includes("email"))
      return "contact";
    if (
      lowerCaseValue.includes("education") ||
      lowerCaseValue.includes("degree") ||
      lowerCaseValue.includes("iit")
    )
      return "education";
    if (
      lowerCaseValue.includes("work") ||
      lowerCaseValue.includes("experience") ||
      lowerCaseValue.includes("job") ||
      lowerCaseValue.includes("intern")
    )
      return "experience_intro";
    if (
      lowerCaseValue.includes("certification") ||
      lowerCaseValue.includes("certificate")
    )
      return "certifications_info";
    if (
      lowerCaseValue.includes("creator") ||
      lowerCaseValue.includes("who made you")
    )
      return "creator_info";
    if (lowerCaseValue.includes("resume") || lowerCaseValue.includes("cv"))
      return "resume_info";

    // If no keyword match, go to AI with the stored question
    return "ai_fallback";
  };

  // NEW: Create AIAssistant with pre-filled question
  const AIAssistantWithQuestion = ({ question }) => (
    <AIAssistant initialQuestion={question} />
  );

  // UPDATED: Conversation steps with improved AI integration
  const steps = [
    {
      id: "welcome",
      message: "Hi there! I'm Laxman's portfolio assistant.",
      trigger: "intro",
    },
    {
      id: "intro",
      message:
        "I can tell you about his skills, projects, and professional experience. What's on your mind?",
      trigger: "options",
      delay: 1500,
    },
    {
      id: "options",
      options: [
        {
          value: "background",
          label: "Tell me about Laxman",
          trigger: "typing_background",
        },
        {
          value: "resume",
          label: "Show his Resume📄",
          trigger: "typing_resume",
        },
        { value: "ai_chat", label: "🤖 Ask AI anything!", trigger: "ai_chat" },
        {
          value: "experience",
          label: "🖥️Experience & Certifications",
          trigger: "experience_intro",
        },
        {
          value: "skills",
          label: "What are his skills?",
          trigger: "typing_skills",
        },
        {
          value: "projects",
          label: "Show me his projects⚡",
          trigger: "project_options",
        },
        {
          value: "contact",
          label: "✉️How can I contact him?",
          trigger: "typing_contact",
        },
        { value: "creator", label: "Who made you?😜", trigger: "creator_info" },
      ],
    },

    // Typing indicators
    {
      id: "typing_background",
      component: <Typing />,
      asMessage: true,
      trigger: "background",
    },
    {
      id: "typing_resume",
      component: <Typing />,
      asMessage: true,
      trigger: "resume_info",
    },
    {
      id: "typing_skills",
      component: <Typing />,
      asMessage: true,
      trigger: "skills",
    },
    {
      id: "typing_contact",
      component: <Typing />,
      asMessage: true,
      trigger: "contact",
    },

    // AI Chat Integration
    {
      id: "ai_chat",
      component: <AIAssistant />,
      asMessage: true,
      trigger: "ask-more",
    },

    // UPDATED: AI Fallback with pre-filled question
    {
      id: "ai_fallback",
      message: `Got it! Let me have AI help answer: "${userQuestion}"`,
      trigger: "ai_fallback_component",
      delay: 1000,
    },
    {
      id: "ai_fallback_component",
      component: <AIAssistantWithQuestion question={userQuestion} />,
      asMessage: true,
      trigger: "ask-more",
    },

    // Resume Path
    {
      id: "resume_info",
      component: <ResumeCard />,
      asMessage: true,
      trigger: "ask-more",
    },

    // Background & Education Path
    {
      id: "background",
      message:
        "Laxman is a skilled Software Developer and AI Enthusiast, currently working at CAMS Mutual Funds. He's a proud alumnus of IIT Delhi, holding both a Bachelor's and a Master's degree in Computer Science and Engineering.",
      trigger: "education",
      delay: 3000,
    },
    {
      id: "education",
      message:
        "His education at IIT Delhi (2018-2023) provided a strong foundation in Data Structures, AI/ML, and Security. He complemented this with hands-on NLP projects and numerous certifications.",
      trigger: "ask-more",
    },

    // Skills Path
    {
      id: "skills",
      message:
        "Laxman has expertise across three main domains: Full Stack Development (using the MERN stack), Data Science & AI (with a focus on Gen AI, LLMs, and Computer Vision & NLP), and Cloud Infrastructure (Google Cloud Platform, Docker, and CI/CD).",
      trigger: "skill_details",
      delay: 3200,
    },
    {
      id: "skill_details",
      options: [
        {
          value: "ai_experience",
          label: "More on his AI/ML work",
          trigger: "ai_experience",
        },
        {
          value: "fullstack_details",
          label: "Details on Full Stack",
          trigger: "fullstack_details",
        },
        { value: "main_menu", label: "Back to main menu", trigger: "options" },
      ],
    },
    {
      id: "ai_experience",
      message:
        "Absolutely. He has developed over 17 AI projects. Key examples include a camsLens Enterprise GenAI platform, AI powered Email Automation, Driver Drowsiness Detector using OpenCV and the RAVI project at IIT Delhi, which used MS Azure for image analysis. He's proficient with TensorFlow and Keras.",
      trigger: "ask-more",
    },
    {
      id: "fullstack_details",
      message:
        "He excels at building end-to-end applications. For example, he built 'NexGenGaming,' a full-stack e-commerce site with React, Node.js, and MongoDB. He's also developed mobile apps with React Native.",
      trigger: "ask-more",
    },

    // Experience & Certifications Path
    {
      id: "experience_intro",
      message:
        "Laxman has a solid mix of professional experience. What would you like to know about?",
      trigger: "experience_options",
    },
    {
      id: "experience_options",
      options: [
        {
          value: "current_role",
          label: "Current Role (CAMS)",
          trigger: "current_role_info",
        },
        {
          value: "past_work",
          label: "Past Work (RAVI)",
          trigger: "past_work_info",
        },
        {
          value: "internships",
          label: "Internships",
          trigger: "internships_info",
        },
        {
          value: "certifications",
          label: "Certifications",
          trigger: "certifications_info",
        },
        { value: "main_menu", label: "Back to main menu", trigger: "options" },
      ],
    },
    {
      id: "current_role_info",
      message:
        "He is currently a Full-time Software Developer at CAMS Mutual Funds in Chennai, a role he started in June 2024.",
      trigger: "ask-more",
    },
    {
      id: "past_work_info",
      message:
        "He worked for a year as a Software Engineer on the RAVI project at IIT Delhi, creating a 'Reading Assistant for the Visually Impaired.'",
      trigger: "ask-more",
    },
    {
      id: "internships_info",
      message:
        "He has completed several prestigious virtual internships with companies like Walmart, Goldman Sachs, and JP Morgan Chase, focusing on advanced software engineering and front-end development.",
      trigger: "ask-more",
    },
    {
      id: "certifications_info",
      message:
        "He holds key certifications including 'AWS Certificate' from Amazon, 'Complete Data Science & Machine Learning Bootcamp' from TheAppBrewery, and an LMS development certificate from Startup India.",
      trigger: "ask-more",
    },

    // Projects Path
    {
      id: "project_options",
      message:
        "He has over 34 projects! Here are a few highlights. Which one interests you?",
      trigger: "project_list",
    },
    {
      id: "project_list",
      options: [
        {
          value: "p1_details",
          label: "NexGenGaming E-Commerce",
          trigger: "typing_p1",
        },
        {
          value: "p2_details",
          label: "IPO Monitoring System",
          trigger: "typing_p2",
        },
        {
          value: "p3_details",
          label: "MSG-to-PDF Converter",
          trigger: "typing_p3",
        },
        { value: "main_menu", label: "Back to main menu", trigger: "options" },
      ],
    },
    {
      id: "typing_p1",
      component: <Typing />,
      asMessage: true,
      trigger: "p1_card",
    },
    {
      id: "p1_card",
      component: (
        <ProjectCard
          name="NexGenGaming - E-Commerce Platform"
          description="A full-stack gaming store built with React, Node.js, and MongoDB. It features user auth, order management, and delivery tracking."
          imageUrl="https://i.imgur.com/f7j1f9o.png"
          link="https://gaming-ecommerce-fronted.vercel.app/"
        />
      ),
      asMessage: true,
      trigger: "ask-more",
    },
    {
      id: "typing_p2",
      component: <Typing />,
      asMessage: true,
      trigger: "p2_card",
    },
    {
      id: "p2_card",
      component: (
        <ProjectCard
          name="IPO Monitoring & Notifier"
          description="A real-time system that monitors IPO Grey Market Premiums using Python, OCR, and automated data processing to send notifications."
          imageUrl="https://i.imgur.com/y3A9Z8o.png"
          link="https://ipo-monitor-gmp.streamlit.app/Dashboard"
        />
      ),
      asMessage: true,
      trigger: "ask-more",
    },
    {
      id: "typing_p3",
      component: <Typing />,
      asMessage: true,
      trigger: "p3_card",
    },
    {
      id: "p3_card",
      component: (
        <ProjectCard
          name="MSG-to-PDF Converter"
          description="An automated workflow tool built with Python to convert over 20,000 financial emails from .MSG to structured PDF files for a major client."
          imageUrl="https://i.imgur.com/qFb2z3e.png"
          link="https://msg-to-pdf-converter-cams.streamlit.app/"
        />
      ),
      asMessage: true,
      trigger: "ask-more",
    },

    // Contact & Other Paths
    {
      id: "contact",
      component: (
        <div>
          {" "}
          You can reach Laxman through any of these channels:{" "}
          <ul>
            {" "}
            <li style={{ marginBottom: "8px" }}>
              📧 Email:{" "}
              <a href="mailto:laxmankethavath5@gmail.com">
                laxmankethavath5@gmail.com
              </a>
            </li>{" "}
            <li style={{ marginBottom: "8px" }}>
              🔗 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/k-laxman-44913a156/"
                target="_blank"
                rel="noopener noreferrer"
              >
                k-laxman-44913a156
              </a>
            </li>{" "}
            <li>
              🐙 GitHub:{" "}
              <a
                href="https://github.com/Laxman824"
                target="_blank"
                rel="noopener noreferrer"
              >
                Laxman824
              </a>
            </li>{" "}
          </ul>{" "}
        </div>
      ),
      asMessage: true,
      trigger: "ask-more",
    },
    {
      id: "creator_info",
      message: "I was designed and brought to Life by Laxman!",
      trigger: "ask-more",
    },

    // Standard Closing/Looping Paths
    {
      id: "ask-more",
      message: "Can I help with anything else?",
      trigger: "ask-more-options",
      delay: 1500,
    },
    {
      id: "ask-more-options",
      options: [
        { value: "yes", label: "Yes, please!", trigger: "options" },
        {
          value: "ask_anything",
          label: "Let me type my question",
          trigger: "ask_anything_prompt",
        },
        { value: "ai_help", label: "🤖 Ask AI directly", trigger: "ai_chat" },
        {
          value: "no",
          label: "No, that's all for now.",
          trigger: "end-conversation",
        },
      ],
    },

    // UPDATED: Better prompt for user input
    {
      id: "ask_anything_prompt",
      message:
        "Perfect! Type your question and I'll either answer directly or get AI to help you:",
      trigger: "user_free_text",
    },
    { id: "user_free_text", user: true, trigger: checkUserInput },

    // Fallback for unrecognized (though this shouldn't be reached with AI fallback)
    {
      id: "unrecognized",
      message: "I'm not sure how to answer that, but let me get AI to help!",
      trigger: "ai_fallback_component",
    },

    {
      id: "end-conversation",
      message:
        "Great! Thanks for stopping by. Feel free to reach out to Laxman directly. Have a wonderful day!",
      end: true,
    },
  ];

  // Enhanced useEffect for voice loading and iOS initialization
  useEffect(() => {
    const synth = window.speechSynthesis;

    // Function to load voices
    const loadVoices = () => {
      const voices = synth.getVoices();
      const preferredVoices = [
        "Google US English",
        "Samantha",
        "Microsoft Zira Desktop - English (United States)",
        "Daniel",
      ];
      const voice =
        voices.find((v) => preferredVoices.includes(v.name)) ||
        voices.find((v) => v.lang.startsWith("en-US"));
      setSelectedVoice(voice || voices[0]);
    };

    // iOS-specific initialization function
    const initializeIOSSpeech = () => {
      if (isIOSInitialized) return;

      const silentUtterance = new SpeechSynthesisUtterance("");
      silentUtterance.volume = 0;
      silentUtterance.rate = 1;
      silentUtterance.pitch = 1;

      synth.cancel();
      synth.speak(silentUtterance);
      setIsIOSInitialized(true);
      setSpeechEnabled(true);
    };

    if (synth.getVoices().length > 0) {
      loadVoices();
    } else {
      synth.onvoiceschanged = loadVoices;
    }

    if (isIOS) {
      const handleUserInteraction = () => {
        initializeIOSSpeech();
        document.removeEventListener("touchstart", handleUserInteraction);
        document.removeEventListener("click", handleUserInteraction);
      };

      document.addEventListener("touchstart", handleUserInteraction, {
        passive: true,
      });
      document.addEventListener("click", handleUserInteraction);

      return () => {
        document.removeEventListener("touchstart", handleUserInteraction);
        document.removeEventListener("click", handleUserInteraction);
      };
    } else {
      setIsIOSInitialized(true);
      setSpeechEnabled(true);
    }
  }, [isIOSInitialized, isIOS]);

  // ============= JARVIS AUTO-GREETING EFFECT =============
  useEffect(() => {
    // Show greeting after 3 seconds if user hasn't interacted
    if (!hasShownGreeting && !showSiri) {
      const greetingTimer = setTimeout(() => {
        setShowJarvisGreeting(true);
        setCurrentGreeting(getRandomGreeting());
      }, 3000);

      return () => clearTimeout(greetingTimer);
    }
  }, [hasShownGreeting, showSiri]);

  // Auto-hide greeting after 10 seconds
  useEffect(() => {
    if (showJarvisGreeting) {
      const hideTimer = setTimeout(() => {
        handleCloseGreeting();
      }, 10000);

      return () => clearTimeout(hideTimer);
    }
  }, [showJarvisGreeting]);
  // Enhanced speech configuration with user sound preference
  const speechConfig = {
    enable: speechEnabled && selectedVoice && soundEnabled,
    lang: "en-US",
    rate: 0.9,
    pitch: 1.1,
    voice: selectedVoice,
    autoStart: !isIOS && soundEnabled,
  };

  // Manual iOS speech enabler
  const enableIOSSpeech = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance("Speech enabled for iOS");
    utterance.volume = 0.1;
    utterance.rate = 0.9;
    utterance.pitch = 1.1;

    synth.cancel();
    synth.speak(utterance);

    setIsIOSInitialized(true);
    setSpeechEnabled(true);
  };

  // Toggle sound function
  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
    if (!soundEnabled && window.speechSynthesis) {
      // If enabling sound, cancel any current speech
      window.speechSynthesis.cancel();
    }
  };

  const handleToggleChat = () => {
    if (isOpen && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsOpen((prevIsOpen) => !prevIsOpen);
    if (!isOpen) {
      setShowWelcome(true);
    }
  };
  // ============= JARVIS HANDLERS =============
  const handleJarvisClick = () => {
    setShowSiri(true);
    setShowJarvisGreeting(false);
    setHasShownGreeting(true);
    setShowBadge(false);
  };

  const handleCloseGreeting = () => {
    setIsGreetingClosing(true);
    setTimeout(() => {
      setShowJarvisGreeting(false);
      setIsGreetingClosing(false);
    }, 500);
  };

  const handleGreetingAction = (action) => {
    if (
      action === "Try Voice" ||
      action === "Start Now" ||
      action === "Test Memory" ||
      action === "Try It" ||
      action === "Voice Demo" ||
      action === "Activate Voice" ||
      action === "Try Now" ||
      action === " Test It" ||
      action === "Auto Mode" ||
      action === "Start Chat" ||
      action === "See Demo" ||
      action === "More Info"
    ) {
      handleJarvisClick();
    } else if (
      action === "Learn More" ||
      action === "More Info" ||
      action === "How It Works" ||
      action === "Show Me" ||
      action === "Tell Me More" ||
      action === "cool"
    ) {
      setShowJarvisGreeting(false);
      // Could trigger a help modal or tutorial here
      setTimeout(() => {
        setShowJarvisGreeting(true);
        setCurrentGreeting(jarvisGreetings[1]); // Show voice assistant info
      }, 1000);
    } else {
      handleCloseGreeting();
    }
  };

  const handleJarvisHover = () => {
    if (!showJarvisGreeting && !hasShownGreeting) {
      setShowJarvisGreeting(true);
      setCurrentGreeting(getRandomGreeting());
    }
  };
  return (
    <>
      <style>
        {`.typing-indicator { display: inline-block; } .typing-indicator span { height: 8px; width: 8px; float: left; margin: 0 1px; background-color: #9E9EA1; display: block; border-radius: 50%; opacity: 0.4; animation: loadingFade 1s infinite; } .typing-indicator span:nth-of-type(2) { animation-delay: 0.2s; } .typing-indicator span:nth-of-type(3) { animation-delay: 0.4s; } @keyframes loadingFade { 0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; } }`}
      </style>

      {!isOpen && <OnlineStatus>Chat with me!</OnlineStatus>}
      {/* {!showSiri && <JarvisButton onClick={() => setShowSiri(true)}>JARVIS AI 🎙️</JarvisButton>}
       */}
      {/* ============= ENHANCED JARVIS AI BUTTON ============= */}
      {!showSiri && (
        <>
          <JarvisButton
            onClick={handleJarvisClick}
            onMouseEnter={handleJarvisHover}
            isMobile={isMobile}
            aria-label="Open JARVIS Voice Assistant"
          >
            {showBadge && (
              <NotificationBadge isMobile={isMobile}>New!</NotificationBadge>
            )}
            <span className="jarvis-icon">🎙️</span>
            <span>JARVIS AI</span>
          </JarvisButton>

          {/* Greeting Popup */}
          {showJarvisGreeting && (
            <JarvisGreeting isMobile={isMobile} isClosing={isGreetingClosing}>
              <GreetingHeader>
                <GreetingTitle isMobile={isMobile}>
                  {currentGreeting.title}
                </GreetingTitle>
                <CloseGreetingButton
                  onClick={handleCloseGreeting}
                  aria-label="Close greeting"
                >
                  ×
                </CloseGreetingButton>
              </GreetingHeader>

              <GreetingText
                isMobile={isMobile}
                dangerouslySetInnerHTML={{ __html: currentGreeting.message }}
              />

              <QuickActionButtons>
                {currentGreeting.actions.map((action, index) => (
                  <QuickActionButton
                    key={index}
                    primary={index === 0}
                    isMobile={isMobile}
                    onClick={() => handleGreetingAction(action)}
                  >
                    {action}
                  </QuickActionButton>
                ))}
              </QuickActionButtons>
            </JarvisGreeting>
          )}
        </>
      )}

      <FloatingButton
        onClick={handleToggleChat}
        theme={theme}
        aria-label={
          isOpen ? "Close chat" : "Open chat with portfolio assistant"
        }
      >
        <RippleEffect theme={theme} />
        <ButtonContent>
          {isOpen ? (
            <span style={{ fontSize: "24px" }}>✕</span>
          ) : (
            <Lottie
              animationData={chatbotLottie}
              loop={true}
              style={{ width: 45, height: 45 }}
            />
          )}
        </ButtonContent>
      </FloatingButton>

      {isOpen && (
        <ChatbotContainer>
          <ThemeProvider theme={botTheme}>
            {/* In-Chat Sound Toggle - Always visible when chat is open */}
            <InChatSoundToggle
              onClick={toggleSound}
              soundEnabled={soundEnabled}
              title={soundEnabled ? "Turn sound off" : "Turn sound on"}
            >
              {soundEnabled ? "🔊" : "🔇"}
              {soundEnabled ? "ON" : "OFF"}
            </InChatSoundToggle>

            {/* iOS Speech Enable Button - only show if needed */}
            {isIOS && !speechEnabled && (
              <IOSSpeechButton onClick={enableIOSSpeech}>
                🔊 Enable Voice
              </IOSSpeechButton>
            )}

            {selectedVoice && (
              <>
                {showWelcome ? (
                  <WelcomeContainer>
                    <Lottie
                      animationData={chatbotLottie}
                      loop={true}
                      style={{
                        width: window.innerWidth <= 480 ? 140 : 180,
                        height: window.innerWidth <= 480 ? 140 : 180,
                      }}
                    />
                    <WelcomeText>
                      Hi there! I'm Laxman's portfolio assistant.
                    </WelcomeText>

                    {/* Welcome Buttons Container with Sound Toggle */}
                    <WelcomeButtonsContainer>
                      <StartButton onClick={() => setShowWelcome(false)}>
                        Start Chat
                      </StartButton>
                      <SoundToggleButton
                        onClick={toggleSound}
                        soundEnabled={soundEnabled}
                        title={
                          soundEnabled ? "Turn sound off" : "Turn sound on"
                        }
                      >
                        {soundEnabled ? "🔊" : "🔇"}
                        {soundEnabled ? "Sound On" : "Sound Off"}
                      </SoundToggleButton>
                    </WelcomeButtonsContainer>
                  </WelcomeContainer>
                ) : (
                  <ChatBot
                    steps={steps}
                    headerTitle="Portfolio Assistant"
                    botAvatar={botAvatarUrl}
                    userAvatar={userAvatarUrl}
                    width="100%"
                    height="500px"
                    style={{
                      background: "transparent",
                      boxShadow: "none",
                    }}
                    speechSynthesis={speechConfig}
                  />
                )}
              </>
            )}
          </ThemeProvider>
        </ChatbotContainer>
      )}

      {showSiri && (
        <Siri onClose={() => setShowSiri(false)} isMobile={isMobile} />
      )}
    </>
  );
}

export default PortfolioChatBot;
