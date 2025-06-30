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
  Users,
  BookOpen,
  Lightbulb,
  Presentation,
  DollarSign,
  Briefcase,
  LineChart,
} from "lucide-react";

const ConSult = () => {
  const navigate = useNavigate(); // Add this line
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
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path); // Use navigate instead of console.log
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
                      navigate(brand.route); // Use navigate directly like in Construct.jsx
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
            <a href="#approach" className="nav-link">
              Our Approach
            </a>
            <a href="#clients" className="nav-link">
              Target Clients
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
                        navigate(brand.route); // Use navigate directly like in Construct.jsx
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
              href="#approach"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Approach
            </a>
            <a
              href="#clients"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Target Clients
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

      {/* Rest of your component remains the same... */}
      {/* Hero Section */}
      <section id="top" style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.companyTitle}>8ConSult</h1>
          <p style={styles.heroSubtitle}>
            Business Development & Startup Advisory with Sir Nigel Santos
          </p>
          <p style={styles.heroDescription}>
            A consultation arm powered by real-world experience in
            entrepreneurship. Transform your business ideas into thriving
            ventures with expert guidance from ideation to execution, scaling,
            and investor readiness.
          </p>
          <div style={styles.heroButtons}>
            <button
              style={styles.primaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0cbb52";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0edb61";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Book Consultation
            </button>
            <button
              style={styles.secondaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ff1f2c";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Get Startup Kit
            </button>
          </div>
        </div>
      </section>

      {/* Continue with the rest of your sections... */}
      {/* I'll include the rest of your sections here for completeness */}

      {/* Leadership Section */}
      <section id="leadership" style={styles.leadershipSection}>
        <div style={styles.container2}>
          <h2 style={styles.sectionTitle}>Led by Entrepreneurial Excellence</h2>
          <div style={styles.leadershipContent}>
            <div style={styles.leadershipText}>
              <p style={styles.leadershipDescription}>
                Spearheaded by{" "}
                <strong style={styles.strongText}>Sir Nigel Santos</strong>, our
                Chief Business Development Officer, 8ConSult brings decades of
                real-world entrepreneurial experience to your business journey.
                Sir Nigel's proven track record in building successful ventures,
                navigating market challenges, and scaling businesses provides
                the foundation for our comprehensive advisory services.
              </p>
              <p style={styles.leadershipDescription}>
                With expertise spanning startup ecosystems, business model
                innovation, and investor relations, Sir Nigel ensures that every
                consultation delivers actionable insights and strategic
                direction tailored to your unique business goals.
              </p>
            </div>
            <div style={styles.leadershipStats}>
              <div style={styles.statItem}>
                <h3 style={styles.statNumber}>20+</h3>
                <p style={styles.statLabel}>Years Experience</p>
              </div>
              <div style={styles.statItem}>
                <h3 style={styles.statNumber}>200+</h3>
                <p style={styles.statLabel}>Startups Advised</p>
              </div>
              <div style={styles.statItem}>
                <h3 style={styles.statNumber}>95%</h3>
                <p style={styles.statLabel}>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={styles.servicesSection}>
        <div style={styles.container2}>
          <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>
            Our Advisory Services
          </h2>
          <div style={styles.servicesGrid}>
            <div
              style={styles.serviceCard}
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
              <div style={styles.serviceIcon}>
                <Lightbulb size={48} color="#0edb61" />
              </div>
              <h3 style={styles.serviceTitle}>Startup Coaching</h3>
              <p style={styles.serviceDescription}>
                Comprehensive guidance for aspiring entrepreneurs from ideation
                to execution, ensuring your startup is built on solid
                foundations.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  • Idea validation and market research
                </li>
                <li style={styles.serviceListItem}>
                  • Business plan development and refinement
                </li>
                <li style={styles.serviceListItem}>
                  • Team building and leadership guidance
                </li>
              </ul>
            </div>

            <div
              style={styles.serviceCard}
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
              <div style={styles.serviceIcon}>
                <LineChart size={48} color="#0edb61" />
              </div>
              <h3 style={styles.serviceTitle}>Business Model Analysis</h3>
              <p style={styles.serviceDescription}>
                Get your business evaluated and refined with expert input,
                optimizing for sustainability and growth potential.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  • Revenue model optimization
                </li>
                <li style={styles.serviceListItem}>
                  • Cost structure analysis
                </li>
                <li style={styles.serviceListItem}>
                  • Competitive positioning strategy
                </li>
              </ul>
            </div>

            <div
              style={styles.serviceCard}
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
              <div style={styles.serviceIcon}>
                <TrendingUp size={48} color="#0edb61" />
              </div>
              <h3 style={styles.serviceTitle}>
                Sales Strategy & Growth Blueprint
              </h3>
              <p style={styles.serviceDescription}>
                Tailored game plans for scaling and market positioning, designed
                to accelerate your business growth and market penetration.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  • Go-to-market strategy development
                </li>
                <li style={styles.serviceListItem}>
                  • Sales funnel optimization
                </li>
                <li style={styles.serviceListItem}>
                  • Growth hacking techniques
                </li>
              </ul>
            </div>

            <div
              style={styles.serviceCard}
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
              <div style={styles.serviceIcon}>
                <Presentation size={48} color="#0edb61" />
              </div>
              <h3 style={styles.serviceTitle}>Investor Deck & Pitch Support</h3>
              <p style={styles.serviceDescription}>
                Prepare for investor talks and funding rounds with compelling
                presentations and pitch strategies that get results.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  • Investor deck creation and refinement
                </li>
                <li style={styles.serviceListItem}>
                  • Pitch practice and coaching
                </li>
                <li style={styles.serviceListItem}>
                  • Investor network introductions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" style={styles.approachSection}>
        <div style={styles.container2}>
          <h2 style={styles.sectionTitle}>Why Choose 8ConSult?</h2>
          <div style={styles.approachGrid}>
            <div
              style={styles.approachCard}
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
              <h3 style={styles.approachTitle}>Real-World Experience</h3>
              <p style={styles.approachDescription}>
                Benefit from decades of hands-on entrepreneurial experience, not
                just theoretical knowledge. Our advice comes from actual startup
                successes and lessons learned.
              </p>
            </div>

            <div
              style={styles.approachCard}
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
              <h3 style={styles.approachTitle}>Personalized Strategy</h3>
              <p style={styles.approachDescription}>
                Every business is unique. We develop customized strategies that
                align with your specific industry, market conditions, and growth
                objectives.
              </p>
            </div>

            <div
              style={styles.approachCard}
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
              <h3 style={styles.approachTitle}>End-to-End Support</h3>
              <p style={styles.approachDescription}>
                From initial concept to investor readiness, we provide
                comprehensive support throughout your entrepreneurial journey,
                ensuring no critical step is missed.
              </p>
            </div>

            <div
              style={styles.approachCard}
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
              <h3 style={styles.approachTitle}>Network Access</h3>
              <p style={styles.approachDescription}>
                Gain access to an extensive network of investors, industry
                experts, and potential partners to accelerate your business
                growth and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Clients Section */}
      <section id="clients" style={styles.clientsSection}>
        <div style={styles.container2}>
          <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>
            Who We Serve
          </h2>
          <div style={styles.clientsGrid}>
            <div style={styles.clientCategory}>
              <h3 style={styles.clientTitle}>Aspiring Entrepreneurs</h3>
              <ul style={styles.clientList}>
                <li style={styles.clientListItem}>
                  • First-time founders with innovative ideas
                </li>
                <li style={styles.clientListItem}>
                  • Professionals transitioning to entrepreneurship
                </li>
                <li style={styles.clientListItem}>
                  • Students developing startup concepts
                </li>
                <li style={styles.clientListItem}>
                  • Career changers seeking business opportunities
                </li>
              </ul>
            </div>

            <div style={styles.clientCategory}>
              <h3 style={styles.clientTitle}>Early-Stage Startups</h3>
              <ul style={styles.clientList}>
                <li style={styles.clientListItem}>
                  • Pre-seed and seed stage companies
                </li>
                <li style={styles.clientListItem}>
                  • Startups seeking product-market fit
                </li>
                <li style={styles.clientListItem}>
                  • Teams preparing for funding rounds
                </li>
                <li style={styles.clientListItem}>
                  • Companies needing strategic pivot guidance
                </li>
              </ul>
            </div>

            <div style={styles.clientCategory}>
              <h3 style={styles.clientTitle}>Growing Businesses</h3>
              <ul style={styles.clientList}>
                <li style={styles.clientListItem}>
                  • SMEs ready for scaling operations
                </li>
                <li style={styles.clientListItem}>
                  • Companies entering new markets
                </li>
                <li style={styles.clientListItem}>
                  • Businesses optimizing for growth
                </li>
                <li style={styles.clientListItem}>
                  • Organizations seeking strategic partnerships
                </li>
              </ul>
            </div>

            <div style={styles.clientCategory}>
              <h3 style={styles.clientTitle}>Corporate Innovators</h3>
              <ul style={styles.clientList}>
                <li style={styles.clientListItem}>
                  • Large companies developing new ventures
                </li>
                <li style={styles.clientListItem}>
                  • Corporate innovation teams
                </li>
                <li style={styles.clientListItem}>
                  • Organizations launching intrapreneurship programs
                </li>
                <li style={styles.clientListItem}>
                  • Companies seeking digital transformation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" style={styles.ctaSection}>
        <div style={styles.container2}>
          <h2 style={styles.ctaTitle}>
            Ready to Transform Your Business Vision?
          </h2>
          <p style={styles.ctaDescription}>
            Achieve more with 8ConSult—where expert guidance meets your
            ambition. Whether you're taking your first entrepreneurial steps or
            scaling an existing venture, Sir Nigel Santos and our team provide
            the strategic insights and practical support you need to succeed.
          </p>
          <div style={styles.ctaButtons}>
            <button
              style={styles.ctaPrimaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0cbb52";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(14, 219, 97, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0edb61";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(14, 219, 97, 0.2)";
              }}
            >
              Schedule Your Consultation
            </button>
            <button
              style={styles.ctaSecondaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ff1f2c";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(255, 31, 44, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ff1f2c";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(255, 31, 44, 0.2)";
              }}
            >
              Download Startup Guide
            </button>
          </div>
          <div style={styles.ctaHighlight}>
            <strong>
              From ideation to execution, from startup to scale-up—8ConSult is
              your trusted partner in building a successful business!
            </strong>
          </div>
        </div>
      </section>
    </div>
  );
};

