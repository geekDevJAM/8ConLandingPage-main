import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-image-container">
          <img
            src="/assets/logo/herologo.png"
            alt="8Con Academy Logo"
            className="hero-image"
          />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Empowering Every Filipino Household with a Skilled and Profitable
            Forex Trader
          </h1>

          <div className="hero-buttons">
            <a href="#core-brand" className="btn-primary">
              Learn Forex Today
            </a>
            <a href="#contact" className="btn-secondary">
              Connect With Us
            </a>
          </div>

          {/* 🟩 Move the card container here */}
          <div className="card-container">
            <a href="#about" className="card-link">
              <div className="card">
                <div className="first-content">
                  <img src="../assets/images/workshop.jpg" alt="Photo" />
                </div>
                <div className="second-content">
                  <img src="../assets/images/workshop.jpg" alt="Photo" />
                  <span className="overlay-text">WORKSHOP</span>
                </div>
              </div>
            </a>

            <Link to="#news" className="card-link">
              <div className="card">
                <div className="first-content">
                  <img src="/assets/images/blog.jpg" alt="Photo" />
                </div>
                <div className="second-content">
                  <img src="/assets/images/blog.jpg" alt="Photo" />
                  <span className="overlay-text">BLOGS</span>
                </div>
              </div>
            </Link>

            <a href="#core-brand" className="card-link">
              <div className="card">
                <div className="first-content">
                  <img src="/assets/images/testimonials.jpg" alt="Photo" />
                </div>
                <div className="second-content">
                  <img src="/assets/images/testimonials.jpg" alt="Photo" />
                  <span className="overlay-text">TESTIMONIALS</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
