import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import styled, { keyframes, css, createGlobalStyle } from "styled-components";
import { getFunctions, httpsCallable } from "firebase/functions";
// ADD THIS LINE after your existing imports
import { EmailAgent } from "./EmailAgent";
import EmailFormModal from "./EmailFormModal";
import {
  ProactiveSuggestionsEngine,
  TaskOrchestrator,
  IntentPredictor,
  QuestionDecomposer,
  FollowUpGenerator,
  PreferenceLearner,
} from "./AgenticHelpers";
import {
  MemoryManager,
  AgentExecutor,
  getAgenticAIResponse,
  getFallbackResponse,
  setupRouteTracking,
  VoiceShortcuts,
  VisualAgent,
  APIUsageTracker,
} from "./VoiceAgentHelpers";
// Enhanced portfolio data (keeping your existing data)
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

=== MAJOR PROJECTS ===

1.  ENTERPRISE GENAI PLATFORM (2024 - Present)
   - Enterprise AI platform for CAMS processing 80,000+ documents monthly
   - Achieved 95% accuracy with CMEK-compliant storage
   - Implemented real-time RSS feed ingestion and ranking algorithms
   - Technologies: Vertex AI Gemini-flash 2.0, Agent Builder, Google Cloud Run, BigQuery

2. AI-POWERED FINANCIAL EMAIL AUTOMATION SYSTEM (2025)
   - FastAPI microservice using Large Language Models for email classification
   - Zero-shot learning with 95% accuracy for PAN, ARN, date extraction
   - Processes 1,000+ emails daily, reducing manual processing by 80%
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

=== CONTACT ===
Email: [Laxmankethavath5@gmail.com](mailto:Laxmankethavath5@gmail.com)
Phone: +91-9000063740
LinkedIn: [Professional Profile](https://linkedin.com/in/k-laxman)
GitHub: [Project Repository](https://github.com/Laxman824)
Portfolio: [Personal Website](https://k-laxman-portfolio.com)
Location: Chennai, Tamil Nadu, India
`;

// Global Styles with Enhanced Liquid Glass Design Tokens
const GlobalLiquidGlassStyles = createGlobalStyle`
  :root {
    /* === ENHANCED TAHOE 26 / LIQUID GLASS DESIGN TOKENS === */
    
    /* Glass Properties */
    --glass-blur-primary: 35px;
    --glass-blur-secondary: 20px;
    --glass-blur-minimal: 12px;
    --glass-saturation: 1.8;
    --glass-brightness: 1.1;
    
    /* Radius System */
    --radius-sm: 12px;
    --radius-md: 18px;
    --radius-lg: 24px;
    --radius-xl: 32px;
    --radius-full: 50%;
    
    /* Rim Highlights */
    --rim-opacity: 0.4;
    --rim-highlight: rgba(255, 255, 255, var(--rim-opacity));
    --rim-width: 1px;
    
    /* 3D Perspective System */
    --perspective-light: 1000px;
    --perspective-medium: 1500px;
    --perspective-strong: 2000px;
    
    /* 3D Transform Values */
    --transform-depth-light: 2px;
    --transform-depth-medium: 4px;
    --transform-depth-strong: 8px;
    
    /* Adaptive Tinting (will be set by JS) */
    --tint-primary: rgba(59, 130, 246, 0.1);
    --tint-secondary: rgba(59, 130, 246, 0.05);
    --tint-accent: rgba(59, 130, 246, 0.15);
    
    /* Glass Layers */
    --glass-surface: rgba(255, 255, 255, 0.15);
    --glass-surface-hover: rgba(255, 255, 255, 0.22);
    --glass-surface-active: rgba(255, 255, 255, 0.28);
    
    /* Enhanced Shadows for 3D */
    --shadow-soft: 0 8px 32px rgba(0, 0, 0, 0.1);
    --shadow-medium: 0 16px 48px rgba(0, 0, 0, 0.15);
    --shadow-strong: 0 24px 64px rgba(0, 0, 0, 0.2);
    --shadow-3d-light: 0 4px 16px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05);
    --shadow-3d-medium: 0 8px 24px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1);
    --shadow-3d-strong: 0 12px 32px rgba(0, 0, 0, 0.2), 0 6px 16px rgba(0, 0, 0, 0.15);
    
    /* Animation Tokens */
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
    --transition-gentle: all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
    --transition-spring: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    --transition-3d: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1), box-shadow 0.3s ease;
    
    /* Performance Modes */
    --motion-reduce: 0;
    --backdrop-support: 1;
    
    /* Enhanced Button Color Themes */
    --btn-mic-gradient: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
    --btn-auto-gradient: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
    --btn-test-gradient: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
    --btn-3d-gradient: linear-gradient(135deg, #10B981 0%, #059669 100%);
    
    --btn-mic-glow: rgba(239, 68, 68, 0.5);
    --btn-auto-glow: rgba(59, 130, 246, 0.5);
    --btn-test-glow: rgba(139, 92, 246, 0.5);
    --btn-3d-glow: rgba(16, 185, 129, 0.5);
  }

  /* Accessibility: Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    :root {
      --motion-reduce: 1;
      --transition-smooth: none;
      --transition-gentle: none;
      --transition-spring: none;
      --transition-3d: none;
    }
  }

  /* Flat Mode for Performance */
  .flat-mode {
    --glass-blur-primary: 40px;
    --glass-blur-secondary: 20px;
    --glass-blur-minimal: 16px;
    --backdrop-support: 0;
    --glass-surface: rgba(255, 255, 255, 0.15);
    --glass-surface-hover: rgba(255, 255, 255, 0.2);
    --glass-surface-active: rgba(255, 255, 255, 0.25);
    --shadow-3d-light: var(--shadow-soft);
    --shadow-3d-medium: var(--shadow-medium);
    --shadow-3d-strong: var(--shadow-strong);
  }

  /* Fallback for Non-Supporting Browsers */
  @supports not (backdrop-filter: blur(10px)) {
    :root {
      --backdrop-support: 0;
      --glass-surface: rgba(30, 41, 59, 0.9);
      --glass-surface-hover: rgba(30, 41, 59, 0.95);
      --glass-surface-active: rgba(30, 41, 59, 1);
    }
  }
`;

// Hero Image Tint Sampler Module
const HeroTintSampler = {
  init(heroSelector = ".hero-image", options = {}) {
    const {
      sampleSize = 10,
      saturationBoost = 0.3,
      opacityRange = [0.05, 0.15],
      fallbackTint = "rgba(59, 130, 246, 0.1)",
    } = options;

    try {
      const heroElement = document.querySelector(heroSelector);
      if (!heroElement) {
        this.setFallbackTint(fallbackTint);
        return;
      }

      // Handle different element types
      let imageSrc = null;
      if (heroElement.tagName === "IMG") {
        imageSrc = heroElement.src;
      } else {
        const bgImage = getComputedStyle(heroElement).backgroundImage;
        const match = bgImage.match(
          /urlKATEX_INLINE_OPEN["']?([^"']+)["']?KATEX_INLINE_CLOSE/
        );
        imageSrc = match ? match[1] : null;
      }

      if (!imageSrc) {
        this.setFallbackTint(fallbackTint);
        return;
      }

      this.sampleImageColors(
        imageSrc,
        sampleSize,
        saturationBoost,
        opacityRange,
        fallbackTint
      );
    } catch (error) {
      console.warn("Hero tint sampling failed:", error);
      this.setFallbackTint(fallbackTint);
    }
  },

  sampleImageColors(
    imageSrc,
    sampleSize,
    saturationBoost,
    opacityRange,
    fallbackTint
  ) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.crossOrigin = "anonymous"; // Handle CORS

    img.onload = () => {
      try {
        canvas.width = sampleSize;
        canvas.height = sampleSize;
        ctx.drawImage(img, 0, 0, sampleSize, sampleSize);

        const imageData = ctx.getImageData(0, 0, sampleSize, sampleSize);
        const dominantColor = this.getDominantColor(imageData.data);
        const tintColors = this.generateTintVariations(
          dominantColor,
          saturationBoost,
          opacityRange
        );

        this.applyTintColors(tintColors);
      } catch (error) {
        console.warn("Canvas processing failed:", error);
        this.setFallbackTint(fallbackTint);
      }
    };

    img.onerror = () => {
      console.warn("Image loading failed for tint sampling");
      this.setFallbackTint(fallbackTint);
    };

    img.src = imageSrc;
  },

  getDominantColor(imageData) {
    const colorCounts = {};

    for (let i = 0; i < imageData.length; i += 4) {
      const r = imageData[i];
      const g = imageData[i + 1];
      const b = imageData[i + 2];
      const alpha = imageData[i + 3];

      if (alpha < 128) continue; // Skip transparent pixels

      // Bucket colors to reduce noise
      const bucketedColor = `${Math.floor(r / 32) * 32},${
        Math.floor(g / 32) * 32
      },${Math.floor(b / 32) * 32}`;
      colorCounts[bucketedColor] = (colorCounts[bucketedColor] || 0) + 1;
    }

    // Find most frequent color
    let dominantColor = "59,130,246"; // Fallback blue
    let maxCount = 0;

    Object.entries(colorCounts).forEach(([color, count]) => {
      if (count > maxCount) {
        maxCount = count;
        dominantColor = color;
      }
    });

    return dominantColor.split(",").map(Number);
  },

  generateTintVariations([r, g, b], saturationBoost, opacityRange) {
    // Convert to HSL for better color manipulation
    const [h, s, l] = this.rgbToHsl(r, g, b);

    // Boost saturation and adjust lightness
    const boostedS = Math.min(1, s + saturationBoost);
    const adjustedL = Math.max(0.3, Math.min(0.7, l));

    // Convert back to RGB
    const [newR, newG, newB] = this.hslToRgb(h, boostedS, adjustedL);

    return {
      primary: `rgba(${newR}, ${newG}, ${newB}, ${opacityRange[1]})`,
      secondary: `rgba(${newR}, ${newG}, ${newB}, ${opacityRange[0]})`,
      accent: `rgba(${newR}, ${newG}, ${newB}, ${opacityRange[1] * 1.5})`,
    };
  },

  rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return [h, s, l];
  },

  hslToRgb(h, s, l) {
    let r, g, b;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  },

  applyTintColors({ primary, secondary, accent }) {
    const root = document.documentElement;
    root.style.setProperty("--tint-primary", primary);
    root.style.setProperty("--tint-secondary", secondary);
    root.style.setProperty("--tint-accent", accent);
  },

  setFallbackTint(fallbackTint) {
    const root = document.documentElement;
    root.style.setProperty("--tint-primary", fallbackTint);
    root.style.setProperty(
      "--tint-secondary",
      fallbackTint.replace(/[\d.]+KATEX_INLINE_CLOSE$/, "0.05)")
    );
    root.style.setProperty(
      "--tint-accent",
      fallbackTint.replace(/[\d.]+KATEX_INLINE_CLOSE$/, "0.15)")
    );
  },
};

// Performance Detection and Flat Mode Manager
const PerformanceManager = {
  init() {
    if (this.shouldUseFlatMode()) {
      document.documentElement.classList.add("flat-mode");
    }
  },

  shouldUseFlatMode() {
    // Check for explicit flat mode preference
    if (localStorage.getItem("prefer-flat-mode") === "true") {
      return true;
    }

    // Performance heuristics
    const memoryLimit = 4; // GB
    const cpuCoreLimit = 4;

    try {
      // Memory check
      if (navigator.deviceMemory && navigator.deviceMemory < memoryLimit) {
        return true;
      }

      // CPU check
      if (
        navigator.hardwareConcurrency &&
        navigator.hardwareConcurrency < cpuCoreLimit
      ) {
        return true;
      }

      // Reduced motion preference
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return true;
      }

      return false;
    } catch (error) {
      console.warn("Performance detection failed:", error);
      return false; // Default to full experience
    }
  },

  toggleFlatMode() {
    const isFlat = document.documentElement.classList.toggle("flat-mode");
    localStorage.setItem("prefer-flat-mode", isFlat.toString());
    return isFlat;
  },
};

// ============= ENHANCED LIQUID GLASS KEYFRAMES =============
const gentleFloat = keyframes`
  0%, 100% { 
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-8px) scale(1.02);
  }
`;

const liquidShimmer = keyframes`
  0%, 100% { 
    background-position: 0% 50%;
    opacity: 0.6;
  }
  50% {
    background-position: 100% 50%;
    opacity: 1;
  }
`;

const glassRipple = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.4;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
`;

const subtleGlow = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 30px var(--tint-primary),
      0 0 60px var(--tint-primary),
      var(--shadow-3d-medium);
  }
  50% {
    box-shadow: 
      0 0 50px var(--tint-accent),
      0 0 80px var(--tint-accent),
      var(--shadow-3d-strong);
  }
`;

const liquidWave = keyframes`
  0%, 100% { 
    height: 4px;
    opacity: 0.6;
    transform: rotateX(0deg);
  }
  50% { 
    height: 28px;
    opacity: 1;
    transform: rotateX(2deg);
  }
`;

const enhanced3DFloat = keyframes`
  0%, 100% {
    transform: perspective(var(--perspective-medium)) rotateX(0deg) rotateY(0deg) translateZ(0px);
  }
  25% {
    transform: perspective(var(--perspective-medium)) rotateX(1deg) rotateY(-1deg) translateZ(2px);
  }
  50% {
    transform: perspective(var(--perspective-medium)) rotateX(0deg) rotateY(1deg) translateZ(4px);
  }
  75% {
    transform: perspective(var(--perspective-medium)) rotateX(-1deg) rotateY(0deg) translateZ(2px);
  }
