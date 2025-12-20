import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// Your portfolio data and using puter js  (keeping as is)
const LAXMAN_PORTFOLIO_DATA = `
K LAXMAN - SOFTWARE DEVELOPMENT ENGINEER & AI SPECIALIST


=== PROFESSIONAL SUMMARY ===
Software Development Engineer at Computer Age Management Services (CAMS), Chennai (June 2024 - Present)
IIT Delhi Alumni (2018-2024) - B.Tech + M.Tech in Computer Science & Engineering
Specialized in AI/ML, Financial Technology & Full Stack Development
Teaching Assistant with 300+ students mentored | Enterprise AI Platform Developer


=== CURRENT ROLE ===
Software Development Engineer at Computer Age Management Services (CAMS)
- Developed CamsLens Enterprise GenAI platform processing 80,000+ documents monthly with 95% accuracy
- Implemented real-time RSS feed ingestion reducing manual monitoring by 80%
- Designed AI-powered query APIs with 60% response time improvement
- Built Ranking Chunks Algorithm for Vertex AI datastore optimization
- Technologies: Vertex AI Gemini-flash 2.0, Agent Builder, Google Cloud Run, BigQuery
- Location: Chennai, Tamil Nadu
- Duration: June 2024 - Present


=== EDUCATION ===
Indian Institute of Technology Delhi (July 2018 - May 2024)
- Dual Degree: Bachelor's + Master's in Computer Science & Engineering
- Location: New Delhi, India
- Specialized in AI/ML, Computer Vision, and NLP
- Teaching Assistant (Fall 2019 - Spring 2021): Mentored 300+ undergraduate students
- Courses: Data Structures, Introduction to Programming, Advanced CS concepts


=== TECHNICAL SKILLS ===

Programming Languages:
- Java: Spring Boot, Spring Security, Maven
- Python: Flask, FastAPI, OpenCV, Scikit-learn, Pandas, NumPy
- JavaScript: Node.js, React, ES6+

Full Stack Development:
- Frontend: React.js, HTML5, CSS3, TailwindCSS, JavaScript
- Backend: Node.js, Express.js, Python Flask/FastAPI, Java Spring Boot
- Databases: MySQL, PostgreSQL, MongoDB, H2, Google BigQuery
- Web Technologies: REST APIs, GraphQL, WebSockets

AI/ML & Data Science:
- Frameworks: PyTorch, TensorFlow, Vertex AI Gen AI
- Computer Vision: OpenCV, Layout Parser, MTL-TabNet, Dlib
- NLP: spaCy, Large Language Models, Few-shot Learning
- Specialized: Document Processing, Image Recognition, Facial Landmark Detection

Cloud & DevOps:
- Google Cloud: Cloud Run, GCS, Vertex AI, BigQuery
- AWS: Basic certification and services
- Azure: Basic services
- Containerization: Docker, Kubernetes
- CI/CD: GitHub Actions, Jenkins, Git
- Tools: Maven, npm, Postman, GCP SDK


=== MAJOR PROJECTS ===

1. ENTERPRISE GENAI PLATFORM (2024 - Present)
   - Enterprise AI platform for CAMS processing 80,000+ documents monthly
   - Achieved 95% accuracy with CMEK-compliant storage
   - Implemented real-time RSS feed ingestion and ranking algorithms
   - Technologies: Vertex AI Gemini-flash 2.0, Agent Builder, Google Cloud Run, BigQuery

2. AI-POWERED FINANCIAL EMAIL BOT SYSTEM (2025)
   - FastAPI microservice using Large Language Models for email classification
   - Zero-shot learning with 95% accuracy for PAN, ARN, date extraction
   - Processes 1,000+ emails per minute, reducing manual processing by 80%
   - Technologies: Python, FastAPI, vLLM, Docker, LLMs

3. STOCK EXCHANGE PLATFORM (2024)
   - Full-stack trading simulation supporting 100+ concurrent users
   - JWT authentication, role-based access control (Admin/User)
   - Sub-second response times for critical operations
   - Technologies: Java Spring Boot, H2 DB, Spring Security

4. BORDERLESS TABLE RECOGNITION & ACCESSIBILITY (2023)
   - PDF table detection system with 30% accuracy improvement over CascadeTabNet
   - SVM classifier achieving 90% accuracy for table cell classification
   - Docker containerized solution for RAVI framework
   - Technologies: Python, Layout Parser, MTL-TabNet, OpenCV, SVM

5. RAVI - READING ASSISTANT FOR VISUALLY IMPAIRED (2022)
   - STEM document conversion toolchain (PDFs, EPUBs to accessible formats)
   - Flask web application for crowdsourced ALT TEXT generation
   - Improved accessibility for 500+ STEM documents
   - Technologies: Python, Flask, HTML/CSS, JavaScript

6. DRIVER DROWSINESS DETECTION SYSTEM (2021)
   - Real-time computer vision system with 90%+ detection accuracy
   - Facial landmark detection and eye aspect ratio calculation
   - 30 FPS performance optimized for embedded systems
   - Technologies: Python, OpenCV, Dlib

7. ENHANCED LEARNING MANAGEMENT SYSTEM (2022)
   - Full-stack LMS for 1,000+ users during Eamvey Technologies internship
   - Secure payment gateway handling 500+ monthly transactions
   - 40% performance improvement through optimization
   - Technologies: MERN Stack (MongoDB, Express.js, React, Node.js)

8. NEXGEN GAMING E-COMMERCE PLATFORM (2024)
   - Full-stack platform selling gaming consoles and accessories
   - Features order management, delivery tracking, and smooth UI/UX
   - Technologies: React, Node.js, MongoDB Atlas, Express, TailwindCSS, Firebase, Vercel

9. IPO MONITORING & NOTIFIER (2023)
   - Real-time IPO Grey Market Premium monitoring with instant notifications
   - Automates tracking and reporting for higher gains
   - Technologies: Python, OpenCV, OCR, PDF Processing, Excel Automation

10. RSS FEED DOCUMENT DOWNLOADER (2023)
    - Automated online download of documents from RSS feeds
    - Converts feeds into structured PDFs with Excel outputs
    - Technologies: Python, OpenCV, OCR, PDF Processing

11. MSG-TO-PDF CONVERTER FOR FINANCIAL EMAILS (2023)
    - Converts 20,000+ .MSG financial emails into structured PDFs
    - Streamlined workflow reduces manual effort
    - Technologies: Python, WeasyPrint, Streamlit

12. PDF FOOTNOTES PROCESSOR (2023)
    - Maps footnotes and references from PDFs into Excel sheets
    - Optimized for large 1,000+ page financial documents
    - Technologies: Python, OpenCV, OCR, PDF Processing

13. FIELD EXTRACTION OCR FROM IMAGE (2023)
    - Extracts fields like PAN and Folio numbers from images automatically
    - Technologies: Python, OpenCV, DocTR, Streamlit

14. LIVE SNAPSHOT & RESTORE FOR VMs (2022)
    - KVM-based snapshot and restore service for running VMs
    - Technologies: Rust, HTML/CSS, VMware

15. WEBPAGE USING JS (2022)
    - Fully customizable portfolio template
    - Technologies: ReactJS, CSS

16. AIRLINE DBMS PROTOTYPE (2022)
    - Airline booking system simulation with Flask, PostgreSQL
    - Frontend using HTML/CSS
    - Technologies: Flask, PostgreSQL, HTML/CSS, Kaggle datasets

17. LARGE FILE DOWNLOAD (2021)
    - Socket programming project implementing BitTorrent-style transfers
    - Efficient TCP/IP data handling with Wireshark monitoring
    - Technologies: Python, Socket Programming, TCP/IP, Wireshark

18. SIMPLE WEBPAGE WITH PAYMENT & DASHBOARD (2022)
    - Integrated payment gateway and admin dashboard
    - Technologies: HTML, CSS, PayPal, GitHub Deployment

19. BIG NUMBER ARITHMETIC OPERATION (2021)
    - Arithmetic handling for extremely large numbers
    - Technologies: C, Node.js

20. SIMULATION OF LIFT CONTROLLER SYSTEM (2021)
    - Designed logic for three-floor lift operation
    - Technologies: VHDL, Vivado, API, Integrated Circuit

21. MULTI-AGENT SEARCH MODELING IN PACMAN (2021)
    - Decision-making modeling for PACMAN game
    - Technologies: Python, Search Algorithms, ReactJS

22. VIRTUAL INTERNSHIP - GOLDMANSACHS (2022)
    - Finance-focused virtual internship
    - Technologies: Java, GraphQL, React, Apollo Client

23. VIRTUAL INTERNSHIP - WALMART (2022)
    - Advanced software engineering virtual experience
    - Technologies: Flutter, Dart, React, Node.js, PostgreSQL

24. VIRTUAL INTERNSHIP - JPMORGAN CHASE (2022)
    - Projects including Metamask integration and Twitter API usage
    - Technologies: React, Node.js, MongoDB

25. VIRTUAL INTERNSHIP - HP (2022)
    - Virtual internship with Next.js and deployment on Vercel
    - Technologies: Next.js, Node.js, Supabase, Razorpay, Vercel


=== WORK EXPERIENCE ===

Software Development Engineer | Computer Age Management Services (CAMS)
June 2024 - Present | Chennai, India
- Enterprise AI platform development and financial document processing
- Real-time data ingestion and AI-powered query optimization
- 80% reduction in manual monitoring through automation

Web Development Intern | Eamvey Technologies
May 2022 - August 2022 | Remote
- Enhanced LMS frontend/backend for 1,000+ users
- Payment gateway integration and performance optimization
- MERN stack development with 40% performance improvement


=== LEADERSHIP & ACTIVITIES ===
- Teaching Assistant at IIT Delhi (Fall 2019 - Spring 2021)
- Mentored 300+ undergraduate students in Computer Science fundamentals
- Conducted lab sessions, graded assignments, and held office hours
- Specialized in Data Structures and Programming concepts


=== CONTACT ===
Email: Laxmankethavath5@gmail.com
Phone: +91-9000063740
LinkedIn: [Professional Profile](https://linkedin.com/in/k-laxman)
GitHub: [Project Repository](https://github.com/Laxman824)
Portfolio: [Personal Website](https://k-laxman-portfolio.com)
Location: Chennai, Tamil Nadu, India
`;

