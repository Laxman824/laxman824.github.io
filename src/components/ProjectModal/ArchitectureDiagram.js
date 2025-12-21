import React, { useState, memo } from "react";
import "./ArchitectureDiagram.css";

const ArchitectureDiagram = ({ architecture }) => {
  const [activeNode, setActiveNode] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);

  // Default architecture fallback
  const defaultArchitecture = {
    nodes: [
      {
        id: "user",
        label: "User",
        icon: "👤",
        x: 10,
        y: 50,
        description: "End user interacts with the system",
      },
      {
        id: "frontend",
        label: "Frontend",
        icon: "🖥️",
        x: 30,
        y: 50,
        description: "React/Next.js application",
      },
      {
        id: "api",
        label: "API Gateway",
        icon: "🔌",
        x: 50,
        y: 50,
        description: "FastAPI/Express handling requests",
      },
      {
        id: "ai",
        label: "AI Engine",
        icon: "🧠",
        x: 70,
        y: 30,
        description: "LLM processing & embeddings",
      },
      {
        id: "db",
        label: "Database",
        icon: "🗄️",
        x: 70,
        y: 70,
        description: "PostgreSQL/MongoDB storage",
      },
      {
        id: "cloud",
        label: "Cloud",
        icon: "☁️",
        x: 90,
        y: 50,
        description: "GCP/AWS infrastructure",
      },
    ],
    connections: [
      { from: "user", to: "frontend", label: "HTTPS" },
      { from: "frontend", to: "api", label: "REST/GraphQL" },
      { from: "api", to: "ai", label: "Inference" },
      { from: "api", to: "db", label: "Query" },
      { from: "ai", to: "cloud", label: "Deploy" },
      { from: "db", to: "cloud", label: "Hosted" },
    ],
  };

  const arch = architecture || defaultArchitecture;

  return (
    <div className="architecture-diagram">
      <div className="diagram-header">
        <h3>System Architecture</h3>
        <button
          className={`animate-btn ${isAnimating ? "active" : ""}`}
          onClick={() => setIsAnimating(!isAnimating)}
        >
          {isAnimating ? "⏸️ Pause" : "▶️ Animate"}
        </button>
      </div>

      <svg viewBox="0 0 100 100" className="diagram-svg">
        <defs>
          {/* Gradient for connections */}
          <linearGradient
            id="connectionGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Arrow marker */}
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#667eea" />
          </marker>
        </defs>

        {/* Connections */}
        {arch.connections.map((conn, index) => {
          const fromNode = arch.nodes.find((n) => n.id === conn.from);
          const toNode = arch.nodes.find((n) => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          const midX = (fromNode.x + toNode.x) / 2;
          const midY = (fromNode.y + toNode.y) / 2;

          return (
            <g
              key={index}
              className={`connection ${isAnimating ? "animating" : ""}`}
            >
              {/* Connection line */}
              <line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                className="connection-line"
                markerEnd="url(#arrowhead)"
              />

              {/* Animated data packet */}
              {isAnimating && (
                <circle r="0.8" fill="#4ade80" filter="url(#glow)">
                  <animateMotion
                    dur={`${1.5 + index * 0.3}s`}
                    repeatCount="indefinite"
                    path={`M${fromNode.x},${fromNode.y} L${toNode.x},${toNode.y}`}
                  />
                </circle>
              )}

              {/* Connection label */}
              <text x={midX} y={midY - 2} className="connection-label">
                {conn.label}
              </text>
            </g>
          );
        })}

        {/* Nodes */}
        {arch.nodes.map((node) => (
          <g
            key={node.id}
            className={`node ${activeNode === node.id ? "active" : ""}`}
            // ✅ CRITICAL: Translate is applied to the group.
            // The CSS must NOT override 'transform' on .node, but on .node-circle
            transform={`translate(${node.x}, ${node.y})`}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
          >
            {/* Node circle - This element scales on hover via CSS */}
            <circle r="6" className="node-circle" />

            {/* Node icon */}
            <text className="node-icon" textAnchor="middle" dy="2" fontSize="4">
              {node.icon}
            </text>

            {/* Node label */}
            <text
              className="node-label"
              textAnchor="middle"
              dy="12"
              fontSize="3"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Tooltip */}
      {activeNode && (
        <div className="diagram-tooltip glassmorphism">
          <div className="tooltip-header">
            <span className="tooltip-icon">
              {arch.nodes.find((n) => n.id === activeNode)?.icon}
            </span>
            <span className="tooltip-title">
              {arch.nodes.find((n) => n.id === activeNode)?.label}
            </span>
          </div>
          <p className="tooltip-description">
            {arch.nodes.find((n) => n.id === activeNode)?.description}
          </p>
        </div>
      )}
    </div>
  );
};

// ✅ PERFORMANCE: Wrapped in memo to prevent re-renders on parent state changes
export default memo(ArchitectureDiagram);