`;

const listeningGlow = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.9;
  }
`;
const thinkingGlow = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
`;

const speakingGlow = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  25% {
    transform: scale(1.1);
    opacity: 0.9;
  }
  75% {
    transform: scale(1.2);
    opacity: 0.8;
  }
`;

const idleGlow = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.7;
  }
`;

// NEW: Enhanced Button Animations
const buttonPulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const buttonGlow = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 5px currentColor,
      0 0 15px currentColor,
      var(--shadow-3d-light);
  }
  50% {
    box-shadow: 
      0 0 10px currentColor,
      0 0 25px currentColor,
      0 0 35px currentColor,
      var(--shadow-3d-medium);
  }
`;

const iconRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const iconBounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
`;

// ============= ENHANCED LIQUID GLASS STYLED COMPONENTS =============

const VoiceContainer = styled.div`
  position: fixed;
  bottom: ${(props) =>
    props.isMobile ? (props.isKeyboardOpen ? "10px" : "20px") : "60px"};
  left: ${(props) => (props.isMobile ? "15px" : "30px")};
  width: ${(props) => (props.isMobile ? "calc(100vw - 30px)" : "320px")};
  max-width: ${(props) => (props.isMobile ? "340px" : "360px")};

  /* === ENHANCED 3D GLASS PANEL === */
  background: linear-gradient(
    145deg,
    var(--glass-surface) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    var(--glass-surface) 100%
  );

  backdrop-filter: ${(props) =>
    props.flatMode
      ? "none"
      : "blur(var(--glass-blur-primary)) saturate(var(--glass-saturation)) brightness(var(--glass-brightness))"};

  border-radius: var(--radius-xl);
  padding: ${(props) => (props.isMobile ? "20px 16px" : "28px 24px")};

  /* Enhanced 3D Perspective */
  transform-style: ${(props) => (props.flatMode ? "flat" : "preserve-3d")};
  perspective: var(--perspective-medium);

  /* Tahoe 26 Rim Highlight */
  border: var(--rim-width) solid var(--rim-highlight);

  /* Enhanced 3D Layered Shadows */
  box-shadow: var(--shadow-3d-strong), inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1), 0 0 0 1px var(--tint-primary);

  /* Enhanced 3D Animation */
  animation: ${(props) =>
    props.motionReduce
      ? "none"
      : css`
          ${props.isClosing ? "none" : enhanced3DFloat} 12s ease-in-out infinite
        `};

  transition: var(--transition-3d);
  z-index: 1000;

  /* Mobile Specific Optimizations */
  ${(props) =>
    props.isMobile &&
    css`
      max-height: 60vh;
      overflow: hidden;

      @media (max-height: 600px) {
        bottom: 10px;
        max-height: 50vh;
      }

      @media (orientation: landscape) and (max-height: 500px) {
        bottom: 5px;
        max-height: 45vh;
        padding: 16px 12px;
      }
    `}

  /* Desktop 3D Hover Effects */
  ${(props) =>
    !props.isMobile &&
    css`
      &:hover {
        transform: perspective(var(--perspective-medium)) rotateX(1deg)
          rotateY(-1deg) translateZ(8px);
        box-shadow: var(--shadow-3d-strong), 0 0 60px var(--tint-accent),
          inset 0 2px 4px rgba(255, 255, 255, 0.3);
      }
    `}
  
  /* Accessibility */
  @media (prefers-contrast: high) {
    background: rgba(0, 0, 0, 0.9);
    border-color: rgba(255, 255, 255, 0.8);
  }

  /* Enhanced Tint Integration with 3D depth */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 30% 20%,
      var(--tint-accent) 0%,
      transparent 50%
    );
    border-radius: inherit;
    pointer-events: none;
    opacity: 0.3;
    transform: translateZ(-1px);
  }
`;

const VoiceAvatar = styled.div`
  width: ${(props) => (props.isMobile ? "70px" : "90px")};
  height: ${(props) => (props.isMobile ? "70px" : "90px")};
  border-radius: var(--radius-full);

  /* Enhanced 3D Background */
  background: ${(props) => {
    if (props.disabled)
      return "linear-gradient(145deg, rgba(107, 114, 128, 0.4), rgba(75, 85, 99, 1.0))";
    if (props.state === "listening")
      return "linear-gradient(145deg, rgba(34, 197, 94, 0.8), rgba(16, 185, 129, 1.0))";
    if (props.state === "speaking")
      return "linear-gradient(145deg, rgba(239, 68, 68, 0.8), rgba(220, 38, 38, 1.0))";
    if (props.state === "thinking")
      return "linear-gradient(145deg, rgba(245, 158, 11, 0.8), rgba(217, 119, 6, 1.0))";
    return "linear-gradient(145deg, var(--tint-accent), var(--tint-primary))";
  }};

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => (props.isMobile ? "28px" : "36px")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 0 auto ${(props) => (props.isMobile ? "16px" : "24px")};

  /* Enhanced 3D Properties */
  transform-style: ${(props) => (props.flatMode ? "flat" : "preserve-3d")};
  perspective: var(--perspective-light);

  /* Tahoe 26 Rim */
  border: var(--rim-width) solid var(--rim-highlight);

  /* Enhanced 3D Shadows */
  box-shadow: var(--shadow-3d-medium), inset 0 2px 4px rgba(255, 255, 255, 0.2),
    0 0 0 1px var(--tint-secondary);

  transition: var(--transition-3d);
  position: relative;
  overflow: visible;

  /* Enhanced Multi-State Glow Effects - Layer 1 (Inner) */
  &::before {
    content: "";
    position: absolute;
    inset: -25px;
    background: ${(props) => {
      if (props.state === "listening")
        return "radial-gradient(circle, rgba(34, 197, 94, 0.8) 0%, rgba(34, 197, 94, 0.4) 40%, transparent 70%)";
      if (props.state === "thinking")
        return "radial-gradient(circle, rgba(245, 158, 11, 0.8) 0%, rgba(245, 158, 11, 0.4) 40%, transparent 70%)";
      if (props.state === "speaking")
        return "radial-gradient(circle, rgba(239, 68, 68, 0.8) 0%, rgba(239, 68, 68, 0.4) 40%, transparent 70%)";
      if (props.disabled)
        return "radial-gradient(circle, rgba(107, 114, 128, 0.6) 0%, rgba(107, 114, 128, 0.3) 40%, transparent 70%)";
      return "radial-gradient(circle, rgba(59, 130, 246, 0.7) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 70%)";
    }};
    border-radius: var(--radius-full);
    pointer-events: none;
    z-index: -1;
    transform: scale(
      ${(props) => {
        if (props.state === "listening")
          return 1 + (props.voiceIntensity || 0) * 0.6;
        if (props.state === "thinking") return 1.1;
        if (props.state === "speaking") return 1.2;
        return 1;
      }}
    );
    opacity: ${(props) => {
      if (props.state === "listening")
        return 0.8 + (props.voiceIntensity || 0) * 0.4;
      if (props.state === "thinking") return 0.7;
      if (props.state === "speaking") return 0.6;
      if (props.disabled) return 0.3;
      return 0.5;
    }};
    transition: all 0.3s ease;
    animation: ${(props) => {
      if (props.motionReduce) return "none";
      if (props.state === "listening")
        return css`
          ${listeningGlow} 2s ease-in-out infinite
        `;
      if (props.state === "thinking")
        return css`
          ${thinkingGlow} 1.5s ease-in-out infinite
        `;
      if (props.state === "speaking")
        return css`
          ${speakingGlow} 0.8s ease-in-out infinite
        `;
      if (!props.disabled)
        return css`
          ${idleGlow} 4s ease-in-out infinite
        `;
      return "none";
    }};
  }

  /* Enhanced Multi-State Glow Effects - Layer 2 (Middle) */
  &::after {
    content: "";
    position: absolute;
    inset: -45px;
    background: ${(props) => {
      if (props.state === "listening")
        return "radial-gradient(circle, rgba(34, 197, 94, 0.5) 0%, rgba(34, 197, 94, 0.2) 30%, transparent 60%)";
      if (props.state === "thinking")
        return "radial-gradient(circle, rgba(245, 158, 11, 0.5) 0%, rgba(245, 158, 11, 0.2) 30%, transparent 60%)";
      if (props.state === "speaking")
        return "radial-gradient(circle, rgba(239, 68, 68, 0.5) 0%, rgba(239, 68, 68, 0.2) 30%, transparent 60%)";
      if (props.disabled)
        return "radial-gradient(circle, rgba(107, 114, 128, 0.4) 0%, rgba(107, 114, 128, 0.1) 30%, transparent 60%)";
      return "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 30%, transparent 60%)";
    }};
    border-radius: var(--radius-full);
    pointer-events: none;
    z-index: -2;
    transform: scale(
      ${(props) => {
        if (props.state === "listening")
          return 1 + (props.voiceIntensity || 0) * 0.4;
        if (props.state === "thinking") return 1.2;
        if (props.state === "speaking") return 1.3;
        return 1;
      }}
    );
    opacity: ${(props) => {
      if (props.state === "listening")
        return 0.6 + (props.voiceIntensity || 0) * 0.3;
      if (props.state === "thinking") return 0.5;
      if (props.state === "speaking") return 0.4;
      if (props.disabled) return 0.2;
      return 0.3;
    }};
    transition: all 0.4s ease;
    animation: ${(props) => {
      if (props.motionReduce) return "none";
      if (props.state === "listening")
        return css`
          ${listeningGlow} 3s ease-in-out infinite reverse
        `;
      if (props.state === "thinking")
        return css`
          ${thinkingGlow} 2s ease-in-out infinite reverse
        `;
      if (props.state === "speaking")
        return css`
          ${speakingGlow} 1.2s ease-in-out infinite reverse
        `;
      if (!props.disabled)
        return css`
          ${idleGlow} 5s ease-in-out infinite reverse
        `;
      return "none";
    }};
  }

  /* Enhanced 3D Hover Effects */
  &:hover:not(:disabled) {
    transform: perspective(var(--perspective-light)) rotateX(-3deg)
      rotateY(3deg) translateZ(6px) scale(1.05);
    box-shadow: var(--shadow-3d-strong),
      inset 0 3px 6px rgba(255, 255, 255, 0.3), 0 0 0 2px var(--tint-accent),
      0 0 50px var(--tint-primary), 0 0 80px var(--tint-primary);
  }

  &:active:not(:disabled) {
    transform: perspective(var(--perspective-light)) rotateX(-1deg)
      rotateY(1deg) translateZ(2px) scale(1.02);
  }
`;

const VoiceWaves = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.isMobile ? "3px" : "5px")};
  height: ${(props) => (props.isMobile ? "30px" : "40px")};
  margin: ${(props) => (props.isMobile ? "12px 0" : "20px 0")};
  opacity: ${(props) =>
    props.state === "listening" || props.state === "speaking" ? 1 : 0};
  transition: var(--transition-smooth);

  /* Enhanced 3D Perspective */
  perspective: var(--perspective-light);
  transform-style: ${(props) => (props.flatMode ? "flat" : "preserve-3d")};

  .wave-bar {
    width: ${(props) => (props.isMobile ? "3px" : "4px")};
    background: ${(props) => {
      if (props.state === "listening")
        return "linear-gradient(to top, #22C55E, #10B981)";
      if (props.state === "speaking")
        return "linear-gradient(to top, #EF4444, #F87171)";
      return "linear-gradient(to top, var(--tint-accent), var(--tint-primary))";
    }};
    border-radius: var(--radius-sm);

    /* Enhanced 3D Shadow for Depth */
    box-shadow: var(--shadow-3d-light), inset 0 1px 0 rgba(255, 255, 255, 0.3);

    /* Enhanced 3D Animation */
    animation: ${(props) =>
      props.motionReduce
        ? "none"
        : css`
            ${liquidWave} 1.5s ease-in-out infinite
          `};

    transform-origin: bottom center;
    transform-style: preserve-3d;

    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-delay: 0.3s;
    }
    &:nth-child(5) {
      animation-delay: 0.4s;
    }
    &:nth-child(6) {
      animation-delay: 0.3s;
    }
    &:nth-child(7) {
      animation-delay: 0.2s;
    }
    &:nth-child(8) {
      animation-delay: 0.1s;
    }
  }
`;

