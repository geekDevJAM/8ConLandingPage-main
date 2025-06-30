import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Goal,
  Eye,
  Atom,
  HeartHandshake,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import "../App.css";

const AboutUs = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-container">
      {/* Header */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          {/* Logo */}
          <a href="/#home" className="logo">
            <img
              src="/assets/logo/8con Academy Logo White.png"
              alt="8Con Academy Logo"
              className="logo-img"
            />
          </a>

          {/* Home Navigation */}
          <nav className="desktop-nav">
            <Link to="/#home" className="nav-link">
              Home
            </Link>
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <a
              href="#home"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
          </nav>
        )}
      </header>

      {/* Main content - Added padding-top to account for fixed header */}
      <main className="about-us-main">
        {/* Hero Section with Background Image */}
        <section className="about-us-hero">
          <div className="about-us-hero-overlay"></div>
        </section>
        <section>
          {/* Content Container */}
          <div className="about-us-content">
            {/* Vision and Mission Section */}
            <div className="about-us-grid">
              {/* Our Vision */}
              <div className="about-us-main-title">
                <h1>Who is 8Con Academy?</h1>
              </div>

              <div className="about-us-card">
                <div className="about-us-card-header">
                  <h2 className="about-us-card-title">
                    8CON Academy: Empowering Filipino Families through Financial
                    Education
                  </h2>
                </div>
                <p className="about-us-card-text justified-text">
                  8Con Academy is a premier trading and financial education
                  institution based in Meycauayan, Bulacan. We specialize in
                  Forex Derivative Education, empowering aspiring traders
                  through structured, confluence-based strategies — rooted in
                  discipline, real-world practice, and continuous coaching.
                </p>
                <p className="about-us-card-text justified-text">
                  At 8Con, we believe that Confluence Builds Confidence. Our
                  name, “8Con,” reflects the 8 key confluences traders must
                  master to make sound, profitable decisions, a philosophy that
                  runs through every program we offer.
                </p>
                <h3 className="about-us-card-subtitle">Our Services</h3>
                <ul className="about-us-card-text justified-list">
                  <li className="justified-text">
                    <p>
                      <strong>Beginner to Advanced Courses:</strong> From
                      introductory forex modules to in-depth technical and
                      fundamental analysis for advanced learners.
                    </p>
                  </li>
                  <li className="justified-text">
                    <p>
                      <strong>Practical Training Tools:</strong> Access to
                      cutting-edge tools, including our proprietary trading
                      application (8Con Edge), which supports market analysis,
                      risk management, and strategy testing.
                    </p>
                  </li>
                  <li className="justified-text">
                    <p>
                      <strong>Special Programs:</strong> The "Enrollment to
                      Employment" initiative equips graduates with career
                      pathways, making forex trading a viable livelihood.
                    </p>
                  </li>
                </ul>

                <h3 className="about-us-card-subtitle">What Makes Us Unique</h3>

                <ul className="about-us-card-text justified-list">
                  <li className="justified-text">
                    Graduates can pursue careers as independent traders,
                    corporate traders, trading consultants, copy trade signal
                    providers and forex coaches.
                  </li>
                  <li className="justified-text">
                    Future opportunities include joining 8Con Trading Hub or
                    becoming part of our franchise system as educators or
                    mentors.
                  </li>
                </ul>

                <h3 className="about-us-card-subtitle">Community Engagement</h3>
                <p className="about-us-card-text justified-text">
                  We take a grassroots approach to financial literacy,
                  collaborating with local government units (LGUs) and community
                  organizations. We aim to uplift communities by promoting
                  financial independence and responsible trading practices.
                </p>
              </div>
              <div className="about-us-card">
                <div className="about-us-card-header">
                  <Eye
                    size={32}
                    style={{ color: "#0edb61" }}
                    className="about-us-card-icon"
                  />
                  <h2 className="about-us-card-title">Our Vision</h2>
                </div>
                <p className="about-us-card-text justified-text">
                  To create a profitable and financially empowered trader in
                  every Filipino family. Through accessible education, practical
                  tools, and community engagement, we are committed to fostering
                  a culture of financial literacy and independence in the
                  Philippines.
                </p>
              </div>

              {/* Our Mission */}
              <div className="about-us-card">
                <div className="about-us-card-header">
                  <Goal
                    size={32}
                    style={{ color: "#ff1f2c" }}
                    className="about-us-card-icon"
                  />
                  <h2 className="about-us-card-title">Our Mission</h2>
                </div>
                <p className="about-us-card-text justified-text">
                  To create a profitable forex trader in every Filipino
                  household. By combining education and innovation, the academy
                  is building a lasting legacy of empowerment, financial
                  independence, and sustainable opportunities for individuals
                  and communities.
                </p>
              </div>
            </div>

            {/* Core Values and CSR Section */}
            <div className="about-us-grid">
              {/* Core Values */}
              <div className="about-us-card">
                <div className="about-us-card-header">
                  <Atom
                    size={32}
                    style={{ color: "#0edb61" }}
                    className="about-us-card-icon"
                  />
                  <h2 className="about-us-card-title">Core Values</h2>
                </div>
                <div className="about-us-card-section">
                  <h3 className="about-us-card-subtitle">Detailed Version</h3>
                  <ul className="about-us-card-text justified-list">
                    <li className="justified-text">
                      <p>
                        <strong>Empowering Lives Through Education:</strong> We
                        are committed to transforming lives by equipping
                        individuals with the financial literacy and trading
                        expertise they need to achieve independence, resilience,
                        and long-term success. Education is the foundation for
                        creating opportunities and building a better future for
                        individuals and communities alike.
                      </p>
                    </li>
                    <li className="justified-text">
                      <p>
                        <strong>Innovating for Lasting Impact:</strong> We
                        embrace innovation as a driver of excellence, leveraging
                        cutting-edge technology and adaptive strategies to
                        deliver education that creates enduring value. By
                        staying ahead of industry trends, we ensure our students
                        and stakeholders are prepared for the challenges of
                        tomorrow.
                      </p>
                    </li>
                    <li className="justified-text">
                      <p>
                        <strong>
                          Strength in Collaboration and Inclusivity:
                        </strong>{" "}
                        We thrive through partnerships, uniting diverse
                        perspectives to create a supportive ecosystem where
                        everyone can succeed. Together, we empower students,
                        trainers, and communities, fostering a culture of mutual
                        growth, inclusivity, and shared achievement.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Corporate Social Responsibility Initiatives */}
              <div className="about-us-card">
                <div className="about-us-card-header">
                  <HeartHandshake
                    size={32}
                    style={{ color: "#ff1f2c" }}
                    className="about-us-card-icon"
                  />
                  <h2 className="about-us-card-title">
                    Corporate Social Responsibility
                  </h2>
                </div>
                <p className="about-us-card-text justified-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="about-us-card-text justified-text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Partnership */}
            <div>
              <h4 className="footer-title">Partnership</h4>
              <ul className="footer-list">
                <div className="footer-logo">
                  <img
                    src="/assets/logo/tickmill.png"
                    alt="8Con Logo"
                    className="footer-logo-img"
                  />
                  <img
                    src="/assets/logo/dupoin.png"
                    alt="8Con Logo"
                    className="footer-logo-img"
                  />
                </div>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-container">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-list">
                <li>
                  <a href="#core-brand" className="quick-link">
                    Brands
                  </a>
                </li>
                <li>
                  <a href="" className="quick-link">
                    Newsletters
                  </a>
                </li>
                <li>
                  <a href="#internship" className="quick-link">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#about" className="quick-link">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Programs */}
            <div className="footer-container">
              <h4 className="footer-title">Programs</h4>
              <ul className="footer-list">
                <li>
                  <a href="#core-brand" className="program-link">
                    Core brands
                  </a>
                </li>
                <li>
                  <a href="#sub-brands" className="program-link">
                    Sub-brands
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-container">
              <h4 className="footer-title">Contact Info</h4>
              <div className="footer-contact-info">
                <p>
                  <Phone
                    size={18}
                    style={{ marginRight: "8px", verticalAlign: "middle" }}
                  />
                  +63 954 996 1125
                </p>
                <p>
                  <Mail
                    size={18}
                    style={{ marginRight: "8px", verticalAlign: "middle" }}
                  />
                  8ConAcademy@gmail.com
                </p>
                <p style={{ marginBottom: "16px" }}>
                  <Clock
                    size={18}
                    style={{ marginRight: "8px", verticalAlign: "middle" }}
                  />
                  Mon–Fri 11:00 AM – 8:00 PM
                </p>
                <div className="footer-social">
                  <a
                    href="https://www.facebook.com/8ConAcademy"
                    className="fb-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook size={18} style={{ marginRight: "8px" }} />
                  </a>
                  <a
                    href="https://www.instagram.com/8conacademy/"
                    className="ig-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={18} style={{ marginRight: "8px" }} />
                  </a>
                  <a
                    href="https://ph.linkedin.com/company/8con-academy"
                    className="li-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={18} style={{ marginRight: "8px" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>
                &copy; 2025 <strong>8Con Academy</strong>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
