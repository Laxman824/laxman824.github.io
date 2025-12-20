import React, { useState, useRef, useEffect, useCallback } from "react";
// 1. Added Link import here
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./LoginButton.css";

const LoginButton = ({ theme }) => {
  const { user, isAdmin, loginWithGoogle, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  // Robust dark mode detection
  const isDarkTheme =
    theme?.body?.toLowerCase().includes("#0") ||
    theme?.body?.toLowerCase().includes("#1") ||
    theme?.body?.toLowerCase().includes("black") ||
    theme?.text === "#FFFFFF";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Magnetic effect on hover
  const handleMouseMove = useCallback(
    (e) => {
      if (!buttonRef.current || !isHovered) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      setMousePosition({ x: x * 0.15, y: y * 0.15 });
    },
    [isHovered]
  );

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  // Ripple effect
  const createRipple = (e) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { id: Date.now(), x, y };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 800);
  };

  // Particle burst effect
  const createParticles = () => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      angle: (360 / 12) * i,
      color: ["#4285F4", "#34A853", "#FBBC05", "#EA4335"][i % 4],
    }));

    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1000);
  };

  const handleLogin = async (e) => {
    createRipple(e);
    setIsLoading(true);

    try {
      await loginWithGoogle();
      createParticles();
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setShowDropdown(false);
  };

  // Logged in user view
  if (user) {
    return (
      <div
        className="login-container"
        ref={dropdownRef}
        style={{ display: "flex", alignItems: "center", gap: "15px" }}
      >
        {/* The Avatar Wrapper */}
        <div
          className={`user-avatar-wrapper ${isAdmin ? "admin-glow" : ""}`}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="avatar-ring"></div>
          <div className="user-avatar">
            <img src={user.photoURL} alt="User" />
          </div>
          {isAdmin && (
            <span className="admin-badge">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </span>
          )}
          <div className="online-indicator"></div>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`user-dropdown ${showDropdown ? "show" : ""} ${
            isDarkTheme ? "dropdown-dark" : "dropdown-light"
          }`}
        >
          <div className="dropdown-backdrop"></div>

          <div className="user-header">
            <div className="header-avatar">
              <img src={user.photoURL} alt="Avatar" />
              <div className="avatar-shine"></div>
            </div>
            <div className="user-info">
              <p className="user-name">{user.displayName}</p>
              <p className="user-email">{user.email}</p>
              {isAdmin && <span className="role-badge">Admin</span>}
            </div>
          </div>

          <div className="dropdown-divider"></div>

          <div className="dropdown-menu">
            {/* 2. ADDED YOUR REQUESTED SECTION HERE */}
            {user && (
              <>
                <Link
                  to="/myspace"
                  className="dropdown-item myspace-link"
                  style={{ color: theme.text, textDecoration: "none" }}
                  onClick={() => setShowDropdown(false)}
                >
                  <div className="item-icon">🏠</div>
                  <span>My Space</span>
                  <div className="item-arrow">→</div>
                </Link>

                {isAdmin && (
                  <Link
                    to="/admin"
                    className="dropdown-item admin-link"
                    style={{ color: theme.text, textDecoration: "none" }}
                    onClick={() => setShowDropdown(false)}
                  >
                    <div className="item-icon">⚙️</div>
                    <span style={{ color: "#10b981" }}>Admin Dashboard</span>
                    <div className="item-arrow">→</div>
                  </Link>
                )}
              </>
            )}
            {/* END OF ADDED SECTION */}

            <button
              className="dropdown-item logout-item"
              onClick={handleLogout}
            >
              <div className="item-icon logout-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16,17 21,12 16,7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
              </div>
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Google Sign-In Button
  return (
    <div className="google-btn-container">
      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            "--angle": `${particle.angle}deg`,
            "--color": particle.color,
          }}
        />
      ))}

      <button
        ref={buttonRef}
        className={`google-login-btn ${isLoading ? "loading" : ""} ${
          isDarkTheme ? "btn-dark" : "btn-light"
        }`}
        onClick={handleLogin}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        disabled={isLoading}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <div className="btn-border"></div>
        <div className="btn-glow"></div>
        <div className="btn-shine"></div>

        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="ripple"
            style={{ left: ripple.x, top: ripple.y }}
          />
        ))}

        <div className="btn-content">
          {isLoading ? (
            <div className="loading-spinner">
              <div className="spinner-ring"></div>
              <div className="spinner-dots">
                <span style={{ "--i": 0, background: "#4285F4" }}></span>
                <span style={{ "--i": 1, background: "#34A853" }}></span>
                <span style={{ "--i": 2, background: "#FBBC05" }}></span>
                <span style={{ "--i": 3, background: "#EA4335" }}></span>
              </div>
            </div>
          ) : (
            <>
              <div className="google-icon-wrapper">
                <svg className="google-icon" viewBox="0 0 24 24">
                  <path
                    className="google-path blue"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    className="google-path green"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    className="google-path yellow"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    className="google-path red"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>
              <span className="btn-text">
                <span className="text-slide">Sign in</span>
              </span>
            </>
          )}
        </div>
      </button>
    </div>
  );
};

export default LoginButton;
