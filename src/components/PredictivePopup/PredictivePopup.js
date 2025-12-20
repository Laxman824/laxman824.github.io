// import React, { useState, useEffect, useCallback } from 'react';
// import { useVisitor } from '../../context/VisitorContext';
// import useExitIntent from '../../hooks/useExitIntent';
// import './PredictivePopup.css';

// /**
//  * 🔮 PREDICTIVE POPUP COMPONENT
//  *
//  * Shows intelligent popups based on:
//  * - Exit intent
//  * - Returning visitor greeting
//  * - Behavior-based suggestions
//  * - Proactive AI offers
//  */

// const PredictivePopup = ({ theme, onOpenChat }) => {
//   const {
//     isReturning,
//     personalizedGreeting,
//     predictions,
//     visitorType,
//     getBestPrediction,
//     dismissGreeting
//   } = useVisitor();

//   const {
//     showExitIntent,
//     dismissExitIntent
//   } = useExitIntent({
//     threshold: 50,
//     delay: 5000,
//     cooldown: 60000
//   });

//   const [activePopup, setActivePopup] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);

//   // Determine which popup to show
//   useEffect(() => {
//     // Priority 1: Returning visitor greeting
//     if (personalizedGreeting && !sessionStorage.getItem('greeting_shown')) {
//       setActivePopup({
//         type: 'greeting',
//         title: '👋 Welcome Back!',
//         message: personalizedGreeting,
//         actions: [
//           { label: '💬 Chat Now', action: 'chat', primary: true },
//           { label: 'Continue Browsing', action: 'dismiss' }
//         ]
//       });
//       sessionStorage.setItem('greeting_shown', 'true');
//       setIsVisible(true);
//       return;
//     }

//     // Priority 2: Exit intent
//     if (showExitIntent) {
//       setActivePopup({
//         type: 'exit',
//         title: '🚀 Wait! Before You Go...',
//         message: getExitMessage(),
//         actions: [
//           { label: '📧 Get Resume', action: 'resume', primary: true },
//           { label: '💬 Quick Chat', action: 'chat' },
//           { label: 'Maybe Later', action: 'dismiss' }
//         ]
//       });
//       setIsVisible(true);
//       return;
//     }

//     // Priority 3: Behavior-based prediction
//     const prediction = getBestPrediction();
//     if (prediction && prediction.confidence > 0.7) {
//       setActivePopup({
//         type: 'prediction',
//         title: '💡 Quick Suggestion',
//         message: prediction.message,
//         actions: [
//           { label: 'Tell Me More', action: prediction.action, primary: true },
//           { label: 'Not Now', action: 'dismiss' }
//         ]
//       });
//       setIsVisible(true);
//     }
//   }, [personalizedGreeting, showExitIntent, predictions, getBestPrediction]);

//   // Get personalized exit message
//   const getExitMessage = () => {
//     switch (visitorType) {
//       case 'recruiter':
//         return "Laxman is actively looking for exciting opportunities! Want me to send his detailed resume to your inbox?";
//       case 'developer':
//         return "Check out Laxman's GitHub for some cool open-source projects, or chat with me about technical details!";
//       case 'techie':
//         return "Interested in the tech stack? I can explain the architecture of any project in detail!";
//       default:
//         return "Don't miss out! I can answer any questions about Laxman's skills and experience instantly.";
//     }
//   };

//   // Handle action
//   const handleAction = useCallback((action) => {
//     switch (action) {
//       case 'chat':
//         if (onOpenChat) onOpenChat();
//         closePopup();
//         break;
//       case 'resume':
//         // Trigger resume download or email capture
//         window.open('/resume.pdf', '_blank');
//         closePopup();
//         break;
//       case 'dismiss':
//         closePopup();
//         break;
//       case 'ai_demo':
//         if (onOpenChat) onOpenChat();
//         // Could pass a specific prompt here
//         closePopup();
//         break;
//       default:
//         closePopup();
//     }
//   }, [onOpenChat]);

//   // Close popup with animation
//   const closePopup = useCallback(() => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setIsVisible(false);
//       setIsClosing(false);
//       setActivePopup(null);
//       dismissExitIntent();
//       dismissGreeting();
//     }, 300);
//   }, [dismissExitIntent, dismissGreeting]);

//   if (!isVisible || !activePopup) return null;

//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         className={`predictive-backdrop ${isClosing ? 'closing' : ''}`}
//         onClick={closePopup}
//       />

//       {/* Popup */}
//       <div
//         className={`predictive-popup ${activePopup.type} ${isClosing ? 'closing' : ''}`}
//         style={{
//           '--accent-color': theme?.accentColor || '#3B82F6',
//           '--bg-color': theme?.body || '#0a0a0a',
//           '--text-color': theme?.text || '#ffffff',
//           '--secondary-text': theme?.secondaryText || 'rgba(255,255,255,0.7)'
//         }}
//       >
//         {/* Close button */}
//         <button className="popup-close" onClick={closePopup}>×</button>

//         {/* Icon based on type */}
//         <div className="popup-icon">
//           {activePopup.type === 'greeting' && '🎉'}
//           {activePopup.type === 'exit' && '💡'}
//           {activePopup.type === 'prediction' && '🔮'}
//         </div>

//         {/* Title */}
//         <h3 className="popup-title">{activePopup.title}</h3>

//         {/* Message */}
//         <p className="popup-message">{activePopup.message}</p>

