// code with mascot interaction removed for brevity and optmised
// import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
// // import React, { useState, useEffect, useRef, useCallback } from "react";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import ProjectCard from "../../components/ProjectCard/ProjectCard";
// import { Fade } from "react-reveal";
// import { projectsHeader, projects, socialMediaLinks } from "../../portfolio.js";
// import "./Projects.css";
// import ProjectsImg from "./ProjectsImg";
// // ========================================
// // 1. OPTIMIZED MASCOT COMPONENT
// // ========================================
// const EyeTrackingMascot = ({ theme, setMascotStateRef }) => {
//   const mascotRef = useRef(null);
//   const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
//   const [isBlinking, setIsBlinking] = useState(false);
//   const [state, setState] = useState('greeting'); // greeting, sleeping, awake, excited, thinking, yawning
//   const [showMessage, setShowMessage] = useState('');
//   const [isNearMouse, setIsNearMouse] = useState(false);
//   const [sleepZzz, setSleepZzz] = useState([]);
//   const [particles, setParticles] = useState([]);

//   const inactivityTimerRef = useRef(null);
//   const greetingTimeoutRef = useRef(null);
//   const rafRef = useRef(null); // For smooth animation frame

//   // Allow parent (Projects component) to control mascot state
//   useEffect(() => {
//     if (setMascotStateRef) {
//       setMascotStateRef.current = (newState, message) => {
//         setState(newState);
//         if (message) setShowMessage(message);
//         resetInactivityTimer();

//         // If switching to awake/excited, ensure we go back to tracking
//         if (newState === 'excited') {
//           setTimeout(() => setState('awake'), 1500);
//         }
//       };
//     }
//   }, [setMascotStateRef]);

//   // Initial Greeting (Fast & Snappy: ~2.5s total)
//   useEffect(() => {
//     setState('greeting');
//     setShowMessage('Hi there! 👋');

//     greetingTimeoutRef.current = setTimeout(() => {
//       setShowMessage('Check out these projects!');

//       setTimeout(() => {
//         setState('awake'); // Switch to tracking mode
//         setShowMessage('');
//         resetInactivityTimer(); // Start the 15s sleep timer
//       }, 1500); // Wait 1.5s then wake up

//     }, 1000); // Wait 1s then show second message

//     return () => {
//       if (greetingTimeoutRef.current) clearTimeout(greetingTimeoutRef.current);
//     };
//   }, []);

//   // Inactivity Timer (15 seconds -> Yawn -> Sleep)
//   const resetInactivityTimer = useCallback(() => {
//     if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);

//     if (state !== 'greeting' && state !== 'sleeping') {
//       inactivityTimerRef.current = setTimeout(() => {
//         setState('yawning');
//         setShowMessage('*yawn* 🥱');
//         setTimeout(() => {
//           setState('sleeping');
//           setShowMessage('');
//         }, 2000);
//       }, 7500); // 15 Seconds
//     }
//   }, [state]);

//   // Eye Tracking (Performance Optimized with requestAnimationFrame)
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!mascotRef.current) return;

//       // Cancel previous frame to prevent stacking
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);

//       // Schedule update for next paint
//       rafRef.current = requestAnimationFrame(() => {
//         const mascotRect = mascotRef.current.getBoundingClientRect();
//         const mascotCenterX = mascotRect.left + mascotRect.width / 2;
//         const mascotCenterY = mascotRect.top + mascotRect.height / 2;

//         const deltaX = e.clientX - mascotCenterX;
//         const deltaY = e.clientY - mascotCenterY;
//         const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

//         setIsNearMouse(distance < 200);

//         // Eye movement (only when awake)
//         if (state !== 'sleeping') {
//           const maxMove = 8;
//           const clampedDistance = Math.min(distance, 150);
//           const ratio = clampedDistance / 150;

//           const eyeX = (deltaX / (distance || 1)) * maxMove * ratio;
//           const eyeY = (deltaY / (distance || 1)) * maxMove * ratio;

//           setEyePosition({ x: eyeX, y: eyeY });
//         } else {
//           setEyePosition({ x: 0, y: 0 });
//         }

//         resetInactivityTimer();
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [state, resetInactivityTimer]);

