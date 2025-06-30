import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);
  const [offsetBottom, setOffsetBottom] = useState(40); // default offset

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);

      // Check footer position to prevent overlap
      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (footerRect.top < windowHeight) {
          // Footer is visible in viewport
          const overlap = windowHeight - footerRect.top + 20;
          setOffsetBottom(overlap);
        } else {
          setOffsetBottom(40);
        }
      }
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          right: "20px",
          bottom: `${offsetBottom}px`,
          padding: "12px 16px",
          fontSize: "16px",
          backgroundColor: "#10b981",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 1000,
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        }}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    )
  );
};

export default ScrollUp;