// ============= ANIMATIONS =============
const loadingFade = keyframes`
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
`;

const slideInUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const voicePulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
  70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// ============= STYLED COMPONENTS =============
const AIContainer = styled.div`
  width: 100%;
  padding: 15px;
  font-family: inherit;
  background: linear-gradient(
    135deg,
    rgba(79, 70, 229, 0.05),
    rgba(124, 58, 237, 0.05)
  );
  border-radius: 10px;
  margin: 10px 0;
  position: relative;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const ControlButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const IconButton = styled.button`
  background: rgba(79, 70, 229, 0.1);
  border: 1px solid rgba(79, 70, 229, 0.2);
  color: #4f46e5;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(79, 70, 229, 0.2);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ef4444;
  color: white;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 10px;
  font-weight: bold;
`;

const ChatHistoryContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin: 15px 0;
  padding: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  border: 1px solid rgba(79, 70, 229, 0.1);
  animation: ${slideInUp} 0.5s ease;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(79, 70, 229, 0.05);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(79, 70, 229, 0.3);
    border-radius: 3px;
  }
`;

const ChatMessage = styled.div`
  margin: 8px 0;
  padding: 10px;
  border-radius: 8px;
  background: ${(props) =>
    props.type === "user"
      ? "linear-gradient(135deg, #4F46E5, #7C3AED)"
      : "rgba(255, 255, 255, 0.9)"};
  color: ${(props) => (props.type === "user" ? "white" : "#374151")};
  animation: ${fadeIn} 0.3s ease;

  .timestamp {
    font-size: 11px;
    opacity: 0.7;
    margin-top: 5px;
  }

  .message-header {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 5px;
    opacity: 0.8;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  position: relative;
`;

