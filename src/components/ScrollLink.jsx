// ScrollLink.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "./Loader";

const ScrollLink = ({ to, children, ...props }) => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    // Check if it's a hash link (same page navigation)
    if (to.startsWith("/#") || to.startsWith("#")) {
      // Extract the hash part
      const hash = to.startsWith("/#") ? to.substring(2) : to.substring(1);

      // If we're already on the home page, just scroll to the section
      if (window.location.pathname === "/") {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }

      // If we're on a different page, navigate to home first, then scroll
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });

      requestAnimationFrame(() => {
        navigate("/", { replace: true });

        // Wait for navigation to complete, then scroll to section
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      });

      return;
    }

    // Handle regular page navigation (like /aboutus) with CLEAR-RESET-LOAD
    if (to.startsWith("/")) {
      // Reset state first to ensure clean start
      setIsTransitioning(false);

      // Step 1: CLEAR - Show loading screen to clear components
      requestAnimationFrame(() => {
        setIsTransitioning(true);

        // Step 2: RESET - Reset scroll to top
        setTimeout(() => {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });

          // Step 3: LOAD - Navigate to new page after scroll reset
          setTimeout(() => {
            navigate(to);

            // Hide loading screen after navigation completes
            requestAnimationFrame(() => {
              setIsTransitioning(false);
            });
          }, 50);
        }, 100);
      });
    }
  };

  return (
    <>
      {/* Loading Screen for page transitions */}
      {isTransitioning && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <Loader />
        </div>
      )}

      <a href={to} onClick={handleClick} {...props}>
        {children}
      </a>
    </>
  );
};

export default ScrollLink;
