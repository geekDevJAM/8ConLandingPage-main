import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ScrollUp from "./ScrollUp";
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
  BookOpen,
  Users,
  Clock,
  CheckCircle,
  Mic,
  PenTool,
  Eye,
  MapPin,
  GraduationCap,
  Briefcase,
  Plane,
} from "lucide-react";

const ConVerse = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [subBrandsDropdownOpen, setSubBrandsDropdownOpen] = useState(false);
  const [mobileSubBrandsDropdownOpen, setMobileSubBrandsDropdownOpen] =
    useState(false);
  const [animatedSections, setAnimatedSections] = useState(new Set());
  const isAnimated = (sectionId) => animatedSections.has(sectionId);
  // const [visibleSections, setVisibleSections] = useState(new Set());
  const [isInHeroSection, setIsInHeroSection] = useState(false);
  const [heroAnimationKey, setHeroAnimationKey] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  // Refs for sections
  const heroRef = useRef(null);
  const importanceRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);

  const subBrandsData = [
    {
      id: "construct",
      name: "8ConStruct",
      route: "/construct",
      desc: "Research and statistical consultancy to empower decision-making.",
      icon: <Brain size={60} />,
    },
    {
      id: "conedge",
      name: "8ConEdge",
      route: "/conedge",
      desc: "Proprietary Forex tools to enhance trading efficiency.",
      icon: <TrendingUp size={60} />,
    },
    {
      id: "concise",
      name: "8ConCise",
      route: "/concise",
      desc: "Entrepreneur networking hub to grow business relationships.",
      icon: <Network size={60} />,
    },
    {
      id: "connect",
      name: "8ConNect",
      route: "/connect",
      desc: "Entrepreneur networking hub to grow business relationships.",
      icon: <Network size={60} />,
    },
    {
      id: "conlift",
      name: "8ConLift",
      route: "/conlift",
      desc: "Scholarship and training programs for deserving students.",
      icon: <Award size={60} />,
    },
    {
      id: "conpact",
      name: "8ConPact",
      route: "/conpact",
      desc: "Scholarship and training programs for deserving students.",
      icon: <Award size={60} />,
    },
    {
      id: "conquest",
      name: "8ConQuest",
      route: "/conquest",
      desc: "Thesis and career coaching for students and professionals.",
      icon: <Target size={60} />,
    },
    {
      id: "conspace",
      name: "8ConSpace",
      route: "/conspace",
      desc: "Co-working space and virtual office solutions for professionals and students.",
      icon: <Users size={60} />,
    },
    {
      id: "consult",
      name: "8ConSult",
      route: "/consult",
      desc: "Business development and startup advisory with Sir Nigel Santos.",
      icon: <BookOpen size={60} />,
    },
  ];

  // Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setAnimatedSections((prev) => new Set([...prev, sectionId]));
        }
      });
    }, observerOptions);

    const sections = [
      heroRef,
      importanceRef,
      servicesRef,
      whyChooseRef,
      benefitsRef,
      ctaRef,
    ];

    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Observer for hero section to detect when user is at top
  useEffect(() => {
    const heroObserverOptions = {
      threshold: 0.6,
      rootMargin: "0px",
    };

    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const wasInHero = isInHeroSection;
        const nowInHero = entry.isIntersecting;

        setIsInHeroSection(nowInHero);

        if (nowInHero) {
          // Reset ALL section animations when entering hero section
          setAnimatedSections(new Set());
          setHeroAnimationKey((prev) => prev + 1);

          // Trigger hero animation
          setTimeout(() => {
            setAnimatedSections((prev) => new Set([...prev, "hero"]));
          }, 100);
        }
      });
    }, heroObserverOptions);

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    return () => heroObserver.disconnect();
  }, [isInHeroSection]);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    setSubBrandsDropdownOpen(false);
    setMobileSubBrandsDropdownOpen(false);
  };

  const handleSmoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setAnimatedSections(new Set());

    setTimeout(() => {
      setAnimatedSections((prev) => new Set([...prev, "hero"]));
    }, 300);
  }, []);

  return (
    <div style={styles.container}>
      {/* Add CSS styles with animations */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
            scroll-padding-top: 2px;
          }
          
          /* Animation keyframes */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(60px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes bounceIn {
            0% {
              opacity: 0;
              transform: scale(0.3) translateY(-50px);
            }
            50% {
              opacity: 1;
              transform: scale(1.05) translateY(-10px);
            }
            70% {
              transform: scale(0.95) translateY(0);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          
          @keyframes slideInFromBottom {
            from {
              opacity: 0;
              transform: translateY(100px) rotate(5deg);
            }
            to {
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.02);
            }
          }
          
          /* Base styles for animated elements */
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(60px);
            transition: none;
          }
          
          /* Hero animations */
         .animate-hero-title {
  animation: fadeInUp 1.2s ease-out 0.2s both;
}

.animate-hero-subtitle {
  animation: fadeInUp 1.2s ease-out 0.4s both;
}

.animate-hero-description {
  animation: fadeInUp 1.2s ease-out 0.6s both;
}

.animate-hero-buttons {
  animation: fadeInUp 1.2s ease-out 0.8s both;
}

          
          /* Section animations */
          .section-visible .section-title {
            animation: fadeInUp 1s ease-out 0.1s both;
          }
          
          .section-visible .importance-card:nth-child(1) {
            animation: fadeInLeft 1s ease-out 0.2s both;
          }
          
          .section-visible .importance-card:nth-child(2) {
            animation: fadeInUp 1s ease-out 0.4s both;
          }
          
          .section-visible .importance-card:nth-child(3) {
            animation: fadeInRight 1s ease-out 0.6s both;
          }
          
          .section-visible .service-card:nth-child(1) {
            animation: scaleIn 1s ease-out 0.2s both;
          }
          
          .section-visible .service-card:nth-child(2) {
            animation: scaleIn 1s ease-out 0.4s both;
          }
          
          .section-visible .service-card:nth-child(3) {
            animation: scaleIn 1s ease-out 0.6s both;
          }
          
          .section-visible .service-card:nth-child(4) {
            animation: scaleIn 1s ease-out 0.8s both;
          }
          
          .section-visible .benefit-card:nth-child(1) {
            animation: bounceIn 1s ease-out 0.2s both;
          }
          
          .section-visible .benefit-card:nth-child(2) {
            animation: bounceIn 1s ease-out 0.4s both;
          }
          
          .section-visible .benefit-card:nth-child(3) {
            animation: bounceIn 1s ease-out 0.6s both;
          }
          
          .section-visible .benefit-card:nth-child(4) {
            animation: bounceIn 1s ease-out 0.8s both;
          }
          
          .section-visible .client-category:nth-child(1) {
            animation: slideInFromBottom 1s ease-out 0.2s both;
          }
          
          .section-visible .client-category:nth-child(2) {
            animation: slideInFromBottom 1s ease-out 0.4s both;
          }
          
          .section-visible .client-category:nth-child(3) {
            animation: slideInFromBottom 1s ease-out 0.6s both;
          }
          
          .section-visible .cta-title {
            animation: fadeInUp 1s ease-out 0.1s both;
          }
          
          .section-visible .cta-description {
            animation: fadeInUp 1s ease-out 0.3s both;
          }
          
          .section-visible .cta-buttons {
            animation: fadeInUp 1s ease-out 0.5s both;
          }
          
          .section-visible .cta-highlight {
            animation: pulse 2s ease-in-out 0.7s both infinite;
          }
          
          .header {
            background-color: transparent;
            box-shadow: none;
            position: fixed;
            top: 0;
            z-index: 1000;
            width: 100%;
            padding: 10px 0;
            font-family: 'Montserrat', sans-serif;
            font-size: 14px;
            font-weight: 900;
            text-transform: uppercase;
            transition: background-color 0.8s ease, box-shadow 0.8s ease, backdrop-filter 0.3s ease;
          }
          
          .header.scrolled {
            background-color: rgba(0, 0, 0, 0.95);
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
          
          .desktop-nav {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            font-weight: 600;
            position: relative;
          }
          
          .nav-link {
            text-decoration: none;
            color: rgb(255, 255, 255);
            padding: 10px 15px;
            border-radius: 6px;
            transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
            position: relative;
            display: inline-block;
            cursor: pointer;
          }
          
          .nav-link:hover {
            transform: translateY(-2px);
          }
          
          .dropdown {
            position: relative;
          }
          
          .dropdown:hover .dropdown-content {
            display: block;
          }
          
          .dropdown-content {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: white;
            padding: 10px 0;
            min-width: 200px;
            z-index: 1000;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            border-radius: 8px;
            border: 1px solid #e0e0e0;
          }
          
          .dropdown-link {
            display: block;
            padding: 12px 20px;
            color: #333;
            text-decoration: none;
            transition: all 0.3s ease;
            font-family: 'Montserrat', sans-serif;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
          }
          
          .dropdown-link:hover {
            background-color: #f0f0f0;
            color: #0edb61;
          }
          
          .mobile-menu-toggle {
            background: none;
            border: none;
            font-size: 18px;
            cursor: pointer;
            color: white;
            display: none;
            padding: 5px;
          }
          
          .mobile-nav {
            background-color: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            border-top: 1px solid #e5e7eb;
            padding: 10px 0;
            max-height: 80vh;
            overflow-y: auto;
          }
          
          .mobile-nav-link {
            display: block;
            padding: 15px 20px;
            text-decoration: none;
            color: #333;
            border-bottom: 1px solid #f3f4f6;
            font-size: 16px;
            transition: background-color 0.3s ease;
          }
          
          .mobile-nav-link:hover {
            background-color: rgba(14, 219, 97, 0.1);
          }
          
          .mobile-dropdown {
            position: relative;
          }
          
          .mobile-dropdown-toggle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 15px 20px;
            text-decoration: none;
            color: #333;
            border-bottom: 1px solid #f3f4f6;
            background: none;
            border: none;
            text-align: left;
            font-size: 16px;
            cursor: pointer;
          }
          
          .mobile-dropdown-content {
            background-color: rgba(248, 249, 250, 0.9);
            border-radius: 0.5rem;
            margin: 0 20px;
            margin-bottom: 10px;
          }
          
          .mobile-nav-sublink {
            display: block;
            padding: 12px 20px;
            color: #555;
            text-decoration: none;
            font-size: 14px;
            border-bottom: 1px solid rgba(0,0,0,0.05);
          }
          
          .rotate-180 {
            transform: rotate(180deg);
            transition: transform 0.3s ease;
          }
          
          @media (max-width: 1024px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-menu-toggle {
              display: block !important;
            }
          }
          
          @media (min-width: 1025px) {
            .mobile-nav {
              display: none !important;
            }
          }
        `}
      </style>

      {/* Header - Navigation */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          <a href="/" className="logo">
            <img
              src="/assets/logo/8con Academy Logo White.png"
              alt="8Con Academy Logo"
              className="logo-img"
            />
          </a>

          <nav className="desktop-nav">
            <Link to="/sub-brands" className="nav-link">
              Home
            </Link>
            <div className="dropdown">
              <span className="nav-link">Sub-brands ▾</span>
              <div className="dropdown-content">
                {subBrandsData.map((brand, index) => (
                  <a
                    key={index}
                    href={brand.route}
                    className="dropdown-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(brand.route);
                    }}
                  >
                    {brand.name}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="#importance"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("importance");
              }}
            >
              Why Language Matters
            </a>
            <a
              href="#services"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("services");
              }}
            >
              How We Help
            </a>
            <a
              href="#why-choose"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("why-choose");
              }}
            >
              Why Choose Us
            </a>
            <a
              href="#benefits"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("benefits");
              }}
            >
              Who Benefits
            </a>
            <a
              href="#cta"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("cta");
              }}
            >
              Contact
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <Link to="/sub-brands" className="mobile-nav-link">
              Home
            </Link>

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
                      href={brand.route}
                      className="mobile-nav-sublink"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(brand.route);
                      }}
                    >
                      {brand.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#importance"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("importance");
              }}
            >
              Why Language Matters
            </a>
            <a
              href="#services"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("services");
              }}
            >
              How We Help
            </a>
            <a
              href="#why-choose"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("why-choose");
              }}
            >
              Why Choose Us
            </a>
            <a
              href="#benefits"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("benefits");
              }}
            >
              Who Benefits
            </a>
            <a
              href="#cta"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("cta");
              }}
            >
              Contact
            </a>
          </nav>
        )}
      </header>
      <main>
        {/* Hero Section - Green Background */}
        <section id="hero" ref={heroRef} style={styles.heroSection}>
          <div style={styles.heroContent}>
            <h1
              className={`hero-title ${
                isAnimated("hero") ? "animate-hero-title" : ""
              }`}
              style={styles.companyTitle}
              key={`hero-title-${heroAnimationKey}`}
            >
              8ConVerse
            </h1>
            <p
              className={`hero-subtitle ${
                isAnimated("hero") ? "animate-hero-subtitle" : ""
              }`}
              style={styles.heroSubtitle}
              key={`hero-subtitle-${heroAnimationKey}`}
            >
              Fluency Meets Confidence
            </p>
            <p
              className={`hero-description ${
                isAnimated("hero") ? "animate-hero-description" : ""
              }`}
              style={styles.heroDescription}
              key={`hero-description-${heroAnimationKey}`}
            >
              In today's interconnected world, the ability to communicate
              effectively in English has become a vital skill for success.
              8ConVerse is dedicated to empowering individuals to master IELTS,
              TOEFL, and other language certifications.
            </p>
            <div
              className={`hero-buttons ${
                isAnimated("hero") ? "animate-hero-buttons" : ""
              }`}
              style={styles.heroButtons}
              key={`hero-buttons-${heroAnimationKey}`}
            >
              <button
                style={styles.ctaButtonPrimary}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#ff1f2c";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0edb61";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Start Your Journey
              </button>
              <button
                style={styles.ctaButtonSecondary}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0edb61";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Why Language Proficiency Matters Section */}
        <section
          id="importance"
          ref={importanceRef}
          className={isAnimated("importance") ? "section-visible" : ""}
          style={styles.importanceSection}
        >
          <div style={styles.container2}>
            <h2
              className="section-title"
              style={{ ...styles.sectionTitle, color: "#000000" }}
            >
              Why Language Proficiency Matters
            </h2>
            <div style={styles.importanceGrid}>
              <div
                className="importance-card animate-on-scroll"
                style={styles.importanceCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(14, 219, 97, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.1)";
                }}
              >
                <div style={styles.importanceIcon}>
                  <Briefcase size={40} color="#0edb61" />
                </div>
                <h3 style={styles.importanceTitle}>Access to In-Demand Jobs</h3>
                <p style={styles.importanceDescription}>
                  Healthcare professionals, BPO workers, teachers, and skilled
                  tradespeople need language certifications for local and
                  international opportunities.
                </p>
                <ul style={styles.importanceList}>
                  <li style={styles.importanceListItem}>
                    • Healthcare: Nurses, caregivers, medical workers
                  </li>
                  <li style={styles.importanceListItem}>
                    • BPO: Customer service, technical support
                  </li>
                  <li style={styles.importanceListItem}>
                    • Education: International schools, universities
                  </li>
                  <li style={styles.importanceListItem}>
                    • Hospitality: Hotels, cruise lines, tourism
                  </li>
                </ul>
              </div>

              <div
                className="importance-card animate-on-scroll"
                style={styles.importanceCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(14, 219, 97, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.1)";
                }}
              >
                <div style={styles.importanceIcon}>
                  <GraduationCap size={40} color="#0edb61" />
                </div>
                <h3 style={styles.importanceTitle}>Academic Opportunities</h3>
                <p style={styles.importanceDescription}>
                  Universities and colleges in English-speaking countries
                  require IELTS, TOEFL, or equivalent scores for admission and
                  scholarship programs.
                </p>
                <ul style={styles.importanceList}>
                  <li style={styles.importanceListItem}>
                    • University admissions worldwide
                  </li>
                  <li style={styles.importanceListItem}>
                    • Scholarship program eligibility
                  </li>
                  <li style={styles.importanceListItem}>
                    • Advanced study opportunities
                  </li>
                  <li style={styles.importanceListItem}>
                    • Research collaboration access
                  </li>
                </ul>
              </div>

              <div
                className="importance-card animate-on-scroll"
                style={styles.importanceCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(14, 219, 97, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.1)";
                }}
              >
                <div style={styles.importanceIcon}>
                  <TrendingUp size={40} color="#0edb61" />
                </div>
                <h3 style={styles.importanceTitle}>Competitive Advantage</h3>
                <p style={styles.importanceDescription}>
                  Language proficiency opens doors to promotions, higher
                  salaries, and better job opportunities both locally and
                  internationally.
                </p>
                <ul style={styles.importanceList}>
                  <li style={styles.importanceListItem}>
                    • Career advancement opportunities
                  </li>
                  <li style={styles.importanceListItem}>
                    • Higher salary potential
                  </li>
                  <li style={styles.importanceListItem}>
                    • Professional confidence building
                  </li>
                  <li style={styles.importanceListItem}>
                    • Global communication skills
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How ConVerse Helps Section */}
        <section
          id="services"
          ref={servicesRef}
          className={isAnimated("services") ? "section-visible" : ""}
          style={styles.servicesSection}
        >
          <div style={styles.container2}>
            <h2 className="section-title" style={styles.sectionTitle}>
              How 8ConVerse Helps
            </h2>
            <div style={styles.servicesGrid}>
              <div
                className="service-card animate-on-scroll"
                style={styles.serviceCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(14, 219, 97, 0.2)";
                  e.currentTarget.style.borderColor = "#0edb61";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.1)";
                  e.currentTarget.style.borderColor = "#f0f0f0";
                }}
              >
                <div style={styles.serviceIcon}>
                  <BookOpen size={50} color="#0edb61" />
                </div>
                <h3 style={styles.serviceTitle}>
                  Comprehensive Review Programs
                </h3>
                <p style={styles.serviceDescription}>
                  Tailored courses for IELTS, TOEFL, and other certification
                  exams with complete skill development.
                </p>
                <ul style={styles.serviceList}>
                  <li style={styles.serviceListItem}>
                    • Listening, Reading, Writing, Speaking Skills
                  </li>
                  <li style={styles.serviceListItem}>
                    • Practice tests aligned with actual exam formats
                  </li>
                  <li style={styles.serviceListItem}>
                    • Score maximization strategies
                  </li>
                  <li style={styles.serviceListItem}>
                    • Time management techniques
                  </li>
                </ul>
              </div>

              <div
                className="service-card animate-on-scroll"
                style={styles.serviceCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(255, 31, 44, 0.2)";
                  e.currentTarget.style.borderColor = "#ff1f2c";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.1)";
                  e.currentTarget.style.borderColor = "#f0f0f0";
                }}
              >
                <div style={styles.serviceIcon}>
                  <Users size={50} color="#ff1f2c" />
                </div>
                <h3 style={styles.serviceTitle}>Experienced Instructors</h3>
                <p style={styles.serviceDescription}>
                  Learn from seasoned language coaches who specialize in
                  preparing students for high-stakes exams.
                </p>
                <ul style={styles.serviceList}>
                  <li style={styles.serviceListItem}>
                    • Expert tips and strategies
                  </li>
                  <li style={styles.serviceListItem}>
                    • Personalized feedback
                  </li>
                  <li style={styles.serviceListItem}>
                    • Proven teaching methodologies
                  </li>
                  <li style={styles.serviceListItem}>• Individual attention</li>
                </ul>
              </div>

              <div
                className="service-card animate-on-scroll"
                style={styles.serviceCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(14, 219, 97, 0.2)";
                  e.currentTarget.style.borderColor = "#0edb61";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.1)";
                  e.currentTarget.style.borderColor = "#f0f0f0";
                }}
              >
                <div style={styles.serviceIcon}>
                  <Mic size={50} color="#0edb61" />
                </div>
                <h3 style={styles.serviceTitle}>Interactive Learning</h3>
                <p style={styles.serviceDescription}>
                  Engage in role-playing, mock interviews, and real-world
                  scenarios to improve fluency and confidence.
                </p>
                <ul style={styles.serviceList}>
                  <li style={styles.serviceListItem}>
                    • Role-playing exercises
                  </li>
                  <li style={styles.serviceListItem}>
                    • Mock interview sessions
                  </li>
                  <li style={styles.serviceListItem}>
                    • Real-world communication scenarios
                  </li>
                  <li style={styles.serviceListItem}>
                    • Confidence building activities
                  </li>
                </ul>
              </div>

              <div
                className="service-card animate-on-scroll"
                style={styles.serviceCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(255, 31, 44, 0.2)";
                  e.currentTarget.style.borderColor = "#ff1f2c";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.1)";
                  e.currentTarget.style.borderColor = "#f0f0f0";
                }}
              >
                <div style={styles.serviceIcon}>
                  <Clock size={50} color="#ff1f2c" />
                </div>
                <h3 style={styles.serviceTitle}>Flexible Learning Options</h3>
                <p style={styles.serviceDescription}>
                  On-site and online classes designed to fit the busy schedules
                  of working professionals and students.
                </p>
                <ul style={styles.serviceList}>
                  <li style={styles.serviceListItem}>
                    • On-site classroom sessions
                  </li>
                  <li style={styles.serviceListItem}>
                    • Online virtual classes
                  </li>
                  <li style={styles.serviceListItem}>• Flexible scheduling</li>
                  <li style={styles.serviceListItem}>
                    • Self-paced learning modules
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose ConVerse Section - Black Background */}
        <section
          id="why-choose"
          ref={whyChooseRef}
          className={isAnimated("why-choose") ? "section-visible" : ""}
          style={styles.whyChooseSection}
        >
          <div style={styles.container2}>
            <h2
              className="section-title"
              style={{ ...styles.sectionTitle, color: "#000000" }}
            >
              Why Choose 8ConVerse?
            </h2>
            <div style={styles.benefitsGrid}>
              <div
                className="benefit-card animate-on-scroll"
                style={styles.benefitCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(14, 219, 97, 0.2)";
                  e.currentTarget.style.borderColor = "#0edb61";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.1)";
                  e.currentTarget.style.borderColor = "#0edb61";
                }}
              >
                <h3 style={styles.benefitTitle}>Proven Success</h3>
                <p style={styles.benefitDescription}>
                  With a track record of students passing IELTS, TOEFL, and
                  other exams, we've helped individuals unlock opportunities
                  globally.
                </p>
              </div>

              <div
                className="benefit-card animate-on-scroll"
                style={styles.benefitCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(14, 219, 97, 0.2)";
                  e.currentTarget.style.borderColor = "#0edb61";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.1)";
                  e.currentTarget.style.borderColor = "#0edb61";
                }}
              >
                <h3 style={styles.benefitTitle}>Industry-Relevant Training</h3>
                <p style={styles.benefitDescription}>
                  Tailored programs to meet the needs of high-demand professions
                  both locally and abroad, ensuring relevant and focused
                  learning.
                </p>
              </div>

              <div
                className="benefit-card animate-on-scroll"
                style={styles.benefitCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(14, 219, 97, 0.2)";
                  e.currentTarget.style.borderColor = "#0edb61";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.1)";
                  e.currentTarget.style.borderColor = "#0edb61";
                }}
              >
                <h3 style={styles.benefitTitle}>Confidence Building</h3>
                <p style={styles.benefitDescription}>
                  Beyond exams, 8ConVerse equips students with the practical
                  communication skills needed for workplace and social
                  interactions.
                </p>
              </div>

              <div
                className="benefit-card animate-on-scroll"
                style={styles.benefitCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(14, 219, 97, 0.2)";
                  e.currentTarget.style.borderColor = "#0edb61";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.1)";
                  e.currentTarget.style.borderColor = "#0edb61";
                }}
              >
                <h3 style={styles.benefitTitle}>Supportive Community</h3>
                <p style={styles.benefitDescription}>
                  A welcoming environment that encourages growth, learning, and
                  success with peer support and collaborative learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Benefit Section - White Background */}
        <section
          id="benefits"
          ref={benefitsRef}
          className={isAnimated("benefits") ? "section-visible" : ""}
          style={styles.clientsSection}
        >
          <div style={styles.container2}>
            <h2 className="section-title" style={styles.sectionTitle}>
              Who Can Benefit from 8ConVerse?
            </h2>
            <div style={styles.clientsGrid}>
              <div
                className="client-category animate-on-scroll"
                style={styles.clientCategory}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(14, 219, 97, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.1)";
                }}
              >
                <div style={styles.clientIcon}>
                  <Plane size={60} color="#0edb61" />
                </div>
                <h3 style={styles.clientTitle}>Aspiring Overseas Workers</h3>
                <ul style={styles.clientList}>
                  <li style={styles.clientListItem}>
                    • Healthcare professionals seeking international
                    opportunities
                  </li>
                  <li style={styles.clientListItem}>
                    • Skilled workers and tradespeople
                  </li>
                  <li style={styles.clientListItem}>
                    • Professionals looking to qualify for jobs abroad
                  </li>
                </ul>
              </div>

              <div
                className="client-category animate-on-scroll"
                style={styles.clientCategory}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(255, 31, 44, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.1)";
                }}
              >
                <div style={styles.clientIcon}>
                  <TrendingUp size={60} color="#ff1f2c" />
                </div>
                <h3 style={styles.clientTitle}>
                  Professionals Seeking Advancement
                </h3>
                <ul style={styles.clientList}>
                  <li style={styles.clientListItem}>
                    • BPO and customer service employees
                  </li>
                  <li style={styles.clientListItem}>
                    • Hospitality and tourism workers
                  </li>
                  <li style={styles.clientListItem}>
                    • Education sector professionals
                  </li>
                </ul>
              </div>

              <div
                className="client-category animate-on-scroll"
                style={styles.clientCategory}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(14, 219, 97, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.1)";
                }}
              >
                <div style={styles.clientIcon}>
                  <GraduationCap size={60} color="#0edb61" />
                </div>
                <h3 style={styles.clientTitle}>Students & Migrants</h3>
                <ul style={styles.clientList}>
                  <li style={styles.clientListItem}>
                    • High school and college students
                  </li>
                  <li style={styles.clientListItem}>
                    • Those preparing for admissions abroad
                  </li>
                  <li style={styles.clientListItem}>
                    • Families applying for migration programs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Black Background */}
        <section
          id="cta"
          ref={ctaRef}
          className={isAnimated("cta") ? "section-visible" : ""}
          style={styles.ctaSection}
        >
          <div style={styles.container2}>
            <h2
              className="cta-title section-title animate-on-scroll"
              style={styles.ctaTitle}
            >
              Your Gateway to Global Opportunities
            </h2>
            <p
              className="cta-description animate-on-scroll"
              style={styles.ctaDescription}
            >
              8ConVerse bridges the gap between potential and achievement by
              empowering Filipinos to communicate confidently and fluently in
              English. With the right guidance, tools, and strategies, we ensure
              your success in passing language certifications and excelling in
              real-world applications.
            </p>
            <div
              className="cta-buttons animate-on-scroll"
              style={styles.ctaButtons}
            >
              <button
                style={styles.ctaButtonPrimary}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#ff1f2c";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0edb61";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Start Learning Today
              </button>
              <button
                style={styles.ctaButtonRed}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0edb61";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ff1f2c";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Book Consultation
              </button>
            </div>
            <div
              className="cta-highlight animate-on-scroll"
              style={styles.ctaHighlight}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 31, 44, 0.2)";
                e.currentTarget.style.borderColor = "#ff1f2c";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(14, 219, 97, 0.1)";
                e.currentTarget.style.borderColor = "#0edb61";
              }}
            >
              <strong>
                Let 8ConVerse be your partner in achieving fluency, confidence,
                and a brighter future!
              </strong>
            </div>
          </div>
        </section>
      </main>
      <ScrollUp />
    </div>
  );
};

// Styling with alternating background colors and specified color palette
const styles = {
  container: {
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: "1.6",
    color: "#000000",
    margin: 0,
    padding: 0,
  },

  container2: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },

  // Hero Section - Green Background
  heroSection: {
    background: "linear-gradient(135deg, #0edb61 0%, #000000 100%)",
    color: "#ffffff",
    padding: "140px 20px 80px",
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },

  companyTitle: {
    fontSize: "clamp(2.5rem, 8vw, 4rem)",
    fontWeight: "700",
    marginBottom: "1rem",
    textShadow: "0 4px 8px rgba(0,0,0,0.3)",
    color: "#ffffff",
  },

  heroSubtitle: {
    fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
    fontWeight: "300",
    marginBottom: "1.5rem",
    opacity: "0.9",
    color: "#ffffff",
  },

  heroDescription: {
    fontSize: "clamp(1rem, 3vw, 1.2rem)",
    lineHeight: "1.7",
    maxWidth: "600px",
    margin: "0 auto 2rem",
    opacity: "0.95",
    color: "#ffffff",
  },

  heroButtons: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "2rem",
  },

  ctaButtonPrimary: {
    background: "#0edb61",
    color: "#ffffff",
    border: "none",
    padding: "1rem 2rem",
    fontSize: "1.1rem",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
  },

  ctaButtonSecondary: {
    background: "transparent",
    color: "#ffffff",
    border: "2px solid #ffffff",
    padding: "1rem 2rem",
    fontSize: "1.1rem",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
  },

  ctaButtonRed: {
    background: "#ff1f2c",
    color: "#ffffff",
    border: "none",
    padding: "1rem 2rem",
    fontSize: "1.1rem",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
  },

  // Why Language Proficiency Matters Section - Black Background
  importanceSection: {
    background: "#ffffff",
    padding: "80px 20px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  sectionTitle: {
    fontSize: "clamp(2rem, 5vw, 2.5rem)",
    fontWeight: "700",
    color: "#0edb61",
    textAlign: "center",
    marginBottom: "3rem",
  },

  importanceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  },

  importanceCard: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    border: "2px solid #0edb61",
    transition: "all 0.3s ease",
    textAlign: "center",
  },

  importanceIcon: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "center",
  },

  importanceTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#0edb61",
    marginBottom: "1rem",
  },

  importanceDescription: {
    fontSize: "1rem",
    color: "#000000",
    marginBottom: "1.5rem",
    lineHeight: "1.6",
  },

  importanceList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    textAlign: "left",
  },

  importanceListItem: {
    fontSize: "0.95rem",
    color: "#000000",
    marginBottom: "0.8rem",
    lineHeight: "1.5",
  },

  // How ConVerse Helps Section - White Background
  servicesSection: {
    background: "#000000",
    padding: "80px 20px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },

  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  },

  serviceCard: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
    border: "2px solid #f0f0f0",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  serviceIcon: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "center",
  },

  serviceTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#000000",
    marginBottom: "1rem",
  },

  serviceDescription: {
    fontSize: "1rem",
    color: "#000000",
    marginBottom: "1.5rem",
    lineHeight: "1.7",
  },

  serviceList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    textAlign: "left",
  },

  serviceListItem: {
    fontSize: "0.95rem",
    color: "#000000",
    marginBottom: "0.8rem",
    lineHeight: "1.5",
  },

  // Why Choose ConVerse Section - Black Background
  whyChooseSection: {
    background: "#ffffff",
    padding: "80px 20px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },

  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  },

  benefitCard: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
    border: "2px solid #0edb61",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  benefitTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#0edb61",
    marginBottom: "1rem",
  },

  benefitDescription: {
    fontSize: "1rem",
    color: "#000000",
    lineHeight: "1.7",
  },

  // Who Can Benefit Section - White Background
  clientsSection: {
    background: "#000000",
    padding: "80px 20px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },

  clientsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "3rem",
    marginTop: "3rem",
  },

  clientCategory: {
    background: "#ffffff",
    padding: "2.5rem",
    borderRadius: "15px",
    border: "2px solid #0edb61",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  clientIcon: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "center",
  },

  clientTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#0edb61",
    marginBottom: "1.5rem",
  },

  clientList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    textAlign: "left",
  },

  clientListItem: {
    fontSize: "1rem",
    color: "#000000",
    marginBottom: "1rem",
    lineHeight: "1.6",
  },

  // CTA Section - Black Background
  ctaSection: {
    background: "#ffffff",
    color: "#ffffff",
    padding: "80px 20px",
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },

  ctaTitle: {
    fontSize: "clamp(2rem, 5vw, 2.5rem)",
    fontWeight: "700",
    marginBottom: "2rem",
    color: "#000000",
  },

  ctaDescription: {
    fontSize: "clamp(1rem, 3vw, 1.2rem)",
    lineHeight: "1.8",
    maxWidth: "800px",
    margin: "0 auto 2rem",
    opacity: "0.95",
    color: "#000000",
  },

  ctaButtons: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "2rem",
  },

  ctaHighlight: {
    background: "rgba(14, 219, 97, 0.1)",
    padding: "1.5rem",
    borderRadius: "10px",
    fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
    maxWidth: "700px",
    margin: "0 auto",
    border: "2px solid #0edb61",
    color: "#000000",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
};

export default ConVerse;
