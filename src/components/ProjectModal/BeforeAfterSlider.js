import React, { useState, useRef, memo } from "react";
import "./BeforeAfterSlider.css";

const BeforeAfterSlider = ({ before, after }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const defaultBefore = {
    title: "The Problem",
    icon: "😰",
    points: [
      "Manual process taking 4+ hours",
      "Error-prone and inconsistent",
      "Couldn't scale with growth",
      "High operational costs",
    ],
    color: "#ef4444",
  };

  const defaultAfter = {
    title: "The Solution",
    icon: "🚀",
    points: [
      "Automated in under 5 minutes",
      "95% accuracy rate",
      "Infinitely scalable",
      "80% cost reduction",
    ],
    color: "#22c55e",
  };

  const beforeData = before || defaultBefore;
  const afterData = after || defaultAfter;

  return (
    <div
      ref={containerRef}
      className="before-after-slider"
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* Before Section */}
      <div
        className="slider-section before"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          backgroundColor: `${beforeData.color}15`,
        }}
      >
        <div className="section-content">
          <div className="section-header">
            <span className="section-icon">{beforeData.icon}</span>
            <h4 style={{ color: beforeData.color }}>{beforeData.title}</h4>
          </div>
          <ul className="section-points">
            {beforeData.points.map((point, i) => (
              <li key={i}>
                <span
                  className="point-icon"
                  style={{ color: beforeData.color }}
                >
                  ✗
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="section-label before-label"
          style={{ borderColor: beforeData.color }}
        >
          BEFORE
        </div>
      </div>

      {/* After Section */}
      <div
        className="slider-section after"
        style={{
          clipPath: `inset(0 0 0 ${sliderPosition}%)`,
          backgroundColor: `${afterData.color}15`,
        }}
      >
        <div className="section-content">
          <div className="section-header">
            <span className="section-icon">{afterData.icon}</span>
            <h4 style={{ color: afterData.color }}>{afterData.title}</h4>
          </div>
          <ul className="section-points">
            {afterData.points.map((point, i) => (
              <li key={i}>
                <span className="point-icon" style={{ color: afterData.color }}>
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="section-label after-label"
          style={{ borderColor: afterData.color }}
        >
          AFTER
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="handle-line"></div>
        <div className="handle-circle">
          <span className="handle-arrows">⟨ ⟩</span>
        </div>
        <div className="handle-line"></div>
      </div>

      {/* Instructions */}
      <div className="slider-instructions">
        <span>← Drag to compare →</span>
      </div>
    </div>
  );
};

export default memo(BeforeAfterSlider);