const AIInput = styled.input`
  flex: 1;
  padding: 12px;
  padding-right: ${(props) => (props.hasShortcut ? "100px" : "12px")};
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgb(229, 228, 240);
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }
`;

const ShortcutHint = styled.div`
  position: absolute;
  right: 70px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: #9ca3af;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 8px;
  border-radius: 4px;
  pointer-events: none;
`;

const VoiceButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.isListening ? "#ef4444" : "#4F46E5")};
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.3s ease;
  animation: ${(props) => (props.isListening ? voicePulse : "none")} 1.5s
    infinite;

  &:hover {
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TypingContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 15px 0;
  padding: 12px;
  background: rgba(79, 70, 229, 0.05);
  border-radius: 8px;
  animation: ${slideInUp} 0.5s ease;
`;

const TypingDot = styled.span`
  height: 8px;
  width: 8px;
  margin: 0 2px;
  background-color: rgb(250, 249, 251);
  border-radius: 50%;
  animation: ${loadingFade} 1s infinite;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  &:nth-child(4) {
    animation-delay: 0.6s;
  }
`;

const AnimatedResponse = styled.div`
  margin-top: 15px;
  padding: 15px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9),
    rgba(245, 247, 250, 0.8)
  );
  border-radius: 12px;
  border-left: 4px solid #4f46e5;
  line-height: 1.6;
  color: #374151;
  animation: ${slideInUp} 0.6s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(79, 70, 229, 0.1);
