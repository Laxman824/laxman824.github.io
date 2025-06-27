import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";
import "./BorderBeam.css";
export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const hoverStyles = style({
    boxShadow: `${theme.highlightColor} 0 5px 10px` /* Adjust color and size */,
    transform: "scale(1.05)" /* Slight scale for pop-up effect */,
    transition: "all 0.2s ease-in-out",
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="border-beam">
        <div
          {...style({
            color: "rgb(88, 96, 105)",
            backgroundColor: "rgb(255, 255, 255)",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
            padding: "2rem",
            cursor: "pointer",
            borderRadius: "5px",
            height: "100%",
          })}
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.projectCard }}
          onMouseEnter={() => hoverStyles.apply()}
          onMouseLeave={() => hoverStyles.unapply()}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
