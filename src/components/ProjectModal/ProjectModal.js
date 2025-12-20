// src/components/ProjectModal/ProjectModal.js
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

const ProjectModal = ({ project, theme, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("README.md");
  const [expandedFolders, setExpandedFolders] = useState(["src", "docs"]);
  const [copied, setCopied] = useState(false);
  const [terminalText, setTerminalText] = useState("");

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Terminal typing effect
  useEffect(() => {
    if (isOpen && activeTab === "terminal") {
      const commands = [
        "$ git clone " + (project.url || "https://github.com/..."),
        "$ cd " + project.name.replace(/[^a-zA-Z]/g, "-").toLowerCase(),
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

  const { details } = project;
  if (!details) {
    // Fallback if no details
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-fallback" onClick={(e) => e.stopPropagation()}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            View Project <FaExternalLinkAlt />
          </a>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

  // File tree structure
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

  // Render file tree recursively
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
          onClick={() => setActiveTab(item.name)}
        >
          {item.icon}
          <span>{item.name}</span>
        </div>
      );
    });
  };

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "README.md":
        return (
          <div className="content-readme">
            <h1>{project.name}</h1>
            <p className="project-tagline">{project.description}</p>

            <div className="badges">
              {project.languages?.map((lang, i) => (
                <span key={i} className="badge">
                  {lang.name}
                </span>
              ))}
            </div>

            <h2>📋 Overview</h2>
            <p>{details.problem}</p>

            <h2>✨ Key Features</h2>
            <ul>
              {details.features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <h2>👤 Role & Timeline</h2>
            <table className="info-table">
              <tbody>
                <tr>
                  <td>Role</td>
                  <td>{details.role}</td>
                </tr>
                <tr>
                  <td>Timeline</td>
                  <td>{details.timeline}</td>
                </tr>
                <tr>
                  <td>Team</td>
                  <td>{details.team}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "PROBLEM.md":
        return (
          <div className="content-problem">
            <h1>🔴 The Problem</h1>
            <div className="problem-box">
              <p>{details.problem}</p>
            </div>

            <h2>Pain Points</h2>
            <ul className="pain-points">
              <li>⏰ Time-consuming manual processes</li>
              <li>❌ Error-prone and inconsistent results</li>
              <li>📈 Doesn't scale with growing data</li>
              <li>💰 High operational costs</li>
            </ul>
          </div>
        );

      case "SOLUTION.md":
        return (
          <div className="content-solution">
            <h1>✅ The Solution</h1>
            <div className="solution-box">
              <p>{details.solution}</p>
            </div>

            <h2>🛠️ How It Works</h2>
            <div className="architecture-flow">
              <div className="flow-step">
                <span className="step-number">1</span>
                <span>User Query</span>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <span className="step-number">2</span>
                <span>AI Processing</span>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <span className="step-number">3</span>
                <span>Smart Results</span>
              </div>
            </div>

            {details.codeSnippets?.[0] && (
              <>
                <h2>💻 Code Snippet</h2>
                <div className="code-block">
                  <div className="code-header">
                    <span>{details.codeSnippets[0].filename}</span>
                    <button
                      onClick={() => copyCode(details.codeSnippets[0].code)}
                    >
                      {copied ? <FaCheck /> : <FaCopy />}
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

      case "tech-stack.json":
        return (
          <div className="content-techstack">
            <h1>🛠️ Tech Stack</h1>
            <div className="techstack-json">
              <pre>
                {`{
  "frontend": ${JSON.stringify(details.techStack?.frontend || [], null, 4)},
  "backend": ${JSON.stringify(details.techStack?.backend || [], null, 4)},
  "ai": ${JSON.stringify(details.techStack?.ai || [], null, 4)},
  "cloud": ${JSON.stringify(details.techStack?.cloud || [], null, 4)}
}`}
              </pre>
            </div>

            <h2>Technologies Used</h2>
            <div className="tech-categories">
              {Object.entries(details.techStack || {}).map(
                ([category, techs]) => (
                  <div key={category} className="tech-category">
                    <h3>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                    <div className="tech-badges">
                      {techs.map((tech, i) => (
                        <span key={i} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        );

      case "impact.md":
        return (
          <div className="content-impact">
            <h1>📈 Impact & Results</h1>
            <div className="impact-grid">
              {details.impact?.map((item, i) => (
                <div key={i} className="impact-card">
                  <FaCheckCircle className="impact-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h2>💡 Key Learnings</h2>
            <ul className="learnings-list">
              {details.learnings?.map((learning, i) => (
                <li key={i}>{learning}</li>
              ))}
            </ul>
          </div>
        );

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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="vscode-modal" onClick={(e) => e.stopPropagation()}>
        {/* Title Bar */}
        <div className="vscode-titlebar">
          <div className="titlebar-left">
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
          {/* Activity Bar (Left Icons) */}
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
              onClick={() => setActiveTab("terminal")}
            >
              <FaTerminal />
            </div>
          </div>

          {/* Sidebar (File Explorer) */}
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
                    .toUpperCase()}
                </span>
              </div>
              <div className="file-tree">{renderTree(fileTree)}</div>
            </div>
          </div>

          {/* Editor Area */}
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
                  onClick={() => setActiveTab(tab)}
                >
                  <FaFileAlt className="tab-icon" />
                  <span>{tab}</span>
                  {activeTab === tab && <span className="tab-close">×</span>}
                </div>
              ))}
            </div>

            {/* Breadcrumb */}
            <div className="editor-breadcrumb">
              <span>{project.name.replace(/[^\w\s]/g, "").trim()}</span>
              <VscChevronRight />
              <span>src</span>
              <VscChevronRight />
              <span>{activeTab}</span>
            </div>

            {/* Content */}
            <div className="editor-content">{renderContent()}</div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="vscode-statusbar">
          <div className="statusbar-left">
            <span>
              <VscSourceControl /> main
            </span>
            <span>🔄 Synced</span>
          </div>
          <div className="statusbar-right">
            <span>UTF-8</span>
            <span>Markdown</span>
            <span>Ln 1, Col 1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
