import React from "react";
import "./RocketSVG.css";

const RocketSVG = () => {
  return (
    <div className="rocket-container">
      <svg
        className="rocket-svg"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stars in background */}
        <circle className="star star-1" cx="20" cy="30" r="2" fill="#FFD700" />
        <circle
          className="star star-2"
          cx="180"
          cy="50"
          r="1.5"
          fill="#FFD700"
        />
        <circle className="star star-3" cx="40" cy="80" r="1" fill="#FFD700" />
        <circle
          className="star star-4"
          cx="160"
          cy="100"
          r="2"
          fill="#FFD700"
        />

        {/* Rocket Body */}
        <g className="rocket">
          {/* Flames/Exhaust */}
          <g className="flames">
            <ellipse
              className="flame flame-1"
              cx="100"
              cy="145"
              rx="8"
              ry="15"
              fill="#FF6B35"
            />
            <ellipse
              className="flame flame-2"
              cx="95"
              cy="150"
              rx="6"
              ry="12"
              fill="#FFA500"
            />
            <ellipse
              className="flame flame-3"
              cx="105"
              cy="150"
              rx="6"
              ry="12"
              fill="#FFA500"
            />
            <ellipse
              className="flame flame-center"
              cx="100"
              cy="155"
              rx="5"
              ry="10"
              fill="#FFD700"
            />
          </g>

          {/* Rocket Main Body */}
          <rect x="85" y="90" width="30" height="50" fill="#E8E8E8" rx="2" />

          {/* Rocket Nose Cone */}
          <path d="M 100 40 L 85 90 L 115 90 Z" fill="#FF6B35" />

          {/* Window */}
          <circle cx="100" cy="75" r="8" fill="#4A90E2" />
          <circle cx="100" cy="75" r="6" fill="#87CEEB" opacity="0.6" />

          {/* Wings */}
          <path d="M 85 110 L 70 135 L 85 130 Z" fill="#C0392B" />
          <path d="M 115 110 L 130 135 L 115 130 Z" fill="#C0392B" />

          {/* Decorative Lines */}
          <rect x="85" y="100" width="30" height="2" fill="#C0392B" />
          <rect x="85" y="120" width="30" height="2" fill="#C0392B" />

          {/* Boosters */}
          <rect x="82" y="125" width="6" height="15" fill="#95A5A6" rx="1" />
          <rect x="112" y="125" width="6" height="15" fill="#95A5A6" rx="1" />
        </g>

        {/* Smoke/Trail */}
        <g className="smoke-trail">
          <circle
            className="smoke smoke-1"
            cx="100"
            cy="160"
            r="4"
            fill="#CCCCCC"
            opacity="0.4"
          />
          <circle
            className="smoke smoke-2"
            cx="98"
            cy="170"
            r="3"
            fill="#CCCCCC"
            opacity="0.3"
          />
          <circle
            className="smoke smoke-3"
            cx="102"
            cy="175"
            r="2.5"
            fill="#CCCCCC"
            opacity="0.2"
          />
        </g>
      </svg>
    </div>
  );
};

export default RocketSVG;
