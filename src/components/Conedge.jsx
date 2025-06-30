import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
      icon: <Users size={60} />, // You can swap Users for another icon if preferred
    },
    {
      id: "consult",
      name: "8ConSult",
      route: "/consult",
      desc: "Business development and startup advisory with Sir Nigel Santos.",
      icon: <BookOpen size={60} />, // Change to another icon if you have one in mind
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (route) => {
    // Placeholder for navigation - in real app would use router
    console.log(`Navigating to: ${route}`);
    setMobileMenuOpen(false);
    setSubBrandsDropdownOpen(false);
    setMobileSubBrandsDropdownOpen(false);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.container}>
      {/* Add CSS styles */}
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
    display: flex
;
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
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#tools" className="nav-link">
              Tools
            </a>
            <a href="#solutions" className="nav-link">
              Solutions
            </a>
            <a href="#why-choose" className="nav-link">
              Insights
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
                        handleNavigation(brand.route);
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
              href="#about"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#tools"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tools
            </a>
            <a
              href="#solutions"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#why-choose"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Choose
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

      {/* Hero Section */}
      <section id="top" style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.companyTitle}>8ConEdge</h1>
          <p style={styles.heroSubtitle}>
            Cutting-Edge Forex Tools for Trading Excellence
          </p>
          <p style={styles.heroDescription}>
            Proprietary Forex tools and advanced trading systems designed to
            enhance trading efficiency, maximize profits, and provide traders
            with the competitive edge they need to succeed in the global
            markets.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.aboutSection}>
        <div style={styles.container2}>
          <h2 style={styles.sectionTitle}>Advanced Trading Technology</h2>
          <p style={styles.aboutText}>
            8ConEdge delivers{" "}
            <strong style={styles.strongText}>
              cutting-edge proprietary Forex tools
            </strong>{" "}
            that revolutionize the way traders analyze markets, execute trades,
            and manage risk. Our advanced technology combines artificial
            intelligence, real-time market analysis, and sophisticated
            algorithms to provide traders with unparalleled insights and trading
            advantages.
          </p>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>95%</div>
              <div style={styles.statLabel}>Accuracy Rate</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>24/7</div>
              <div style={styles.statLabel}>Market Monitoring</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>500+</div>
              <div style={styles.statLabel}>Active Traders</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" style={styles.toolsSection}>
        <div style={styles.container2}>
          <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>
            Our Proprietary Tools
          </h2>
          <div style={styles.toolsGrid}>
            <div
              style={styles.toolCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(14, 219, 97, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
              }}
            >
              <BarChart3
                size={40}
                style={{ color: "#0edb61", marginBottom: "1rem" }}
              />
              <h3 style={styles.toolTitle}>Smart Market Analyzer</h3>
              <p style={styles.toolDescription}>
                AI-powered market analysis tool that identifies profitable
                trading opportunities by analyzing multiple currency pairs
                simultaneously.
              </p>
              <ul style={styles.toolFeatures}>
                <li>• Real-time market scanning</li>
                <li>• Pattern recognition algorithms</li>
                <li>• Automated signal generation</li>
              </ul>
            </div>

            <div
              style={styles.toolCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(14, 219, 97, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
              }}
            >
              <Zap
                size={40}
                style={{ color: "#0edb61", marginBottom: "1rem" }}
              />
              <h3 style={styles.toolTitle}>Lightning Trade Executor</h3>
              <p style={styles.toolDescription}>
                Ultra-fast trade execution platform that ensures optimal entry
                and exit points with minimal slippage and maximum efficiency.
              </p>
              <ul style={styles.toolFeatures}>
                <li>• Sub-second execution speed</li>
                <li>• Advanced order management</li>
                <li>• Multi-broker compatibility</li>
              </ul>
            </div>

            <div
              style={styles.toolCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(14, 219, 97, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
              }}
            >
              <Shield
                size={40}
                style={{ color: "#0edb61", marginBottom: "1rem" }}
              />
              <h3 style={styles.toolTitle}>Risk Guardian Pro</h3>
              <p style={styles.toolDescription}>
                Comprehensive risk management system that protects your capital
                through advanced position sizing and automated stop-loss
                mechanisms.
              </p>
              <ul style={styles.toolFeatures}>
                <li>• Dynamic position sizing</li>
                <li>• Automated risk controls</li>
                <li>• Portfolio protection alerts</li>
              </ul>
            </div>

            <div
              style={styles.toolCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(14, 219, 97, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
              }}
            >
              <Rocket
                size={40}
                style={{ color: "#0edb61", marginBottom: "1rem" }}
              />
              <h3 style={styles.toolTitle}>Profit Accelerator</h3>
              <p style={styles.toolDescription}>
                Advanced profit optimization engine that maximizes returns
                through intelligent trade scaling and momentum-based position
                management.
              </p>
              <ul style={styles.toolFeatures}>
                <li>• Automated profit scaling</li>
                <li>• Momentum indicators</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div
              style={styles.toolCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(14, 219, 97, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
              }}
            >
              <Users
                size={40}
                style={{ color: "#0edb61", marginBottom: "1rem" }}
              />
              <h3 style={styles.toolTitle}>Social Trading Hub</h3>
              <p style={styles.toolDescription}>
                Connect with professional traders, copy successful strategies,
                and learn from the best performers in our exclusive trading
                community.
              </p>
              <ul style={styles.toolFeatures}>
                <li>• Strategy copying</li>
                <li>• Performance leaderboards</li>
                <li>• Community insights</li>
              </ul>
            </div>

            <div
              style={styles.toolCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(14, 219, 97, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
              }}
            >
              <Star
                size={40}
                style={{ color: "#0edb61", marginBottom: "1rem" }}
              />
              <h3 style={styles.toolTitle}>Elite Backtesting Engine</h3>
              <p style={styles.toolDescription}>
                Professional-grade backtesting platform that validates trading
                strategies using historical data with institutional-level
                accuracy and detail.
              </p>
              <ul style={styles.toolFeatures}>
                <li>• Historical data analysis</li>
                <li>• Strategy validation</li>
                <li>• Performance metrics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" style={styles.solutionsSection}>
        <div style={styles.container2}>
          <h2 style={styles.sectionTitle}>Trading Solutions for Every Level</h2>
          <div style={styles.solutionsGrid}>
            <div style={styles.solutionCard}>
              <h3 style={styles.solutionTitle}>Beginner Trader Package</h3>
              <p style={styles.solutionDescription}>
                Perfect for new traders looking to start their Forex journey
                with professional-grade tools and guidance.
              </p>
              <ul style={styles.solutionFeatures}>
                <li>• Basic market analyzer access</li>
                <li>• Educational trading modules</li>
                <li>• Risk management tutorials</li>
                <li>• Community forum access</li>
              </ul>
              <div
                style={styles.solutionButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#ff1f2c";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0edb61";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Get Started
              </div>
            </div>

            <div style={styles.solutionCard}>
              <h3 style={styles.solutionTitle}>Professional Trader Suite</h3>
              <p style={styles.solutionDescription}>
                Advanced tools for experienced traders who demand
                institutional-level trading technology and analytics.
              </p>
              <ul style={styles.solutionFeatures}>
                <li>• Full tool suite access</li>
                <li>• Advanced market analysis</li>
                <li>• Custom strategy development</li>
                <li>• Priority customer support</li>
              </ul>
              <div
                style={styles.solutionButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#ff1f2c";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0edb61";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Upgrade Now
              </div>
            </div>

            <div style={styles.solutionCard}>
              <h3 style={styles.solutionTitle}>Enterprise Solutions</h3>
              <p style={styles.solutionDescription}>
                Custom trading solutions for institutions, hedge funds, and
                professional trading firms.
              </p>
              <ul style={styles.solutionFeatures}>
                <li>• Custom tool development</li>
                <li>• API integration support</li>
                <li>• Dedicated account management</li>
                <li>• White-label solutions</li>
              </ul>
              <div
                style={styles.solutionButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#ff1f2c";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0edb61";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Contact Sales
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" style={styles.whyChooseSection}>
        <div style={styles.container2}>
          <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>
            Why Choose 8ConEdge?
          </h2>
          <div style={styles.benefitsGrid}>
            <div
              style={styles.benefitCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "#0edb61";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(14, 219, 97, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
              }}
            >
              <h3 style={styles.benefitTitle}>Proprietary Technology</h3>
              <p style={styles.benefitDescription}>
                Our tools are built in-house by expert developers and traders,
                ensuring unique features and competitive advantages not
                available elsewhere.
              </p>
            </div>

            <div
              style={styles.benefitCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "#0edb61";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(14, 219, 97, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
              }}
            >
              <h3 style={styles.benefitTitle}>Proven Performance</h3>
              <p style={styles.benefitDescription}>
                Track record of helping traders achieve consistent profitability
                with tools tested and refined by professional traders in live
                market conditions.
              </p>
            </div>

            <div
              style={styles.benefitCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "#0edb61";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(14, 219, 97, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
              }}
            >
              <h3 style={styles.benefitTitle}>Continuous Innovation</h3>
              <p style={styles.benefitDescription}>
                Regular updates and new features based on market evolution and
                user feedback, keeping you ahead of market trends and
                opportunities.
              </p>
            </div>

            <div
              style={styles.benefitCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "#0edb61";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(14, 219, 97, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
              }}
            >
              <h3 style={styles.benefitTitle}>Expert Support</h3>
              <p style={styles.benefitDescription}>
                24/7 technical support from trading professionals who understand
                both the technology and the markets, ensuring you maximize your
                trading potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" style={styles.ctaSection}>
        <div style={styles.container2}>
          <h2 style={styles.ctaTitle}>Ready to Gain Your Trading Edge?</h2>
          <p style={styles.ctaDescription}>
            Join thousands of successful traders who have transformed their
            trading performance with 8ConEdge. Our proprietary tools provide the
            competitive advantage you need to excel in today's fast-paced Forex
            markets. Start your journey to consistent profitability today.
          </p>
          <div
            style={styles.ctaHighlight}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ff1f2c";
              e.currentTarget.style.borderColor = "#ff1f2c";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0edb61";
              e.currentTarget.style.borderColor = "#0edb61";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <strong>
              Start Your Free Trial Today - Experience the 8ConEdge Advantage!
            </strong>
          </div>
        </div>
      </section>
    </div>
  );
};

// Updated styling with color palette
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
    padding: "120px 20px 80px",
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
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#0edb61",
    marginBottom: "0.5rem",
  },

  statLabel: {
    fontSize: "1.1rem",
    color: "#000000",
    fontWeight: "600",
  },

  toolsSection: {
    background: "#000000",
    padding: "120px 20px 80px",
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
    padding: "120px 20px 80px",
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
    padding: "120px 20px 80px",
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
    padding: "120px 20px 80px",
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