//   // Interactions (Click, Hover)
//   const handleClick = () => {
//     if (state === 'sleeping') {
//       setState('excited');
//       setShowMessage('Wakey wakey! 😊');
//       setTimeout(() => setState('awake'), 2000);
//     } else {
//       setState('excited');
//       setShowMessage('You found me! 🎯');
//       createParticles();
//       setTimeout(() => { setState('awake'); setShowMessage(''); }, 2000);
//     }
//     resetInactivityTimer();
//   };

//   const createParticles = () => {
//     const newParticles = Array.from({ length: 8 }, (_, i) => ({
//       id: Date.now() + i,
//       emoji: ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)]
//     }));
//     setParticles(newParticles);
//     setTimeout(() => setParticles([]), 1000);
//   };

//   // Sleeping ZZZ Animation
//   useEffect(() => {
//     let zzzInterval;
//     if (state === 'sleeping') {
//       zzzInterval = setInterval(() => {
//         setSleepZzz(prev => {
//           const newZzz = [...prev, { id: Date.now() }];
//           return newZzz.slice(-3);
//         });
//       }, 1500);
//     } else setSleepZzz([]);
//     return () => clearInterval(zzzInterval);
//   }, [state]);

//   // Random Blinking
//   useEffect(() => {
//     if (state === 'sleeping') return;
//     const blinkInterval = setInterval(() => {
//       if (Math.random() > 0.7) {
//         setIsBlinking(true);
//         setTimeout(() => setIsBlinking(false), 150);
//       }
//     }, 2000);
//     return () => clearInterval(blinkInterval);
//   }, [state]);

//   // SVG Helper Functions
//   const getEyeHeight = () => {
//     if (isBlinking || state === 'sleeping') return 1;
//     if (state === 'yawning') return 6;
//     if (state === 'excited') return 12;
//     return 10;
//   };

//   const getMouth = () => {
//     if (state === 'greeting' || state === 'excited') return <><path d="M 50 82 Q 60 90 70 82" fill="none" stroke="#667eea" strokeWidth="3" strokeLinecap="round"/><ellipse cx="60" cy="86" rx="3" ry="2" fill="#ff6b9d" opacity="0.6"/></>;
//     if (state === 'yawning') return <ellipse cx="60" cy="84" rx="8" ry="10" fill="#667eea" className="yawning-mouth"/>;
//     if (state === 'sleeping') return <path d="M 50 84 Q 60 82 70 84" fill="none" stroke="#667eea" strokeWidth="2" strokeLinecap="round"/>;
//     return <path d="M 52 83 Q 60 86 68 83" fill="none" stroke="#667eea" strokeWidth="2.5" strokeLinecap="round"/>;
//   };

//   return (
//     <div
//       className={`mascot-container state-${state} ${isNearMouse ? 'mouse-near' : ''}`}
//       ref={mascotRef}
//       onClick={handleClick}
//       role="img"
//     >
//       <svg viewBox="0 0 120 120" className="mascot-svg" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//             <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//             <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
//           </filter>
//           <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#667eea"/><stop offset="100%" stopColor="#764ba2"/></linearGradient>
//           <linearGradient id="faceGradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#f8f9ff"/><stop offset="100%" stopColor="#e8eaff"/></linearGradient>
//           <radialGradient id="eyeGradient" cx="30%" cy="30%"><stop offset="0%" stopColor="#4a5568"/><stop offset="100%" stopColor="#1a202c"/></radialGradient>
//         </defs>

//         <ellipse cx="60" cy="110" rx="35" ry="8" fill="rgba(0,0,0,0.1)" className="mascot-shadow"/>

//         <g className={`mascot-body ${state}`}>
//           <rect x="25" y="45" width="70" height="55" rx="15" fill="url(#bodyGradient)" filter="url(#glow)"/>
//           <rect x="30" y="48" width="25" height="8" rx="4" fill="rgba(255,255,255,0.3)"/>
//         </g>

//         <g className={`mascot-antenna ${state}`}>
//           <line x1="60" y1="20" x2="60" y2="35" stroke="url(#bodyGradient)" strokeWidth="4" strokeLinecap="round"/>
//           <circle cx="60" cy="16" r="6" fill="#f093fb" className="antenna-ball"/>
//           <circle cx="58" cy="14" r="2" fill="rgba(255,255,255,0.6)"/>
//         </g>

//         <rect x="32" y="52" width="56" height="40" rx="8" fill="url(#faceGradient)" stroke="rgba(102, 126, 234, 0.3)" strokeWidth="2"/>

