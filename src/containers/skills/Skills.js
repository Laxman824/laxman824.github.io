import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;

  return (
    <div className="main skills-main-container" id="skills">
      {/* Tech animated lines */}
      <div className="tech-line tech-line-1"></div>
      <div className="tech-line tech-line-2"></div>
      <div className="tech-line tech-line-3"></div>

      {/* Neural network nodes */}
      <div className="neural-node neural-node-1"></div>
      <div className="neural-node neural-node-2"></div>
      <div className="neural-node neural-node-3"></div>
      <div className="neural-node neural-node-4"></div>

      {/* Hexagonal floating particles */}
      <div className="hex-particle hex-particle-1"></div>
      <div className="hex-particle hex-particle-2"></div>
      <div className="hex-particle hex-particle-3"></div>

      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1
            className="skills-header skills-heading"
            style={{ color: theme.text }}
            data-text="Here's what I do"
          >
            <span>Here's what I do</span>
          </h1>
        </Fade>
      </div>

      <div className="skills-section-wrapper">
        <Fade bottom duration={1500} distance="20px">
          <SkillSection theme={theme} />
        </Fade>
      </div>
    </div>
  );
}
