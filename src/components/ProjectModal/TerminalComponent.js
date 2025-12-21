import React, { useState, useEffect } from "react";

// This component manages its own state.
// Updates here will NOT cause the rest of the ProjectModal to re-render.
const TerminalComponent = ({ project }) => {
  const [terminalText, setTerminalText] = useState("");

  useEffect(() => {
    const commands = [
      "$ git clone " + (project?.url || "https://github.com/project"),
      "$ cd " +
        (project?.name?.replace(/[^a-zA-Z]/g, "-").toLowerCase() || "project"),
      "$ npm install",
      "$ npm run dev",
      "",
      "✓ Ready on http://localhost:3000",
    ];
    let i = 0;
    let text = "";

    // Faster typing for smoother feel
    const interval = setInterval(() => {
      if (i < commands.length) {
        text += commands[i] + "\n";
        setTerminalText(text);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Reduced delay for snappier feel

    return () => clearInterval(interval);
  }, [project]);

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
};

export default TerminalComponent;
