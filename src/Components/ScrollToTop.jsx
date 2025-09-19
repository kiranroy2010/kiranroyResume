import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "transparent",
          color: "#452763", // icon color (secondary theme color)
          border: "2px solid #867695", // border from your theme
          borderRadius: "4px", // small radius for square look
          padding: "10px 12px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          zIndex: 1000,
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#F8F9FA"; // light background on hover
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "transparent";
        }}
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "18px" }} />
      </button>
    )
  );
};

export default ScrollToTop;