//         <g className={`mascot-eyes ${state}`}>
//           <g className="eye left-eye">
//             <ellipse cx="47" cy="68" rx="10" ry={getEyeHeight()} fill="white" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
//             {state !== 'sleeping' && !isBlinking && <><circle cx={47 + eyePosition.x} cy={68 + eyePosition.y} r={state === 'excited' ? 6 : 5} fill="url(#eyeGradient)" className="pupil"/><circle cx={45 + eyePosition.x * 0.5} cy={66 + eyePosition.y * 0.5} r="2" fill="white" className="eye-shine"/></>}
//           </g>
//           <g className="eye right-eye">
//             <ellipse cx="73" cy="68" rx="10" ry={getEyeHeight()} fill="white" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
//             {state !== 'sleeping' && !isBlinking && <><circle cx={73 + eyePosition.x} cy={68 + eyePosition.y} r={state === 'excited' ? 6 : 5} fill="url(#eyeGradient)" className="pupil"/><circle cx={71 + eyePosition.x * 0.5} cy={66 + eyePosition.y * 0.5} r="2" fill="white" className="eye-shine"/></>}
//           </g>
//         </g>

//         <g className="mascot-mouth">{getMouth()}</g>

//         {(state === 'excited' || state === 'greeting') && (
//           <g className="cheek-blush"><ellipse cx="35" cy="75" rx="6" ry="4" fill="rgba(240, 147, 251, 0.4)"/><ellipse cx="85" cy="75" rx="6" ry="4" fill="rgba(240, 147, 251, 0.4)"/></g>
//         )}

//         <g className="mascot-arms">
//           <rect x="15" y="55" width="12" height="25" rx="6" fill="url(#bodyGradient)" className="left-arm"/>
//           <rect x="93" y="55" width="12" height="25" rx="6" fill="url(#bodyGradient)" className={`right-arm ${state === 'greeting' || state === 'excited' ? 'waving' : ''}`}/>
//         </g>

//         <g className="mascot-feet"><ellipse cx="42" cy="102" rx="12" ry="6" fill="url(#bodyGradient)"/><ellipse cx="78" cy="102" rx="12" ry="6" fill="url(#bodyGradient)"/></g>
//       </svg>

//       {state === 'sleeping' && <div className="sleep-zzz">{sleepZzz.map((zzz, i) => <span key={zzz.id} className="zzz" style={{ animationDelay: `${i * 0.3}s`, left: `${70 + i * 15}%`, top: `${10 + i * 10}%` }}>Z</span>)}</div>}

//       {particles.length > 0 && <div className="mascot-particles">{particles.map((p, i) => <span key={p.id} className="particle" style={{ '--angle': `${(360 / particles.length) * i}deg`, animationDelay: `${i * 0.05}s` }}>{p.emoji}</span>)}</div>}

//       {showMessage && <div className="mascot-message show"><span>{showMessage}</span></div>}

//       {state === 'thinking' && <div className="thought-bubble"><div className="thought-content">💭</div><div className="thought-dots"><span></span><span></span><span></span></div></div>}
//     </div>
//   );
// };
// function Projects(props) {
//   const theme = props.theme;
//   const [activeCategory, setActiveCategory] = useState("ALL");
//   const [isFiltering, setIsFiltering] = useState(false); // For smooth transitions
//   const mascotStateRef = useRef(null);

