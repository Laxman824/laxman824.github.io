import React from "react";
import "./ExperienceCard.css";

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;

  // Get color based on experience type
  const getColor = () => {
    return experience.color || "#2962FF";
  };

  // Format duration for better display
  const formatDuration = (duration) => {
    if (!duration) return "";
    return duration;
  };

  // Format location for better display
  const formatLocation = (location) => {
    if (!location || location.trim() === "") return "Remote";
    return location;
  };

  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid ${getColor()}30`,
        backgroundColor: theme.name === "light" ? "#ffffff" : "#1d1d1d",
      }}
    >
      <div className="experience-card-logo-div">
        <img
          className="experience-card-logo"
          src={require(`../../assests/images/${experience["logo_path"]}`)}
          alt={experience.company}
        />
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div>
            <h3 className="experience-card-title" style={{ color: theme.text }}>
              {experience["title"]}
            </h3>
            <p
              className="experience-card-company"
              style={{ color: theme.secondaryText }}
            >
              <a
                href={experience["company_url"]}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: getColor() }}
              >
                {experience["company"]}
              </a>
            </p>
          </div>
          <div>
            <p
              className="experience-card-duration"
              style={{ color: theme.secondaryText }}
            >
              {formatDuration(experience["duration"])}
            </p>
            <p
              className="experience-card-location"
              style={{ color: theme.secondaryText }}
            >
              {formatLocation(experience["location"])}
            </p>
          </div>
        </div>
        <p
          className="experience-card-description"
          style={{ color: theme.text }}
        >
          {experience["description"]}
        </p>
        {experience["github_link"] && (
          <a
            href={experience["github_link"]}
            target="_blank"
            rel="noopener noreferrer"
            className="experience-card-github-link"
          >
            <button className="experience-card-github-button">
              {experience["button_text"] || "View Project"}
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;
