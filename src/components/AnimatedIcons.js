// src/components/AnimatedIcons.js
import React from "react";

const commonStyle = {
  overflow: "visible",
  filter: "drop-shadow(0 0 8px currentColor)", // Neon Glow Effect
};

export const TotalVisitorsIcon = ({ size = 40, color = "#fff" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={commonStyle}
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    {/* Pulse Animation */}
    <circle cx="9" cy="7" r="4" stroke={color} strokeOpacity="0.5">
      <animate
        attributeName="r"
        values="4;6;4"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.5;0;0.5"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export const NewVisitorsIcon = ({ size = 40, color = "#00ff88" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={commonStyle}
  >
    {/* Rising Graph */}
    <path d="M23 6l-9.5 9.5-5-5L1 18" />
    <path d="M17 6h6v6" />
    {/* Sparkle */}
    <path d="M19 6" strokeDasharray="2 2">
      <animate
        attributeName="stroke-dashoffset"
        from="10"
        to="0"
        dur="1s"
        repeatCount="indefinite"
      />
    </path>
    <circle cx="23" cy="6" r="2" fill={color} opacity="0.8">
      <animate
        attributeName="r"
        values="1;3;1"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export const ReturningVisitorsIcon = ({ size = 40, color = "#ff6b6b" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={commonStyle}
  >
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 21h5v-5" />
    {/* Rotation Effect applied via CSS in dashboard, but internal pulse here */}
    <circle cx="12" cy="12" r="2" fill={color} opacity="0.3">
      <animate
        attributeName="opacity"
        values="0.2;0.8;0.2"
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export const RecruitersIcon = ({ size = 40, color = "#4dabf7" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={commonStyle}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    {/* Scan Line Animation */}
    <line x1="2" y1="12" x2="22" y2="12" stroke={color} strokeOpacity="0.5">
      <animate
        attributeName="y1"
        values="9;19;9"
        dur="3s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y2"
        values="9;19;9"
        dur="3s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="3s"
        repeatCount="indefinite"
      />
    </line>
  </svg>
);

export const DevelopersIcon = ({ size = 40, color = "#ffd43b" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={commonStyle}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    {/* Blinking Cursor */}
    <line x1="10" y1="18" x2="14" y2="18" stroke={color}>
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1s"
        repeatCount="indefinite"
      />
    </line>
  </svg>
);

export const SearchIcon = ({ size = 20, color = "#fff" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export const ExportIcon = ({ size = 18, color = "#fff" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);
