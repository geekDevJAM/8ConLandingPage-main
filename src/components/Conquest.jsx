import React, { useState, useEffect } from "react";
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
  GraduationCap,
  BookOpen,
  Users,
  Briefcase,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Building,
  Handshake,
  Lightbulb,
  PieChart,
  MapPin,
  FileText,
  UserCheck,
  Zap,
  TrendingUpIcon,
} from "lucide-react";

const ConQuest = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [subBrandsDropdownOpen, setSubBrandsDropdownOpen] = useState(false);
  const [mobileSubBrandsDropdownOpen, setMobileSubBrandsDropdownOpen] =
    useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());

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
      id: "converse",
      name: "8ConVerse",
      route: "/converse",
      desc: "Language certification courses to broaden opportunities.",
      icon: <Globe size={60} />,
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

  // Scroll detection for animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 0);

      // Check if user is at the top/hero section (within first 20% of hero height)
      const heroSection = document.getElementById("top");
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      const isAtTop = scrollTop < heroHeight * 0.2;

      // Reset animations when user returns to top
      if (isAtTop && visibleSections.size > 0) {
        setVisibleSections(new Set());
        setAnimationKey((prev) => prev + 1); // Force re-render to restart hero animations
        return; // Exit early to avoid triggering section animations
      }

      // Only check section visibility if not at top
      if (!isAtTop) {
        const sections = [
          "focus-areas",
          "what-sets-apart",
          "who-benefits",
          "cta",
        ];

        sections.forEach((sectionId) => {
          const section = document.getElementById(sectionId);
          if (section) {
            const rect = section.getBoundingClientRect();
            const isVisible =
              rect.top < window.innerHeight * 0.75 && rect.bottom > 0;

            if (isVisible && !visibleSections.has(sectionId)) {
              setVisibleSections((prev) => new Set([...prev, sectionId]));
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleSections]);

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
  }, []);

  return (
    <div style={styles.container}>
      {/* CSS Styles */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
            scroll-padding-top: 2px;
          }
          
          /* Header Styles */
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

          /* Animation Keyframes */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
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
              transform: scale(0.3);
            }
            50% {
              opacity: 1;
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes slideInFromTop {
            from {
              opacity: 0;
              transform: translateY(-100px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes rotateIn {
            from {
              opacity: 0;
              transform: rotate(-180deg) scale(0.5);
            }
            to {
              opacity: 1;
              transform: rotate(0deg) scale(1);
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }

          /* Hero Section Animations - Always Active */
          .animate-hero-title {
            animation: fadeInDown 1s ease-out;
          }

          .animate-hero-subtitle {
            animation: fadeInUp 1s ease-out 0.2s both;
          }

          .animate-hero-description {
            animation: fadeInUp 1s ease-out 0.4s both;
          }

          .animate-hero-buttons {
            animation: fadeInUp 1s ease-out 0.6s both;
          }

          /* Default state for scroll-triggered animations */
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(50px);
          }

          /* Section Title Animations */
          .section-visible .animate-section-title {
            opacity: 1;
            transform: translateY(0);
            animation: slideInFromTop 0.8s ease-out forwards;
          }

          /* Focus Areas Section Animations */
          .section-visible .animate-focus-card-1 {
            opacity: 1;
            transform: translateX(0);
            animation: fadeInLeft 0.8s ease-out 0.2s forwards;
          }

          .section-visible .animate-focus-card-2 {
            opacity: 1;
            transform: translateY(0);
            animation: fadeInUp 0.8s ease-out 0.4s forwards;
          }

          .section-visible .animate-focus-card-3 {
            opacity: 1;
            transform: translateX(0);
            animation: fadeInRight 0.8s ease-out 0.6s forwards;
          }

          /* What Sets Apart Section Animations */
          .section-visible .animate-sets-apart-card-1 {
            opacity: 1;
            transform: scale(1);
            animation: scaleIn 0.6s ease-out 0.2s forwards;
          }

          .section-visible .animate-sets-apart-card-2 {
            opacity: 1;
            transform: scale(1);
            animation: scaleIn 0.6s ease-out 0.4s forwards;
          }

          .section-visible .animate-sets-apart-card-3 {
            opacity: 1;
            transform: scale(1);
            animation: scaleIn 0.6s ease-out 0.6s forwards;
          }

          .section-visible .animate-sets-apart-card-4 {
            opacity: 1;
            transform: scale(1);
            animation: scaleIn 0.6s ease-out 0.8s forwards;
          }

          /* Who Benefits Section Animations */
          .section-visible .animate-benefits-card-1 {
            opacity: 1;
            transform: scale(1);
            animation: bounceIn 0.8s ease-out 0.2s forwards;
          }

          .section-visible .animate-benefits-card-2 {
            opacity: 1;
            transform: scale(1);
            animation: bounceIn 0.8s ease-out 0.4s forwards;
          }

          .section-visible .animate-benefits-card-3 {
            opacity: 1;
            transform: scale(1);
            animation: bounceIn 0.8s ease-out 0.6s forwards;
          }

          .section-visible .animate-benefits-card-4 {
            opacity: 1;
            transform: scale(1);
            animation: bounceIn 0.8s ease-out 0.8s forwards;
          }

          /* CTA Section Animations */
          .section-visible .animate-cta-title {
            opacity: 1;
            transform: translateY(0);
            animation: fadeInDown 0.8s ease-out forwards;
          }

          .section-visible .animate-cta-description {
            opacity: 1;
            transform: translateY(0);
            animation: fadeInUp 0.8s ease-out 0.2s forwards;
          }

          .section-visible .animate-cta-buttons {
            opacity: 1;
            transform: translateY(0);
            animation: fadeInUp 0.8s ease-out 0.4s forwards;
          }

          .section-visible .animate-cta-highlight {
            opacity: 1;
            transform: scale(1);
            animation: pulse 2s ease-in-out 0.8s forwards;
          }

          /* Icon Animations */
          .section-visible .animate-icon {
            opacity: 1;
            transform: rotate(0deg) scale(1);
            animation: rotateIn 0.8s ease-out forwards;
          }

          /* Responsive Styles */
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

          /* Responsive Animation Adjustments */
          @media (max-width: 768px) {
            .section-visible .animate-focus-card-1,
            .section-visible .animate-focus-card-2,
            .section-visible .animate-focus-card-3 {
              opacity: 1;
              transform: translateY(0);
              animation: fadeInUp 0.8s ease-out 0.2s forwards;
            }
            
            .section-visible .animate-sets-apart-card-1,
            .section-visible .animate-sets-apart-card-2,
            .section-visible .animate-sets-apart-card-3,
            .section-visible .animate-sets-apart-card-4 {
              opacity: 1;
              transform: translateY(0);
              animation: fadeInUp 0.6s ease-out 0.2s forwards;
            }
            
            .section-visible .animate-benefits-card-1,
            .section-visible .animate-benefits-card-2,
            .section-visible .animate-benefits-card-3,
            .section-visible .animate-benefits-card-4 {
              opacity: 1;
              transform: translateY(0);
              animation: fadeInUp 0.8s ease-out 0.2s forwards;
            }
          }

          @media (max-width: 480px) {
            .animate-hero-title {
              animation: fadeInDown 0.8s ease-out;
            }
            
            .animate-hero-subtitle {
              animation: fadeInUp 0.8s ease-out 0.1s both;
            }
            
            .animate-hero-description {
              animation: fadeInUp 0.8s ease-out 0.2s both;
            }
            
            .animate-hero-buttons {
              animation: fadeInUp 0.8s ease-out 0.3s both;
            }
          }
        `}
      </style>

      {/* Header - Navigation */}
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
            <Link to="/sub-brands" className="nav-link">
              Home
            </Link>
            {/* Sub-brands Dropdown */}
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
              href="#focus-areas"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("focus-areas");
              }}
            >
              Key Focus Areas
            </a>
            <a
              href="#what-sets-apart"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("what-sets-apart");
              }}
            >
              What Sets Us Apart
            </a>
            <a
              href="#who-benefits"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("who-benefits");
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
              Start Your Journey
            </a>
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
            <Link to="/sub-brands" className="mobile-nav-link">
              Home
            </Link>

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
              href="#focus-areas"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("focus-areas");
              }}
            >
              Key Focus Areas
            </a>
            <a
              href="#what-sets-apart"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("what-sets-apart");
              }}
            >
              What Sets Us Apart
            </a>
            <a
              href="#who-benefits"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("who-benefits");
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
              Start Your Journey
            </a>
          </nav>
        )}
      </header>
      <main>
        {/* Hero Section - Green Background */}
        <section id="top" style={styles.heroSection}>
          <div style={styles.heroContent} key={`hero-${animationKey}`}>
            <h1 style={styles.companyTitle} className="animate-hero-title">
              8ConQuest
            </h1>
            <p style={styles.heroSubtitle} className="animate-hero-subtitle">
              Conquer Your Academic and Career Goals with Expert Guidance
            </p>
            <p
              style={styles.heroDescription}
              className="animate-hero-description"
            >
              8ConQuest is dedicated to empowering students and professionals to
              achieve their academic and career aspirations through structured
              coaching, mentorship, and expert support with a focus on thesis
              and dissertation coaching, career development, and
              entrepreneurship mentorship.
            </p>
            <div style={styles.heroButtons} className="animate-hero-buttons">
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
                Get Expert Guidance
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

        {/* Key Focus Areas Section - White Background */}
        <section
          id="focus-areas"
          style={styles.focusAreasSection}
          className={
            visibleSections.has("focus-areas") ? "section-visible" : ""
          }
        >
          <div style={styles.container2}>
            <h2
              style={{ ...styles.sectionTitle, color: "#0edb61" }}
              className="animate-section-title animate-on-scroll"
            >
              Key Focus Areas of 8ConQuest
            </h2>
            <div style={styles.focusAreasGrid}>
              <div
                style={styles.focusAreaCard}
                className="animate-focus-card-1 animate-on-scroll"
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
                <div
                  style={styles.focusAreaIcon}
                  className="animate-icon animate-on-scroll"
                >
                  <FileText size={40} color="#0edb61" />
                </div>
                <h3 style={styles.focusAreaTitle}>
                  Thesis and Dissertation Coaching
                </h3>
                <p style={styles.focusAreaDescription}>
                  Work with seasoned mentors who specialize in academic research
                  and writing, ensuring high-quality outputs with comprehensive
                  support.
                </p>
                <div style={styles.focusAreaFeatures}>
                  <h4 style={styles.featuresTitle}>Comprehensive Support:</h4>
                  <ul style={styles.focusAreaList}>
                    <li style={styles.focusAreaListItem}>
                      • Research proposals, topic selection, and literature
                      reviews
                    </li>
                    <li style={styles.focusAreaListItem}>
                      • Statistical analysis, data interpretation, and report
                      writing
                    </li>
                    <li style={styles.focusAreaListItem}>
                      • Oral defense preparation with confidence coaching
                    </li>
                  </ul>
                </div>
              </div>

              <div
                style={styles.focusAreaCard}
                className="animate-focus-card-2 animate-on-scroll"
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
                <div
                  style={styles.focusAreaIcon}
                  className="animate-icon animate-on-scroll"
                >
                  <UserCheck size={40} color="#0edb61" />
                </div>
                <h3 style={styles.focusAreaTitle}>
                  Career Coaching and Mentorship
                </h3>
                <p style={styles.focusAreaDescription}>
                  Receive mentorship from experienced professionals in business,
                  finance, and other industries with personalized career
                  development.
                </p>
                <div style={styles.focusAreaFeatures}>
                  <h4 style={styles.featuresTitle}>
                    Personalized Development:
                  </h4>
                  <ul style={styles.focusAreaList}>
                    <li style={styles.focusAreaListItem}>
                      • Tailored coaching to identify strengths and career goals
                    </li>
                    <li style={styles.focusAreaListItem}>
                      • Resume building, interview preparation, networking
                      strategies
                    </li>
                    <li style={styles.focusAreaListItem}>
                      • Industry insights and competitive market navigation
                    </li>
                  </ul>
                </div>
              </div>

              <div
                style={styles.focusAreaCard}
                className="animate-focus-card-3 animate-on-scroll"
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
                <div
                  style={styles.focusAreaIcon}
                  className="animate-icon animate-on-scroll"
                >
                  <Lightbulb size={40} color="#0edb61" />
                </div>
                <h3 style={styles.focusAreaTitle}>
                  Entrepreneurship Mentorship
                </h3>
                <p style={styles.focusAreaDescription}>
                  Learn from entrepreneurs and business leaders with proven
                  success in building and scaling businesses from idea to
                  execution.
                </p>
                <div style={styles.focusAreaFeatures}>
                  <h4 style={styles.featuresTitle}>From Idea to Execution:</h4>
                  <ul style={styles.focusAreaList}>
                    <li style={styles.focusAreaListItem}>
                      • Business idea development, planning, and venture
                      launching
                    </li>
                    <li style={styles.focusAreaListItem}>
                      • Marketing, branding, and operational strategies
                    </li>
                    <li style={styles.focusAreaListItem}>
                      • Funding opportunities, financial management, sustainable
                      growth
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets 8ConQuest Apart Section - Black Background */}
        <section
          id="what-sets-apart"
          style={styles.whatSetsApartSection}
          className={
            visibleSections.has("what-sets-apart") ? "section-visible" : ""
          }
        >
          <div style={styles.container2}>
            <h2
              style={styles.sectionTitle}
              className="animate-section-title animate-on-scroll"
            >
              What Sets 8ConQuest Apart?
            </h2>
            <div style={styles.whatSetsApartGrid}>
              <div
                style={styles.whatSetsApartCard}
                className="animate-sets-apart-card-1 animate-on-scroll"
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
                <div
                  style={styles.whatSetsApartIcon}
                  className="animate-icon animate-on-scroll"
                >
                  <Star size={50} color="#0edb61" />
                </div>
                <h3 style={styles.whatSetsApartTitle}>Expert Mentors</h3>
                <p style={styles.whatSetsApartDescription}>
                  Access a team of academic and industry experts with years of
                  experience in guiding students, professionals, and
                  entrepreneurs.
                </p>
              </div>

              <div
                style={styles.whatSetsApartCard}
                className="animate-sets-apart-card-2 animate-on-scroll"
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
                <div
                  style={styles.whatSetsApartIcon}
                  className="animate-icon animate-on-scroll"
                >
                  <PieChart size={50} color="#ff1f2c" />
                </div>
                <h3 style={styles.whatSetsApartTitle}>Holistic Approach</h3>
                <p style={styles.whatSetsApartDescription}>
                  Combines academic coaching, career mentorship, and
                  entrepreneurial guidance to provide comprehensive support.
                </p>
              </div>

              <div
                style={styles.whatSetsApartCard}
                className="animate-sets-apart-card-3 animate-on-scroll"
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
                <div
                  style={styles.whatSetsApartIcon}
                  className="animate-icon animate-on-scroll"
                >
                  <Target size={50} color="#0edb61" />
                </div>
                <h3 style={styles.whatSetsApartTitle}>Customized Support</h3>
                <p style={styles.whatSetsApartDescription}>
                  Tailored solutions for individuals based on their unique
                  goals, challenges, and aspirations.
                </p>
              </div>

              <div
                style={styles.whatSetsApartCard}
                className="animate-sets-apart-card-4 animate-on-scroll"
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
                <div
                  style={styles.whatSetsApartIcon}
                  className="animate-icon animate-on-scroll"
                >
                  <CheckCircle size={50} color="#ff1f2c" />
                </div>
                <h3 style={styles.whatSetsApartTitle}>Actionable Insights</h3>
                <p style={styles.whatSetsApartDescription}>
                  Focus on delivering practical strategies and high-quality
                  outputs that align with real-world demands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Benefit Section - White Background */}
        <section
          id="who-benefits"
          style={styles.whoBenefitsSection}
          className={
            visibleSections.has("who-benefits") ? "section-visible" : ""
          }
        >
          <div style={styles.container2}>
            <h2
              style={{ ...styles.sectionTitle, color: "#000000" }}
              className="animate-section-title animate-on-scroll"
            >
              Who Can Benefit from 8ConQuest?
            </h2>
            <div style={styles.whoBenefitsGrid}>
              <div
                style={styles.whoBenefitsCard}
                className="animate-benefits-card-1 animate-on-scroll"
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
                <div
                  style={styles.whoBenefitsIcon}
                  className="animate-icon animate-on-scroll"
                >
                  <GraduationCap size={60} color="#0edb61" />
                </div>
                <h3 style={styles.whoBenefitsTitle}>Students</h3>
                <p style={styles.whoBenefitsDescription}>
                  Undergraduate and postgraduate students needing support in
                  completing their thesis, dissertations, or research projects.
                </p>
              </div>

              <div
                style={styles.whoBenefitsCard}
                className="animate-benefits-card-2 animate-on-scroll"
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
                <div
                  style={styles.whoBenefitsIcon}
                  className="animate-icon animate-on-scroll"
                >
                  <Briefcase size={60} color="#0edb61" />
                </div>
                <h3 style={styles.whoBenefitsTitle}>Professionals</h3>
                <p style={styles.whoBenefitsDescription}>
                  Individuals looking to advance their careers or transition
                  into new industries with expert coaching.
                </p>
              </div>

              <div
                style={styles.whoBenefitsCard}
                className="animate-benefits-card-3 animate-on-scroll"
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
                <div
                  style={styles.whoBenefitsIcon}
                  className="animate-icon animate-on-scroll"
                >
                  <Zap size={60} color="#0edb61" />
                </div>
                <h3 style={styles.whoBenefitsTitle}>Aspiring Entrepreneurs</h3>
                <p style={styles.whoBenefitsDescription}>
                  Those seeking guidance on launching or scaling their
                  businesses with proven strategies and mentorship.
                </p>
              </div>

              <div
                style={styles.whoBenefitsCard}
                className="animate-benefits-card-4 animate-on-scroll"
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
                <div
                  style={styles.whoBenefitsIcon}
                  className="animate-icon animate-on-scroll"
                >
                  <Building size={60} color="#0edb61" />
                </div>
                <h3 style={styles.whoBenefitsTitle}>
                  Educational Institutions
                </h3>
                <p style={styles.whoBenefitsDescription}>
                  Schools and universities looking for expert-led coaching
                  programs for their students and staff.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Black Background */}
        <section
          id="cta"
          style={styles.ctaSection}
          className={visibleSections.has("cta") ? "section-visible" : ""}
        >
          <div style={styles.container2}>
            <h2
              style={styles.ctaTitle}
              className="animate-cta-title animate-on-scroll"
            >
              Empower Your Journey with 8ConQuest
            </h2>
            <p
              style={styles.ctaDescription}
              className="animate-cta-description animate-on-scroll"
            >
              Whether you're completing your academic requirements, planning
              your next career move, or starting your entrepreneurial journey,
              8ConQuest is here to guide you every step of the way. With
              structured coaching and mentorship from seasoned experts, you'll
              gain the skills, confidence, and insights needed to conquer your
              goals.
            </p>
            <div
              style={styles.ctaButtons}
              className="animate-cta-buttons animate-on-scroll"
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
                Start Your Coaching
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
                Get Mentorship
              </button>
            </div>
            <div
              style={styles.ctaHighlight}
              className="animate-cta-highlight animate-on-scroll"
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
                Conquer your goals with expert guidance – your success story
                starts here!
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
    filter:
      "drop-shadow(0 0 5px #121411) drop-shadow(0 0 10px #121411) drop-shadow(0 0 15px #121411)",
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

  // Key Focus Areas Section - White Background
  focusAreasSection: {
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

  focusAreasGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  },

  focusAreaCard: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    border: "2px solid #0edb61",
    transition: "all 0.3s ease",
    textAlign: "center",
  },

  focusAreaIcon: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "center",
  },

  focusAreaTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#0edb61",
    marginBottom: "1rem",
  },

  focusAreaDescription: {
    fontSize: "1rem",
    color: "#000000",
    marginBottom: "1.5rem",
    lineHeight: "1.6",
  },

  focusAreaFeatures: {
    textAlign: "left",
    marginTop: "1rem",
  },

  featuresTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#ff1f2c",
    marginBottom: "0.8rem",
  },

  focusAreaList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  focusAreaListItem: {
    fontSize: "0.95rem",
    color: "#000000",
    marginBottom: "0.6rem",
    lineHeight: "1.5",
  },

  // What Sets Apart Section - Black Background
  whatSetsApartSection: {
    background: "#000000",
    padding: "80px 20px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },

  whatSetsApartGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  },

  whatSetsApartCard: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
    border: "2px solid #f0f0f0",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  whatSetsApartIcon: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "center",
  },

  whatSetsApartTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#000000",
    marginBottom: "1rem",
  },

  whatSetsApartDescription: {
    fontSize: "1rem",
    color: "#000000",
    lineHeight: "1.7",
  },

  // Who Benefits Section - White Background
  whoBenefitsSection: {
    background: "#ffffff",
    padding: "80px 20px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },

  whoBenefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  },

  whoBenefitsCard: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
    border: "2px solid #0edb61",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  whoBenefitsIcon: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "center",
  },

  whoBenefitsTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#0edb61",
    marginBottom: "1rem",
  },

  whoBenefitsDescription: {
    fontSize: "1rem",
    color: "#000000",
    lineHeight: "1.7",
  },

  // CTA Section - Black Background
  ctaSection: {
    background: "#000000",
    color: "#000000",
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
    color: "#ffffff",
  },

  ctaDescription: {
    fontSize: "clamp(1rem, 3vw, 1.2rem)",
    lineHeight: "1.8",
    maxWidth: "800px",
    margin: "0 auto 2rem",
    opacity: "0.95",
    color: "#ffffff",
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
    color: "#ffffff",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
};

export default ConQuest;