// ENHANCED DYNAMIC VOICE BUTTON
const VoiceButton = styled.button`
  width: ${(props) => (props.isMobile ? "52px" : "56px")};
  height: ${(props) => (props.isMobile ? "52px" : "56px")};
  border-radius: var(--radius-full);
  border: none;
  position: relative;
  overflow: hidden;

  /* Dynamic gradient backgrounds based on button type */
  background: ${(props) => {
    if (props.disabled) return "linear-gradient(145deg, #6B7280, #4B5563)";

    switch (props.buttonType) {
      case "mic":
        return props.active
          ? "linear-gradient(145deg, #DC2626, #B91C1C)"
          : "var(--btn-mic-gradient)";
      case "auto":
        return props.active
          ? "linear-gradient(145deg, #1E40AF, #1E3A8A)"
          : "var(--btn-auto-gradient)";
      case "test":
        return props.active
          ? "linear-gradient(145deg, #6D28D9, #5B21B6)"
          : "var(--btn-test-gradient)";
      case "3d":
        return props.active
          ? "linear-gradient(145deg, #059669, #047857)"
          : "var(--btn-3d-gradient)";
      default:
        return "linear-gradient(145deg, var(--glass-surface), rgba(255, 255, 255, 0.1))";
    }
  }};

  color: white;
  font-size: ${(props) => (props.isMobile ? "18px" : "20px")};
  font-weight: 700;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  /* Enhanced 3D Properties */
  transform-style: ${(props) => (props.flatMode ? "flat" : "preserve-3d")};
  perspective: var(--perspective-light);

  /* Dynamic shadow color based on button type */
  box-shadow: ${(props) => {
    const glowColor =
      props.buttonType === "mic"
        ? "var(--btn-mic-glow)"
        : props.buttonType === "auto"
        ? "var(--btn-auto-glow)"
        : props.buttonType === "test"
        ? "var(--btn-test-glow)"
        : props.buttonType === "3d"
        ? "var(--btn-3d-glow)"
        : "rgba(255, 255, 255, 0.2)";

    return `
      0 4px 12px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 2px rgba(255, 255, 255, 0.2),
      ${props.active ? `0 0 20px ${glowColor}` : ""}
    `;
  }};

  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  /* Animated inner content */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Active state pulsing animation */
  ${(props) =>
    props.active &&
    !props.motionReduce &&
    css`
      animation: ${buttonPulse} 2s ease-in-out infinite,
        ${buttonGlow} 3s ease-in-out infinite;
    `}

  /* Icon container with animation */
  .icon-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;

    ${(props) =>
      props.active &&
      !props.motionReduce &&
      css`
        animation: ${props.buttonType === "auto" ? iconRotate : iconBounce}
          ${props.buttonType === "auto" ? "4s" : "2s"} ease-in-out infinite;
      `}
  }

  /* Dynamic SVG icon based on button type */
  .icon-svg {
    width: ${(props) => (props.isMobile ? "22px" : "24px")};
    height: ${(props) => (props.isMobile ? "22px" : "24px")};
    fill: currentColor;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }

  /* Gradient overlay for depth */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
    border-radius: inherit;
    pointer-events: none;
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }

  /* Shimmer effect on hover */
  &::after {
    content: "";
    position: absolute;
    inset: -50%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
    transform: translateX(-100%) rotate(45deg);
    transition: transform 0.6s ease;
  }

  /* Enhanced hover effects */
  &:hover:not(:disabled) {
    transform: perspective(var(--perspective-light)) rotateX(-5deg)
      rotateY(5deg) translateZ(4px) scale(1.08);

    box-shadow: ${(props) => {
      const glowColor =
        props.buttonType === "mic"
          ? "var(--btn-mic-glow)"
          : props.buttonType === "auto"
          ? "var(--btn-auto-glow)"
          : props.buttonType === "test"
          ? "var(--btn-test-glow)"
          : props.buttonType === "3d"
          ? "var(--btn-3d-glow)"
          : "rgba(255, 255, 255, 0.3)";

      return `
        0 8px 24px rgba(0, 0, 0, 0.2),
        0 0 0 2px rgba(255, 255, 255, 0.2),
        inset 0 2px 4px rgba(255, 255, 255, 0.3),
        0 0 40px ${glowColor}
      `;
    }};

    .icon-wrapper {
      transform: scale(1.1);
    }

    &::before {
      opacity: 0.8;
    }

    &::after {
      transform: translateX(100%) rotate(45deg);
    }
  }

  /* Active press effect */
  &:active:not(:disabled) {
    transform: perspective(var(--perspective-light)) rotateX(-2deg)
      rotateY(2deg) translateZ(1px) scale(1.02);
  }

  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    filter: grayscale(0.8);

    &::before,
    &::after {
      display: none;
    }
  }
`;

// Custom SVG Icons Component
const ButtonIcon = ({ type, ...props }) => {
  const icons = {
    mic: (
      <svg viewBox="0 0 24 24" className="icon-svg" {...props}>
        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
      </svg>
    ),
    stop: (
      <svg viewBox="0 0 24 24" className="icon-svg" {...props}>
        <rect x="6" y="6" width="12" height="12" rx="2" />
      </svg>
    ),
    auto: (
      <svg viewBox="0 0 24 24" className="icon-svg" {...props}>
        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
      </svg>
    ),
    test: (
      <svg viewBox="0 0 24 24" className="icon-svg" {...props}>
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
      </svg>
    ),
    "3d": (
      <svg viewBox="0 0 24 24" className="icon-svg" {...props}>
        <path d="M7 19h10V4H7v15zm2-8h6v1.5H9V11z" />
        <path d="M21 7h-2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v4H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h2c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z" />
      </svg>
    ),
    flat: (
      <svg viewBox="0 0 24 24" className="icon-svg" {...props}>
        <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm2 0h14v14H5V5z" />
      </svg>
    ),
  };

  return icons[type] || icons.mic;
};

const InterimText = styled.div`
  background: linear-gradient(
    135deg,
    rgba(34, 197, 94, 0.1) 0%,
    rgba(16, 185, 129, 0.05) 100%
  );

  backdrop-filter: ${(props) =>
    props.flatMode
      ? "none"
      : "blur(var(--glass-blur-secondary)) saturate(var(--glass-saturation))"};

  color: #22c55e;
  padding: ${(props) => (props.isMobile ? "12px 16px" : "16px 20px")};
  border-radius: var(--radius-lg);
  font-size: ${(props) => (props.isMobile ? "12px" : "13px")};
  text-align: center;
  margin: ${(props) => (props.isMobile ? "12px 0" : "16px 0")};

  /* Enhanced 3D Properties */
  transform-style: ${(props) => (props.flatMode ? "flat" : "preserve-3d")};

  /* Tahoe 26 Rim */
  border: var(--rim-width) solid rgba(34, 197, 94, var(--rim-opacity));

  /* Enhanced 3D Shadows */
  box-shadow: var(--shadow-3d-light), inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 0 0 1px rgba(34, 197, 94, 0.2);

  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: ${(props) =>
    props.show
      ? "translateY(0) translateZ(0)"
      : "translateY(20px) translateZ(-2px)"};
  transition: var(--transition-3d);

  font-style: italic;
  font-weight: 500;
  line-height: 1.4;

  /* Enhanced Contrast for Accessibility */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

  @media (prefers-contrast: high) {
    background: rgba(34, 197, 94, 0.2);
    color: #fff;
    border-color: #22c55e;
  }
`;

const NoticeCard = styled.div`
  position: fixed;
  top: ${(props) => (props.isMobile ? "15px" : "30px")};
  right: ${(props) => (props.isMobile ? "15px" : "30px")};
  left: ${(props) => (props.isMobile ? "15px" : "auto")};
  max-width: ${(props) => (props.isMobile ? "none" : "350px")};

  background: ${(props) => {
    const baseOpacity = props.flatMode ? 0.95 : 0.15;
    if (props.type === "error") return `rgba(239, 68, 68, ${baseOpacity})`;
    if (props.type === "warning") return `rgba(245, 158, 11, ${baseOpacity})`;
    if (props.type === "success") return `rgba(34, 197, 94, ${baseOpacity})`;
    return `rgba(59, 130, 246, ${baseOpacity})`;
  }};

  backdrop-filter: ${(props) =>
    props.flatMode
      ? "none"
      : "blur(var(--glass-blur-secondary)) saturate(var(--glass-saturation))"};

  color: ${(props) =>
    props.theme?.text || "#ffffff"}; /* Theme-aware text color */
  padding: ${(props) => (props.isMobile ? "16px 20px" : "20px 24px")};
  border-radius: var(--radius-lg);

  /* Enhanced 3D Properties */
  transform-style: ${(props) => (props.flatMode ? "flat" : "preserve-3d")};

  /* Tahoe 26 Rim */
  border: var(--rim-width) solid var(--rim-highlight);

  /* Enhanced 3D Layered Shadows */
  box-shadow: var(--shadow-3d-strong), inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 0 0 1px
      ${(props) => {
        if (props.type === "error") return "rgba(239, 68, 68, 0.3)";
        if (props.type === "warning") return "rgba(245, 158, 11, 0.3)";
        if (props.type === "success") return "rgba(34, 197, 94, 0.3)";
        return "rgba(59, 130, 246, 0.3)";
      }};

  z-index: 1001;
  transition: var(--transition-3d);

  .notice-title {
    font-weight: 700;
    margin-bottom: 6px;
    font-size: ${(props) => (props.isMobile ? "14px" : "15px")};
    text-shadow: ${(props) =>
      props.theme?.name === "light"
        ? "0 0 8px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(255, 255, 255, 0.5)"
        : "0 0 8px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)"};
    color: ${(props) => props.theme?.text || "#ffffff"};
  }

  .notice-content {
    font-weight: 400;
    font-size: ${(props) => (props.isMobile ? "12px" : "13px")};
    opacity: 0.95;
    line-height: 1.5;
    text-shadow: ${(props) =>
      props.theme?.name === "light"
        ? "0 0 6px rgba(255, 255, 255, 0.7), 0 1px 2px rgba(255, 255, 255, 0.4)"
        : "0 0 6px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3)"};
    color: ${(props) => {
      return props.theme?.name === "light"
        ? "rgba(55, 65, 81, 0.9)"
        : "rgba(255, 255, 255, 0.8)";
    }};
  }

  /* Enhanced Contrast for Accessibility */
  @media (prefers-contrast: high) {
    background: ${(props) => {
      if (props.type === "error") return "rgba(239, 68, 68, 0.95)";
      if (props.type === "warning") return "rgba(245, 158, 11, 0.95)";
      if (props.type === "success") return "rgba(34, 197, 94, 0.95)";
      return "rgba(59, 130, 246, 0.95)";
    }};
    border-width: 2px;
    color: white;

    .notice-title,
    .notice-content {
      color: white;
    }
  }
`;

const VoiceStatus = styled.div`
  text-align: center;
  margin-bottom: ${(props) => (props.isMobile ? "16px" : "24px")};

  /* Enhanced 3D Properties */
  transform-style: ${(props) => (props.flatMode ? "flat" : "preserve-3d")};

  .status-title {
    font-size: ${(props) => (props.isMobile ? "16px" : "18px")};
    font-weight: 700;
    margin-bottom: 6px;
    letter-spacing: 0.5px;

    /* Theme-aware text color */
    color: ${(props) => props.theme?.text || "#ffffff"};
    font-weight: 800;
    text-shadow: ${(props) =>
      props.theme?.name === "light"
        ? "0 0 8px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(255, 255, 255, 0.5)"
        : "0 0 8px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)"};
    transform: translateZ(1px);
  }

  .status-subtitle {
    font-size: ${(props) => (props.isMobile ? "11px" : "12px")};
    font-weight: 400;
    line-height: 1.4;

    /* Theme-aware text color with opacity */
    color: ${(props) => {
      const baseColor = props.theme?.text || "#ffffff";
      return props.theme?.name === "light"
        ? "rgba(55, 65, 81, 0.9)"
        : "rgba(255, 255, 255, 0.8)";
    }};
    font-weight: 600;
    text-shadow: ${(props) =>
      props.theme?.name === "light"
        ? "0 0 6px rgba(255, 255, 255, 0.7), 0 1px 2px rgba(255, 255, 255, 0.4)"
        : "0 0 6px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3)"};
    transform: translateZ(0.5px);
  }
`;

const VoiceControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.isMobile ? "14px" : "18px")};
  margin-top: ${(props) => (props.isMobile ? "18px" : "24px")};

  /* Enhanced 3D Container */
  transform-style: ${(props) => (props.flatMode ? "flat" : "preserve-3d")};
`;

const ButtonRow = styled.div`
  display: flex;
  gap: ${(props) => (props.isMobile ? "14px" : "18px")};
  justify-content: center;

  /* Enhanced 3D Row */
  transform-style: ${(props) => (props.flatMode ? "flat" : "preserve-3d")};
