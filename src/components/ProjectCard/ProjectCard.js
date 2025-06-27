import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";

export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  // Check if the URL is a live website (not GitHub)
  const isLiveWebsite = (url) => {
    return url && !url.includes("github.com");
  };

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          className="project-card"
          onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
            {isLiveWebsite(repo.url) && (
              <button
                className="live-button"
                onClick={(e) => {
                  e.stopPropagation();
                  openRepoinNewTab(repo.url);
                }}
                style={{
                  backgroundColor: theme.accentColor,
                  color: "#fff",
                }}
              >
                Live
              </button>
            )}
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
