import React, { useState, useEffect } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings, socialMediaLinks } from "../../portfolio.js";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import Confetti from "react-confetti"; // Import confetti component

function Header(props) {
  const theme = props.theme;
  const [isFirstVisit, setIsFirstVisit] = useState(false); // State for first visit

  useEffect(() => {
    const storedVisit = localStorage.getItem("firstVisit");
    if (!storedVisit) {
      setIsFirstVisit(true);
      localStorage.setItem("firstVisit", true); // Set flag for future visits
    }
  }, []);

  const styles = {
    // Object for button styles
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${theme.name === "light" ? "#F7D774" : "#646464"}`,
    },
  };

  const link = settings.isSplash ? "/splash" : "home";

  function changeTheme() {
    if (theme === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }

  const icon =
    theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );

  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <NavLink to={link} tag={Link} className="logo">
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink
                className="homei"
                to="/home"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="ec"
                to="/education"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                className="xp"
                to="/experience"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                className="projects"
                to="/projects"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className="cr"
                to="/contact"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <a
                className="enquiry"
                href={socialMediaLinks.contactform}
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Send your Enquiry
              </a>
            </li>
          </ul>

          {isFirstVisit && ( // Conditionally render confetti on first visit
            <Confetti
              duration={3000} // Adjust duration as desired
              recycle={false} // Set to false for continuous burst
              numberOfPieces={300} // Adjust particle count
              colors={[
                // Customize colors
                "#f18075",
                "#f9a825",
                "#4cd137",
                "#fa307a",
                "#21ccaf",
              ]}
              size={{
                // Adjust size options
                base: 2,
                varied: true,
              }}
            />
          )}

          <button {...styles} onClick={changeTheme}>
            {icon}
          </button>
        </header>
      </div>
    </Fade>
  );
}

export default Header;
