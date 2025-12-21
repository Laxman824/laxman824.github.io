import React, { useState, useEffect } from "react";
import {
  FaTimes,
  FaFolder,
  FaFolderOpen,
  FaFileCode,
  FaFileAlt,
  FaImage,
  FaPlay,
  FaLightbulb,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaNewspaper,
  FaGithub,
  FaCopy,
  FaCheck,
  FaTerminal,
  FaCode,
} from "react-icons/fa";
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscExtensions,
  VscChevronRight,
  VscChevronDown,
} from "react-icons/vsc";
import "./ProjectModal.css";
import TerminalComponent from "./TerminalComponent";

// ✅ Import New Components
import ArchitectureDiagram from "./ArchitectureDiagram";
import BeforeAfterSlider from "./BeforeAfterSlider";
import Timeline from "./Timeline";
import LoadingSkeleton from "./LoadingSkeleton";

const ProjectModal = ({ project, theme, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("README.md");
  const [expandedFolders, setExpandedFolders] = useState(["src", "docs"]);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [terminalText, setTerminalText] = useState("");

  // Simulate loading
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isOpen, activeTab]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Terminal effect
  useEffect(() => {
    if (isOpen && activeTab === "terminal") {
      const commands = [
        "$ git clone " + (project?.url || "https://github.com/..."),
        "$ cd " +
          (project?.name?.replace(/[^a-zA-Z]/g, "-").toLowerCase() ||
            "project"),
        "$ npm install",
        "$ npm run dev",
        "",
        "✓ Ready on http://localhost:3000",
      ];
      let i = 0;
      let text = "";
      const interval = setInterval(() => {
        if (i < commands.length) {
          text += commands[i] + "\n";
          setTerminalText(text);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isOpen, activeTab, project]);

  if (!isOpen || !project) return null;

  const details = project.details || {};

  // File tree
  const fileTree = [
    {
      name: "src",
      type: "folder",
      children: [
        { name: "README.md", type: "file", icon: <FaFileAlt /> },
        { name: "PROBLEM.md", type: "file", icon: <FaLightbulb /> },
        { name: "SOLUTION.md", type: "file", icon: <FaCheckCircle /> },
      ],
    },
    {
      name: "docs",
      type: "folder",
      children: [
        { name: "screenshots", type: "file", icon: <FaImage /> },
        { name: "demo", type: "file", icon: <FaPlay /> },
      ],
    },
    { name: "tech-stack.json", type: "file", icon: <FaFileCode /> },
    { name: "impact.md", type: "file", icon: <FaCheckCircle /> },
  ];

  const toggleFolder = (folderName) => {
    setExpandedFolders((prev) =>
      prev.includes(folderName)
        ? prev.filter((f) => f !== folderName)
        : [...prev, folderName]
    );
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Render tree
  const renderTree = (items) => {
    return items.map((item) => {
      if (item.type === "folder") {
        const isExpanded = expandedFolders.includes(item.name);
        return (
          <div key={item.name} className="tree-folder">
            <div
              className="tree-item folder"
              onClick={() => toggleFolder(item.name)}
            >
              {isExpanded ? <VscChevronDown /> : <VscChevronRight />}
              {isExpanded ? (
                <FaFolderOpen className="folder-icon open" />
              ) : (
                <FaFolder className="folder-icon" />
              )}
              <span>{item.name}</span>
            </div>
            {isExpanded && (
              <div className="tree-children">{renderTree(item.children)}</div>
            )}
          </div>
        );
      }
      return (
        <div
          key={item.name}
          className={`tree-item file ${
            activeTab === item.name ? "active" : ""
          }`}
          onClick={() => {
            setActiveTab(item.name);
            setIsLoading(true);
          }}
        >
          {item.icon}
          <span>{item.name}</span>
        </div>
      );
    });
  };

  // ============================================
  // ✅ UPDATED RENDER CONTENT WITH NEW COMPONENTS
  // ============================================
  const renderContent = () => {
    // Show loading skeleton
    if (isLoading) {
      return <LoadingSkeleton />;
    }

    switch (activeTab) {
      // ============================================
      // ✅ README.MD - MAIN OVERVIEW WITH ALL NEW FEATURES
      // ============================================
      case "README.md":
        return (
          <div className="content-readme">
            {/* Title */}
            <h1>{project.name}</h1>
            <p className="project-tagline">{project.description}</p>

            {/* Tech Badges */}
            <div className="badges">
              {project.languages?.map((lang, i) => (
                <span
                  key={i}
                  className="badge"
                  data-tooltip={`Used for ${lang.name}`}
                >
                  {lang.name}
                </span>
              ))}
            </div>

            {/* ✅ STORYTELLING FORMAT (If 'story' exists in data) */}
            {details.story ? (
              <div className="story-flow">
                <div className="story-section problem">
                  <div className="story-header">
                    <span className="story-number">1</span>
                    <h3 className="story-title">The Problem</h3>
                  </div>
                  <p className="story-content">{details.story.problem}</p>

                  {/* News Links (Story Mode) */}
                  {details.newsLinks && details.newsLinks.length > 0 && (
                    <div className="media-mentions">
                      <h5>
                        <FaNewspaper /> Featured In :
                      </h5>
                      <div className="media-links-grid">
                        {details.newsLinks.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="media-link-card"
                          >
                            <div className="media-source">{link.source}</div>
                            <div className="media-title">{link.title}</div>
                            <FaExternalLinkAlt className="media-icon" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {/* ... rest of story flow ... */}
                <div className="story-connector"></div>
                <div className="story-section approach">
                  <div className="story-header">
                    <span className="story-number">2</span>
                    <h3 className="story-title">My Approach</h3>
                  </div>
                  <p className="story-content">{details.story.approach}</p>
                </div>
                <div className="story-connector"></div>
                <div className="story-section solution">
                  <div className="story-header">
                    <span className="story-number">3</span>
                    <h3 className="story-title">The Solution</h3>
                  </div>
                  <p className="story-content">{details.story.solution}</p>
                </div>
                <div className="story-connector"></div>
                <div className="story-section result">
                  <div className="story-header">
                    <span className="story-number">4</span>
                    <h3 className="story-title">The Results</h3>
                  </div>
                  <p className="story-content">{details.story.result}</p>
                </div>
              </div>
            ) : (
              // ✅ FALLBACK / STANDARD MODE (This is what executes for your data)
              <>
                <h2>📋 Overview / Problem</h2>
                <div className="story-section problem" style={{ marginTop: 0 }}>
                  <p
                    className="story-content"
                    style={{ color: "var(--vscode-text)" }}
                  >
                    {details.problem || project.description}
                  </p>

                  {/* ✅ ADDED HERE: News Links for Standard Mode */}
                  {details.newsLinks && details.newsLinks.length > 0 && (
                    <div className="media-mentions">
                      <h5>
                        <FaNewspaper /> Featured In News:
                      </h5>
                      <div className="media-links-grid">
                        {details.newsLinks.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="media-link-card"
                          >
                            <div className="media-source">{link.source}</div>
                            <div className="media-title">{link.title}</div>
                            <FaExternalLinkAlt className="media-icon" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* ✅ BEFORE/AFTER SLIDER */}
            <h2>📊 Before vs After</h2>
            <BeforeAfterSlider
              before={details.comparison?.before}
              after={details.comparison?.after}
            />

            {/* ✅ ARCHITECTURE DIAGRAM */}
            <h2>🏗️ System Architecture</h2>
            <ArchitectureDiagram architecture={details.architecture} />

            {/* ✅ TIMELINE */}
            <h2>📅 Project Journey</h2>
            <Timeline milestones={details.timeline || []} />

            {/* Role & Info Table */}
            <h2>👤 Role & Timeline</h2>
            <table className="info-table">
              <tbody>
                <tr>
                  <td>Role</td>
                  <td>{details.role || "Full Stack Developer"}</td>
                </tr>
                <tr>
                  <td>Timeline</td>
                  <td>
                    {details.timeline?.[0]?.date || "2024"} -{" "}
                    {details.timeline?.[details.timeline?.length - 1]?.date ||
                      "Present"}
                  </td>
                </tr>
                <tr>
                  <td>Team</td>
                  <td>{details.team || "Solo Project"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      // ============================================
      // PROBLEM.MD
      // ============================================
      case "PROBLEM.md":
        return (
          <div className="content-problem">
            <h1>🔴 The Problem</h1>
            <div className="problem-box">
              <p>
                {details.story?.problem ||
                  details.problem ||
                  "Problem description not available."}
              </p>
            </div>

            <h2>Pain Points</h2>
            <ul className="pain-points">
              <li>⏰ Time-consuming manual processes</li>
              <li>❌ Error-prone and inconsistent results</li>
              <li>📈 Doesn't scale with growing data</li>
              <li>💰 High operational costs</li>
            </ul>

            {/* Before/After here too */}
            <h2>📊 Impact Comparison</h2>
            <BeforeAfterSlider
              before={details.comparison?.before}
              after={details.comparison?.after}
            />
          </div>
        );
      case "terminal":
        return <TerminalComponent project={project} />;
      // ============================================
      // SOLUTION.MD
      // ============================================
      case "SOLUTION.md":
        return (
          <div className="content-solution">
            <h1>✅ The Solution</h1>
            <div className="solution-box">
              <p>
                {details.story?.solution ||
                  details.solution ||
                  "Solution description not available."}
              </p>
            </div>

            {/* Architecture Diagram */}
            <h2>🏗️ How It Works</h2>
            <ArchitectureDiagram architecture={details.architecture} />

            {/* Code Snippet */}
            {details.codeSnippets?.[0] && (
              <>
                <h2>💻 Code Snippet</h2>
                <div className="code-block">
                  <div className="code-header">
                    <div className="code-header-left">
                      <span className="code-filename">
                        {details.codeSnippets[0].filename}
                      </span>
                      <span className="code-lang-badge">
                        {details.codeSnippets[0].language}
                      </span>
                    </div>
                    <button
                      onClick={() => copyCode(details.codeSnippets[0].code)}
                      className={copied ? "copied" : ""}
                    >
                      {copied ? (
                        <>
                          <FaCheck /> Copied
                        </>
                      ) : (
                        <>
                          <FaCopy /> Copy
                        </>
                      )}
                    </button>
                  </div>
                  <pre>
                    <code>{details.codeSnippets[0].code}</code>
                  </pre>
                </div>
              </>
            )}
          </div>
        );

      // ============================================
      // TECH-STACK.JSON
      // ============================================
      case "tech-stack.json":
        return (
          <div className="content-techstack">
            <h1>🛠️ Tech Stack</h1>
            <div className="techstack-json">
              <pre>
                {JSON.stringify(
                  {
                    languages: project.languages?.map((l) => l.name) || [],
                    frontend: details.techStack?.frontend || [],
                    backend: details.techStack?.backend || [],
                    ai: details.techStack?.ai || [],
                    cloud: details.techStack?.cloud || [],
                  },
                  null,
                  2
                )}
              </pre>
            </div>

            <h2>Technologies Used</h2>
            <div className="tech-categories">
              {details.techStack ? (
                Object.entries(details.techStack).map(([category, techs]) => (
                  <div key={category} className="tech-category">
                    <h3>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                    <div className="tech-badges">
                      {techs.map((tech, i) => (
                        <span
                          key={i}
                          className="tech-badge"
                          data-tooltip={
                            tech.tooltip || `${tech.name || tech} technology`
                          }
                        >
                          {tech.name || tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="tech-category">
                  <h3>All Technologies</h3>
                  <div className="tech-badges">
                    {project.languages?.map((lang, i) => (
                      <span key={i} className="tech-badge">
                        {lang.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      // ============================================
      // IMPACT.MD
      // ============================================
      case "impact.md":
        return (
          <div className="content-impact">
            <h1>📈 Impact & Results</h1>

            <div className="impact-grid">
              {details.impact?.length > 0 ? (
                details.impact.map((item, i) => (
                  <div key={i} className="impact-card">
                    <FaCheckCircle className="impact-icon" />
                    <span>{item}</span>
                  </div>
                ))
              ) : (
                <>
                  <div className="impact-card">
                    <FaCheckCircle className="impact-icon" />
                    <span>Improved efficiency by 80%</span>
                  </div>
                  <div className="impact-card">
                    <FaCheckCircle className="impact-icon" />
                    <span>Reduced manual work significantly</span>
                  </div>
                  <div className="impact-card">
                    <FaCheckCircle className="impact-icon" />
                    <span>Scalable architecture</span>
                  </div>
                </>
              )}
            </div>

            {/* Timeline */}
            <h2>📅 Project Timeline</h2>
            <Timeline milestones={details.timeline || []} />

            <h2>💡 Key Learnings</h2>
            <ul className="learnings-list">
              {details.learnings?.length > 0 ? (
                details.learnings.map((learning, i) => (
                  <li key={i}>{learning}</li>
                ))
              ) : (
                <>
                  <li>Importance of clean architecture</li>
                  <li>Performance optimization techniques</li>
                  <li>User-centric design thinking</li>
                </>
              )}
            </ul>
          </div>
        );

      // ============================================
      // SCREENSHOTS
      // ============================================
      case "screenshots":
        return (
          <div className="content-screenshots">
            <h1>📸 Screenshots</h1>
            <div className="screenshots-grid">
              {details.screenshots?.length > 0 ? (
                details.screenshots.map((img, i) => (
                  <div key={i} className="screenshot-card">
                    <img src={img.url} alt={img.title} />
                    <span>{img.title}</span>
                  </div>
                ))
              ) : (
                <div className="placeholder-screenshots">
                  <FaImage className="placeholder-icon" />
                  <p>Screenshots coming soon...</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Project <FaExternalLinkAlt />
                  </a>
                </div>
              )}
            </div>
          </div>
        );

      // ============================================
      // DEMO
      // ============================================
      case "demo":
        return (
          <div className="content-demo">
            <h1>🎬 Demo</h1>
            {details.demoVideo ? (
              <div className="video-container">
                <iframe
                  src={details.demoVideo}
                  title="Project Demo"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="placeholder-demo">
                <FaPlay className="placeholder-icon" />
                <p>Demo video coming soon...</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Try Live Demo <FaExternalLinkAlt />
                </a>
              </div>
            )}
          </div>
        );

      // ============================================
      // TERMINAL
      // ============================================
      case "terminal":
        return (
          <div className="content-terminal">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">Terminal - zsh</span>
            </div>
            <pre className="terminal-body">
              {terminalText}
              <span className="cursor">▋</span>
            </pre>
          </div>
        );

      default:
        return <div>Select a file to view</div>;
    }
  };

  // ============================================
  // MAIN RENDER
  // ============================================
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="vscode-modal" onClick={(e) => e.stopPropagation()}>
        {/* Title Bar */}
        <div className="vscode-titlebar">
          <div className="titlebar-left">
            <div className="titlebar-traffic-lights">
              <span className="traffic-light red" onClick={onClose}></span>
              <span className="traffic-light yellow"></span>
              <span className="traffic-light green"></span>
            </div>
            <FaCode className="vscode-icon" />
            <span>{project.name} — Project Viewer</span>
          </div>
          <div className="titlebar-right">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="titlebar-btn"
            >
              <FaExternalLinkAlt />
            </a>
            <button className="titlebar-btn close" onClick={onClose}>
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="vscode-main">
          {/* Activity Bar */}
          <div className="vscode-activitybar">
            <div className="activity-icon active">
              <VscFiles />
            </div>
            <div className="activity-icon">
              <VscSearch />
            </div>
            <div className="activity-icon">
              <VscSourceControl />
            </div>
            <div className="activity-icon">
              <VscExtensions />
            </div>
            <div
              className="activity-icon terminal-icon"
              onClick={() => {
                setActiveTab("terminal");
                setIsLoading(true);
              }}
            >
              <FaTerminal />
            </div>
          </div>

          {/* Sidebar */}
          <div className="vscode-sidebar">
            <div className="sidebar-header">
              <span>EXPLORER</span>
            </div>
            <div className="sidebar-section">
              <div className="section-title">
                <VscChevronDown />
                <span>
                  {project.name
                    .replace(/[^\w\s]/g, "")
                    .trim()
                    .toUpperCase()
                    .slice(0, 20)}
                </span>
              </div>
              <div className="file-tree">{renderTree(fileTree)}</div>
            </div>
          </div>

          {/* Editor */}
          <div className="vscode-editor">
            {/* Tabs */}
            <div className="editor-tabs">
              {[
                "README.md",
                "PROBLEM.md",
                "SOLUTION.md",
                "tech-stack.json",
                "impact.md",
              ].map((tab) => (
                <div
                  key={tab}
                  className={`editor-tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsLoading(true);
                  }}
                >
                  <FaFileAlt className="tab-icon" />
                  <span className="tab-text">{tab}</span>
                  {activeTab === tab && <span className="tab-close">×</span>}
                </div>
              ))}
            </div>

            {/* Breadcrumb */}
            <div className="editor-breadcrumb">
              <span className="breadcrumb-item">
                {project.name.replace(/[^\w\s]/g, "").trim()}
              </span>
              <VscChevronRight className="breadcrumb-separator" />
              <span className="breadcrumb-item">src</span>
              <VscChevronRight className="breadcrumb-separator" />
              <span className="breadcrumb-item">{activeTab}</span>
            </div>

            {/* Content */}
            <div className="editor-content">{renderContent()}</div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="vscode-statusbar">
          <div className="statusbar-left">
            <span className="statusbar-item">
              <VscSourceControl /> main
            </span>
          </div>
          <div className="statusbar-right">
            <span className="statusbar-item success">✓ Synced</span>
            <span className="statusbar-item">UTF-8</span>
            <span className="statusbar-item">Markdown</span>
            <span className="statusbar-item">Ln 1, Col 1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