`;

const RatingButton = styled.button`
  background: ${(props) =>
    props.active ? "rgba(79, 70, 229, 0.2)" : "rgba(79, 70, 229, 0.05)"};
  border: 1px solid
    ${(props) =>
      props.active ? "rgba(79, 70, 229, 0.4)" : "rgba(79, 70, 229, 0.1)"};
  color: #4f46e5;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.active ? 1 : 0.7)};

  &:hover {
    background: rgba(79, 70, 229, 0.2);
    transform: translateY(-1px);
  }
`;

const SuggestionsContainer = styled.div`
  margin-top: 15px;
  padding: 12px;
  background: rgba(79, 70, 229, 0.02);
  border-radius: 10px;
  border: 1px solid rgba(79, 70, 229, 0.1);
  animation: ${slideInUp} 0.7s ease;
`;

const SuggestionChip = styled.button`
  background: linear-gradient(135deg, #4f46e5, rgb(163, 97, 249));
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  margin: 4px 6px 4px 0;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.3s ease;
  animation: ${pulse} 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
  }
`;

const ActionButton = styled.button`
  background: ${(props) =>
    props.variant === "primary"
      ? "linear-gradient(135deg, #22C55E, #16A34A)"
      : "rgba(79, 70, 229, 0.1)"};
  color: ${(props) => (props.variant === "primary" ? "white" : "#4F46E5")};
  border: ${(props) =>
    props.variant === "primary" ? "none" : "1px solid rgba(79, 70, 229, 0.2)"};
  padding: 10px 16px;
  border-radius: 8px;
  margin: 6px 8px 6px 0;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px
      ${(props) =>
        props.variant === "primary"
          ? "rgba(34, 197, 94, 0.3)"
          : "rgba(79, 70, 229, 0.2)"};
  }
`;

const ErrorMessage = styled.div`
  margin-top: 15px;
  padding: 12px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  border-left: 4px solid #ef4444;
  color: #dc2626;
  animation: ${slideInUp} 0.5s ease;
`;

const KeyboardShortcutsModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-width: 400px;
  animation: ${slideInUp} 0.3s ease;

  h3 {
    margin: 0 0 20px 0;
    color: #4f46e5;
  }

  .shortcut-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #e5e7eb;

    &:last-child {
      border-bottom: none;
    }

    .key {
      background: #f3f4f6;
      padding: 4px 8px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 12px;
    }
  }

  .close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #9ca3af;

    &:hover {
      color: #4b5563;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  animation: ${fadeIn} 0.3s ease;
`;

// ============= HELPER COMPONENTS =============

// Typing Component
const Typing = () => (
  <TypingContainer>
    <span style={{ marginRight: "10px", color: "#FFFFFF", fontWeight: "500" }}>
      🤖 AI is thinking
    </span>
    <TypingDot />
    <TypingDot />
    <TypingDot />
  </TypingContainer>
);

// Typewriter Effect Component
const TypewriterText = ({ text, onComplete, speed = 30 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      setTimeout(onComplete, 500);
    }
  }, [currentIndex, text, onComplete, speed]);

  return (
    <div>
      {displayText}
      {currentIndex < text.length && (
        <span
          style={{
            opacity: 0.7,
            animation: "blink 1s infinite",
            marginLeft: "2px",
          }}
        >
          |
        </span>
      )}
    </div>
  );
};

// Response Rating Component
const ResponseRating = ({ responseId }) => {
  const [rating, setRating] = useState(null);

  const handleRating = (value) => {
    setRating(value);
    console.log(`Response ${responseId} rated: ${value}`);
    // You can send this to analytics or backend
  };

  return (
    <RatingContainer>
      <span style={{ fontSize: "13px", color: "#6B7280" }}>
        Was this helpful?
      </span>
      <RatingButton
        active={rating === "helpful"}
        onClick={() => handleRating("helpful")}
      >
        👍 Yes
      </RatingButton>
      <RatingButton
        active={rating === "not-helpful"}
        onClick={() => handleRating("not-helpful")}
      >
        👎 No
      </RatingButton>
    </RatingContainer>
  );
};

// Chat History Component
const ChatHistory = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (messages.length === 0) return null;

  return (
    <ChatHistoryContainer>
      {messages.map((msg, index) => (
        <ChatMessage key={index} type={msg.type}>
          <div className="message-header">
            {msg.type === "user" ? "👤 You" : "🤖 AI Assistant"}
          </div>
          <div>{msg.message}</div>
          <div className="timestamp">
            {new Date(msg.timestamp).toLocaleTimeString()}
          </div>
        </ChatMessage>
      ))}
      <div ref={messagesEndRef} />
    </ChatHistoryContainer>
  );
};

