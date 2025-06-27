import React, { useState, useEffect } from "react";
import "./TopButton.css";

export default function TopButton({ theme }) {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className={`top-btn-position top-btn-style ${
            isVisible ? "visible" : ""
          }`}
          style={{
            backgroundColor: theme.text,
            color: theme.body,
            border: `1px solid ${theme.text}`,
          }}
          title="Go up"
          role="button"
          aria-label="Go to top"
          tabIndex={0}
        >
          <i className="fas fa-arrow-up" aria-hidden="true" />
        </div>
      )}
    </>
  );
}
