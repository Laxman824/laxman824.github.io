// import React from "react";
// import ProjectLanguages from "../projectLanguages/ProjectLanguages";
// import "./ProjectCard.css";
// import { Fade } from "react-reveal";

// export default function ProjectCard({ repo, theme }) {
//   function openRepoinNewTab(url) {
//     var win = window.open(url, "_blank");
//     win.focus();
//   }

//   const isLiveWebsite = (url) => {
//     return url && !url.includes("github.com");
//   };

//   return (
//     <div>
//       <Fade bottom duration={2000} distance="40px">
//         <div
//           className="project-card"
//           onClick={() => openRepoinNewTab(repo.url)}
//           style={{ backgroundColor: theme.projectCard }}
//         >
//           <div className="repo-name-div">
//             <p className="repo-name" style={{ color: theme.text }}>
//               {repo.name}
//             </p>

//             {/* Buttons container */}
//             <div className="project-buttons">
//               {isLiveWebsite(repo.url) && (
//                 <button
//                   className="live-button"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     openRepoinNewTab(repo.url);
//                   }}
//                   style={{
//                     backgroundColor: theme.accentColor,
//                     color: "#fff",
//                   }}
//                 >
//                   Live
//                 </button>
//               )}

//               {/* NEW button */}
//               <button
//                 className="live-button secondary-button"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   openRepoinNewTab(repo.url);
//                   // later: you can point this to a detailed page or README instead
//                 }}
//                 style={{
//                   backgroundColor: "transparent",
//                   color: theme.accentColor,
//                   border: `1px solid ${theme.accentColor}`,
//                 }}
//               >
//                 explore →
//               </button>
//             </div>
//           </div>

//           <p className="repo-description" style={{ color: theme.text }}>
//             {repo.description}
//           </p>

//           <div className="repo-details">
//             <ProjectLanguages logos={repo.languages} />
//           </div>
//         </div>
//       </Fade>
//     </div>
//   );
// }

import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

export default function ProjectCard({ repo, theme, onExplore }) {
  function openInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) win.focus();
  }

  // Live button: open demo / main URL
  const handleLiveClick = (e) => {
    e.stopPropagation();
    openInNewTab(repo.url);
  };

  // Explore button: call parent callback with repo (for README / modal)
  const handleExploreClick = (e) => {
    e.stopPropagation();
    if (onExplore) onExplore(repo);
  };

  const isGitHub = repo.url?.includes("github.com");

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          className="project-card"
          onClick={() => openInNewTab(repo.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>

            {/* Buttons container – same place, new behavior */}
            <div className="project-buttons">
              {/* Live / GitHub button */}
              <button
                className="live-button"
                onClick={handleLiveClick}
                title={isGitHub ? "View on GitHub" : "View Live Demo"}
                style={{
                  backgroundColor: theme.accentColor,
                  color: "#fff",
                }}
              >
                {/* Only render the dot if it is NOT GitHub (meaning it is Live) */}
                {!isGitHub && <span className="live-dot"></span>}

                {isGitHub ? (
                  <>
                    <FaGithub style={{ marginRight: 4 }} />
                    GitHub
                  </>
                ) : (
                  <>
                    <FaExternalLinkAlt style={{ marginRight: 4 }} />
                    Live
                  </>
                )}
              </button>

              {/* Explore button */}
              <button
                className="live-button secondary-button"
                onClick={handleExploreClick}
                title="Explore project details"
                style={{
                  backgroundColor: "transparent",
                  color: theme.accentColor,
                  border: `1px solid ${theme.accentColor}`,
                }}
              >
                <VscCode style={{ marginRight: 4 }} />
                Docs
              </button>
            </div>
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
