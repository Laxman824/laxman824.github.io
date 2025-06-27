import React, { useState, useEffect, Suspense } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { CursorProvider } from "react-cursor-custom";
import { settings } from "./portfolio";
import Background3D from "./components/Background3D/Background3D";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Add particles state
  const [showParticles, setShowParticles] = useState(() => {
    const savedParticles = localStorage.getItem("useParticles");
    if (savedParticles === null) {
      localStorage.setItem("useParticles", "true");
      return true;
    }
    return JSON.parse(savedParticles);
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set dark theme as default
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    // Set dark as default and save to localStorage
    localStorage.setItem("theme", "dark");
    return "dark";
  });

  const useCursor = settings.useCustomCursor;

  const toggleParticles = () => {
    const newValue = !showParticles;
    setShowParticles(newValue);
    localStorage.setItem("useParticles", JSON.stringify(newValue));
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <Suspense fallback={<></>}>
          {showParticles && <Background3D />}
        </Suspense>

        <div className="app-container">
          <div className="particles-toggle-wrapper">
            <div
              className="particles-toggle-button"
              onClick={toggleParticles}
              style={{
                backgroundColor: themes[theme].accentColor,
                color: "#fff",
                boxShadow: `0 2px 10px ${themes[theme].accentColor}40`,
              }}
              title={showParticles ? "Disable Particles" : "Enable Particles"}
            >
              <span
                className={`toggle-icon ${
                  showParticles ? "enabled" : "disabled"
                }`}
              >
                {showParticles ? "✨" : "⭕"}
              </span>
            </div>
          </div>

          {useCursor ? (
            <CursorProvider
              color={themes[theme].secondaryText}
              ringSize={25}
              transitionTime={75}
            >
              <Main theme={themes[theme]} setTheme={setTheme} />
            </CursorProvider>
          ) : (
            <Main theme={themes[theme]} setTheme={setTheme} />
          )}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
