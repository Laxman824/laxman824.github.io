import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  // Function to check if a path is active
  const isActive = (path) => {
    // Remove the leading slash if present
    const currentPath = location.pathname.replace(/^\//, "");
    return (
      currentPath === path.replace(/^\//, "") ||
      (currentPath === "" && path === "/home")
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if a path is active
  const isActive = (path) => {
    const currentPath = location.pathname.replace(/^\//, "");
    return (
      currentPath === path.replace(/^\//, "") ||
      (currentPath === "" && path === "/home")
    );
  };

  const styles = style({
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
    backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${theme.name === "light" ? "#F7D774" : "#646464"}`,
    },
  });

  const link = settings.isSplash ? "/splash" : "home";

  function changeTheme() {
    if (props.theme.name === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }

  const icon =
    props.theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );

  return (
    <div className="header-container">
      {isMenuOpen && (
        <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />
      )}
      <header className="header">
        <Link to={link} className="logo">
          <span style={{ color: props.theme.text }}></span>
          <span className="logo-name" style={{ color: props.theme.text }}>
            {greeting.logo_name}
          </span>
          <span style={{ color: props.theme.text }}></span>
        </Link>

        {isMobile && (
          <div
            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
          <Link
            to="/home"
            className={`homei ${isActive("/home") ? "active" : ""}`}
            style={{ color: theme.text }}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/education"
            className={`ec ${isActive("/education") ? "active" : ""}`}
            style={{ color: props.theme.text }}
            onClick={() => setIsMenuOpen(false)}
          >
            Education
          </Link>
          <Link
            to="/experience"
            className={`xp ${isActive("/experience") ? "active" : ""}`}
            style={{ color: props.theme.text }}
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className={`projects ${isActive("/projects") ? "active" : ""}`}
            style={{ color: props.theme.text }}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`cr ${isActive("/contact") ? "active" : ""}`}
            style={{ color: props.theme.text }}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <button {...styles} onClick={changeTheme}>
            {icon}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
