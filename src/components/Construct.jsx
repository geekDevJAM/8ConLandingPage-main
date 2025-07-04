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
  Users,
  BookOpen,
} from "lucide-react";

const ConStruct = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [subBrandsDropdownOpen, setSubBrandsDropdownOpen] = useState(false);
  const [mobileSubBrandsDropdownOpen, setMobileSubBrandsDropdownOpen] =
    useState(false);

  // Animation state management
  const [animatedSections, setAnimatedSections] = useState(new Set());
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  const [heroAnimationKey, setHeroAnimationKey] = useState(0);

  // Refs for intersection observer
  const heroRef = useRef(null);
  const leadershipRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const clientsRef = useRef(null);
  const ctaRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const benefitCardsRef = useRef([]);
  const clientCategoriesRef = useRef([]);

  const subBrandsData = [
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

  // Scroll handler for header background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Special observer for hero section to track when user enters/exits hero
  useEffect(() => {
    const heroObserverOptions = {
      threshold: 0.6, // Hero is considered "active" when 60% visible
      rootMargin: "0px",
    };

    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const wasInHero = isInHeroSection;
        const nowInHero = entry.isIntersecting;
        setIsInHeroSection(nowInHero);

        // If we're entering the hero section from outside (scrolling back to top)
        if (nowInHero && !wasInHero) {
          console.log("Returning to hero - restarting all animations");
          // Reset ALL section animations
          setAnimatedSections(new Set());
          // Increment animation key to force re-render of hero content
          setHeroAnimationKey((prev) => prev + 1);
          // Start hero animation first
          setTimeout(() => {
            setAnimatedSections((prev) => new Set([...prev, "hero"]));
          }, 100);
        }
        // If we're in hero section initially (page load)
        else if (nowInHero && wasInHero) {
          // Ensure hero animation is active on initial load
          setAnimatedSections((prev) => new Set([...prev, "hero"]));
        }
      });
    }, heroObserverOptions);

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    return () => heroObserver.disconnect();
  }, [isInHeroSection]);

  // Intersection Observer for all sections
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

    // Observe all sections including hero
    const sections = [
      heroRef,
      leadershipRef,
      servicesRef,
      whyChooseRef,
      clientsRef,
      ctaRef,
    ];

    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Individual card observers with staggered animations
  useEffect(() => {
    const cardObserverOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, cardObserverOptions);

    // Observe service cards with staggered animation
    serviceCardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.animationDelay = `${index * 0.1}s`;
        cardObserver.observe(card);
      }
    });

    // Observe benefit cards with staggered animation
    benefitCardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.animationDelay = `${index * 0.15}s`;
        cardObserver.observe(card);
      }
    });

    // Observe client categories
    clientCategoriesRef.current.forEach((category, index) => {
      if (category) {
        category.style.animationDelay = `${index * 0.2}s`;
        cardObserver.observe(category);
      }
    });

    return () => cardObserver.disconnect();
  }, [heroAnimationKey]); // Re-observe when hero animation resets

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
      {/* Add CSS styles with animations */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
            scroll-padding-top: 60px;
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

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Animation Classes */
          .animate-fade-up {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-fade-left {
            opacity: 0;
            transform: translateX(-50px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-fade-right {
            opacity: 0;
            transform: translateX(50px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-fade-down {
            opacity: 0;
            transform: translateY(-50px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-scale {
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-slide-left {
            opacity: 0;
            transform: translateX(-100px);
            transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-slide-right {
            opacity: 0;
            transform: translateX(100px);
            transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-in {
            opacity: 1 !important;
            transform: translateY(0) translateX(0) scale(1) !important;
          }

          /* Enhanced Hero Title Animations with reset capability */
          .hero-title {
            opacity: 0;
            transform: translateY(30px);
          }
          
          .hero-title.animate {
            animation: fadeInUp 1.2s ease-out 0.3s forwards;
          }

          .hero-subtitle {
            opacity: 0;
            transform: translateY(30px);
          }
          
          .hero-subtitle.animate {
            animation: fadeInUp 1.2s ease-out 0.6s forwards;
          }

          .hero-description {
            opacity: 0;
            transform: translateY(30px);
          }
          
          .hero-description.animate {
            animation: fadeInUp 1.2s ease-out 0.9s forwards;
          }

          /* Section animation classes */
          .section-animate {
            opacity: 0;
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .section-animate.active {
            opacity: 1;
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

          /* Additional responsive enhancements */
          @media (max-width: 768px) {
            .header-container {
              padding-right: 4%;
              padding-left: 4%;
            }
            
            .servicesGrid,
            .benefitsGrid,
            .clientsGrid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
            
            .serviceCard,
            .benefitCard,
            .clientCard {
              padding: 1.5rem;
            }
          }

          @media (max-width: 480px) {
            .header-container {
              padding-right: 3%;
              padding-left: 3%;
            }
            
            .serviceCard,
            .benefitCard,
            .clientCard {
              padding: 1.25rem;
            }
          }

          /* Reduce motion for users who prefer it */
          @media (prefers-reduced-motion: reduce) {
            .animate-fade-up,
            .animate-fade-left,
            .animate-fade-right,
            .animate-fade-down,
            .animate-scale,
            .animate-slide-left,
            .animate-slide-right,
            .section-animate {
              transition: none;
              opacity: 1;
              transform: none;
            }
            
            .hero-title,
            .hero-subtitle,
            .hero-description {
              animation: none;
              opacity: 1;
              transform: none;
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
                      navigate(brand.route);
                    }}
                  >
                    {brand.name}
                  </a>
                ))}
              </div>
            </div>
            <a href="#leadership" className="nav-link">
              Leadership
            </a>
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#why-choose" className="nav-link">
              Insights
            </a>
            <a href="#clients" className="nav-link">
              Clients
            </a>
            <a href="#cta" className="nav-link">
              Contact
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
                        navigate(brand.route);
                        setMobileMenuOpen(false);
                        setMobileSubBrandsDropdownOpen(false);
                      }}
                    >
                      {brand.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#leadership"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leadership
            </a>
            <a
              href="#services"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#why-choose"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights
            </a>
            <a
              href="#clients"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Clients
            </a>
            <a
              href="#cta"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </header>
      <main>
        {/* Hero Section with key-based animation reset */}
        <section id="hero" style={styles.heroSection} ref={heroRef}>
          <div style={styles.heroContent} key={heroAnimationKey}>
            <h1
              style={styles.companyTitle}
              className={`hero-title ${
                animatedSections.has("hero") ? "animate" : ""
              }`}
            >
              8ConStruct
            </h1>
            <p
              style={styles.heroSubtitle}
              className={`hero-subtitle ${
                animatedSections.has("hero") ? "animate" : ""
              }`}
            >
              Building Clarity, Confidence, and Results in Data
            </p>
            <p
              style={styles.heroDescription}
              className={`hero-description ${
                animatedSections.has("hero") ? "animate" : ""
              }`}
            >
              Premier provider of statistical analysis, data refinement, and
              research consultancy services, helping students, researchers, and
              companies achieve clarity and actionable insights.
            </p>
          </div>
        </section>

        {/* Leadership Section */}
        <section
          id="leadership"
          style={styles.leadershipSection}
          ref={leadershipRef}
          className={`section-animate ${
            animatedSections.has("leadership") ? "active" : ""
          }`}
        >
          <div style={styles.container2}>
            <h2 style={styles.sectionTitle}>Led by Expert Leadership</h2>
            <p style={styles.leadershipText}>
              Services led by{" "}
              <strong style={styles.strongText}>Doc May L. Francisco</strong>,
              an expert with extensive experience in academic and business
              research, ensuring precision, reliability, and results that
              empower clients to excel in their respective fields.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          style={styles.servicesSection}
          ref={servicesRef}
          className={`section-animate ${
            animatedSections.has("services") ? "active" : ""
          }`}
        >
          <div style={styles.container2}>
            <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>
              Our Services
            </h2>
            <div style={styles.servicesGrid}>
              {[
                {
                  title: "Statistical Analysis for Research",
                  description:
                    "Comprehensive statistical services tailored to support academic and corporate research.",
                  items: [
                    "• Academic Research: Thesis, dissertations, and journal articles",
                    "• Corporate Research: Data-driven business strategies and market analysis",
                    "• Advanced statistical modeling and predictive analysis",
                  ],
                },
                {
                  title: "Data Refinement and Management",
                  description:
                    "Transform raw data into meaningful insights through comprehensive data management.",
                  items: [
                    "• Data Cleaning: Remove inconsistencies and ensure accuracy",
                    "• Data Transformation: Structure data for analysis and reporting",
                    "• Data Visualization: Create intuitive charts and dashboards",
                  ],
                },
                {
                  title: "Research Consultancy",
                  description:
                    "Personalized guidance for students, academics, and businesses.",
                  items: [
                    "• Topic selection and research proposal writing",
                    "• Literature review for strong theoretical foundation",
                    "• Survey and experiment design assistance",
                  ],
                },
                {
                  title: "Customized Workshops and Training",
                  description:
                    "Tailored workshops to enhance research and data analysis skills.",
                  items: [
                    "• Statistical tools training (SPSS, STATA, Excel, R)",
                    "• Data interpretation and hypothesis validation",
                    "• Effective presentation of research findings",
                  ],
                },
                {
                  title: "Technical Writing Support",
                  description:
                    "Professional assistance in writing and structuring research materials.",
                  items: [
                    "• Research papers, reports, and presentations",
                    "• Focus on clarity, coherence, and academic rigor",
                    "• APA, MLA, Chicago formatting compliance",
                  ],
                },
                {
                  title: "Specialized Support for Companies",
                  description:
                    "Data-driven solutions for strategic business decisions.",
                  items: [
                    "• Market Research: Trends and competitive analysis",
                    "• Operational Efficiency Studies: Workflow optimization",
                    "• Employee Insights: Organizational culture improvement",
                  ],
                },
              ].map((service, index) => (
                <div
                  key={index}
                  ref={(el) => (serviceCardsRef.current[index] = el)}
                  style={styles.serviceCard}
                  className="animate-fade-up"
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
                  <h3 style={styles.serviceTitle}>{service.title}</h3>
                  <p style={styles.serviceDescription}>{service.description}</p>
                  <ul style={styles.serviceList}>
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} style={styles.serviceListItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          id="why-choose"
          style={styles.whyChooseSection}
          ref={whyChooseRef}
          className={`section-animate ${
            animatedSections.has("why-choose") ? "active" : ""
          }`}
        >
          <div style={styles.container2}>
            <h2 style={styles.sectionTitle}>Why Choose 8ConStruct?</h2>
            <div style={styles.benefitsGrid}>
              {[
                {
                  title: "Expert Leadership",
                  description:
                    "Years of experience in academic research and corporate consulting with Doc May L. Francisco's deep understanding of research methodologies.",
                },
                {
                  title: "Comprehensive Support",
                  description:
                    "End-to-end support from initial research design to final presentation of results, ensuring a seamless process.",
                },
                {
                  title: "Tailored Solutions",
                  description:
                    "Every project is unique, and our approach is customized to meet specific needs of students, academics, or businesses.",
                },
                {
                  title: "Quality Assurance",
                  description:
                    "Rigorous quality checks ensure accuracy, reliability, and adherence to international research standards.",
                },
                {
                  title: "Timely Delivery",
                  description:
                    "Committed to meeting deadlines without compromising on quality, helping clients stay on track with their goals.",
                },
                {
                  title: "Affordable Excellence",
                  description:
                    "High-quality services at competitive rates, making professional research support accessible to students and businesses alike.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  ref={(el) => (benefitCardsRef.current[index] = el)}
                  style={styles.benefitCard}
                  className="animate-scale"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 35px rgba(14, 219, 97, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(0,0,0,0.1)";
                  }}
                >
                  <h3 style={styles.benefitTitle}>{benefit.title}</h3>
                  <p style={styles.benefitDescription}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section
          id="clients"
          style={styles.clientsSection}
          ref={clientsRef}
          className={`section-animate ${
            animatedSections.has("clients") ? "active" : ""
          }`}
        >
          <div style={styles.container2}>
            <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>
              Who We Serve
            </h2>
            <div style={styles.clientsGrid}>
              {[
                {
                  title: "Students & Academics",
                  description:
                    "Supporting undergraduate, graduate, and doctoral students with thesis, dissertation, and research projects.",
                  icon: "📚",
                },
                {
                  title: "Researchers & Institutions",
                  description:
                    "Collaborating with research institutions, universities, and independent researchers on complex studies.",
                  icon: "🔬",
                },
                {
                  title: "Businesses & Corporations",
                  description:
                    "Helping companies make data-driven decisions through market research, operational studies, and strategic analysis.",
                  icon: "🏢",
                },
              ].map((client, index) => (
                <div
                  key={index}
                  ref={(el) => (clientCategoriesRef.current[index] = el)}
                  style={styles.clientCard}
                  className="animate-fade-up"
                >
                  <div style={styles.clientIcon}>{client.icon}</div>
                  <h3 style={styles.clientTitle}>{client.title}</h3>
                  <p style={styles.clientDescription}>{client.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          style={styles.ctaSection}
          ref={ctaRef}
          className={`section-animate ${
            animatedSections.has("cta") ? "active" : ""
          }`}
        >
          <div style={styles.container2}>
            <h2 style={styles.ctaTitle}>Ready to Transform Your Data?</h2>
            <p style={styles.ctaDescription}>
              Let 8ConStruct help you build clarity, confidence, and results in
              your research and data analysis projects.
            </p>
            <button
              style={styles.ctaButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#0bb454";
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 8px 25px rgba(14, 219, 97, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#0edb61";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(14, 219, 97, 0.2)";
              }}
              onClick={() => {
                window.location.href = "mailto:contact@8construct.com";
              }}
            >
              Get Started Today
            </button>
          </div>
        </section>
      </main>
      <ScrollUp />
    </div>
  );
};

// Responsive Styles object
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    fontFamily: "'Montserrat', sans-serif",
  },
  container2: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 clamp(20px, 5vw, 40px)",
  },
  heroSection: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, rgb(14, 219, 97) 0%, rgb(0, 0, 0) 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding:
      "clamp(100px, 15vh, 140px) clamp(20px, 5vw, 40px) clamp(60px, 10vh, 80px)",
    position: "relative",
    overflow: "hidden",
  },
  heroContent: {
    maxWidth: "800px",
    zIndex: 2,
  },
  companyTitle: {
    fontSize: "clamp(2.5rem, 8vw, 4rem)",
    fontWeight: "900",
    color: "#ffffff",
    marginBottom: "1rem",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    lineHeight: "1.1",
  },
  heroSubtitle: {
    fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
    color: "#ffffff",
    marginBottom: "1.5rem",
    fontWeight: "600",
    lineHeight: "1.4",
  },
  heroDescription: {
    fontSize: "clamp(1rem, 3vw, 1.2rem)",
    color: "#cccccc",
    lineHeight: "1.6",
    maxWidth: "600px",
    margin: "0 auto",
  },
  leadershipSection: {
    padding: "clamp(60px, 12vh, 80px) clamp(20px, 5vw, 40px)",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "clamp(2rem, 5vw, 2.5rem)",
    fontWeight: "700",
    color: "#333333",
    marginBottom: "2rem",
    textAlign: "center",
  },
  leadershipText: {
    fontSize: "clamp(1rem, 3vw, 1.2rem)",
    color: "#666666",
    lineHeight: "1.8",
    maxWidth: "800px",
    margin: "0 auto",
  },
  strongText: {
    color: "#0edb61",
    fontWeight: "700",
  },
  servicesSection: {
    padding: "clamp(60px, 12vh, 80px) clamp(20px, 5vw, 40px)",
    background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },
  serviceCard: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    border: "2px solid transparent",
  },
  serviceTitle: {
    fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
    fontWeight: "700",
    color: "#333333",
    marginBottom: "1rem",
  },
  serviceDescription: {
    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
    color: "#666666",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
  },
  serviceList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  serviceListItem: {
    fontSize: "0.95rem",
    color: "#555555",
    lineHeight: "1.6",
    marginBottom: "8px",
    paddingLeft: "0",
  },
  whyChooseSection: {
    padding: "clamp(60px, 12vh, 80px) clamp(20px, 5vw, 40px)",
    backgroundColor: "#f8f9fa",
  },
  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },
  benefitCard: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    border: "2px solid transparent",
  },
  benefitTitle: {
    fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
    fontWeight: "700",
    color: "#333333",
    marginBottom: "1rem",
  },
  benefitDescription: {
    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
    color: "#666666",
    lineHeight: "1.6",
  },
  clientsSection: {
    padding: "clamp(60px, 12vh, 80px) clamp(20px, 5vw, 40px)",
    background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
  },
  clientsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },
  clientCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "2.5rem 2rem",
    borderRadius: "15px",
    textAlign: "center",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
  },
  clientIcon: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    marginBottom: "1.5rem",
  },
  clientTitle: {
    fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "1rem",
  },
  clientDescription: {
    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
    color: "#cccccc",
    lineHeight: "1.6",
  },
  ctaSection: {
    padding: "clamp(60px, 12vh, 80px) clamp(20px, 5vw, 40px)",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
  },
  ctaTitle: {
    fontSize: "clamp(2rem, 5vw, 2.5rem)",
    fontWeight: "700",
    color: "#333333",
    marginBottom: "1.5rem",
  },
  ctaDescription: {
    fontSize: "clamp(1rem, 3vw, 1.2rem)",
    color: "#666666",
    lineHeight: "1.6",
    marginBottom: "2.5rem",
    maxWidth: "600px",
    margin: "0 auto 2.5rem",
  },
  ctaButton: {
    backgroundColor: "#0edb61",
    color: "#ffffff",
    border: "none",
    padding: "clamp(12px, 3vw, 15px) clamp(30px, 6vw, 40px)",
    fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
    fontWeight: "600",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(14, 219, 97, 0.2)",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
};

export default ConStruct;