`;

const ButtonLabel = styled.div`
  font-size: ${(props) => (props.isMobile ? "11px" : "12px")};
  color: ${(props) => props.theme?.text || "#ffffff"}; /* Theme-aware color */
  text-align: center;
  margin-top: ${(props) => (props.isMobile ? "6px" : "8px")};
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 1.3;
  text-shadow: ${(props) =>
    props.theme?.name === "light"
      ? "0 0 6px rgba(255, 255, 255, 0.7), 0 1px 2px rgba(255, 255, 255, 0.4)"
      : "0 0 6px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3)"};
  transition: all 0.3s ease;

  /* Semi-transparent background pill with theme awareness */
  background: linear-gradient(
    145deg,
    ${(props) =>
      props.theme?.name === "light"
        ? "rgba(255, 255, 255, 0.3)"
        : "rgba(255, 255, 255, 0.1)"},
    ${(props) =>
      props.theme?.name === "light"
        ? "rgba(255, 255, 255, 0.15)"
        : "rgba(255, 255, 255, 0.05)"}
  );
  padding: ${(props) => (props.isMobile ? "3px 8px" : "4px 10px")};
  border-radius: 12px;
  backdrop-filter: blur(8px);
  border: 1px solid
    ${(props) =>
      props.theme?.name === "light"
        ? "rgba(255, 255, 255, 0.3)"
        : "rgba(255, 255, 255, 0.1)"};

  /* Subtle glow on parent hover */
  ${VoiceButton}:hover & {
    background: linear-gradient(
      145deg,
      ${(props) =>
        props.theme?.name === "light"
          ? "rgba(255, 255, 255, 0.5)"
          : "rgba(255, 255, 255, 0.2)"},
      ${(props) =>
        props.theme?.name === "light"
          ? "rgba(255, 255, 255, 0.3)"
          : "rgba(255, 255, 255, 0.1)"}
    );
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    color: ${(props) => props.theme?.text || "#ffffff"};
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      color: ${(props) =>
        props.theme?.name === "light"
          ? "rgba(107, 114, 128, 0.8)"
          : "rgba(255, 255, 255, 0.6)"};
    `}
`;
const ConnectionIndicator = styled.div`
  position: absolute;
  top: ${(props) => (props.isMobile ? "12px" : "16px")};
  left: ${(props) => (props.isMobile ? "12px" : "16px")};
  width: ${(props) => (props.isMobile ? "12px" : "14px")};
  height: ${(props) => (props.isMobile ? "12px" : "14px")};
  border-radius: var(--radius-full);

  /* Enhanced 3D Background */
  background: ${(props) => {
    if (props.status === "connected")
      return "radial-gradient(circle, #22C55E, #16A34A)";
    if (props.status === "connecting")
      return "radial-gradient(circle, #F59E0B, #D97706)";
    return "radial-gradient(circle, #EF4444, #DC2626)";
  }};

  /* Enhanced 3D Shadow */
  box-shadow: 0 0 ${(props) => (props.isMobile ? "14px" : "18px")}
      ${(props) => {
        if (props.status === "connected") return "rgba(34, 197, 94, 0.4)";
        if (props.status === "connecting") return "rgba(245, 158, 11, 0.4)";
        return "rgba(239, 68, 68, 0.4)";
      }},
    inset 0 1px 2px rgba(255, 255, 255, 0.3), var(--shadow-3d-light);

  /* Rim Highlight */
  border: var(--rim-width) solid rgba(255, 255, 255, 0.3);

  /* Enhanced 3D Transform */
  transform: translateZ(2px);

  animation: ${(props) =>
    props.motionReduce
      ? "none"
      : css`
          ${subtleGlow} 2s ease-in-out infinite
        `};
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${(props) => (props.isMobile ? "12px" : "16px")};
  right: ${(props) => (props.isMobile ? "12px" : "16px")};
  width: ${(props) => (props.isMobile ? "32px" : "36px")};
  height: ${(props) => (props.isMobile ? "32px" : "36px")};
  border-radius: var(--radius-full);
  border: var(--rim-width) solid var(--rim-highlight);

  /* Enhanced 3D Background */
  background: linear-gradient(
    145deg,
    var(--glass-surface),
    rgba(255, 255, 255, 0.05)
  );
  color: ${(props) =>
    props.theme?.text || "#ffffff"}; /* Theme-aware text color */
  font-weight: 900;
  text-shadow: ${(props) =>
    props.theme?.name === "light"
      ? "0 0 6px rgba(255, 255, 255, 0.7), 0 1px 2px rgba(255, 255, 255, 0.4)"
      : "0 0 6px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3)"};
  font-size: ${(props) => (props.isMobile ? "18px" : "20px")};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  /* Enhanced 3D Properties */
  transform-style: ${(props) => (props.flatMode ? "flat" : "preserve-3d")};

  /* Enhanced 3D Shadow */
  box-shadow: var(--shadow-3d-light), inset 0 1px 2px rgba(255, 255, 255, 0.2);

  transition: var(--transition-3d);

  /* Enhanced 3D Transform */
  transform: translateZ(1px);

  &:hover {
    background: linear-gradient(
      145deg,
      rgba(239, 68, 68, 0.2),
      rgba(220, 38, 38, 0.1)
    );
    color: #dc2626;
    font-weight: 900;
    text-shadow: 0 0 6px rgba(255, 255, 255, 0.9), 0 1px 2px rgba(0, 0, 0, 0.4);
    transform: perspective(var(--perspective-light)) rotateX(-2deg)
      rotateY(2deg) translateZ(3px) scale(1.05);
    box-shadow: var(--shadow-3d-medium), 0 0 20px rgba(239, 68, 68, 0.3),
      inset 0 1px 2px rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: perspective(var(--perspective-light)) rotateX(-1deg)
      rotateY(1deg) translateZ(1px) scale(1.02);
  }
`;
const HelpHint = styled.div`
  position: absolute;
  bottom: ${(props) => (props.isMobile ? "-50px" : "-60px")};
  left: 50%;
  transform: translateX(-50%);

  /* Theme-aware background */
  background: ${(props) =>
    props.theme?.name === "light"
      ? "linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))"
      : "linear-gradient(145deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.75))"};
  color: ${(props) => props.theme?.text || "#ffffff"};
  border: var(--rim-width) solid
    ${(props) =>
      props.theme?.name === "light"
        ? "rgba(0, 0, 0, 0.2)"
        : "rgba(255, 255, 255, 0.4)"};
  font-size: ${(props) => (props.isMobile ? "10px" : "11px")};
  text-align: center;
  line-height: 1.4;
  max-width: ${(props) => (props.isMobile ? "85%" : "280px")};

  padding: ${(props) => (props.isMobile ? "10px 16px" : "12px 20px")};
  border-radius: var(--radius-md);

  /* Enhanced 3D Properties */
  transform-style: ${(props) => (props.flatMode ? "flat" : "preserve-3d")};

  /* Enhanced 3D Shadow */
  box-shadow: var(--shadow-3d-medium);

  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: var(--transition-3d);

  font-weight: 500;
  text-shadow: ${(props) =>
    props.theme?.name === "light"
      ? "0 0 6px rgba(255, 255, 255, 0.7), 0 1px 2px rgba(255, 255, 255, 0.4)"
      : "0 0 6px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3)"};

  /* Enhanced 3D Transform */
  transform: translateX(-50%) translateZ(0);

  ${(props) =>
    props.show &&
    css`
      transform: translateX(-50%) translateZ(2px);
    `}
`;

// ============= ENHANCED VOICE ASSISTANT COMPONENT =============
// const VoiceAssistant = ({ onClose }) => {
const VoiceAssistant = ({ onClose, theme }) => {
  const [assistantState, setAssistantState] = useState("idle");
  const [connectionStatus, setConnectionStatus] = useState("disconnected");
  const [isAutoMode, setIsAutoMode] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState("");
  const [showHelp, setShowHelp] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [notice, setNotice] = useState(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [deviceInfo, setDeviceInfo] = useState({});
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [voiceIntensity, setVoiceIntensity] = useState(0);
  const [flatMode, setFlatMode] = useState(false);
  const [motionReduce, setMotionReduce] = useState(false);
  const [isFirstInteraction, setIsFirstInteraction] = useState(true);
  // NEW: Agentic AI state
  const [chatHistory, setChatHistory] = useState([]);
  const [currentRoute, setCurrentRoute] = useState(
    window.location.hash || "#/home"
  );
  const recognitionRef = useRef(null);
  const synthRef = useRef(null);
  const silenceTimeoutRef = useRef(null);
  const isProcessingRef = useRef(false);
  const finalTranscriptRef = useRef("");
  const audioContextRef = useRef(null);
  const autoModeRef = useRef(false);
  const noticeTimeoutRef = useRef(null);
  const wakeLockRef = useRef(null);
  const initialViewportHeight = useRef(window.innerHeight);
  const animationFrameRef = useRef(null);
  const permissionCheckTimeoutRef = useRef(null);
  const speechTimeoutRef = useRef(null);
  const currentStreamRef = useRef(null);
  const voicesLoadedRef = useRef(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailInquiryType, setEmailInquiryType] = useState(null);
  // Initialize Enhanced Liquid Glass System
  useEffect(() => {
    // Initialize performance manager
    PerformanceManager.init();
    setFlatMode(document.documentElement.classList.contains("flat-mode"));

    // Initialize hero tint sampler
    HeroTintSampler.init(".hero-image", {
      sampleSize: 12,
      saturationBoost: 0.3,
      opacityRange: [0.05, 0.15],
    });
    EmailAgent.init();
    // IMPORTANT: Initialize Visual Agent after page loads
    const initTimer = setTimeout(() => {
      VisualAgent.initialize();
    }, 2000); // Wait 2s for React components to mount

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotionReduce(mediaQuery.matches);

    const handleMotionChange = (e) => setMotionReduce(e.matches);
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  // NEW: Load chat history on mount
  useEffect(() => {
    const loadedHistory = MemoryManager.loadHistory();
    setChatHistory(loadedHistory);
    console.log("📖 Loaded chat history:", loadedHistory.length, "turns");
  }, []);

  // NEW: Track route changes
  useEffect(() => {
    const cleanup = setupRouteTracking((newRoute) => {
      setCurrentRoute(newRoute);
    });
    return cleanup;
  }, []);
  // Enhanced device detection with mobile optimizations
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const platform = navigator.platform.toLowerCase();

    const deviceInfo = {
      isMobile: /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent
      ),
      isIOS:
        /ipad|iphone|ipod/.test(userAgent) ||
        (platform === "macintel" && navigator.maxTouchPoints > 1),
      isAndroid: /android/i.test(userAgent),
      isChrome: /chrome/i.test(userAgent) && !/edge/i.test(userAgent),
      isFirefox: /firefox/i.test(userAgent),
      isSafari: /safari/i.test(userAgent) && !/chrome/i.test(userAgent),
      isEdge: /edge/i.test(userAgent),
      hasTouch: "ontouchstart" in window || navigator.maxTouchPoints > 0,
      isStandalone:
        window.navigator.standalone === true ||
        window.matchMedia("(display-mode: standalone)").matches,
      supports3D: CSS.supports("transform-style", "preserve-3d"),
      supportsBackdropFilter: CSS.supports("backdrop-filter", "blur(10px)"),
      hasHardwareAcceleration: !!window.DeviceOrientationEvent,
      screenSize: {
        width: window.screen.width,
        height: window.screen.height,
        ratio: window.devicePixelRatio || 1,
      },
    };

    setDeviceInfo(deviceInfo);

    if (deviceInfo.isMobile) {
      // Enhanced mobile viewport handling
      if (deviceInfo.isIOS) {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
          viewport.setAttribute(
            "content",
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
          );
        }

        // iOS specific keyboard detection
        const handleIOSResize = () => {
          const currentHeight = window.visualViewport
            ? window.visualViewport.height
            : window.innerHeight;
          const heightDifference =
            initialViewportHeight.current - currentHeight;
          setIsKeyboardOpen(heightDifference > 150);
        };

        if (window.visualViewport) {
          window.visualViewport.addEventListener("resize", handleIOSResize);
          return () =>
            window.visualViewport.removeEventListener(
              "resize",
              handleIOSResize
            );
        }
      }

      // General mobile keyboard detection
      const handleResize = () => {
        const currentHeight = window.innerHeight;
        const heightDifference = initialViewportHeight.current - currentHeight;
        setIsKeyboardOpen(heightDifference > 150);
      };

      const handleOrientationChange = () => {
        setTimeout(() => {
          initialViewportHeight.current = window.innerHeight;
          setIsKeyboardOpen(false);
        }, 500);
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("orientationchange", handleOrientationChange);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener(
          "orientationchange",
          handleOrientationChange
        );
      };
    }
  }, []);

  // Show notice function with enhanced mobile handling
  const showNotice = useCallback(
    (type, title, content, duration = 3500) => {
      if (noticeTimeoutRef.current) {
        clearTimeout(noticeTimeoutRef.current);
      }

      setNotice({ type, title, content, show: true });

      // Shorter duration for mobile
      const actualDuration = deviceInfo.isMobile
        ? Math.min(duration, 3000)
        : duration;

      noticeTimeoutRef.current = setTimeout(() => {
        setNotice((prev) => (prev ? { ...prev, show: false } : null));
        setTimeout(() => setNotice(null), 300);
      }, actualDuration);
    },
    [deviceInfo.isMobile]
  );

  // Enhanced microphone device detection
  const detectMicrophoneDevices = useCallback(async () => {
    try {
      // First check if we can enumerate devices at all
      if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        throw new Error("Device enumeration not supported");
      }

      // Check for audio input devices
      const devices = await navigator.mediaDevices.enumerateDevices();
      const audioInputs = devices.filter(
        (device) => device.kind === "audioinput"
      );

      console.log("🎤 Available audio input devices:", audioInputs.length);

      if (audioInputs.length === 0) {
        throw new Error("No microphone devices found");
      }

      return audioInputs;
    } catch (error) {
      console.error("🎤 Device detection failed:", error);
      throw error;
    }
  }, []);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSuggestionIndex((prev) => (prev + 1) % 4); // Cycles through 4 messages
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  // Check browser compatibility with enhanced checks
  const checkBrowserCompatibility = useCallback(() => {
    if (!window.isSecureContext) {
      showNotice(
        "error",
        "🔒 HTTPS Required",
        "Voice features require a secure connection"
      );
      return false;
    }

    if (
      !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      showNotice(
        "error",
        "🎙️ Not Supported",
        "Speech recognition is not supported in this browser"
      );
      return false;
    }

    if (!("speechSynthesis" in window)) {
      showNotice(
        "error",
        "🔊 Not Supported",
        "Speech synthesis is not supported in this browser"
      );
      return false;
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      showNotice(
        "error",
        "🎤 Not Supported",
        "Media devices not supported in this browser"
      );
      return false;
    }

    return true;
  }, [showNotice]);

  // Enhanced microphone permission with comprehensive error handling
  const requestMicrophonePermission = useCallback(async () => {
    try {
      setConnectionStatus("connecting");
      showNotice(
        "info",
        "🎙️ Checking Audio",
        "Detecting microphone devices..."
      );

      // First detect devices
      await detectMicrophoneDevices();

      showNotice(
        "info",
        "🎙️ Microphone Access",
        "Please allow microphone access to enable voice chat!"
      );

      // Request enhanced audio permissions
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          ...(deviceInfo.isMobile && {
            sampleRate: 16000,
            channelCount: 1,
          }),
        },
      });

      // Store current stream for proper cleanup
      currentStreamRef.current = stream;

      // Test the stream briefly to ensure it's working
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const source = audioContext.createMediaStreamSource(stream);
      const analyzer = audioContext.createAnalyser();
      source.connect(analyzer);

      // Brief test
      setTimeout(() => {
        // Cleanup test
        source.disconnect();
        audioContext.close();

        // Stop all tracks
        stream.getTracks().forEach((track) => track.stop());
        currentStreamRef.current = null;

        setHasPermission(true);
        setConnectionStatus("connected");
        showNotice(
          "success",
          "🎤 Ready!",
          deviceInfo.isMobile
            ? "Voice interface ready!"
            : "Enhanced voice interface ready!"
        );
      }, 1000);

      return true;
    } catch (error) {
      console.error("🎤 Microphone permission error:", error);

      let errorMessage = "Please allow microphone access";
      let errorTitle = "🎤 Permission Denied";

      switch (error.name) {
        case "NotFoundError":
          errorMessage =
            "No microphone found. Please connect a microphone and try again.";
          errorTitle = "🎤 No Microphone";
          break;
        case "NotAllowedError":
          errorMessage =
            "Microphone access denied. Please enable microphone permissions in your browser settings.";
          errorTitle = "🎤 Access Denied";
          break;
        case "NotReadableError":
          errorMessage =
            "Microphone is being used by another app. Please close other apps and try again.";
          errorTitle = "🎤 Device Busy";
          break;
        case "OverconstrainedError":
          errorMessage =
            "Microphone doesn't support required settings. Please try with a different microphone.";
          errorTitle = "🎤 Unsupported Device";
          break;
        case "SecurityError":
          errorMessage =
            "Security error. Please refresh the page and try again.";
          errorTitle = "🔒 Security Error";
          break;
        case "AbortError":
          errorMessage = "Request was cancelled. Please try again.";
          errorTitle = "🎤 Request Cancelled";
          break;
        default:
          if (error.message.includes("No microphone devices found")) {
            errorMessage =
              "No microphone detected. Please connect a microphone.";
            errorTitle = "🎤 No Device Found";
          }
      }

      setHasPermission(false);
      setConnectionStatus("disconnected");
      showNotice("error", errorTitle, errorMessage, 5000);
      return false;
    }
  }, [showNotice, deviceInfo, detectMicrophoneDevices]);

  // Enhanced audio cues with error handling
  const playAudioCue = useCallback(
    (type) => {
      try {
        // ✅ FIX: Check if context exists and is not closed
        if (
          !audioContextRef.current ||
          audioContextRef.current.state === "closed"
        ) {
          audioContextRef.current = new (window.AudioContext ||
            window.webkitAudioContext)();
          console.log("🔊 Created new AudioContext");
        }

        const audioContext = audioContextRef.current;

        // ✅ FIX: Resume context if suspended
        if (audioContext.state === "suspended") {
          audioContext.resume();
        }

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        const volume = deviceInfo.isMobile ? 0.03 : 0.05;
        const duration = deviceInfo.isMobile ? 0.15 : 0.2;

        switch (type) {
          case "start":
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(
              1200,
              audioContext.currentTime + 0.1
            );
            break;
          case "end":
            oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(
              600,
              audioContext.currentTime + 0.15
            );
            break;
          case "error":
            oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(
              150,
              audioContext.currentTime + 0.3
            );
            break;
          default:
            return;
        }

        gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
          0.01,
          audioContext.currentTime + duration
        );

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);

        // ✅ FIX: Clean up after playing
        oscillator.onended = () => {
          try {
            oscillator.disconnect();
            gainNode.disconnect();
          } catch (e) {
            // Already disconnected, ignore
          }
        };
      } catch (error) {
        console.warn("🔊 Audio cue failed:", error);
        // Don't throw - just skip the audio cue
      }
    },
    [deviceInfo]
  );
  // Content extraction (unchanged)
  const extractContent = useCallback((obj, depth = 0) => {
    if (depth > 5) return null;
    if (typeof obj === "string" && obj.trim()) {
      return obj.trim();
    }
    if (!obj) return null;

    if (obj.result && obj.result.message && obj.result.message.content) {
      return obj.result.message.content.trim();
    }

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
      try {
        const value = pattern.split(".").reduce((acc, key) => {
          if (key.includes("[")) {
            const [arrayKey, index] = key.split("[");
            const idx = parseInt(index.replace("]", ""));
            return acc?.[arrayKey]?.[idx];
          }
          return acc?.[key];
        }, obj);

        if (value && typeof value === "string" && value.trim()) {
          return value.trim();
        }
      } catch (e) {
        // Continue to next pattern
      }
    }

    return null;
  }, []);

  // Voice fallback with mobile-optimized responses
  const getVoiceFallback = useCallback(
    (input) => {
      const voiceResponses = {
        greeting: deviceInfo.isMobile
          ? "Hey! I'm Laxman's AI assistant. What would you like to explore?"
          : "Hey there! I'm Laxman's AI assistant. What would you like to explore?",
        identity:
          "Laxman is a brilliant software engineer at CAMS in Chennai. He's an IIT Delhi graduate with exceptional AI and full-stack development skills.",
        projects:
          "He's created amazing AI projects! His flagship CamsLens platform processes over 80,000 documents monthly with incredible 95% accuracy.",
        skills:
          "He's a master of Java, Python, JavaScript, and cutting-edge AI technologies like Vertex AI, GCP. Truly impressive technical expertise!",
        contact:
          "You can reach him at laxmankethavath5@gmail.com, or connect on LinkedIn. He's very approachable!",
        location:
          "He's currently based in Chennai, India, building innovative tech solutions that make a real difference.",
        education:
          "He completed his dual degree in Computer Science from prestigious IIT Delhi, graduating in 2024. Excellent academic background!",
        experience:
          "He's been excelling as a software engineer at CAMS since June 2024, previously mentoring over 300 students as a teaching assistant.",
        help: deviceInfo.isMobile
          ? "Ask about Laxman's projects, skills, experience, or contact info. I'm here to help!"
          : "Feel free to ask about Laxman's projects, technical skills, work experience, education, or how to get in touch. I'm here to help!",
        default:
          "That's interesting! Could you rephrase it? I'm equipped with comprehensive knowledge about Laxman's impressive background!",
      };

      const input_lower = input.toLowerCase();

      if (
        input_lower.includes("hello") ||
        input_lower.includes("hi") ||
        input_lower.includes("hey") ||
        input_lower.includes("greet")
      ) {
        return voiceResponses.greeting;
      }
      if (
        input_lower.includes("who") ||
        input_lower.includes("about") ||
        input_lower.includes("tell me") ||
        input_lower.includes("describe")
      ) {
        return voiceResponses.identity;
      }
      if (
        input_lower.includes("project") ||
        input_lower.includes("work") ||
        input_lower.includes("built") ||
        input_lower.includes("develop")
      ) {
        return voiceResponses.projects;
      }
      if (
        input_lower.includes("skill") ||
        input_lower.includes("technology") ||
        input_lower.includes("programming") ||
        input_lower.includes("technical")
      ) {
        return voiceResponses.skills;
      }
      if (
        input_lower.includes("contact") ||
        input_lower.includes("reach") ||
        input_lower.includes("email") ||
        input_lower.includes("phone")
      ) {
        return voiceResponses.contact;
      }
      if (
        input_lower.includes("where") ||
        input_lower.includes("location") ||
        input_lower.includes("live") ||
        input_lower.includes("based")
      ) {
        return voiceResponses.location;
      }
      if (
        input_lower.includes("education") ||
        input_lower.includes("study") ||
        input_lower.includes("college") ||
        input_lower.includes("university")
      ) {
        return voiceResponses.education;
      }
      if (
        input_lower.includes("experience") ||
        input_lower.includes("job") ||
        input_lower.includes("career") ||
        input_lower.includes("professional")
      ) {
        return voiceResponses.experience;
      }
      if (
        input_lower.includes("help") ||
        input_lower.includes("what can") ||
        input_lower.includes("how to") ||
        input_lower.includes("assist")
      ) {
        return voiceResponses.help;
      }

      return voiceResponses.default;
    },
    [deviceInfo]
  );

  // Get AI response with mobile optimization

  // UPDATED: Get AI response with Agentic capabilities
  const getAIResponse = useCallback(
    async (userInput) => {
      try {
        const aiResponse = await getAgenticAIResponse(userInput, deviceInfo);
        return aiResponse;
      } catch (error) {
        console.error("🤖 Agentic AI Error, using fallback:", error.message);
        const fallbackResponse = getFallbackResponse(userInput, deviceInfo);
        return fallbackResponse;
      }
    },
    [deviceInfo]
  );
  // Enhanced stop all functions with comprehensive cleanup
  const stopAll = useCallback(() => {
    console.log("🛑 Stopping all voice activities...");

    // Stop speech recognition
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
        recognitionRef.current = null;
        console.log("🎙️ Speech recognition stopped");
      } catch (error) {
        console.warn("Failed to stop recognition:", error);
      }
    }

    // Stop speech synthesis
    try {
      window.speechSynthesis.cancel();
      synthRef.current = null;
      console.log("🔊 Speech synthesis stopped");
    } catch (error) {
      console.warn("Failed to stop synthesis:", error);
    }

    // Clear all timeouts
    if (silenceTimeoutRef.current) {
      clearTimeout(silenceTimeoutRef.current);
      silenceTimeoutRef.current = null;
    }

    if (speechTimeoutRef.current) {
      clearTimeout(speechTimeoutRef.current);
      speechTimeoutRef.current = null;
    }

    if (permissionCheckTimeoutRef.current) {
      clearTimeout(permissionCheckTimeoutRef.current);
      permissionCheckTimeoutRef.current = null;
    }

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    // Stop any active media streams
    if (currentStreamRef.current) {
      currentStreamRef.current.getTracks().forEach((track) => track.stop());
      currentStreamRef.current = null;
    }

    // Reset state
    setAssistantState("idle");
    setInterimTranscript("");
    setVoiceIntensity(0);
    isProcessingRef.current = false;
    finalTranscriptRef.current = "";

    console.log("✅ All voice activities stopped");
  }, []);

  // Enhanced voice loading with timeout
  const loadVoices = useCallback(() => {
    return new Promise((resolve) => {
      if (
        voicesLoadedRef.current ||
        window.speechSynthesis.getVoices().length > 0
      ) {
        voicesLoadedRef.current = true;
        resolve(true);
        return;
      }

      const timeout = setTimeout(() => {
        console.warn("🔊 Voice loading timeout, proceeding with default");
        voicesLoadedRef.current = true;
        resolve(false);
      }, 3000);

      const handleVoicesChanged = () => {
        if (window.speechSynthesis.getVoices().length > 0) {
          clearTimeout(timeout);
          voicesLoadedRef.current = true;
          window.speechSynthesis.removeEventListener(
            "voiceschanged",
            handleVoicesChanged
          );
          resolve(true);
        }
      };

      window.speechSynthesis.addEventListener(
        "voiceschanged",
        handleVoicesChanged
      );

      // Trigger voice loading
      window.speechSynthesis.getVoices();
    });
  }, []);

  // Start listening with enhanced error handling and longer timeout
  const startListening = useCallback(async () => {
    if (
      connectionStatus !== "connected" ||
      assistantState === "listening" ||
      isProcessingRef.current
    ) {
      console.warn("🎙️ Cannot start listening - invalid state");
      return;
    }

    if (!hasPermission) {
      const granted = await requestMicrophonePermission();
      if (!granted) return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      showNotice(
        "error",
        "🎙️ Not Supported",
        "Speech recognition is not available"
      );
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    // Enhanced recognition settings
    recognition.continuous = false; // Start with false for better control
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.maxAlternatives = 1;

    setAssistantState("listening");
    setInterimTranscript("");
    finalTranscriptRef.current = "";
    setShowHelp(false);

    playAudioCue("start");

    recognition.onstart = () => {
      console.log("🎙️ Speech recognition started");
      // On mobile, keep continuous false for better battery life
      if (!deviceInfo.isMobile) {
        recognition.continuous = true;
      }
    };

    recognition.onresult = (event) => {
      let interimText = "";
      let hasFinalResult = false;

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript.trim();

        if (event.results[i].isFinal) {
          finalTranscriptRef.current += transcript + " ";
          hasFinalResult = true;
          console.log("🎙️ Final result:", transcript);
        } else {
          interimText += transcript;
        }
      }

      if (interimText) {
        setInterimTranscript(interimText);
      }

      // Clear previous timeout
      if (silenceTimeoutRef.current) {
        clearTimeout(silenceTimeoutRef.current);
      }

      // Extended timeout for better user experience - especially longer for complete sentences
      const timeoutDuration = deviceInfo.isMobile ? 6000 : 6500; // Increased from 5.5s to 7-8s

      silenceTimeoutRef.current = setTimeout(() => {
        const finalResult = finalTranscriptRef.current.trim();
        console.log("🕒 Silence timeout reached. Final result:", finalResult);

        if (
          finalResult &&
          finalResult.length >= 2 &&
          !isProcessingRef.current
        ) {
          if (recognitionRef.current) {
            recognitionRef.current.stop();
          }
          processFinalSpeech(finalResult);
        } else if (interimText && interimText.length >= 5) {
          // If we have substantial interim text, use it
          console.log("🎙️ Using interim text:", interimText);
          if (recognitionRef.current) {
            recognitionRef.current.stop();
          }
          processFinalSpeech(interimText);
        } else {
          console.log("🎙️ Insufficient speech detected");
          setAssistantState("idle");
          setInterimTranscript("");

          if (autoModeRef.current) {
            setTimeout(() => {
              if (autoModeRef.current && assistantState !== "speaking") {
                startListening();
              }
            }, 2000);
          }
        }
      }, timeoutDuration);
    };

    recognition.onerror = (event) => {
      console.error("🎙️ Speech recognition error:", event.error);

      // Clear timeouts on error
      if (silenceTimeoutRef.current) {
        clearTimeout(silenceTimeoutRef.current);
        silenceTimeoutRef.current = null;
      }

      switch (event.error) {
        case "no-speech":
          console.log("🔇 No speech detected");
          if (autoModeRef.current) {
            setTimeout(() => {
              if (autoModeRef.current && assistantState !== "speaking") {
                startListening();
              }
            }, 2000);
          } else {
            setAssistantState("idle");
            setInterimTranscript("");
          }
          return;

        case "audio-capture":
          showNotice(
            "error",
            "🎤 Audio Error",
            "Microphone access lost. Please check your microphone."
          );
          setHasPermission(false);
          setConnectionStatus("disconnected");
          break;

        case "not-allowed":
          showNotice(
            "error",
            "🎤 Access Denied",
            "Microphone permission was denied."
          );
          setHasPermission(false);
          setConnectionStatus("disconnected");
          break;

        case "network":
          showNotice("warning", "🌐 Network Issue", "Retrying in 2 seconds...");
          setTimeout(() => {
            if (assistantState === "listening") {
              startListening();
            }
          }, 2000);
          return;

        case "service-not-allowed":
          showNotice(
            "error",
            "🚫 Service Blocked",
            "Speech recognition service is not allowed."
          );
          break;

        default:
          console.error("🎙️ Unhandled recognition error:", event.error);
          showNotice(
            "warning",
            "⚠️ Recognition Error",
            "Speech recognition encountered an error. Retrying..."
          );
          setTimeout(() => {
            if (assistantState === "listening") {
              startListening();
            }
          }, 2000);
          return;
      }

      playAudioCue("error");
      setAssistantState("idle");
      setInterimTranscript("");
      isProcessingRef.current = false;
    };

    recognition.onend = () => {
      console.log("🎙️ Speech recognition ended");

      const remainingText = finalTranscriptRef.current.trim();
      if (
        remainingText &&
        remainingText.length >= 2 &&
        !isProcessingRef.current &&
        assistantState === "listening"
      ) {
        console.log("🎙️ Processing remaining text from onend:", remainingText);
        processFinalSpeech(remainingText);
      } else if (!isProcessingRef.current) {
        console.log("🎙️ Recognition ended without sufficient text");
        setAssistantState("idle");
        setInterimTranscript("");
      }
    };

    try {
      recognition.start();
    } catch (error) {
      console.error("🎙️ Failed to start recognition:", error);
      setAssistantState("idle");
      playAudioCue("error");
      showNotice(
        "error",
        "🎤 Start Failed",
        "Could not start speech recognition"
      );
    }
  }, [
    connectionStatus,
    assistantState,
    hasPermission,
    requestMicrophonePermission,
    playAudioCue,
    showNotice,
    deviceInfo,
  ]);

  // Speak introduction with enhanced error handling
  const speakIntroduction = useCallback(async () => {
    const introText = deviceInfo.isMobile
      ? "Hi! I'm Laxman's AI assistant. How can I help you learn about Laxman?"
      : "Hey! I'm Laxman's AI assistant. Just tell give me Quick overview of Laxman Portfolio i will show u around";

    setAssistantState("speaking");
    setIsFirstInteraction(false);

    try {
      // Ensure voices are loaded
      await loadVoices();

      const utterance = new SpeechSynthesisUtterance(introText);
      synthRef.current = utterance;

      utterance.rate = deviceInfo.isMobile ? 0.9 : 0.95;
      utterance.pitch = deviceInfo.isMobile ? 1.0 : 1.05;
      utterance.volume = deviceInfo.isMobile ? 0.8 : 0.85;
      utterance.lang = "en-US";

      // Set preferred voice
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        let preferredVoice =
          voices.find(
            (voice) =>
              voice.lang.includes("en-US") && voice.name.includes("Google")
          ) ||
          voices.find((voice) => voice.lang.includes("en-US")) ||
          voices[0];

        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }
      }

      utterance.onstart = () => {
        console.log("🔊 Introduction started");
      };

      utterance.onend = () => {
        console.log("🔊 Introduction complete, starting listening...");
        synthRef.current = null;
        // Start listening after introduction with a small delay
        setTimeout(() => {
          if (assistantState !== "idle") {
            // Only start if we're still in speaking mode
            startListening();
          }
        }, 500);
      };

      utterance.onerror = (event) => {
        console.error("🔊 Introduction speech error:", event.error);
        synthRef.current = null;
        setAssistantState("idle");
        showNotice(
          "warning",
          "🔊 Speech Error",
          "Could not play introduction. Starting listening mode..."
        );

        // Fallback: just start listening
        setTimeout(() => {
          startListening();
        }, 1000);
      };

      // Start speech with timeout fallback
      window.speechSynthesis.speak(utterance);

      // Fallback timeout in case speech doesn't work
      speechTimeoutRef.current = setTimeout(() => {
        if (synthRef.current) {
          window.speechSynthesis.cancel();
          synthRef.current = null;
          setAssistantState("idle");
          setTimeout(() => {
            startListening();
          }, 500);
        }
      }, 8000); // 8 second timeout for introduction
    } catch (error) {
      console.error("🔊 Introduction setup failed:", error);
      setAssistantState("idle");
      showNotice("warning", "🔊 Speech Error", "Starting listening mode...");
      setTimeout(() => {
        startListening();
      }, 1000);
    }
  }, [deviceInfo, startListening, loadVoices, assistantState, showNotice]);

  // Enhanced speak response with comprehensive error handling
  const speakResponse = useCallback(
    async (text) => {
      if (!text || !text.trim()) {
        console.warn("🔊 No text to speak");
        setAssistantState("idle");
        return;
      }

      if (!("speechSynthesis" in window)) {
        setAssistantState("idle");
        showNotice(
          "error",
          "🔊 Not Supported",
          "Speech synthesis is not available"
        );
        return;
      }

      const cleanText = text.trim();
      console.log("🔊 Speaking response:", cleanText);

      // Cancel any existing speech
      window.speechSynthesis.cancel();

      // Clear any existing speech timeout
      if (speechTimeoutRef.current) {
        clearTimeout(speechTimeoutRef.current);
        speechTimeoutRef.current = null;
      }

      try {
        // Ensure voices are loaded
        await loadVoices();

        setTimeout(() => {
          const utterance = new SpeechSynthesisUtterance(cleanText);
          synthRef.current = utterance;

          // Enhanced speech settings
          utterance.rate = deviceInfo.isMobile ? 0.9 : 0.95;
          utterance.pitch = deviceInfo.isMobile ? 1.0 : 1.05;
          utterance.volume = deviceInfo.isMobile ? 0.8 : 0.85;
          utterance.lang = "en-US";

          // Set preferred voice
          const voices = window.speechSynthesis.getVoices();
          if (voices.length > 0) {
            let preferredVoice =
              voices.find(
                (voice) =>
                  voice.lang.includes("en-US") &&
                  (voice.name.includes("Google") ||
                    voice.name.includes("Natural"))
              ) ||
              voices.find((voice) => voice.lang.includes("en-US")) ||
              voices[0];

            if (preferredVoice) {
              utterance.voice = preferredVoice;
              console.log("🔊 Using voice:", preferredVoice.name);
            }
          }

          utterance.onstart = () => {
            console.log("🔊 Speech synthesis started");
          };

          utterance.onend = () => {
            console.log("🔊 Speech synthesis ended");
            synthRef.current = null;

            const shouldAutoListen =
              autoModeRef.current ||
              EmailAgent.conversationState.isCollecting ||
              window.pendingEmailSend;

            if (shouldAutoListen) {
              const delay = deviceInfo.isMobile ? 1000 : 1500;
              setTimeout(() => {
                if (assistantState != "listening") {
                  startListening();
                }
              }, delay);
            }
          };

          utterance.onerror = (event) => {
            console.error("🔊 Speech synthesis error:", event.error);
            synthRef.current = null;

            if (speechTimeoutRef.current) {
              clearTimeout(speechTimeoutRef.current);
              speechTimeoutRef.current = null;
            }

            setAssistantState("idle");

            let errorMessage = "Could not play voice response";

            switch (event.error) {
              case "network":
                errorMessage = "Network error during speech. Please try again.";
                break;
              case "synthesis-failed":
                errorMessage = "Speech synthesis failed. Please try again.";
                break;
              case "audio-hardware":
                errorMessage =
                  "Audio hardware error. Please check your speakers.";
                break;
              case "canceled":
                console.log("🔊 Speech was cancelled");
                return; // Don't show error for cancellation
              case "interrupted":
                console.log("🔊 Speech was interrupted");
                return; // Don't show error for interruption
            }

            showNotice("error", "🔊 Speech Error", errorMessage);
          };

          // Start speech
          window.speechSynthesis.speak(utterance);

          // Safety timeout to prevent hanging
          const timeoutDuration = Math.max(cleanText.length * 100, 8000); // At least 5 seconds
          speechTimeoutRef.current = setTimeout(() => {
            if (synthRef.current) {
              console.warn("🔊 Speech timeout, cancelling");
              window.speechSynthesis.cancel();
              synthRef.current = null;
              setAssistantState("idle");
              showNotice(
                "warning",
                "🔊 Speech Timeout",
                "Speech took too long, please try again"
              );
            }
          }, timeoutDuration);
        }, 200); // Small delay to ensure cleanup
      } catch (error) {
        console.error("🔊 Speak response setup failed:", error);
        setAssistantState("idle");
        showNotice(
          "error",
          "🔊 Speech Error",
          "Could not set up voice response"
        );
      }
    },
    [startListening, assistantState, showNotice, deviceInfo, loadVoices]
  );

  // Process final speech with enhanced validation
  // UPDATED: Process final speech with action execution
  const processFinalSpeech = useCallback(
    async (finalText) => {
      const cleanedText = finalText.trim();

      console.log("🧠 Processing agentic input:", cleanedText);

      if (cleanedText.length < 2 || isProcessingRef.current) {
        return;
      }

      isProcessingRef.current = true;
      setInterimTranscript("");
      setShowHelp(false);

      if (silenceTimeoutRef.current) {
        clearTimeout(silenceTimeoutRef.current);
        silenceTimeoutRef.current = null;
      }

      playAudioCue("end");
      // === ✅ EMAIL AGENT CHECK (ADD THIS) ===

      if (window.pendingEmailSend) {
        console.log("Checking pending email confirmation...");
        const lower = cleanedText.toLowerCase();

        if (
          lower.includes("yes") ||
          lower.includes("confirm") ||
          lower.includes("sure") ||
          lower.includes("ok") ||
          lower.includes("send")
        ) {
          setAssistantState("thinking");

          const sendResult = await window.pendingEmailSend(); // Execute the stored function
          window.pendingEmailSend = null; // Clear flag

          setAssistantState("speaking");
          speakResponse(sendResult.response);

          if (sendResult.success) {
            showNotice(
              "success",
              "✅ Email Sent",
              "Laxman will respond soon!",
              3000
            );
          } else {
            showNotice(
              "error",
              "❌ Send Failed",
              "Please try direct email",
              3000
            );
          }

          isProcessingRef.current = false;
          return;
        } else if (
          lower.includes("cancel") ||
          lower.includes("no") ||
          lower.includes("stop") ||
          lower.includes("abort")
        ) {
          window.pendingEmailSend = null;
          EmailAgent.cancel(); // Reset agent
          setAssistantState("speaking");
          speakResponse("Okay, email cancelled. What else can I help with?");
          isProcessingRef.current = false;
          return;
        } else {
          // If user says something unclear during confirmation
          setAssistantState("speaking");
          speakResponse("Please say 'yes' to send or 'cancel' to stop.");
          isProcessingRef.current = false;
          return;
        }
      }

      // 2. SECOND: Check if collecting data (Filling the form via voice)
      if (EmailAgent.conversationState.isCollecting) {
        setAssistantState("thinking");

        // Check for cancel
        if (
          cleanedText.toLowerCase().includes("cancel") ||
          cleanedText.toLowerCase().includes("stop")
        ) {
          const result = EmailAgent.cancel();
          setAssistantState("speaking");
          speakResponse(result.response);
          isProcessingRef.current = false;
          return;
        }

        // Process the answer
        const result = EmailAgent.processAnswer(cleanedText);

        if (result.action === "CONFIRM_EMAIL") {
          setAssistantState("speaking");
          speakResponse(result.response);

          // Store the send function for the NEXT turn (caught by block #1 above)
          window.pendingEmailSend = result.onConfirm;

          isProcessingRef.current = false;
          return;
        }

        setAssistantState("speaking");
        speakResponse(result.response);
        isProcessingRef.current = false;
        return;
      }
      // 3. Detect email intent
      // 3. Detect email intent
      const emailIntent = EmailAgent.detectIntent(cleanedText);
      if (emailIntent) {
        const startResult = EmailAgent.startCollection(emailIntent);

        // Open form instead of voice collection
        setEmailInquiryType(emailIntent);
        setShowEmailForm(true);

        setAssistantState("speaking");
        speakResponse(startResult.response);
        isProcessingRef.current = false;
        return;
      }
      // Check for voice shortcuts
      if (VoiceShortcuts.isShortcut(cleanedText)) {
        const shortcutResult = VoiceShortcuts.execute(cleanedText);

        if (shortcutResult) {
          setAssistantState("speaking");

          if (shortcutResult.action && shortcutResult.action !== "NONE") {
            AgentExecutor.execute(shortcutResult.action, showNotice);
            setTimeout(() => {
              speakResponse(shortcutResult.response);
            }, 500);
          } else {
            speakResponse(shortcutResult.response);
          }

          isProcessingRef.current = false;
          return;
        }
      }

      // === NEW: AGENTIC CAPABILITIES ===

      // 1. Predict Intent
      const predictedIntent = IntentPredictor.predictIntent(cleanedText);
      console.log("🎯 Predicted Intent:", predictedIntent);

      // 2. If high-confidence workflow intent, execute it
      if (predictedIntent && predictedIntent.confidence > 0.7) {
        setAssistantState("speaking");

        // Speak introduction
        speakResponse(
          `I understand you want to ${predictedIntent.intent
            .toLowerCase()
            .replace(/_/g, " ")}. Let me guide you through that!`
        );

        // Execute workflow after 3 seconds
        setTimeout(async () => {
          await AgentExecutor.executeWorkflow(
            predictedIntent.workflow,
            { speak: speakResponse },
            showNotice
          );
        }, 3000);

        // Learn from this interaction
        PreferenceLearner.learn({
          question: cleanedText,
          intent: predictedIntent.intent,
          timestamp: Date.now(),
        });

        isProcessingRef.current = false;
        return;
      }

      // 3. Decompose complex questions
      const decomposed = QuestionDecomposer.decompose(cleanedText);
      if (decomposed.isComplex) {
        console.log("🧩 Complex question detected, decomposing...");
        setAssistantState("speaking");

        speakResponse(
          `That's a comprehensive question! Let me break it down and answer each part.`
        );

        // Answer sub-questions sequentially
        for (let i = 0; i < decomposed.subQuestions.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 5000 * i));

          try {
            const subAnswer = await getAIResponse(decomposed.subQuestions[i]);
            speakResponse(subAnswer.response);

            if (subAnswer.action && subAnswer.action !== "NONE") {
              AgentExecutor.execute(subAnswer.action, showNotice);
            }
          } catch (error) {
            console.error("Sub-question error:", error);
          }
        }

        isProcessingRef.current = false;
        return;
      }

      setAssistantState("thinking");

      try {
        // Track API usage
        APIUsageTracker.logCall();

        const aiResponse = await getAIResponse(cleanedText);
        console.log("🤖 Response:", aiResponse);

        if (
          !aiResponse ||
          !aiResponse.response ||
          !aiResponse.response.trim()
        ) {
          throw new Error("Invalid AI response format");
        }

        // Save to memory
        const action = aiResponse.action || "NONE";
        const updatedHistory = MemoryManager.addTurn(
          cleanedText,
          aiResponse.response,
          action
        );
        setChatHistory(updatedHistory);

        // === NEW: GENERATE FOLLOW-UPS ===
        const followUps = FollowUpGenerator.generateFollowUps(
          cleanedText,
          aiResponse.response,
          { currentRoute }
        );
        console.log("💡 Generated follow-ups:", followUps);

        // Store follow-ups for later use (could show as buttons)
        // setFollowUpSuggestions(followUps);

        // Execute action if present
        if (action && action !== "NONE") {
          console.log("🎬 Executing action:", action);
          const executed = AgentExecutor.execute(action, showNotice);

          if (executed) {
            setTimeout(
              () => {
                setAssistantState("speaking");
                speakResponse(aiResponse.response);

                // === NEW: PROACTIVE SUGGESTION ===
                setTimeout(() => {
                  const suggestion = ProactiveSuggestionsEngine.getSuggestion({
                    currentPage: currentRoute,
                    questionsAsked: [
                      ...chatHistory.map((h) => h.user),
                      cleanedText,
                    ],
                    pagesVisited: [currentRoute],
                    timeOnCurrentPage: Date.now(),
                  });

                  if (suggestion) {
                    console.log("💡 Proactive suggestion:", suggestion.text);
                    showNotice("info", "💡 Suggestion", suggestion.text, 5000);
                  }
                }, 3000);
              },
              action.startsWith("NAVIGATE")
                ? 800
                : action.startsWith("HIGHLIGHT")
                ? 1200
                : 200
            );
          } else {
            setAssistantState("speaking");
            speakResponse(aiResponse.response);
          }
        } else {
          setAssistantState("speaking");
          speakResponse(aiResponse.response);
        }

        // === NEW: LEARN FROM INTERACTION ===
        PreferenceLearner.learn({
          question: cleanedText,
          answer: aiResponse.response,
          action: action,
          timestamp: Date.now(),
        });
      } catch (error) {
        console.error("🧠 Error, using fallback:", error);
        setAssistantState("idle");
        showNotice("error", "🧠 Error", "Using fallback response...");

        try {
          const fallback = getFallbackResponse(cleanedText, deviceInfo);

          if (fallback.action && fallback.action !== "NONE") {
            AgentExecutor.execute(fallback.action, showNotice);
            setTimeout(() => {
              setAssistantState("speaking");
              speakResponse(fallback.response);
            }, 500);
          } else {
            setAssistantState("speaking");
            speakResponse(fallback.response);
          }
        } catch (fallbackError) {
          console.error("Fallback failed:", fallbackError);
          setAssistantState("idle");
        }
      }

      isProcessingRef.current = false;
    },
    [
      getAIResponse,
      playAudioCue,
      speakResponse,
      showNotice,
      deviceInfo,
      currentRoute,
      chatHistory,
    ]
  );

  // Toggle auto mode with enhanced handling
  const toggleAutoMode = useCallback(() => {
    setIsAutoMode((prev) => {
      const newState = !prev;
      autoModeRef.current = newState;

      if (newState) {
        showNotice(
          "info",
          "🔄 Auto Mode On",
          deviceInfo.isMobile
            ? "Continuous voice active!"
            : "Continuous voice interaction activated!"
        );
        if (assistantState === "idle") {
          setTimeout(() => {
            if (isFirstInteraction) {
              speakIntroduction();
            } else {
              startListening();
            }
          }, 1000);
        }
      } else {
        showNotice(
          "info",
          "⏹️ Auto Mode Off",
          "Switched to one-time question mode"
        );
        stopAll();
      }
      return newState;
    });
  }, [
    assistantState,
    startListening,
    stopAll,
    showNotice,
    deviceInfo,
    isFirstInteraction,
    speakIntroduction,
  ]);

  // Test TTS with enhanced error handling
  const testTTS = useCallback(async () => {
    const testText = deviceInfo.isMobile
      ? "Hello! Voice technology is working perfectly!"
      : "Hello! Enhanced voice interface is working excellently!";

    console.log("🧪 Testing TTS with text:", testText);
    setAssistantState("speaking");
    speakResponse(testText);
  }, [speakResponse, deviceInfo]);

  // Toggle flat mode
  const toggleFlatMode = useCallback(() => {
    const newFlatMode = PerformanceManager.toggleFlatMode();
    setFlatMode(newFlatMode);
    showNotice(
      "info",
      newFlatMode ? "📱 Flat Mode On" : "🌟 3D Mode On",
      newFlatMode
        ? "Performance optimized interface"
        : "Full enhanced experience"
    );
  }, [showNotice]);

  // Close chat with enhanced cleanup
  const closeChat = useCallback(() => {
    console.log("❌ Closing voice assistant");
    stopAll();
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) {
        onClose();
      }
    }, 400);
  }, [stopAll, onClose]);
  // Email form submit handler
  const handleEmailFormSubmit = async (formData) => {
    console.log("📨 Form Submitted. Handing over to Voice Agent...");

    // 1. Close the Form UI
    setShowEmailForm(false);

    // 2. Show thinking state briefly
    setAssistantState("thinking");

    // 3. Send data to Agent (It determines the next missing field)
    const result = EmailAgent.ingestFormData(formData);

    // 4. Speak the response (e.g., "Thanks Laxman. What is your phone number?")
    // NOTE: The updated speakResponse function will detect we are in "Collection Mode"
    // and AUTOMATICALLY start listening when the speech finishes.
    setAssistantState("speaking");
    speakResponse(result.response);

    // 5. Only show success notice if the form somehow completed the whole flow immediately
    if (result.action === "EMAIL_SENT") {
      showNotice(
        "success",
        "✅ Email Sent",
        "Laxman will respond soon! can i help you with anything else",
        3000
      );
    }
    // Note: We don't handle 'CONTINUE_COLLECTION' here because speakResponse handles the loop
  };
  // Get voice status with enhanced descriptions
  // const getVoiceStatus = () => {
  //       // 💡 Suggestions Array
  //       const suggestions = [
  //         deviceInfo.isMobile ? "Tap 💬 & say: \"I want to hire Laxman\"" : "Click 💬 & say: \"I want to hire Laxman\"",
  //         "Try saying: \"Give me a quick overview\"",
  //         "Try saying: \"Send an email to Laxman\"",
  //         deviceInfo.isMobile ? "Tap 💬 to start speaking..." : "Click 💬 avatar to start speaking..."
  //       ];
  //   switch (assistantState) {
  //     case 'listening':
  //       return {
  //         title: "Listening...",
  //         subtitle: deviceInfo.isMobile ? "Speak clearly!" : "Speak clearly, I'm listening carefully!"
  //       };
  //     case 'thinking':
  //       return {
  //         title: "Processing...",
  //         subtitle: deviceInfo.isMobile ? "AI analyzing..." : "AI finding the perfect answer..."
  //       };
  //     case 'speaking':
  //       return {
  //         title: "Speaking...",
  //         subtitle: deviceInfo.isMobile ? "Response playing" : "Delivering your response"
  //       };
  //     default:
  //       return {
  //         title: deviceInfo.isMobile ? "Laxman's AI Assistant" : "Laxman's Enhanced AI",
  //         subtitle: connectionStatus === 'connected'
  //           // ? (deviceInfo.isMobile ? "Tap 💬 to start!" : "Click 💬 avatar to start!")
  //           ? suggestions[suggestionIndex]
  //           : connectionStatus === 'connecting'
  //           ? "Setting up voice features..."
  //           : (deviceInfo.isMobile ? "Click 🔒 to enable microphone and start speaking" : "Click 🔒 to enable microphone and start speaking")
  //       };
  //   }
  // };
  // Add this component at the top of your file (or in a separate icons file)

  // ============= ANIMATED ICON COMPONENTS =============

  const MicrophoneIcon = ({
    className,
    size = 24,
    color = "currentColor",
    animated = false,
  }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      {animated && (
        <style>
          {`
          @keyframes micPulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          .mic-animated { animation: micPulse 1.5s ease-in-out infinite; }
        `}
        </style>
      )}
      <g className={animated ? "mic-animated" : ""}>
        <rect
          x="9"
          y="3"
          width="6"
          height="11"
          rx="3"
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M5 10v1a7 7 0 0014 0v-1"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="18"
          x2="12"
          y2="21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="21"
          x2="16"
          y2="21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );

  const ThinkingIcon = ({ className, size = 24, color = "currentColor" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <style>
        {`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes dotFade {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .gear-rotate { transform-origin: center; animation: spin 3s linear infinite; }
        .dot-1 { animation: dotFade 1.4s ease-in-out infinite; animation-delay: 0s; }
        .dot-2 { animation: dotFade 1.4s ease-in-out infinite; animation-delay: 0.2s; }
        .dot-3 { animation: dotFade 1.4s ease-in-out infinite; animation-delay: 0.4s; }
      `}
      </style>
      <g className="gear-rotate">
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M12 4v3M12 17v3M4 12h3M17 12h3"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <circle className="dot-1" cx="8" cy="12" r="1.5" fill={color} />
      <circle className="dot-2" cx="12" cy="12" r="1.5" fill={color} />
      <circle className="dot-3" cx="16" cy="12" r="1.5" fill={color} />
    </svg>
  );

  const SpeakingIcon = ({ className, size = 24, color = "currentColor" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <style>
        {`
        @keyframes soundwave {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
        .wave-1 { animation: soundwave 1s ease-in-out infinite; animation-delay: 0s; }
        .wave-2 { animation: soundwave 1s ease-in-out infinite; animation-delay: 0.15s; }
        .wave-3 { animation: soundwave 1s ease-in-out infinite; animation-delay: 0.3s; }
      `}
      </style>
      <path
        d="M3 9v6c0 1.1.9 2 2 2h3l5 4V5L8 9H5c-1.1 0-2 .9-2 2z"
        stroke={color}
        strokeWidth="2"
        fill={color}
        fillOpacity="0.2"
      />
      <rect
        className="wave-1"
        x="16"
        y="10"
        width="2"
        height="4"
        rx="1"
        fill={color}
      />
      <rect
        className="wave-2"
        x="19"
        y="8"
        width="2"
        height="8"
        rx="1"
        fill={color}
      />
      <rect
        className="wave-3"
        x="22"
        y="6"
        width="2"
        height="12"
        rx="1"
        fill={color}
      />
    </svg>
  );

  const LockIcon = ({
    className,
    size = 24,
    color = "currentColor",
    locked = true,
  }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <style>
        {`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }
        .lock-shake:hover { animation: shake 0.5s ease-in-out; }
      `}
      </style>
      <g className="lock-shake">
        <rect
          x="6"
          y="10"
          width="12"
          height="10"
          rx="2"
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
        <path
          d={locked ? "M8 10V7a4 4 0 018 0v3" : "M8 10V7a4 4 0 018 0v1"}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="15" r="1.5" fill={color} />
      </g>
    </svg>
  );

  const ChatBubbleIcon = ({
    className,
    size = 24,
    color = "currentColor",
    animated = false,
  }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      {animated && (
        <style>
          {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          .chat-bounce { animation: bounce 2s ease-in-out infinite; }
        `}
        </style>
      )}
      <g className={animated ? "chat-bounce" : ""}>
        <path
          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="9" cy="12" r="1" fill={color} />
        <circle cx="12" cy="12" r="1" fill={color} />
        <circle cx="15" cy="12" r="1" fill={color} />
      </g>
    </svg>
  );

  const EmailIcon = ({ className, size = 24, color = "currentColor" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M3 7l9 6 9-6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const SparkleIcon = ({ className, size = 24, color = "currentColor" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <style>
        {`
        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .sparkle-anim { animation: sparkle 2s ease-in-out infinite; }
      `}
      </style>
      <g className="sparkle-anim">
        <path
          d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z"
          fill={color}
          fillOpacity="0.8"
        />
        <circle cx="18" cy="6" r="2" fill={color} fillOpacity="0.6" />
      </g>
    </svg>
  );

  // ============= ICON WRAPPER COMPONENT =============

  const IconText = ({ icon, text, className = "" }) => (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
    >
      {icon}
      <span>{text}</span>
    </span>
  );

  // ============= ENHANCED GET VOICE STATUS FUNCTION =============

  const getVoiceStatus = () => {
    // Icon configuration
    const iconSize = deviceInfo.isMobile ? 20 : 24;
    const iconColor = "currentColor";

    // 💡 Enhanced Suggestions Array with Icons
    const suggestions = [
      {
        text: deviceInfo.isMobile
          ? 'Tap & say: "I want to recruit Laxman"'
          : 'Click & say: "I want to recruit Laxman"',
        icon: <ChatBubbleIcon size={iconSize} color={iconColor} animated />,
      },
      {
        text: 'Try saying: "Give me a quick overview"',
        icon: <SparkleIcon size={iconSize} color={iconColor} />,
      },
      {
        text: 'Try saying: "Send an email to Laxman"',
        icon: <EmailIcon size={iconSize} color={iconColor} />,
      },
      {
        text: deviceInfo.isMobile
          ? "Tap to start speaking..."
          : "Click avatar to start speaking...",
        icon: <MicrophoneIcon size={iconSize} color={iconColor} animated />,
      },
    ];

    switch (assistantState) {
      case "listening":
        return {
          title: (
            <IconText
              icon={<MicrophoneIcon size={iconSize} color="#10b981" animated />}
              text="Listening..."
            />
          ),
          subtitle: deviceInfo.isMobile
            ? "Speak clearly!"
            : "Speak clearly, I'm listening carefully!",
        };

      case "thinking":
        return {
          title: (
            <IconText
              icon={<ThinkingIcon size={iconSize} color="#3b82f6" />}
              text="Processing..."
            />
          ),
          subtitle: deviceInfo.isMobile
            ? "AI analyzing..."
            : "AI finding the perfect answer...",
        };

      case "speaking":
        return {
          title: (
            <IconText
              icon={<SpeakingIcon size={iconSize} color="#8b5cf6" />}
              text="Speaking..."
            />
          ),
          subtitle: deviceInfo.isMobile
            ? "Response playing"
            : "Delivering your response",
        };

      default:
        return {
          title: deviceInfo.isMobile
            ? "Laxman's AI Assistant"
            : "Laxman's Enhanced AI",
          subtitle:
            connectionStatus === "connected" ? (
              <IconText
                icon={suggestions[suggestionIndex]?.icon}
                text={suggestions[suggestionIndex]?.text}
              />
            ) : connectionStatus === "connecting" ? (
              <IconText
                icon={<ThinkingIcon size={iconSize - 4} color={iconColor} />}
                text="Setting up voice features..."
              />
            ) : (
              <IconText
                icon={<LockIcon size={iconSize} color="#ef4444" locked />}
                text={
                  deviceInfo.isMobile
                    ? "Click to enable microphone and start speaking"
                    : "Click to enable microphone and start speaking"
                }
              />
            ),
        };
    }
  };

  useEffect(() => {
    const checkServices = async () => {
      console.log("🔧 Checking voice services...");

      if (!checkBrowserCompatibility()) {
        setConnectionStatus("disconnected");
        return;
      }

      // Load voices early
      loadVoices().then((success) => {
        console.log("🔊 Voices loaded:", success);
      });

      if (hasPermission) {
        setConnectionStatus("connected");
        console.log("✅ All services ready");
      } else {
        setConnectionStatus("disconnected");
        console.log("⏳ Waiting for microphone permission");
      }
    };

    checkServices();
  }, [
    checkBrowserCompatibility,
    hasPermission,
    retryCount,
    showNotice,
    loadVoices,
  ]);

  // Auto mode effect
  useEffect(() => {
    autoModeRef.current = isAutoMode;
  }, [isAutoMode]);

  // Help timer with mobile adjustment
  useEffect(() => {
    const timer = setTimeout(
      () => setShowHelp(false),
      deviceInfo.isMobile ? 8000 : 10000
    );
    return () => clearTimeout(timer);
  }, [deviceInfo.isMobile]);

  // Enhanced cleanup
  useEffect(() => {
    return () => {
      console.log("🧹 Cleaning up voice assistant...");
      stopAll();

      if (noticeTimeoutRef.current) {
        clearTimeout(noticeTimeoutRef.current);
      }

      if (permissionCheckTimeoutRef.current) {
        clearTimeout(permissionCheckTimeoutRef.current);
      }

      if (speechTimeoutRef.current) {
        clearTimeout(speechTimeoutRef.current);
      }

      if (
        audioContextRef.current &&
        audioContextRef.current.state !== "closed"
      ) {
        audioContextRef.current.suspend().catch(console.warn);
      }
    };
  }, [stopAll]);

  const statusText = getVoiceStatus();
  const isDisabled = connectionStatus !== "connected" || !hasPermission;

  if (!isVisible) return null;

  return (
    <>
      <GlobalLiquidGlassStyles />

      {/* Enhanced Notice */}
      {notice && (
        <NoticeCard
          type={notice.type}
          show={notice.show}
          isMobile={deviceInfo.isMobile}
          flatMode={flatMode}
          theme={theme}
        >
          <div className="notice-title">{notice.title}</div>
          <div className="notice-content">{notice.content}</div>
        </NoticeCard>
      )}
      {/* ✅ ADD EMAIL FORM MODAL */}
      <EmailFormModal
        show={showEmailForm}
        onClose={() => setShowEmailForm(false)}
        inquiryType={emailInquiryType}
        onSubmit={handleEmailFormSubmit}
        isMobile={deviceInfo.isMobile}
        // themeMode={theme.name === 'light' ? 'light' : 'dark'}
        themeMode={theme?.name === "light" ? "light" : "dark"}
      />

      {/* Enhanced Voice Assistant Container */}
      <VoiceContainer
        state={assistantState}
        isClosing={isClosing}
        isMobile={deviceInfo.isMobile}
        isKeyboardOpen={isKeyboardOpen}
        flatMode={flatMode}
        motionReduce={motionReduce}
      >
        <ConnectionIndicator
          status={connectionStatus}
          isMobile={deviceInfo.isMobile}
          motionReduce={motionReduce}
          flatMode={flatMode}
        />

        <CloseButton
          onClick={closeChat}
          isMobile={deviceInfo.isMobile}
          flatMode={flatMode}
          theme={theme}
        >
          ×
        </CloseButton>

        <VoiceAvatar
          state={assistantState}
          disabled={isDisabled}
          isMobile={deviceInfo.isMobile}
          motionReduce={motionReduce}
          flatMode={flatMode}
          voiceIntensity={voiceIntensity}
          title={
            isDisabled
              ? deviceInfo.isMobile
                ? "Tap to enable voice chat!"
                : "Click to enable voice chat!"
              : ""
          }
          onClick={async () => {
            if (isDisabled) {
              if (!hasPermission) {
                await requestMicrophonePermission();
              }
              return;
            }

            if (assistantState === "idle") {
              // Initialize speech synthesis context (required for some browsers)
              if (!window.speechSynthesis.speaking) {
                const testUtterance = new SpeechSynthesisUtterance("");
                testUtterance.volume = 0;
                window.speechSynthesis.speak(testUtterance);
                window.speechSynthesis.cancel();
              }

              // First interaction: speak introduction then listen
              if (isFirstInteraction) {
                speakIntroduction();
              } else {
                // Subsequent interactions: directly start listening
                startListening();
              }
            } else {
              stopAll();
            }
          }}
        >
          {isDisabled
            ? "🔒"
            : assistantState === "listening"
            ? "🎙️"
            : assistantState === "thinking"
            ? "🧠"
            : assistantState === "speaking"
            ? "🗣️"
            : "💬"}
        </VoiceAvatar>

        <VoiceStatus
          isMobile={deviceInfo.isMobile}
          flatMode={flatMode}
          theme={theme}
        >
          <div className="status-title">{statusText.title}</div>
          <div className="status-subtitle">{statusText.subtitle}</div>
        </VoiceStatus>

        <VoiceWaves
          state={assistantState}
          isMobile={deviceInfo.isMobile}
          motionReduce={motionReduce}
          flatMode={flatMode}
        >
          {[...Array(deviceInfo.isMobile ? 5 : 7)].map((_, i) => (
            <div
              key={i}
              className="wave-bar"
              style={{
                height: `${4 + voiceIntensity * 24}px`,
                opacity:
                  assistantState === "listening" ||
                  assistantState === "speaking"
                    ? 0.6 + voiceIntensity * 0.4
                    : 0,
              }}
            />
          ))}
        </VoiceWaves>

        <InterimText
          show={!!interimTranscript}
          isMobile={deviceInfo.isMobile}
          flatMode={flatMode}
        >
          "{interimTranscript}"
        </InterimText>

        <VoiceControls isMobile={deviceInfo.isMobile} flatMode={flatMode}>
          <ButtonRow isMobile={deviceInfo.isMobile} flatMode={flatMode}>
            <div style={{ textAlign: "center" }}>
              <VoiceButton
                onClick={assistantState === "idle" ? startListening : stopAll}
                disabled={isDisabled}
                active={assistantState !== "idle"}
                buttonType="mic"
                isMobile={deviceInfo.isMobile}
                motionReduce={motionReduce}
                flatMode={flatMode}
                title={
                  assistantState === "idle"
                    ? "Ask one question"
                    : "Stop current action"
                }
              >
                <div className="icon-wrapper">
                  <ButtonIcon
                    type={assistantState === "idle" ? "mic" : "stop"}
                  />
                </div>
              </VoiceButton>
              <ButtonLabel
                disabled={isDisabled}
                isMobile={deviceInfo.isMobile}
                theme={theme}
              >
                {deviceInfo.isMobile ? "One Time" : "One Time\nQuestion"}
              </ButtonLabel>
            </div>

            <div style={{ textAlign: "center" }}>
              <VoiceButton
                active={isAutoMode}
                onClick={toggleAutoMode}
                disabled={isDisabled}
                buttonType="auto"
                isMobile={deviceInfo.isMobile}
                motionReduce={motionReduce}
                flatMode={flatMode}
                title="Toggle continuous conversation mode"
              >
                <div className="icon-wrapper">
                  <ButtonIcon type="auto" />
                </div>
              </VoiceButton>
              <ButtonLabel disabled={isDisabled} isMobile={deviceInfo.isMobile}>
                {deviceInfo.isMobile ? "Auto Mode" : "Auto\nMode"}
              </ButtonLabel>
            </div>

            <div style={{ textAlign: "center" }}>
              <VoiceButton
                onClick={testTTS}
                disabled={!("speechSynthesis" in window)}
                buttonType="test"
                isMobile={deviceInfo.isMobile}
                motionReduce={motionReduce}
                flatMode={flatMode}
                title="Test voice output"
              >
                <div className="icon-wrapper">
                  <ButtonIcon type="test" />
                </div>
              </VoiceButton>
              <ButtonLabel
                disabled={!("speechSynthesis" in window)}
                isMobile={deviceInfo.isMobile}
              >
                {deviceInfo.isMobile ? "Test Voice" : "Test\nVoice"}
              </ButtonLabel>
            </div>
          </ButtonRow>

          {!deviceInfo.isMobile && (
            <ButtonRow isMobile={deviceInfo.isMobile} flatMode={flatMode}>
              <div style={{ textAlign: "center" }}>
                <VoiceButton
                  onClick={toggleFlatMode}
                  buttonType="3d"
                  active={!flatMode}
                  isMobile={deviceInfo.isMobile}
                  motionReduce={motionReduce}
                  flatMode={flatMode}
                  title="Toggle 3D/Flat mode"
                >
                  <div className="icon-wrapper">
                    <ButtonIcon type={flatMode ? "flat" : "3d"} />
                  </div>
                </VoiceButton>
                <ButtonLabel isMobile={deviceInfo.isMobile}>
                  {flatMode ? "Flat Mode" : "3D Mode"}
                </ButtonLabel>
              </div>
            </ButtonRow>
          )}
        </VoiceControls>

        <HelpHint
          show={
            showHelp &&
            assistantState === "idle" &&
            connectionStatus === "connected"
          }
          isMobile={deviceInfo.isMobile}
          flatMode={flatMode}
          theme={theme}
        >
          🌟{" "}
          {deviceInfo.isMobile
            ? 'Say "Hello" or ask about Laxman!'
            : "Experience agentic AI - navigate & explore!"}
        </HelpHint>
      </VoiceContainer>
    </>
  );
};

// Main Export with Enhanced Liquid Glass
const LiquidGlassSiri = ({ onClose, theme }) => {
  return <VoiceAssistant onClose={onClose} theme={theme} />;
};

export default LiquidGlassSiri;
export { HeroTintSampler, PerformanceManager };
