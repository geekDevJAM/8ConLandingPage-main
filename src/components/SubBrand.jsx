import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Brain,
  Target,
  Globe,
  Award,
  Network,
  TrendingUp,
  ArrowRight,
  Home,
  BookOpen,
  Users,
} from "lucide-react";

const SubBrand = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [subBrandsDropdownOpen, setSubBrandsDropdownOpen] = useState(false);
  const [mobileSubBrandsDropdownOpen, setMobileSubBrandsDropdownOpen] =
    useState(false);

  const subBrandsData = [
    {
      id: "construct",
      name: "8ConStruct",
      route: "/construct",
      desc: "Research and statistical consultancy to empower decision-making.",
      detailedDesc:
        "Comprehensive research and statistical analysis services for businesses, academic institutions, and organizations. We provide data-driven insights to help you make informed decisions and achieve your strategic objectives.",
      icon: <Brain size={60} />,
      services: [
        "Market Research",
        "Statistical Analysis",
        "Data Visualization",
        "Business Intelligence",
      ],
    },
    {
      id: "conedge",
      name: "8ConEdge",
      route: "/conedge",
      desc: "Proprietary Forex tools to enhance trading efficiency.",
      detailedDesc:
        "Cutting-edge trading tools and analytics designed specifically for Forex traders. Gain a competitive advantage with our proprietary indicators, automated systems, and market analysis tools.",
      icon: <TrendingUp size={60} />,
      services: [
        "Trading Indicators",
        "Market Analysis",
        "Automated Systems",
        "Risk Management Tools",
      ],
    },

    {
      id: "concise",
      name: "8ConCise",
      route: "/concise",
      desc: "Entrepreneur networking hub to grow business relationships.",
      detailedDesc:
        "A dynamic platform connecting entrepreneurs, investors, and business leaders. Build meaningful relationships, discover collaboration opportunities, and accelerate your business growth.",
      icon: <Network size={60} />,
      services: [
        "Networking Events",
        "Business Matching",
        "Investor Relations",
        "Partnership Development",
      ],
    },
    {
      id: "conquest",
      name: "8ConQuest",
      route: "/conquest",
      desc: "Thesis and career coaching for students and professionals.",
      detailedDesc:
        "Professional guidance for academic and career development. From thesis writing support to career transition coaching, we help individuals achieve their educational and professional goals.",
      icon: <Target size={60} />,
      services: [
        "Thesis Writing Support",
        "Career Coaching",
        "Interview Preparation",
        "Professional Development",
      ],
    },
    {
      id: "converse",
      name: "8ConVerse",
      route: "/converse",
      desc: "Language certification courses to broaden opportunities.",
      detailedDesc:
        "Comprehensive language learning programs designed to enhance communication skills and open global opportunities. Master new languages with our expert instructors and proven methodologies.",
      icon: <Globe size={60} />,
      services: [
        "English Proficiency",
        "Business Communication",
        "IELTS/TOEFL Prep",
        "Multilingual Training",
      ],
    },
    {
      id: "connect",
      name: "8ConNect",
      route: "/connect",
      desc: "Entrepreneur networking hub to grow business relationships.",
      detailedDesc:
        "A dynamic platform connecting entrepreneurs, investors, and business leaders. Build meaningful relationships, discover collaboration opportunities, and accelerate your business growth.",
      icon: <Network size={60} />,
      services: [
        "Networking Events",
        "Business Matching",
        "Investor Relations",
        "Partnership Development",
      ],
    },
    {
      id: "conlift",
      name: "8ConLift",
      route: "/conlift",
      desc: "Scholarship and training programs for deserving students.",
      detailedDesc:
        "Educational empowerment through scholarships and specialized training programs. We believe in lifting communities by providing access to quality education and skill development opportunities.",
      icon: <Award size={60} />,
      services: [
        "Full Scholarships",
        "Skills Training",
        "Mentorship Programs",
        "Community Outreach",
      ],
    },
    {
      id: "conpact",
      name: "8ConPact",
      route: "/conpact",
      desc: "Scholarship and training programs for deserving students.",
      detailedDesc:
        "Educational empowerment through scholarships and specialized training programs. We believe in lifting communities by providing access to quality education and skill development opportunities.",
      icon: <Award size={60} />,
      services: [
        "Full Scholarships",
        "Skills Training",
        "Mentorship Programs",
        "Community Outreach",
      ],
    },
    {
      id: "conspace",
      name: "8ConSpace",
      route: "/conspace",
      desc: "Co-working space and virtual office solutions for professionals and students.",
      detailedDesc:
        "A dynamic, productivity-driven space for freelancers, entrepreneurs, online professionals, and students. Whether you're building a startup or finishing your research, 8ConSpace gives you a professional and collaborative environment to grow and execute.",
      icon: <Users size={60} />,
      services: [
        "Flexible Desk Rentals",
        "Virtual Office Solutions",
        "Startup Environment",
        "Student Pods",
      ],
    },
    {
      id: "consult",
      name: "8ConSult",
      route: "/consult",
      desc: "Business development and startup advisory with Sir Nigel Santos.",
      detailedDesc:
        "A consultation arm powered by real-world experience in entrepreneurship. Spearheaded by Sir Nigel Santos, this service provides personalized startup coaching and business model refinement to help entrepreneurs thrive.",
      icon: <BookOpen size={60} />,
      services: [
        "Startup Coaching",
        "Business Model Analysis",
        "Sales Strategy & Growth Blueprint",
        "Investor Deck & Pitch Support",
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Delay to ensure the element is rendered
      }
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
    setSubBrandsDropdownOpen(false);
  };

  const handleLearnMore = (brandName) => {
    const brand = subBrandsData.find((b) => b.name === brandName);
    if (brand && brand.route) {
      navigate(brand.route);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100); // small delay to allow the route to change
    } else {
      console.log(
        `Learn more about ${brandName} - Component not yet available`
      );
    }
  };

  const handleDropdownNavigation = (brand, action = "scroll") => {
    if (action === "navigate" && brand.route) {
      // Navigate to the component page
      navigate(brand.route);
    } else {
      // Scroll to section on current page
      scrollToSection(brand.id);
    }
    setMobileMenuOpen(false);
    setSubBrandsDropdownOpen(false);
    setMobileSubBrandsDropdownOpen(false);
  };

  useEffect(() => {
    const icons = document.querySelectorAll(".tilt-icon");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const icon = el.querySelector(".icon-wrapper");

          if (entry.isIntersecting) {
            el.classList.add("visible");
            icon.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
          } else {
            el.classList.remove("visible");
            icon.style.transform = "translateY(100px)";
          }
        });
      },
      {
        threshold: 0.8, // ✅ wait until 80% of the section is in view
      }
    );

    icons.forEach((icon) => observer.observe(icon));

    const handleMouseMove = (e) => {
      icons.forEach((el) => {
        if (!el.classList.contains("visible")) return;

        const icon = el.querySelector(".icon-wrapper");
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = (-y / 20).toFixed(2);
        const rotateY = (x / 20).toFixed(2);
        icon.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      icons.forEach((icon) => observer.unobserve(icon));
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    const fadeSections = document.querySelectorAll(".fade-section");

    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 } // Adjust this to control when fade triggers
    );

    fadeSections.forEach((section) => fadeObserver.observe(section));

    return () => {
      fadeSections.forEach((section) => fadeObserver.unobserve(section));
    };
  }, []);

  return (
    <div className="app-container">
      {/* Header - Using exact design from Home.jsx */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          {/* Logo */}
          <a href="/" className="logo">
            <img
              src="/assets/logo/8con Academy Logo White.png"
              alt="8Con Academy Logo"
              className="logo-img"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a
              href="#top"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMobileMenuOpen(false);
              }}
            >
              Home
            </a>

            {/* Sub-brands Dropdown */}
            <div className="dropdown">
              <span className="nav-link">Sub-brands ▾</span>
              <div className="dropdown-content">
                {subBrandsData.map((brand, index) => (
                  <a
                    key={index}
                    href={`#${brand.id}`}
                    className="dropdown-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(brand.id);
                    }}
                  >
                    {brand.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <a
              href="/"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>

            {/* Mobile Sub-brands Dropdown */}
            <div className="mobile-dropdown">
              <button
                className="mobile-nav-link mobile-dropdown-toggle"
                onClick={() =>
                  setMobileSubBrandsDropdownOpen(!mobileSubBrandsDropdownOpen)
                }
              >
                Sub-brands{" "}
                <ChevronDown
                  size={16}
                  className={mobileSubBrandsDropdownOpen ? "rotate-180" : ""}
                />
              </button>
              {mobileSubBrandsDropdownOpen && (
                <div className="mobile-dropdown-content">
                  {subBrandsData.map((brand, index) => (
                    <a
                      key={index}
                      href={`#${brand.id}`}
                      className="mobile-nav-sublink"
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        setMobileSubBrandsDropdownOpen(false);
                        scrollToSection(brand.id);
                      }}
                    >
                      {brand.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>
        )}
      </header>

      <main className="main-content">
        {/* Hero Section */}

        {/* Parallax Bull Section */}
        <section id="home" className="parallax-bull">
          <div className="parallax-overlay"></div>
          <div className="parallax-content">
            <h1 className="parallax-title">Discover Our Sub-Brands</h1>
            <p className="parallax-subtitle">
              Comprehensive solutions across multiple domains to empower your
              growth and success
            </p>
            <button
              className="btn-primary"
              onClick={() => scrollToSection("construct")}
            >
              Explore Sub-Brands
            </button>
          </div>
        </section>

        {/* Sub-brands Sections */}
        {subBrandsData.map((brand, index) => (
          <section
            key={index}
            id={brand.id}
            className={`brand-section parallax-container ${
              index % 2 === 1 ? "alternate-bg" : ""
            }`}
          >
            <div className="brand-container">
              <div
                className={`brand-content-wrapper ${
                  index % 2 === 1 ? "reverse" : ""
                }`}
              >
                <div
                  className="brand-content fade-section "
                  data-speed="0.2"
                  data-id={brand.id}
                >
                  <div className="icon-wrapper">
                    <div className="brand-title-wrapper">
                      <div className="brand-icon-wrapper small">
                        {brand.icon}
                      </div>
                      <h2 className="brand-title">{brand.name}</h2>
                    </div>
                    <p className="brand-description">{brand.detailedDesc}</p>

                    <div className="services-grid">
                      {brand.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="service-item">
                          <span className="service-bullet">✓</span>
                          {service}
                        </div>
                      ))}
                    </div>

                    <button
                      className="learn-more-btn"
                      onClick={() => handleLearnMore(brand.name)}
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="brand-visual">
                  <div
                    className="brand-visual-content parallax-icon tilt-icon"
                    data-speed="0.2"
                    data-id={brand.id}
                  >
                    <div className="icon-wrapper">
                      <img
                        src="/assets/images/8c93f208-de17-4742-880a-ce1fdd7158ba.png"
                        alt={brand.name}
                        className="parallax-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      <style jsx>{`
        /* Import the navigation styles from your Home.jsx */
        .app-container {
          min-height: 100vh;
          background: #e4eed3;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Use the exact header styles from App.css */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 999;
          background: transparent;
          padding: 10px 5%;
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          font-weight: 900;
          text-transform: uppercase;
          transition: background-color 0.8s ease, box-shadow 0.8s ease;
        }

        .header.scrolled {
          background-color: rgb(0, 0, 0);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .header-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-right: 5%;
          padding-left: 5%;
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          margin-right: auto;
        }

        .logo-img {
          height: 40px;
          width: auto;
        }
        .tilt-icon {
          opacity: 0;
          transform: translateY(100px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .tilt-icon.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .icon-wrapper {
          transition: transform 0.3s ease;
          will-change: transform;
          transform-style: preserve-3d;
        }

        .parallax-image {
          width: 180px;
          height: auto;
          object-fit: contain;
          transform: rotateX(0deg) rotateY(0deg);
          transition: transform 0.3s ease;
          will-change: transform;
        }
        .fade-section {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2px;
          font-size: 14px;
          font-weight: 600;
          position: relative;
        }

        .nav-link {
          text-decoration: none;
          color: rgb(255, 255, 255);
          padding: 0px 15px;
          border-radius: 6px;
          transition: background-color 0.3s ease, color 0.3s ease,
            transform 0.3s ease;
          position: relative;
          display: inline-block;
          cursor: pointer;
        }

        .nav-link::before {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 10%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff9d9f, #ff1f2c);
          transition: width 0.3s ease;
          transform: translateX(0%);
        }

        .nav-link:hover {
          color: #ff1f2c;
          transform: translateY(-5px);
        }

        .nav-link:hover::before {
          width: 80%;
        }

        /* Dropdown Styles */
        .dropdown {
          position: relative;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          padding: 5px 0;
          min-width: 160px;
          z-index: 1000;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .dropdown-content a,
        .dropdown-link {
          display: block;
          padding: 10px 15px;
          color: #121411;
          text-decoration: none;
          transition: background-color 0.3s ease, color 0.3s ease;
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .dropdown-content a:hover,
        .dropdown-link:hover {
          background-color: white;
          color: #ff1f2c;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }

        /* Mobile Navigation */
        .mobile-nav {
          background-color: white;
          border-top: 1px solid #e5e7eb;
          margin-top: 16px;
          padding: 0;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 8px;
          text-decoration: none;
          color: #121411;
          border-bottom: 1px solid #f3f4f6;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 1rem;
          cursor: pointer;
        }

        .mobile-nav-link:hover {
          background-color: #f9fafb;
        }

        .mobile-menu-toggle {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: white;
        }

        .mobile-dropdown {
          position: relative;
        }

        .mobile-dropdown-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .mobile-dropdown-content {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          margin: 0.5rem 1rem;
        }

        .mobile-nav-sublink {
          display: block;
          padding: 0.75rem 1rem;
          color: rgba(0, 0, 0, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .mobile-nav-sublink:last-child {
          border-bottom: none;
        }

        .mobile-nav-sublink:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }

        .rotate-180 {
          transform: rotate(180deg);
        }
        .parallax-bull {
          position: relative;
          height: 100vh;
          background-image: url("/assets/images/bull.png");
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
          z-index: 1;
          overflow: hidden;
        }

        .parallax-overlay {
          background-color: rgba(0, 0, 0, 0.4); /* semi-dark overlay */
          position: absolute;
          inset: 0;
          z-index: 2;
        }

        .parallax-content {
          position: relative;
          z-index: 3;
          max-width: 800px;
          padding: 2rem;
        }

        .parallax-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
        }

        .parallax-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
        }

        /* Parallax Container */
        .parallax-container {
          position: relative;
          overflow: hidden;
        }

        .parallax-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
          z-index: -1;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          text-align: center;
          color: white;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }

        .hero-image-bg {
          position: absolute;
          inset: 0;
          background: url("/assets/images/image.png") center center / cover
            no-repeat;
          filter: brightness(0.4); /* darkens the background */
          z-index: 1;
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="%23068c3b" opacity="0.07"/></svg>');
          background-size: 40px 40px;
          animation: patternShift 40s linear infinite;
          z-index: 2;
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 3;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: transparent;
        }

        .hero-image-container {
          margin-bottom: 2rem;
        }

        .hero-image {
          height: 120px;
          width: auto;
        }

        .hero-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: bold;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        }

        .hero-subtitle {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .hero-buttons .btn-primary {
          background-color: #068c3b;
          color: white;
          padding: 0.75rem 2rem;
          font-size: 1rem;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease;
        }
        .hero-buttons .btn-primary:hover {
          background-color: #04662b;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #068c3b 0%, #0edb61 100%);
          color: white;
          border: none;
          border-radius: 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(6, 140, 59, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(6, 140, 59, 0.4);
        }

        /* Brand Sections */
        .brand-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 100px 20px;
          position: relative;
        }

        .brand-section:nth-child(odd) {
          background: linear-gradient(
            135deg,
            #e4eed3 0%,
            rgba(228, 238, 211, 0.7) 100%
          );
        }

        .brand-section.alternate-bg {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            rgba(255, 255, 255, 0.9) 50%,
            #e4eed3 100%
          );
        }

        .brand-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .brand-content-wrapper {
          display: flex;
          align-items: center;
          gap: 80px;
        }

        .brand-content-wrapper.reverse {
          flex-direction: row-reverse;
        }

        .brand-content {
          flex: 1;
          max-width: 600px;
        }

        .brand-icon-wrapper {
          color: #068c3b;
          margin-bottom: 2rem;
          filter: drop-shadow(0 4px 8px rgba(6, 140, 59, 0.2));
        }

        .brand-title-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .brand-icon-wrapper.small {
          margin-bottom: 0; /* override the original large margin */
          color: #068c3b;
          filter: drop-shadow(0 2px 4px rgba(6, 140, 59, 0.2));
        }
        .brand-title {
          font-size: 3rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .brand-description {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .service-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          background: rgba(6, 140, 59, 0.05);
          border-radius: 0.75rem;
          color: #068c3b;
          font-weight: 500;
          border-left: 4px solid #068c3b;
          transition: all 0.3s ease;
        }

        .service-item:hover {
          background: rgba(6, 140, 59, 0.1);
          transform: translateX(5px);
        }

        .service-bullet {
          color: #0edb61;
          font-weight: bold;
          font-size: 1.1rem;
        }

        .learn-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          background: linear-gradient(135deg, #990f17 0%, #ff1f2c 100%);
          color: white;
          border: none;
          border-radius: 1.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 31, 44, 0.3);
          font-size: 1rem;
        }

        .learn-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 31, 44, 0.4);
        }

        .brand-visual {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .brand-visual-content {
          width: 280px;
          height: 280px;
          background: linear-gradient(
            135deg,
            rgba(6, 140, 59, 0.1) 0%,
            rgba(14, 219, 97, 0.2) 100%
          );
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #068c3b;
          border: 3px solid rgba(6, 140, 59, 0.2);
          position: relative;
          overflow: hidden;
        }

        .brand-visual-content::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(14, 219, 97, 0.1),
            transparent
          );
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          50% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
          100% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .mobile-nav {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .brand-content-wrapper,
          .brand-content-wrapper.reverse {
            flex-direction: column;
            gap: 40px;
            text-align: center;
          }

          .brand-title {
            font-size: 2.2rem;
          }

          .brand-description {
            font-size: 1.1rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .brand-visual-content {
            width: 220px;
            height: 220px;
          }

          .brand-section {
            padding: 60px 20px;
          }
        }

        @media (max-width: 480px) {
          .header-container {
            padding: 0 3%;
          }

          .hero-section {
            padding: 100px 15px 60px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .brand-section {
            padding: 50px 15px;
          }

          .brand-title {
            font-size: 1.8rem;
          }

          .brand-content-wrapper {
            gap: 30px;
          }

          .brand-visual-content {
            width: 180px;
            height: 180px;
          }

          .services-grid {
            gap: 0.75rem;
          }

          .service-item {
            padding: 0.75rem 1rem;
          }
        }

        /* Large desktop screens */
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex;
          }

          .mobile-menu-toggle {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default SubBrand;
