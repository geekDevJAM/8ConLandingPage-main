import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
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
        className="scroll-to-top-button"
        style={{ bottom: `${offsetBottom}px` }}
        aria-label="Scroll to top"
      >
        <ChevronUp className="chevron-icon" size={24} />
      </button>
    )
  );
};

export default ScrollToTopButton;
