import React from "react";
import ScrollLink from "./ScrollLink"; // Ensure this component handles smooth scroll or routing
import { MoveRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h1 className="aboutUsTitle fade-in">About Us</h1>
          <p className="subTitle fade-in">Confluence is Confidence</p>
        </div>

        <div className="content-grid">
          <div className="image-container fade-in">
            <img
              src="/assets/images/aboutus.jpg"
              alt="8Con Logo"
              className="aboutus-logo-img"
            />
          </div>
          <div className="text-content fade-in">
            <h3 className="whoWeAre fade-in">WHO WE ARE</h3>
            <h2 className="weAre fade-in">8Con Academy</h2>
            <p className="weAreParagraph">
              <span className="text-green-highlight fade-in">8CON Academy</span>{" "}
              is a pioneering financial education institution in Meycauayan,
              Bulacan, Philippines. We specialize in forex trading education
              with a mission to make{" "}
              <span className="text-red-highlight fade-in">Forex Trading</span>{" "}
              knowledge accessible, practical, and life-changing for every
              Filipino household. Founded in 2021, we have quickly become a
              trusted center for both aspiring and experienced traders, offering
              a unique blend of theoretical learning and hands-on application.
            </p>

            <div
              id="page-content"
              style={{ display: "flex", justifyContent: "left" }}
            >
              <ScrollLink
                to="/aboutus"
                className="intapply-btn fade-in"
                style={{ display: "flex", alignItems: "center" }}
                onClick={(e) => e.currentTarget.blur()}
              >
                Read More
                <MoveRight size={18} style={{ marginLeft: "8px" }} />
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