//         {/* Actions */}
//         <div className="popup-actions">
//           {activePopup.actions.map((action, index) => (
//             <button
//               key={index}
//               className={`popup-btn ${action.primary ? 'primary' : 'secondary'}`}
//               onClick={() => handleAction(action.action)}
//             >
//               {action.label}
//             </button>
//           ))}
//         </div>

//         {/* Trust indicator */}
//         <div className="popup-trust">
//           <span>🔒 No spam, ever.</span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PredictivePopup;

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useVisitor } from "../../context/VisitorContext";
import useExitIntent from "../../hooks/useExitIntent";
import "./PredictivePopup.css";

/**
 * 🔮 MINIMAL PREDICTIVE POPUP
 *
 * Less is more. One message. One action. One impression.
 */

const PredictivePopup = ({ theme, onOpenChat }) => {
  const {
    personalizedGreeting,
    visitorType,
    getBestPrediction,
    dismissGreeting,
  } = useVisitor();

  const { showExitIntent, dismissExitIntent } = useExitIntent({
    threshold: 50,
    delay: 5000,
    cooldown: 60000,
  });

  const [popup, setPopup] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [progress, setProgress] = useState(100);
  const timerRef = useRef(null);
  const progressRef = useRef(null);

  // Minimal, impactful messages
  const getPopupData = useCallback(() => {
    // Returning visitor
    if (personalizedGreeting && !sessionStorage.getItem("greeted")) {
      sessionStorage.setItem("greeted", "1");
      return {
        type: "welcome",
        emoji: "👋",
        text: "Welcome back! Pick up where you left off?",
        action: { label: "Let's go", fn: () => onOpenChat?.() },
        autoClose: 8000,
      };
    }

    // Exit intent
    if (showExitIntent) {
      const messages = {
        recruiter: "Wait — grab the resume first?",
        developer: "Before you go — check the code?",
        techie: "Curious about the stack?",
        default: "Got a question? I'm quick.",
      };
      return {
        type: "exit",
        emoji: "✨",
        text: messages[visitorType] || messages.default,
        action: {
          label: visitorType === "recruiter" ? "Get Resume" : "Ask AI",
          fn: () =>
            visitorType === "recruiter"
              ? window.open("/resume.pdf", "_blank")
              : onOpenChat?.(),
        },
        autoClose: 10000,
      };
    }

    // Prediction based
    const prediction = getBestPrediction?.();
    if (prediction?.confidence > 0.75) {
      return {
        type: "suggest",
        emoji: "💡",
        text: prediction.message.slice(0, 60) + "...",
        action: { label: "Show me", fn: () => onOpenChat?.() },
        autoClose: 7000,
      };
    }

    return null;
  }, [
    personalizedGreeting,
    showExitIntent,
    visitorType,
    getBestPrediction,
    onOpenChat,
  ]);

  // Show popup logic
  useEffect(() => {
    const data = getPopupData();
    if (data && !popup) {
      setPopup(data);
      setIsVisible(true);
      setProgress(100);

      // Auto-close with progress
      const duration = data.autoClose;
      const startTime = Date.now();

      progressRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
        setProgress(remaining);

        if (remaining <= 0) {
          clearInterval(progressRef.current);
        }
      }, 50);

      timerRef.current = setTimeout(() => {
        handleClose();
      }, duration);
    }

    return () => {
      clearTimeout(timerRef.current);
      clearInterval(progressRef.current);
    };
  }, [getPopupData]);

  // Handle action click
  const handleAction = useCallback(() => {
    if (popup?.action?.fn) {
      popup.action.fn();
    }
    handleClose();
  }, [popup]);

  // Close with animation
  const handleClose = useCallback(() => {
    clearTimeout(timerRef.current);
    clearInterval(progressRef.current);
    setIsLeaving(true);

    setTimeout(() => {
      setIsVisible(false);
      setIsLeaving(false);
      setPopup(null);
      dismissExitIntent?.();
      dismissGreeting?.();
    }, 400);
  }, [dismissExitIntent, dismissGreeting]);

  // Pause timer on hover
  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    clearInterval(progressRef.current);
  };

  const handleMouseLeave = () => {
    if (!popup) return;
    const remaining = (progress / 100) * popup.autoClose;

    const startTime = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.max(
        0,
        progress - (elapsed / remaining) * progress
      );
      setProgress(newProgress);
    }, 50);

    timerRef.current = setTimeout(handleClose, remaining);
  };

  if (!isVisible || !popup) return null;

  const isDark = theme?.body?.includes("#0") || theme?.body?.includes("#1");

  return (
    <div
      className={`pp-container ${popup.type} ${isLeaving ? "leaving" : ""} ${
        isDark ? "dark" : "light"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ "--accent": theme?.accentColor || "#3B82F6" }}
    >
      {/* Animated gradient border */}
      <div className="pp-border" />

      {/* Progress indicator */}
      <div className="pp-progress" style={{ width: `${progress}%` }} />

      {/* Content */}
      <div className="pp-content">
        {/* Animated emoji */}
        <span className="pp-emoji">{popup.emoji}</span>

        {/* Message */}
        <p className="pp-text">{popup.text}</p>

        {/* Action */}
        <button className="pp-action" onClick={handleAction}>
          {popup.action.label}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Close button */}
      <button className="pp-close" onClick={handleClose} aria-label="Close">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Decorative elements */}
      <div className="pp-glow" />
      <div className="pp-particles">
        {[...Array(6)].map((_, i) => (
          <span key={i} style={{ "--i": i }} />
        ))}
      </div>
    </div>
  );
};

export default PredictivePopup;
