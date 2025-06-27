import React, { useState, useRef, useEffect } from "react";
import "./DegreeCard.css";
import { style } from "glamor";

// import PropTypes from 'prop-types';

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;
  const degreeColor = degree.color_code || theme.accentColor;
  const [tiltStyle, setTiltStyle] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 40;
    const rotateY = (centerX - x) / 40;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
      transition: "transform 0.4s ease",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",
      transition: "transform 1s ease",
    });
  };

  const style_img = style({
    width: "220px",
    height: "auto",
    borderRadius: " 50%",
    padding: "10px",
    border: `1px solid ${degreeColor}`,
    marginRight: "50px",
    boxShadow: `0px 0px 5px ${degreeColor}`,
    transition: "all 0.2s ease-in-out",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(-50px)",
    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px ${degreeColor}`,
    },
    "@media (max-width: 768px)": {
      marginLeft: "50px",
      marginBottom: "15px",
      width: "175px",
    },
  });

  const card_body = style({
    borderBottom: `1px solid ${degreeColor}`,
    borderLeft: `1px solid ${degreeColor}`,
    borderRight: `1px solid ${degreeColor}`,
    borderRadius: "7px",
    width: "90%",
    margin: "10px",
    boxShadow: `0px 1px 5px ${degreeColor}`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(50px)",
    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px ${degreeColor}`,
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });

  const button_visit = style({
    textDecoration: "none",
    color: "rgba(255, 255, 255, 1)",
    background: `${degreeColor}`,
    padding: "15px 15px",
    marginTop: "25px",
    borderRadius: "4px",
    borderWidth: "0px",
    marginBottom: "20px",
    width: "200px",
    height: "50px",
    fontWeight: "bold",
    fontFamily: "Google Sans Regular",
    fontSize: "17px",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 10px ${degreeColor}`,
    },
  });

  return (
    <div
      className="degree-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
    >
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>

      <div {...style_img}>
        <img
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            transform: "scale(-50%, -50%)",
          }}
          src={require(`../../assests/images/${degree.logo_path}`)}
          alt={degree.alt_name}
        />
      </div>

      <div {...card_body}>
        <div className="body-header" style={{ backgroundColor: degreeColor }}>
          <div className="body-header-title">
            <h2 className="card-title" style={{ color: "#FFFFFF" }}>
              {degree.title}
            </h2>
            <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
              {degree.subtitle}
            </h3>
          </div>
          <div className="body-header-duration">
            <h3 className="duration" style={{ color: "#FFFFFF" }}>
              {degree.duration}
            </h3>
          </div>
        </div>
        <div className="body-content">
          {degree.descriptions.map((sentence, index) => {
            return (
              <p
                key={index}
                className="content-list"
                style={{ color: theme.text }}
              >
                {sentence}
              </p>
            );
          })}
          <a
            href={degree.website_link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            <p
              {...button_visit}
              style={{
                marginRight: "23px",
                textDecoration: "none",
                float: "right",
                backgroundColor: theme.accentColor,
              }}
            >
              Visit Website
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DegreeCard;
