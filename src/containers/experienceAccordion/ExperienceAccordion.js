// import React, { useState } from "react";
// import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
// import "./ExperienceAccordion.css";
// import { Fade } from "react-reveal";

// function ExperienceAccordion(props) {
//   const theme = props.theme;
//   const [openSections, setOpenSections] = useState([]);

//   const toggleSection = (sectionTitle) => {
//     if (openSections.includes(sectionTitle)) {
//       setOpenSections(openSections.filter((title) => title !== sectionTitle));
//     } else {
//       setOpenSections([...openSections, sectionTitle]);
//     }
//   };

//   // Get section color based on title
//   const getSectionColor = (title) => {
//     switch (title) {
//       case "Work":
//         return "#2962FF"; // Blue
//       case "Internships":
//         return "#FFA500"; // Orange
//       case "Volunteerships":
//         return "#A7F432"; // Green
//       default:
//         return "#2962FF";
//     }
//   };

//   return (
//     <div className="experience-accord">
//       {props.sections.map((section, index) => {
//         const sectionColor = getSectionColor(section.title);

//         return (
//           <Fade bottom duration={1000} delay={index * 200} key={section.title}>
//             <div
//               className="accord-panel"
//               style={{
//                 backgroundColor: theme.name === "light" ? "#ffffff" : "#1d1d1d",
//                 border: `1px solid ${
//                   theme.name === "light"
//                     ? "rgba(211, 211, 211, 0.397)"
//                     : "rgba(211, 211, 211, 0.397)"
//                 }`,
//               }}
//             >
//               <div
//                 className="accord-panel-header"
//                 onClick={() => toggleSection(section.title)}
//                 style={{
//                   borderLeft: `6px solid ${sectionColor}`,
//                 }}
//               >
//                 <h3 style={{ color: theme.text }}>
//                   {section.title}
//                   <span
//                     style={{
//                       fontSize: "0.8rem",
//                       marginLeft: "10px",
//                       opacity: 0.7,
//                       fontWeight: "normal",
//                     }}
//                   >
//                     ({section.experiences.length})
//                   </span>
//                 </h3>
//                 <span
//                   style={{
//                     color: theme.text,
//                     backgroundColor: `${sectionColor}20`,
//                   }}
//                 >
//                   {openSections.includes(section.title) ? "−" : "+"}
//                 </span>
//               </div>
//               {openSections.includes(section.title) && (
//                 <div className="accord-panel-content">
//                   {section.experiences.map((experience, expIndex) => {
//                     // Apply section color to experience if not already set
//                     const experienceWithColor = {
//                       ...experience,
//                       color: experience.color || sectionColor,
//                     };

//                     return (
//                       <Fade
//                         bottom
//                         duration={800}
//                         delay={expIndex * 100}
//                         key={experience.title}
//                       >
//                         <ExperienceCard
//                           experience={experienceWithColor}
//                           theme={theme}
//                         />
//                       </Fade>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//           </Fade>
//         );
//       })}
//     </div>
//   );
// }

// export default ExperienceAccordion;
import React, { useState } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Fade } from "react-reveal";

function ExperienceAccordion(props) {
  const theme = props.theme;
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (sectionTitle) => {
    if (openSections.includes(sectionTitle)) {
      setOpenSections(openSections.filter((title) => title !== sectionTitle));
    } else {
      setOpenSections([...openSections, sectionTitle]);
    }
  };

  // Get section color based on title
  const getSectionColor = (title) => {
    switch (title) {
      case "Work":
        return "#2962FF"; // Blue
      case "Internships":
        return "#FFA500"; // Orange
      case "Volunteerships":
        return "#A7F432"; // Green
      default:
        return "#2962FF";
    }
  };

  return (
    <div className="experience-accord">
      {props.sections.map((section, index) => {
        const sectionColor = getSectionColor(section.title);
        const isOpen = openSections.includes(section.title);

        return (
          <Fade bottom duration={1000} delay={index * 200} key={section.title}>
            <div
              className={`accord-panel ${isOpen ? "opening" : ""}`}
              data-section={section.title}
              style={{
                backgroundColor: theme.name === "light" ? "#ffffff" : "#1d1d1d",
              }}
            >
              {/* Add corner accent */}
              <div className="accord-panel-corner"></div>

              {/* Add light strip */}
              <div className="accord-panel-light"></div>

              <div
                className={`accord-panel-header ${isOpen ? "active" : ""}`}
                onClick={() => toggleSection(section.title)}
                style={{
                  borderLeftColor: sectionColor,
                }}
                role="button"
                aria-expanded={isOpen}
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    toggleSection(section.title);
                  }
                }}
              >
                <h3 style={{ color: theme.text }}>
                  {section.title}
                  <span
                    style={{
                      backgroundColor: `${sectionColor}20`,
                      color: theme.text,
                    }}
                  >
                    {section.experiences.length}
                  </span>
                </h3>
                <span
                  style={{
                    color: theme.text,
                    backgroundColor: `${sectionColor}20`,
                  }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              {isOpen && (
                <div
                  className={`accord-panel-content ${
                    section.experiences.length === 0 ? "empty" : ""
                  }`}
                >
                  {section.experiences.length === 0 ? (
                    <p style={{ color: theme.text }}>No experiences yet</p>
                  ) : (
                    section.experiences.map((experience, expIndex) => {
                      const experienceWithColor = {
                        ...experience,
                        color: experience.color || sectionColor,
                      };

                      return (
                        <Fade
                          bottom
                          duration={800}
                          delay={expIndex * 100}
                          key={experience.title + expIndex}
                        >
                          <ExperienceCard
                            experience={experienceWithColor}
                            theme={theme}
                          />
                        </Fade>
                      );
                    })
                  )}
                </div>
              )}
            </div>
          </Fade>
        );
      })}
    </div>
  );
}

export default ExperienceAccordion;