//   // ========================================
//   // FILTER CATEGORIES - COMPREHENSIVE KEYWORDS
//   // ========================================
//   const categories = [
//     {
//       id: "ALL",
//       label: "All Projects",
//       message: "Here is everything! 📚",
//       state: "excited"
//     },
//     {
//       id: "WEB",
//       label: "Full Stack",
//       keywords: [
//         // Frontend
//         "react", "vite", "html", "css", "javascript", "typescript", "tailwind",
//         // Backend
//         "node", "express", "spring", "spring boot", "flask", "fastapi",
//         // Fullstack / Web apps
//         "web", "frontend", "backend", "full stack", "dashboard", "admin",
//         "e-commerce", "booking", "payment", "rest api", "ui", "mern",
//         // Databases
//         "mongodb", "postgresql", "sql", "database", "dbms",
//         // Deployment
//         "vercel", "render", "streamlit",
//         // Specific project matches
//         "gaming", "airline", "stock exchange", "bittorrent", "amudala"
//       ],
//       message: "I love building products people actually use 🌐",
//       state: "greeting"
//     },
//     {
//       id: "AIML",
//       label: "AI / ML",
//       keywords: [
//         // Core AI/ML
//         "ai", "ml", "machine learning", "deep learning", "neural",
//         // GenAI / LLM
//         "llm", "rag", "genai", "generative", "gemini", "openai", "langchain", "crewai",
//         // Computer Vision
//         "computer vision", "ocr", "opencv", "dlib", "vision", "image",
//         // NLP
//         "nlp", "text", "classification", "extraction",
//         // Agentic
//         "agent", "agentic", "multi-agent", "autonomous",
//         // Frameworks
//         "pytorch", "tensorflow", "vertex ai", "doctr",
//         // Specific project keywords
//         "drowsiness", "detection", "recognition", "pacman", "ravi",
//         "financial insights", "email automation", "pan extraction"
//       ],
//       message: "This is where the real intelligence lives 🧠",
//       state: "thinking"
//     },
//     {
//       id: "CLOUD",
//       label: "Cloud / DevOps",
//       keywords: [
//         // Cloud Providers
//         "cloud", "gcp", "google cloud", "aws", "azure",
//         // Containers & Orchestration
//         "docker", "kubernetes", "container", "kvm", "virtualization", "vm",
//         // GCP Services
//         "cloud run", "pub/sub", "firestore", "bigquery", "cloud storage",
//         // Other Cloud
//         "firebase", "vercel", "render",
//         // DevOps
//         "ci/cd", "deployment", "microservice", "infrastructure",
//         // Architecture
//         "distributed", "scalable", "event-driven", "snapshot",
//         // Languages often used
//         "rust"
//       ],
//       message: "Scalable, production-grade systems ☁️",
//       state: "excited"
//     }
//   ];

//   // ========================================
//   // IMPROVED FILTER LOGIC WITH TECH STACK CHECK
//   // ========================================
//   const filteredProjects = useMemo(() => {
//     if (activeCategory === "ALL") {
//       return projects.data;
//     }

//     const categoryConfig = categories.find(c => c.id === activeCategory);
//     if (!categoryConfig || !categoryConfig.keywords) {
//       return projects.data;
//     }

//     return projects.data.filter((project) => {
//       // Combine name, description, and all tech/language names
//       const projectName = (project.name || "").toLowerCase();
//       const projectDesc = (project.description || "").toLowerCase();
//       const techNames = (project.languages || [])
//         .map(lang => (lang.name || "").toLowerCase())
//         .join(" ");

//       const searchText = `${projectName} ${projectDesc} ${techNames}`;

//       // Check if any keyword matches
//       return categoryConfig.keywords.some(keyword =>
//         searchText.includes(keyword.toLowerCase())
//       );
//     });
//   }, [activeCategory]);

//   // ========================================
//   // HANDLE CATEGORY CHANGE WITH SMOOTH TRANSITION
//   // ========================================
//   const handleCategoryChange = (category) => {
//     if (category.id === activeCategory) return; // Don't re-filter same category

//     // Start fade-out animation
//     setIsFiltering(true);

//     // Trigger Mascot Reaction
//     if (mascotStateRef.current) {
//       mascotStateRef.current(category.state, category.message);
//     }

//     // Wait for fade-out, then change category
//     setTimeout(() => {
//       setActiveCategory(category.id);

//       // Fade back in after state update
//       setTimeout(() => {
//         setIsFiltering(false);
//       }, 50);
//     }, 200);
//   };

//   // ========================================
//   // PROJECT COUNT FOR EACH CATEGORY (Optional - shows count on pills)
//   // ========================================
//   const getCategoryCount = useCallback((categoryId) => {
//     if (categoryId === "ALL") return projects.data.length;

//     const categoryConfig = categories.find(c => c.id === categoryId);
//     if (!categoryConfig || !categoryConfig.keywords) return 0;

//     return projects.data.filter((project) => {
//       const projectName = (project.name || "").toLowerCase();
//       const projectDesc = (project.description || "").toLowerCase();
//       const techNames = (project.languages || [])
//         .map(lang => (lang.name || "").toLowerCase())
//         .join(" ");

//       const searchText = `${projectName} ${projectDesc} ${techNames}`;

//       return categoryConfig.keywords.some(keyword =>
//         searchText.includes(keyword.toLowerCase())
//       );
//     }).length;
//   }, []);

//   return (
//     <div className="projects-main">
//       <Header theme={theme} setTheme={props.setTheme} />