// Smart Suggestions Component
const SmartSuggestions = ({ lastQuestion, onSuggestionClick }) => {
  const getSuggestions = (question) => {
    if (!question)
      return [
        "👋 Who is Laxman?",
        "💼 What's his current role?",
        "🎓 Tell me about his education",
      ];

    const q = question.toLowerCase();

    if (
      q.includes("project") ||
      q.includes("built") ||
      q.includes("developed")
    ) {
      return [
        "🚀 Show me CAMSLENS project details",
        "📊 Explain the Stock Exchange Platform",
        "🤖 Tell me about AI projects",
      ];
    }

    if (q.includes("skill") || q.includes("technology") || q.includes("tech")) {
      return [
        "🧠 What AI/ML skills does he have?",
        "⚛️ Show his React expertise",
        "☁️ Tell me about cloud experience",
      ];
    }

    if (q.includes("contact") || q.includes("reach") || q.includes("hire")) {
      return [
        "📧 How can I contact him?",
        "📱 Get his LinkedIn profile",
        "📄 Download his resume",
      ];
    }

    return [
      "💻 Show me more projects",
      "📞 How can I contact him?",
      "🎯 What makes him unique?",
    ];
  };

  const suggestions = getSuggestions(lastQuestion);

  return (
    <SuggestionsContainer>
      <p
        style={{
          fontSize: "13px",
          color: "#FFFFFF",
          margin: "0 0 10px 0",
          fontWeight: "500",
        }}
      >
        💡 You might also want to know:
      </p>
      {suggestions.map((suggestion, index) => (
        <SuggestionChip
          key={index}
          onClick={() => onSuggestionClick(suggestion.replace(/^[^\s]*\s/, ""))}
        >
          {suggestion}
        </SuggestionChip>
      ))}
    </SuggestionsContainer>
  );
};

// Quick Action Buttons Component
const QuickActions = ({ lastQuestion }) => {
  const getActions = () => {
    const q = (lastQuestion || "").toLowerCase();

    if (q.includes("project") || q.includes("portfolio")) {
      return [
        {
          icon: "🌐",
          label: "View Live Projects",
          variant: "primary",
          action: () => window.open("https://github.com/Laxman824", "_blank"),
        },
        {
          icon: "💻",
          label: "See GitHub",
          variant: "primary",
          action: () => window.open("https://github.com/Laxman824", "_blank"),
        },
      ];
    }

    if (q.includes("contact") || q.includes("hire") || q.includes("reach")) {
      return [
        {
          icon: "📧",
          label: "Send Email",
          variant: "primary",
          action: () =>
            window.open("mailto:laxmankethavath5@gmail.com", "_blank"),
        },
        {
          icon: "💼",
          label: "LinkedIn",
          variant: "primary",
          action: () =>
            window.open(
              "https://www.linkedin.com/in/k-laxman-44913a156/",
              "_blank"
            ),
        },
        {
          icon: "📄",
          label: "Download Resume",
          variant: "primary",
          action: () =>
            window.open(
              "https://drive.google.com/file/d/1aKH71pAlFOGhlEqr3gnJ6A8BFhdkcUrP/view",
              "_blank"
            ),
        },
      ];
    }

    return [
      {
        icon: "📄",
        label: "View Resume",
        variant: "primary",
        action: () =>
          window.open(
            "https://drive.google.com/file/d/1aKH71pAlFOGhlEqr3gnJ6A8BFhdkcUrP/view",
            "_blank"
          ),
      },
      {
        icon: "💻",
        label: "GitHub",
        variant: "primary",
        action: () => window.open("https://github.com/Laxman824", "_blank"),
      },
    ];
  };

  const actions = getActions();

  return actions.length > 0 ? (
    <div style={{ marginTop: "15px" }}>
      <p
        style={{
          fontSize: "13px",
          color: "#FFFFFF",
          margin: "0 0 10px 0",
          fontWeight: "500",
        }}
      >
        ⚡ Quick Actions:
      </p>
      {actions.map((action, index) => (
        <ActionButton
          key={index}
          variant={action.variant}
          onClick={action.action}
        >
          {action.icon} {action.label}
        </ActionButton>
      ))}
    </div>
  ) : null;
};

