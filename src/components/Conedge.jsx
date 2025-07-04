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
  BarChart3,
  Zap,
  Shield,
  Rocket,
  Users,
  Star,
  BookOpen,
} from "lucide-react";

const ConEdge = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [subBrandsDropdownOpen, setSubBrandsDropdownOpen] = useState(false);
  const [mobileSubBrandsDropdownOpen, setMobileSubBrandsDropdownOpen] =
    useState(false);
  const [animatedSections, setAnimatedSections] = useState(new Set());
  const [isInHeroSection, setIsInHeroSection] = useState(false);
  const [heroAnimationKey, setHeroAnimationKey] = useState(0);

  // Animation refs
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const toolsRef = useRef(null);
  const solutionsRef = useRef(null);
  const whyChooseRef = useRef(null);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setAnimatedSections((prev) => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.15 }
    );

    const sectionRefs = [
      heroRef,
      aboutRef,
      toolsRef,
      solutionsRef,
      whyChooseRef,
      ctaRef,
    ];

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const wasInHero = isInHeroSection;
          const nowInHero = entry.isIntersecting;

          setIsInHeroSection(nowInHero);

          if (nowInHero && !wasInHero) {
            setAnimatedSections(new Set());
            setHeroAnimationKey((prev) => prev + 1);
            setTimeout(() => {
              setAnimatedSections(new Set(["hero"]));
            }, 100);
          } else if (nowInHero && wasInHero) {
            setAnimatedSections((prev) => new Set([...prev, "hero"]));
          }
        });
      },
      { threshold: 0.6 }
    );

    if (heroRef.current) heroObserver.observe(heroRef.current);
    return () => heroObserver.disconnect();
  }, [isInHeroSection]);

  const handleNavigation = (route) => {
    navigate(route);
    setMobileMenuOpen(false);
    setSubBrandsDropdownOpen(false);
    setMobileSubBrandsDropdownOpen(false);
  };

  const handleSmoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
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
      <style>
        {`
          html {
            scroll-behavior: smooth;
            scroll-padding-top: 2px;
          }
          
          .header {
            background-color: transparent;
            box-shadow: none;
            position: fixed;
            top: 0;
            z-index: 1000;
            width: 100%;
            padding: 8px 0;
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
            padding: 0 5%;
          }
          
          .logo {
            display: flex;
            align-items: center;
            text-decoration: none;
            margin-right: auto;
          }
          
          .logo-img {
            height: 35px;
            width: auto;
          }
          
          .desktop-nav {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            font-weight: 600;
            position: relative;
          }
          
          .nav-link {
            text-decoration: none;
            color: rgb(255, 255, 255);
            padding: 8px 12px;
            border-radius: 6px;
            transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
            position: relative;
            display: inline-block;
            cursor: pointer;
            background: none;
            border: none;
            font-family: inherit;
            font-size: inherit;
            font-weight: inherit;
            text-transform: inherit;
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
            background: none;
            border: none;
            font-family: inherit;
            cursor: pointer;
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
              transform: translateY(60px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
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
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
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

          @keyframes pulseIn {
            0% {
              opacity: 0;
              transform: scale(0.9);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.02);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes elasticIn {
            0% {
              opacity: 0;
              transform: scale(0.1) rotate(-30deg);
            }
            50% {
              transform: scale(1.05) rotate(10deg);
            }
            70% {
              transform: scale(0.95) rotate(-5deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }

          /* Hero Content Animations */
          .hero-title {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .hero-title.animate {
            opacity: 1;
            transform: translateY(0) scale(1);
            animation: heroTitleFloat 1.2s ease-out 0.2s both;
          }

          .hero-subtitle {
            opacity: 0;
            transform: translateX(-30px);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .hero-subtitle.animate {
            opacity: 1;
            transform: translateX(0);
            animation: heroSubtitleSlide 1s ease-out 0.5s both;
          }

          .hero-description {
            opacity: 0;
            transform: translateX(30px);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .hero-description.animate {
            opacity: 1;
            transform: translateX(0);
            animation: heroDescriptionSlide 1s ease-out 0.8s both;
          }

          @keyframes heroTitleFloat {
            0% {
              opacity: 0;
              transform: translateY(50px) scale(0.9);
            }
            50% {
              transform: translateY(-10px) scale(1.02);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes heroSubtitleSlide {
            0% {
              opacity: 0;
              transform: translateX(-50px);
            }
            60% {
              transform: translateX(5px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes heroDescriptionSlide {
            0% {
              opacity: 0;
              transform: translateX(50px);
            }
            60% {
              transform: translateX(-5px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .slide-left {
            opacity: 0;
            transform: translateX(-100px);
          }

          .slide-left.animate {
            opacity: 1;
            transform: translateX(0);
            animation: slideInLeft 1s ease-out both;
          }

          .slide-right {
            opacity: 0;
            transform: translateX(100px);
          }

          .slide-right.animate {
            opacity: 1;
            transform: translateX(0);
            animation: slideInRight 1s ease-out both;
          }

          .bounce-in {
            opacity: 0;
            transform: scale(0.3);
          }

          .bounce-in.animate {
            opacity: 1;
            transform: scale(1);
            animation: bounceIn 0.8s ease-out both;
          }

          .scale-in {
            opacity: 0;
            transform: scale(0.8);
          }

          .scale-in.animate {
            opacity: 1;
            transform: scale(1);
            animation: scaleIn 0.8s ease-out both;
          }

          .pulse-in {
            opacity: 0;
            transform: scale(0.9);
          }

          .pulse-in.animate {
            opacity: 1;
            transform: scale(1);
            animation: pulseIn 0.6s ease-out both;
          }

          .stagger-item {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
            transition: all 0.6s ease-out;
          }

          .stagger-item.animate {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          .stat-animate {
            opacity: 0;
            transform: scale(0.8) rotateX(45deg);
          }

          .stat-animate.animate {
            opacity: 1;
            transform: scale(1) rotateX(0deg);
            animation: elasticIn 0.8s ease-out both;
          }

          /* Responsive Media Queries */
          @media (max-width: 1200px) {
            .header-container {
              padding: 0 3%;
            }
            .desktop-nav {
              gap: 6px;
              font-size: 12px;
            }
            .nav-link {
              padding: 6px 10px;
            }
          }
          
          @media (max-width: 1024px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-menu-toggle {
              display: block !important;
            }
            .logo-img {
              height: 30px;
            }
          }
          
          @media (max-width: 768px) {
            .header {
              padding: 6px 0;
            }
            .header-container {
              padding: 0 4%;
            }
            .logo-img {
              height: 28px;
            }
            .mobile-nav-link {
              padding: 12px 15px;
              font-size: 15px;
            }
            .mobile-dropdown-toggle {
              padding: 12px 15px;
              font-size: 15px;
            }
            .mobile-nav-sublink {
              padding: 10px 15px;
              font-size: 13px;
            }
          }
          
          @media (max-width: 480px) {
            .header-container {
              padding: 0 3%;
            }
            .logo-img {
              height: 25px;
            }
            .mobile-nav-link {
              padding: 10px 12px;
              font-size: 14px;
            }
            .mobile-dropdown-toggle {
              padding: 10px 12px;
              font-size: 14px;
            }
            .mobile-nav-sublink {
              padding: 8px 12px;
              font-size: 12px;
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
            <a href="/sub-brands" className="nav-link">
              Home
            </a>
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
            <button
              onClick={() => handleSmoothScroll("about")}
              className="nav-link"
            >
              About
            </button>
            <button
              onClick={() => handleSmoothScroll("tools")}
              className="nav-link"
            >
              Tools
            </button>
            <button
              onClick={() => handleSmoothScroll("solutions")}
              className="nav-link"
            >
              Solutions
            </button>
            <button
              onClick={() => handleSmoothScroll("why-choose")}
              className="nav-link"
            >
              Insights
            </button>
            <button
              onClick={() => handleSmoothScroll("cta")}
              className="nav-link"
            >
              Contact
            </button>
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
            <a href="/sub-brands" className="mobile-nav-link">
              Home
            </a>
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
            <button
              onClick={() => handleSmoothScroll("about")}
              className="mobile-nav-link"
            >
              About
            </button>
            <button
              onClick={() => handleSmoothScroll("tools")}
              className="mobile-nav-link"
            >
              Tools
            </button>
            <button
              onClick={() => handleSmoothScroll("solutions")}
              className="mobile-nav-link"
            >
              Solutions
            </button>
            <button
              onClick={() => handleSmoothScroll("why-choose")}
              className="mobile-nav-link"
            >
              Why Choose
            </button>
            <button
              onClick={() => handleSmoothScroll("cta")}
              className="mobile-nav-link"
            >
              Contact
            </button>
          </nav>
        )}
      </header>
      <main>
        {/* Hero Section */}
        <section id="hero" ref={heroRef} style={styles.heroSection}>
          <div style={styles.heroContent}>
            <h1
              style={styles.companyTitle}
              className={`hero-title ${
                animatedSections.has("hero") ? "animate" : ""
              }`}
            >
              8ConEdge
            </h1>
            <p
              style={styles.heroSubtitle}
              className={`hero-subtitle ${
                animatedSections.has("hero") ? "animate" : ""
              }`}
            >
              Cutting-Edge Forex Tools for Trading Excellence
            </p>
            <p
              style={styles.heroDescription}
              className={`hero-description ${
                animatedSections.has("hero") ? "animate" : ""
              }`}
            >
              Proprietary Forex tools and advanced trading systems designed to
              enhance trading efficiency, maximize profits, and provide traders
              with the competitive edge they need to succeed in the global
              markets.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          ref={aboutRef}
          style={styles.aboutSection}
          className={`slide-left ${
            animatedSections.has("about") ? "animate" : ""
          }`}
        >
          <div style={styles.container2}>
            <h2 style={styles.sectionTitle}>Advanced Trading Technology</h2>
            <p style={styles.aboutText}>
              8ConEdge delivers{" "}
              <strong style={styles.strongText}>
                cutting-edge proprietary Forex tools
              </strong>{" "}
              that revolutionize the way traders analyze markets, execute
              trades, and manage risk. Our advanced technology combines
              artificial intelligence, real-time market analysis, and
              sophisticated algorithms to provide traders with unparalleled
              insights and trading advantages.
            </p>
            <div style={styles.statsGrid}>
              <div
                className={`stat-animate ${
                  animatedSections.has("about") ? "animate" : ""
                }`}
                style={styles.statCard}
              >
                <div style={styles.statNumber}>95%</div>
                <div style={styles.statLabel}>Accuracy Rate</div>
              </div>
              <div
                className={`stat-animate ${
                  animatedSections.has("about") ? "animate" : ""
                }`}
                style={styles.statCard}
              >
                <div style={styles.statNumber}>24/7</div>
                <div style={styles.statLabel}>Market Monitoring</div>
              </div>
              <div
                className={`stat-animate ${
                  animatedSections.has("about") ? "animate" : ""
                }`}
                style={styles.statCard}
              >
                <div style={styles.statNumber}>500+</div>
                <div style={styles.statLabel}>Active Traders</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section
          id="tools"
          ref={toolsRef}
          style={styles.toolsSection}
          className={` ${animatedSections.has("tools") ? "animate" : ""}`}
        >
          <div style={styles.container2}>
            <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>
              Our Proprietary Tools
            </h2>
            <div style={styles.toolsGrid}>
              {[
                {
                  icon: (
                    <BarChart3
                      size={40}
                      style={{ color: "#0edb61", marginBottom: "1rem" }}
                    />
                  ),
                  title: "Smart Market Analyzer",
                  description:
                    "AI-powered market analysis tool that identifies profitable trading opportunities by analyzing multiple currency pairs simultaneously.",
                  features: [
                    "• Real-time market scanning",
                    "• Pattern recognition algorithms",
                    "• Automated signal generation",
                  ],
                },
                {
                  icon: (
                    <Zap
                      size={40}
                      style={{ color: "#0edb61", marginBottom: "1rem" }}
                    />
                  ),
                  title: "Lightning Trade Executor",
                  description:
                    "Ultra-fast trade execution platform that ensures optimal entry and exit points with minimal slippage and maximum efficiency.",
                  features: [
                    "• Sub-second execution speed",
                    "• Advanced order management",
                    "• Multi-broker compatibility",
                  ],
                },
                {
                  icon: (
                    <Shield
                      size={40}
                      style={{ color: "#0edb61", marginBottom: "1rem" }}
                    />
                  ),
                  title: "Risk Guardian Pro",
                  description:
                    "Comprehensive risk management system that protects your capital through advanced position sizing and automated stop-loss mechanisms.",
                  features: [
                    "• Dynamic position sizing",
                    "• Automated risk controls",
                    "• Portfolio protection alerts",
                  ],
                },
                {
                  icon: (
                    <Rocket
                      size={40}
                      style={{ color: "#0edb61", marginBottom: "1rem" }}
                    />
                  ),
                  title: "Profit Accelerator",
                  description:
                    "Advanced profit optimization engine that maximizes returns through intelligent trade scaling and momentum-based position management.",
                  features: [
                    "• Automated profit scaling",
                    "• Momentum indicators",
                    "• Performance optimization",
                  ],
                },
                {
                  icon: (
                    <Users
                      size={40}
                      style={{ color: "#0edb61", marginBottom: "1rem" }}
                    />
                  ),
                  title: "Social Trading Hub",
                  description:
                    "Connect with professional traders, copy successful strategies, and learn from the best performers in our exclusive trading community.",
                  features: [
                    "• Strategy copying",
                    "• Performance leaderboards",
                    "• Community insights",
                  ],
                },
                {
                  icon: (
                    <Star
                      size={40}
                      style={{ color: "#0edb61", marginBottom: "1rem" }}
                    />
                  ),
                  title: "Elite Backtesting Engine",
                  description:
                    "Professional-grade backtesting platform that validates trading strategies using historical data with institutional-level accuracy and detail.",
                  features: [
                    "• Historical data analysis",
                    "• Strategy validation",
                    "• Performance metrics",
                  ],
                },
              ].map((tool, index) => (
                <div
                  key={index}
                  style={styles.toolCard}
                  className={`tool-card stagger-item ${
                    animatedSections.has("tools") ? "animate" : ""
                  }`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-5px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 40px rgba(14, 219, 97, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(0,0,0,0.1)";
                  }}
                >
                  {tool.icon}
                  <h3 style={styles.toolTitle}>{tool.title}</h3>
                  <p style={styles.toolDescription}>{tool.description}</p>
                  <ul style={styles.toolFeatures}>
                    {tool.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section
          id="solutions"
          ref={solutionsRef}
          style={styles.solutionsSection}
          className={` ${animatedSections.has("solutions") ? "animate" : ""}`}
        >
          <div style={styles.container2}>
            <h2 style={styles.sectionTitle}>
              Trading Solutions for Every Level
            </h2>
            <div style={styles.solutionsGrid}>
              {[
                {
                  title: "Beginner Trader Package",
                  description:
                    "Perfect for new traders looking to start their Forex journey with professional-grade tools and guidance.",
                  features: [
                    "• Basic market analyzer access",
                    "• Educational trading modules",
                    "• Risk management tutorials",
                    "• Community forum access",
                  ],
                  buttonText: "Get Started",
                },
                {
                  title: "Professional Trader Suite",
                  description:
                    "Advanced tools for experienced traders who demand institutional-level trading technology and analytics.",
                  features: [
                    "• Full tool suite access",
                    "• Advanced market analysis",
                    "• Custom strategy development",
                    "• Priority customer support",
                  ],
                  buttonText: "Upgrade Now",
                },
                {
                  title: "Enterprise Solutions",
                  description:
                    "Custom trading solutions for institutions, hedge funds, and professional trading firms.",
                  features: [
                    "• Custom tool development",
                    "• API integration support",
                    "• Dedicated account management",
                    "• White-label solutions",
                  ],
                  buttonText: "Contact Sales",
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  style={styles.solutionCard}
                  className={`tool-card stagger-item ${
                    animatedSections.has("solutions") ? "animate" : ""
                  }`}
                >
                  <h3 style={styles.solutionTitle}>{solution.title}</h3>
                  <p style={styles.solutionDescription}>
                    {solution.description}
                  </p>
                  <ul style={styles.solutionFeatures}>
                    {solution.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div
                    style={styles.solutionButton}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#ff1f2c";
                      e.currentTarget.style.transform =
                        "translateY(-2px) scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#0edb61";
                      e.currentTarget.style.transform =
                        "translateY(0) scale(1)";
                    }}
                  >
                    {solution.buttonText}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          id="why-choose"
          ref={whyChooseRef}
          style={styles.whyChooseSection}
          className={` ${animatedSections.has("why-choose") ? "animate" : ""}`}
        >
          <div style={styles.container2}>
            <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>
              Why Choose 8ConEdge?
            </h2>
            <div style={styles.benefitsGrid}>
              {[
                {
                  title: "Proprietary Technology",
                  description:
                    "Our tools are built in-house by expert developers and traders, ensuring unique features and competitive advantages not available elsewhere.",
                },
                {
                  title: "Proven Performance",
                  description:
                    "Track record of helping traders achieve consistent profitability with tools tested and refined by professional traders in live market conditions.",
                },
                {
                  title: "Continuous Innovation",
                  description:
                    "Regular updates and new features based on market evolution and user feedback, keeping you ahead of market trends and opportunities.",
                },
                {
                  title: "Expert Support",
                  description:
                    "24/7 technical support from trading professionals who understand both the technology and the markets, ensuring you maximize your trading potential.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  style={styles.benefitCard}
                  className={`benefit-card stagger-item ${
                    animatedSections.has("why-choose") ? "animate" : ""
                  }`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-8px) rotateY(5deg)";
                    e.currentTarget.style.borderColor = "#0edb61";
                    e.currentTarget.style.boxShadow =
                      "0 15px 40px rgba(14, 219, 97, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0) rotateY(0deg)";
                    e.currentTarget.style.borderColor = "transparent";
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

        {/* CTA Section */}
        <section
          id="cta"
          ref={ctaRef}
          style={styles.ctaSection}
          className={`pulse-in ${animatedSections.has("cta") ? "animate" : ""}`}
        >
          <div style={styles.container2}>
            <h2 style={styles.ctaTitle}>Ready to Gain Your Trading Edge?</h2>
            <p style={styles.ctaDescription}>
              Join thousands of successful traders who have transformed their
              trading performance with 8ConEdge. Our proprietary tools provide
              the competitive advantage you need to excel in today's fast-paced
              Forex markets. Start your journey to consistent profitability
              today.
            </p>
            <div
              style={styles.ctaHighlight}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ff1f2c";
                e.currentTarget.style.borderColor = "#ff1f2c";
                e.currentTarget.style.transform =
                  "translateY(-3px) scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0edb61";
                e.currentTarget.style.borderColor = "#0edb61";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
              }}
            >
              <strong>
                Start Your Free Trial Today - Experience the 8ConEdge Advantage!
              </strong>
            </div>
          </div>
        </section>
      </main>
      <ScrollUp />
    </div>
  );
};

// Clean responsive styling approach matching ConCise
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
    margin: "0 auto",
    opacity: "0.95",
    color: "#ffffff",
  },

  aboutSection: {
    background: "#ffffff",
    padding: "80px 20px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: "clamp(2rem, 5vw, 2.5rem)",
    fontWeight: "700",
    color: "#0edb61",
    textAlign: "center",
    marginBottom: "2rem",
  },

  aboutText: {
    fontSize: "clamp(1rem, 3vw, 1.2rem)",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto 3rem",
    color: "#000000",
    lineHeight: "1.8",
  },

  strongText: {
    color: "#ff1f2c",
    fontWeight: "700",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },

  statCard: {
    textAlign: "center",
    padding: "2rem",
    background: "#000000",
    borderRadius: "15px",
    border: "2px solid #0edb61",
  },

  statNumber: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: "bold",
    color: "#0edb61",
    marginBottom: "0.5rem",
  },

  statLabel: {
    fontSize: "1.1rem",
    color: "#ffffff",
    fontWeight: "600",
  },

  toolsSection: {
    background: "#000000",
    padding: "80px 20px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  toolsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },

  toolCard: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    border: "2px solid #0edb61",
    transition: "all 0.3s ease",
    cursor: "pointer",
    textAlign: "center",
  },

  toolTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#000000",
    marginBottom: "1rem",
  },

  toolDescription: {
    fontSize: "1rem",
    color: "#000000",
    marginBottom: "1.5rem",
    lineHeight: "1.6",
  },

  toolFeatures: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    textAlign: "left",
  },

  solutionsSection: {
    background: "#ffffff",
    padding: "80px 20px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },

  solutionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },

  solutionCard: {
    background: "#f8f9fa",
    padding: "2.5rem",
    borderRadius: "15px",
    border: "2px solid #0edb61",
    textAlign: "center",
  },

  solutionTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#0edb61",
    marginBottom: "1rem",
  },

  solutionDescription: {
    fontSize: "1rem",
    color: "#000000",
    marginBottom: "1.5rem",
    lineHeight: "1.6",
  },

  solutionFeatures: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 2rem 0",
    textAlign: "left",
  },

  solutionButton: {
    background: "#0edb61",
    color: "#ffffff",
    padding: "12px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
    display: "inline-block",
  },

  whyChooseSection: {
    background: "#000000",
    padding: "80px 20px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },

  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },

  benefitCard: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(14, 219, 97, 0.1)",
    textAlign: "center",
    border: "2px solid transparent",
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

  ctaSection: {
    background: "#ffffff",
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
    color: "#000000",
  },

  ctaDescription: {
    fontSize: "clamp(1rem, 3vw, 1.2rem)",
    lineHeight: "1.8",
    maxWidth: "800px",
    margin: "0 auto 2rem",
    color: "#000000",
  },

  ctaHighlight: {
    background: "#0edb61",
    padding: "1.5rem",
    borderRadius: "10px",
    fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
    maxWidth: "700px",
    margin: "0 auto",
    border: "2px solid #0edb61",
    color: "#ffffff",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default ConEdge;