//       <div className="basic-projects">
//         <Fade bottom duration={2000} distance="40px">
//           <div className="projects-heading-div">
//             <div className="projects-heading-img-div">
//               <EyeTrackingMascot theme={theme} setMascotStateRef={mascotStateRef} />
//             </div>
//             {/* Mobile: Static SVG */}
//   <div className="svg-mobile-only">
//     <ProjectsImg theme={theme} />
//   </div>
//             <div className="projects-heading-text-div">
//               <h1 className="projects-heading-text" style={{ color: theme.text }}>
//                 Projects <span className="rocket-emoji" role="img" aria-label="rocket">🚀</span>
//               </h1>
//               <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
//                 {projectsHeader["description"]}
//               </p>

//               {/* === FILTER PILLS === */}

//             </div>
//           </div>
//         </Fade>
//       </div>

//       {/* === PROJECT CARDS WITH SMOOTH TRANSITION === */}
//       <div className={`repo-cards-div-main ${isFiltering ? 'filtering' : ''}`}>
//         {filteredProjects.length > 0 ? (
//           filteredProjects.map((repo, index) => (
//             <div
//               key={repo.id}
//               className="project-card-wrapper"
//               style={{ animationDelay: `${index * 0.05}s` }}
//             >
//               <ProjectCard repo={repo} theme={theme} />
//             </div>
//           ))
//         ) : (
//           <div className="no-projects-found">
//             <div className="empty-state-icon">🔍</div>
//             <p style={{ color: theme.secondaryText }}>
//               No projects found for <strong>{categories.find(c => c.id === activeCategory)?.label}</strong>
//             </p>

//           </div>
//         )}
//       </div>

//       <br /><br /><br />
//       <a className="general-btn" href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer">
//         More Projects (Git)
//       </a>
//       <br /><br />
//       <Footer theme={props.theme} onToggle={props.onToggle} />
//     </div>
//   );
// }

// export default Projects;

// import React from "react";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import ProjectCard from "../../components/ProjectCard/ProjectCard";
// import { Fade } from "react-reveal";
// import { projectsHeader, projects, socialMediaLinks } from "../../portfolio.js";
// import "./Projects.css";
// import ProjectsImg from "./ProjectsImg";

// function Projects(props) {
//   const theme = props.theme;

//   return (
//     <div className="projects-main">
//       <Header theme={theme} setTheme={props.setTheme} />

//       <div className="basic-projects">
//         <Fade bottom duration={2000} distance="40px">
//           <div className="projects-heading-div">

//             <div className="projects-heading-img-div">
//               <ProjectsImg theme={theme} />
//             </div>

//             <div className="projects-heading-text-div">
//               <h1 className="projects-heading-text" style={{ color: theme.text }}>
//                 Projects <span className="rocket-emoji" role="img" aria-label="rocket">🚀</span>
//               </h1>
//               <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
//                 {projectsHeader["description"]}
//               </p>
//             </div>
//           </div>
//         </Fade>
//       </div>

//       <div className="repo-cards-div-main">
//         {projects.data.map((repo) => (
//           <ProjectCard key={repo.id} repo={repo} theme={theme} />
//         ))}
//       </div>

//       <br /><br /><br />
//       <a className="general-btn" href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer">
//         More Projects (Git)
//       </a>
//       <br /><br />
//       <Footer theme={props.theme} onToggle={props.onToggle} />
//     </div>
//   );
// }

// export default Projects;

import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import { Fade } from "react-reveal";
import { projectsHeader, projects, socialMediaLinks } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

function Projects(props) {
  const theme = props.theme;
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle Explore button click from ProjectCard
  const handleExplore = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear after animation
  };

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />

      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                Projects{" "}
                <span className="rocket-emoji" role="img" aria-label="rocket">
                  🚀
                </span>
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>

      {/* Project Cards Grid */}
      <div className="repo-cards-div-main">
        {projects.data.map((repo) => (
          <ProjectCard
            key={repo.id}
            repo={repo}
            theme={theme}
            onExplore={handleExplore} // Pass the handler
          />
        ))}
      </div>

      {/* VS Code Style Modal */}
      <ProjectModal
        project={selectedProject}
        theme={theme}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <br />
      <br />
      <br />
      <a
        className="general-btn"
        href={socialMediaLinks.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        More Projects (Git)
      </a>
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