// Voice Input Component
const VoiceInput = ({ onResult, disabled }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    setIsSupported(
      "webkitSpeechRecognition" in window || "SpeechRecognition" in window
    );
  }, []);

  const startListening = () => {
    if (!isSupported || disabled) return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);

    recognition.start();
  };

  if (!isSupported) return null;

  return (
    <VoiceButton
      isListening={isListening}
      onClick={startListening}
      disabled={disabled}
      title={isListening ? "Listening..." : "Click to speak"}
    >
      {isListening ? "🔴" : "🎤"}
    </VoiceButton>
  );
};

// Keyboard Shortcuts Modal
const KeyboardShortcuts = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <KeyboardShortcutsModal>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        <h3>⌨️ Keyboard Shortcuts</h3>
        <div className="shortcut-item">
          <span>Focus search</span>
          <span className="key">Ctrl/Cmd + K</span>
        </div>
        <div className="shortcut-item">
          <span>Clear input</span>
          <span className="key">Esc</span>
        </div>
        <div className="shortcut-item">
          <span>Clear chat history</span>
          <span className="key">Ctrl/Cmd + L</span>
        </div>
        <div className="shortcut-item">
          <span>Export chat</span>
          <span className="key">Ctrl/Cmd + E</span>
        </div>
        <div className="shortcut-item">
          <span>Toggle history</span>
          <span className="key">Ctrl/Cmd + H</span>
        </div>
      </KeyboardShortcutsModal>
    </>
  );
};
// ============= MAIN COMPONENT =============
const AIAssistant = ({ triggerNextStep, initialQuestion }) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isPuterReady, setPuterReady] = useState(false);
  const [lastQuestion, setLastQuestion] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [rawResponse, setRawResponse] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [currentResponseId, setCurrentResponseId] = useState(null);
  const [
    hasProcessedInitialQuestion,
    setHasProcessedInitialQuestion,
  ] = useState(false); // NEW
  const inputRef = useRef(null);

  // Check if Puter is ready
  useEffect(() => {
    const checkPuter = () => {
      if (window.puter && window.puter.ai) {
        setPuterReady(true);
      } else {
        setTimeout(checkPuter, 1000);
      }
    };
    checkPuter();
  }, []);

  // Fallback responses (move this before handleUserMessage)
  const getFallbackResponse = (question) => {
    const q = question.toLowerCase();

    if (q.includes("who") && (q.includes("laxman") || q.includes("you"))) {
      return "Laxman is a Software Development Engineer at CAMS with expertise in AI/ML and full-stack development. He's an IIT Delhi alumnus (2018-2024) with dual degrees in Computer Science, specializing in enterprise AI platforms and financial technology solutions.";
    }

    if (q.includes("contact") || q.includes("reach") || q.includes("email")) {
      return "You can reach Laxman at laxmankethavath5@gmail.com or call +91-9000063740. He's also available on LinkedIn and actively maintains his GitHub portfolio.";
    }

    if (q.includes("project")) {
      return "Laxman has built impressive projects including CAMSLENS (Enterprise AI platform processing 80,000+ documents monthly), an AI-powered email automation system with 95% accuracy, and a real-time stock exchange platform supporting 100+ concurrent users.";
    }

    if (q.includes("skill") || q.includes("technology")) {
      return "Laxman is proficient in Java (Spring Boot), Python (Flask, FastAPI, ML libraries), JavaScript (React, Node.js), and cloud platforms (Google Cloud, AWS). He specializes in AI/ML with experience in Vertex AI, PyTorch, and computer vision technologies.";
    }

    if (q.includes("education") || q.includes("study")) {
      return "Laxman completed his dual degree (B.Tech + M.Tech) in Computer Science from IIT Delhi (2018-2024). He also served as a Teaching Assistant, mentoring over 300 undergraduate students in core CS concepts.";
    }

    if (q.includes("current") || q.includes("now") || q.includes("role")) {
      return "Currently, Laxman works as a Software Development Engineer at CAMS in Chennai, where he develops the CAMSLENS Enterprise GenAI platform and implements cutting-edge AI solutions for financial document processing.";
    }

    return "Laxman is a talented Software Development Engineer at CAMS with strong expertise in AI/ML and full-stack development. He has built multiple enterprise-level projects and brings valuable experience from IIT Delhi. Would you like to know more about his specific projects or technical skills?";
  };

  // Extract content from AI response (move this before handleUserMessage)
  const extractContent = (obj, depth = 0) => {
    if (depth > 5) return null;

    if (typeof obj === "string") return obj;
    if (!obj) return null;

    const patterns = [
      "content",
      "message.content",
      "result.message.content",
      "choices[0].message.content",
      "text",
      "response",
      "answer",
      "reply",
    ];

    for (const pattern of patterns) {
      const value = pattern.split(".").reduce((acc, key) => {
        if (key.includes("[")) {
          const [arrayKey, index] = key.split("[");
          const idx = parseInt(index.replace("]", ""));
          return acc?.[arrayKey]?.[idx];
        }
        return acc?.[key];
      }, obj);

      if (value && typeof value === "string") {
        return value;
      }
    }

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const extracted = extractContent(obj[key], depth + 1);
        if (extracted) return extracted;
      }
    }

    return null;
  };

  // Handle user message (use useCallback to memoize)
  const handleUserMessage = React.useCallback(
    async (value) => {
      if (!value.trim() || !isPuterReady) return;

      console.log("Processing question:", value);
      setLoading(true);
      setResponse("");
      setError("");
      setShowTypewriter(false);
      setLastQuestion(value);

      // Add user message to history
      const userMessage = {
        type: "user",
        message: value,
        timestamp: Date.now(),
      };
      setChatHistory((prev) => [...prev, userMessage]);

      try {
        const contextPrompt = `You are Laxman's portfolio assistant. Answer this question about Laxman based on his background:

${LAXMAN_PORTFOLIO_DATA}

Guidelines:
- Always respond in a professional, friendly, and confident tone.
- Keep answers concise: 2–3 sentences (50–120 words depending on question).
- If asked about projects, highlight impact, tech stack, and achievements.
- If asked about skills, give a practical, use-case oriented explanation.

Question: ${value}`;

        console.log("Sending AI request...");

        const aiResponse = await window.puter.ai.chat(contextPrompt, {
          model: "gpt-4o-mini",
          max_tokens: 200,
          temperature: 0.7,
        });

        console.log("Full AI Response:", aiResponse);

        const extractedContent = extractContent(aiResponse);

        if (extractedContent && extractedContent.trim()) {
          console.log("✅ Successfully extracted content:", extractedContent);
          setRawResponse(extractedContent);
          setShowTypewriter(true);
          setCurrentResponseId(Date.now());

          // Add AI response to history
          const aiMessage = {
            type: "ai",
            message: extractedContent,
            timestamp: Date.now(),
          };
          setChatHistory((prev) => [...prev, aiMessage]);
        } else {
          console.error("Could not extract content from:", aiResponse);
          const fallbackResponse = getFallbackResponse(value);
          setRawResponse(fallbackResponse);
          setShowTypewriter(true);
          setCurrentResponseId(Date.now());

          // Add fallback response to history
          const aiMessage = {
            type: "ai",
            message: fallbackResponse,
            timestamp: Date.now(),
          };
          setChatHistory((prev) => [...prev, aiMessage]);
        }
      } catch (err) {
        console.error("AI Error:", err);

        const fallbackResponse = getFallbackResponse(value);
        setRawResponse(fallbackResponse);
        setShowTypewriter(true);
        setCurrentResponseId(Date.now());

        // Add fallback response to history
        const aiMessage = {
          type: "ai",
          message: fallbackResponse,
          timestamp: Date.now(),
        };
        setChatHistory((prev) => [...prev, aiMessage]);
      } finally {
        setLoading(false);
      }
    },
    [isPuterReady]
  ); // Add isPuterReady as dependency

  // FIXED: Handle initial question with proper dependencies and timing
  useEffect(() => {
    if (
      initialQuestion &&
      initialQuestion.trim() &&
      isPuterReady &&
      !hasProcessedInitialQuestion
    ) {
      console.log("🚀 Auto-processing initial question:", initialQuestion);
      setInputValue(initialQuestion); // Set the input value
      setHasProcessedInitialQuestion(true); // Prevent multiple processing

      // Small delay to ensure everything is ready
      const timeoutId = setTimeout(() => {
        handleUserMessage(initialQuestion.trim());
      }, 500);

      return () => clearTimeout(timeoutId); // Cleanup timeout
    }
  }, [
    initialQuestion,
    isPuterReady,
    hasProcessedInitialQuestion,
    handleUserMessage,
  ]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Ctrl/Cmd + K to focus input
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }

      // Escape to clear input
      if (e.key === "Escape" && document.activeElement === inputRef.current) {
        setInputValue(""); // Use setInputValue instead of inputRef.current.value
      }

      // Ctrl/Cmd + L to clear history
      if ((e.ctrlKey || e.metaKey) && e.key === "l") {
        e.preventDefault();
        setChatHistory([]);
      }

      // Ctrl/Cmd + E to export chat
      if ((e.ctrlKey || e.metaKey) && e.key === "e") {
        e.preventDefault();
        exportChat();
      }

      // Ctrl/Cmd + H to toggle history
      if ((e.ctrlKey || e.metaKey) && e.key === "h") {
        e.preventDefault();
        setShowHistory((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [chatHistory]);

  // Export chat function
  const exportChat = () => {
    if (chatHistory.length === 0) {
      alert("No chat history to export");
      return;
    }

    const chatText =
      `Laxman's Portfolio AI Assistant Chat Export\n` +
      `Date: ${new Date().toLocaleString()}\n` +
      `${"=".repeat(50)}\n\n` +
      chatHistory
        .map(
          (item) =>
            `${item.type === "user" ? "👤 You" : "🤖 AI"}: ${item.message}\n` +
            `Time: ${new Date(item.timestamp).toLocaleTimeString()}\n` +
            `${"-".repeat(30)}\n`
        )
        .join("\n");

    const blob = new Blob([chatText], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `laxman-portfolio-chat-${Date.now()}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Clear chat history
  const clearHistory = () => {
    if (
      chatHistory.length > 0 &&
      window.confirm("Are you sure you want to clear chat history?")
    ) {
      setChatHistory([]);
      setResponse("");
      setError("");
      setHasProcessedInitialQuestion(false); // Reset initial question processing
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      await handleUserMessage(inputValue.trim());
      setInputValue(""); // Clear the controlled input
    }
  };

  const handleVoiceResult = (transcript) => {
    setInputValue(transcript); // Set input value first
    handleUserMessage(transcript);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion); // Set input value first
    handleUserMessage(suggestion);
  };

  const onTypewriterComplete = () => {
    setResponse(rawResponse);
    setShowTypewriter(false);
  };

  return (
    <AIContainer>
      <HeaderContainer>
        <div>
          <h4 style={{ margin: "0 0 5px 0", color: "#FFFFFF" }}>
            🤖 Ask me anything about Laxman!
          </h4>
          <p style={{ margin: "0", fontSize: "14px", color: "#FFFFFF" }}>
            I know all about him.
          </p>
        </div>
        <ControlButtons>
          <IconButton
            onClick={() => setShowHistory(!showHistory)}
            title="Toggle chat history (Ctrl+H)"
          >
            💬
            {chatHistory.length > 0 && <Badge>{chatHistory.length}</Badge>}
          </IconButton>
          <IconButton
            onClick={exportChat}
            disabled={chatHistory.length === 0}
            title="Export chat (Ctrl+E)"
          >
            📥
          </IconButton>
          <IconButton
            onClick={clearHistory}
            disabled={chatHistory.length === 0}
            title="Clear history (Ctrl+L)"
          >
            🗑️
          </IconButton>
        </ControlButtons>
      </HeaderContainer>

      {showHistory && <ChatHistory messages={chatHistory} />}

      <InputContainer>
        <AIInput
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={
            initialQuestion && !hasProcessedInitialQuestion
              ? `Processing: "${initialQuestion}"`
              : "Try: 'Who is Laxman?' or use voice input 🎤"
          }
          disabled={!isPuterReady || loading}
          onKeyDown={handleKeyDown}
          hasShortcut={true}
        />
        <VoiceInput
          onResult={handleVoiceResult}
          disabled={!isPuterReady || loading}
        />
      </InputContainer>

      {loading && <Typing />}

      {showTypewriter && rawResponse && (
        <AnimatedResponse>
          <TypewriterText
            text={rawResponse}
            onComplete={onTypewriterComplete}
            speed={25}
          />
        </AnimatedResponse>
      )}

      {response && !loading && !showTypewriter && (
        <AnimatedResponse>
          {response}
          <ResponseRating responseId={currentResponseId} />
        </AnimatedResponse>
      )}

      {error && !loading && <ErrorMessage>{error}</ErrorMessage>}

      {!loading && (response || error) && (
        <>
          <QuickActions lastQuestion={lastQuestion} />
          <SmartSuggestions
            lastQuestion={lastQuestion}
            onSuggestionClick={handleSuggestionClick}
          />
        </>
      )}

      {!isPuterReady && (
        <div
          style={{
            marginTop: "15px",
            padding: "12px",
            background: "rgba(59, 130, 246, 0.1)",
            borderRadius: "8px",
            color: "#1D4ED8",
            textAlign: "center",
          }}
        >
          🔄 Loading AI assistant...
        </div>
      )}

      <KeyboardShortcuts
        isOpen={showShortcuts}
        onClose={() => setShowShortcuts(false)}
      />

      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </AIContainer>
  );
};

export default AIAssistant;
