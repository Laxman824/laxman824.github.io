import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { greeting } from "../../portfolio.js";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import LoginButton from "../auth/LoginButton"; // 👈 ADD THIS IMPORT

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const location = useLocation();

  // Function to check if a path is active
  const isActive = (path) => {
    const currentPath = location.pathname.replace(/^\//, "");
    return (
      currentPath === path.replace(/^\//, "") ||
      (currentPath === "" && path === "/home")
    );
  };

  // Scroll detection with pulse effect
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    let pulseTimeout = null;

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (lastScrollY > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }

          if (Math.abs(lastScrollY % 100) < 5) {
            setIsPulsing(true);
            clearTimeout(pulseTimeout);
            pulseTimeout = setTimeout(() => {
              setIsPulsing(false);
            }, 600);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(pulseTimeout);
    };
  }, []);

  // Handle resize
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

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const link = "/home";

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
        <div
          className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <header
        className={`header ${isScrolled ? "scrolled" : ""} ${
          isPulsing ? "pulse" : ""
        }`}
      >
        <Link to={link} className="logo">
          <span className="logo-name" style={{ color: props.theme.text }}>
            {greeting.logo_name}
          </span>
        </Link>

        {isMobile && (
          <div
            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            style={{ color: props.theme.text }}
          >
            <span style={{ backgroundColor: props.theme.text }}></span>
            <span style={{ backgroundColor: props.theme.text }}></span>
            <span style={{ backgroundColor: props.theme.text }}></span>
          </div>
        )}

        <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
          <Link
            to="/home"
            className={`homei ${isActive("/home") ? "active" : ""}`}
            style={{ color: props.theme.text }}
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
          {/* 👇 ADDED MY SPACE LINK HERE */}
          <Link
            to="/myspace"
            className={`myspace ${isActive("/myspace") ? "active" : ""}`}
            style={{ color: props.theme.text }}
            onClick={() => setIsMenuOpen(false)}
          >
            AI Space
          </Link>

          {/* 👇 ADD LOGIN BUTTON HERE */}
          <div className="header-actions">
            <button className="theme-toggle-btn" onClick={changeTheme}>
              {icon}
            </button>

            <LoginButton theme={props.theme} />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