// Your existing styles remain the same
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

  // Hero Section (Green to Black gradient)
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

  primaryButton: {
    background: "#0edb61",
    color: "#ffffff",
    padding: "1rem 2rem",
    borderRadius: "8px",
    border: "none",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(14, 219, 97, 0.2)",
  },

  secondaryButton: {
    background: "transparent",
    color: "#ffffff",
    padding: "1rem 2rem",
    borderRadius: "8px",
    border: "2px solid #ff1f2c",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  // Leadership Section (White background)
  leadershipSection: {
    background: "#ffffff",
    padding: "80px 20px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: "clamp(2rem, 5vw, 2.5rem)",
    fontWeight: "700",
    color: "#000000",
    textAlign: "center",
    marginBottom: "3rem",
  },

  leadershipContent: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "3rem",
    alignItems: "center",
  },

  leadershipText: {
    maxWidth: "600px",
  },

  leadershipDescription: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    marginBottom: "1.5rem",
    color: "#000000",
  },

  strongText: {
    color: "#ff1f2c",
    fontWeight: "700",
  },

  leadershipStats: {
    display: "grid",
    gap: "2rem",
  },

  statItem: {
    textAlign: "center",
    padding: "1.5rem",
    borderRadius: "10px",
    border: "2px solid #0edb61",
  },

  statNumber: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#0edb61",
    marginBottom: "0.5rem",
  },

  statLabel: {
    fontSize: "1rem",
    color: "#000000",
    fontWeight: "600",
  },

  // Services Section (Black background)
  servicesSection: {
    background: "#000000",
    padding: "80px 20px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },

  serviceCard: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    border: "2px solid #0edb61",
    transition: "all 0.3s ease",
    cursor: "pointer",
    textAlign: "center",
  },

  serviceIcon: {
    marginBottom: "1rem",
  },

  serviceTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#000000",
    marginBottom: "1rem",
  },

  serviceDescription: {
    fontSize: "1rem",
    color: "#000000",
    marginBottom: "1.5rem",
    lineHeight: "1.6",
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

  // Approach Section (White background)
  approachSection: {
    background: "#ffffff",
    padding: "80px 20px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },

  approachGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },

  approachCard: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(14, 219, 97, 0.1)",
    textAlign: "center",
    border: "2px solid transparent",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  approachTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#0edb61",
    marginBottom: "1rem",
  },

  approachDescription: {
    fontSize: "1rem",
    color: "#000000",
    lineHeight: "1.7",
  },

  // Clients Section (Black background)
  clientsSection: {
    background: "#000000",
    padding: "80px 20px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },

  clientsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },

  clientCategory: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "15px",
    border: "2px solid #0edb61",
  },

  clientTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#0edb61",
    marginBottom: "1.5rem",
    textAlign: "center",
  },

  clientList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  clientListItem: {
    fontSize: "1rem",
    color: "#000000",
    marginBottom: "1rem",
    lineHeight: "1.6",
  },

  // CTA Section (White background)
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

  ctaButtons: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "3rem",
  },

  ctaPrimaryButton: {
    background: "#0edb61",
    color: "#ffffff",
    padding: "1.2rem 2.5rem",
    borderRadius: "10px",
    border: "none",
    fontSize: "1.2rem",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(14, 219, 97, 0.2)",
  },

  ctaSecondaryButton: {
    background: "#ff1f2c",
    color: "#ffffff",
    padding: "1.2rem 2.5rem",
    borderRadius: "10px",
    border: "none",
    fontSize: "1.2rem",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(255, 31, 44, 0.2)",
  },

  ctaHighlight: {
    background: "#f8f9fa",
    padding: "2rem",
    borderRadius: "15px",
    fontSize: "1.2rem",
    maxWidth: "700px",
    margin: "0 auto",
    border: "2px solid #0edb61",
    color: "#000000",
  },

  // Responsive adjustments
  "@media (max-width: 768px)": {
    leadershipContent: {
      gridTemplateColumns: "1fr",
      gap: "2rem",
    },

    leadershipStats: {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1rem",
    },

    heroButtons: {
      flexDirection: "column",
      alignItems: "center",
    },

    ctaButtons: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
};

export default ConSult;
