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
  Wifi,
  Coffee,
  MapPin,
  Clock,
  Building,
  Briefcase,
} from "lucide-react";

const ConSpace = () => {
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
                      handleNavigation(brand.route);
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
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#features" className="nav-link">
              Features
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
              href="#services"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#features"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
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

      {/* Hero Section */}
      <section id="top" style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.companyTitle}>8ConSpace</h1>
          <p style={styles.heroSubtitle}>
            Your Professional Workspace & Virtual Office Solution
          </p>
          <p style={styles.heroDescription}>
            A dynamic, productivity-driven space for freelancers, entrepreneurs,
            online professionals, and students. Experience flexible workspaces,
            virtual office solutions, and a collaborative environment designed
            to fuel your success.
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
              Book a Tour
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
              Virtual Office
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.aboutSection}>
        <div style={styles.container2}>
          <h2 style={styles.sectionTitle}>Professional Workspace Solutions</h2>
          <div style={styles.aboutContent}>
            <div style={styles.aboutText}>
              <p style={styles.aboutDescription}>
                8ConSpace is more than just a workspace—it's a productivity hub
                designed to empower professionals, entrepreneurs, and students
                to achieve their goals. Whether you need a flexible desk for the
                day or a complete virtual office solution, we provide the
                environment and resources you need to succeed.
              </p>
              <p style={styles.aboutDescription}>
                From startup-friendly environments to student-focused study
                pods, 8ConSpace adapts to your needs while fostering
                collaboration and innovation.
              </p>
            </div>
            <div style={styles.aboutStats}>
              <div style={styles.statItem}>
                <h3 style={styles.statNumber}>24/7</h3>
                <p style={styles.statLabel}>Access Available</p>
              </div>
              <div style={styles.statItem}>
                <h3 style={styles.statNumber}>500+</h3>
                <p style={styles.statLabel}>Happy Members</p>
              </div>
              <div style={styles.statItem}>
                <h3 style={styles.statNumber}>50+</h3>
                <p style={styles.statLabel}>Workstations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={styles.servicesSection}>
        <div style={styles.container2}>
          <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>
            Our Space Solutions
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
                <Building size={48} color="#0edb61" />
              </div>
              <h3 style={styles.serviceTitle}>Flexible Desk Rentals</h3>
              <p style={styles.serviceDescription}>
                Choose from daily, weekly, or monthly access to premium
                workspaces designed for maximum productivity.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  • Hot desks for daily use
                </li>
                <li style={styles.serviceListItem}>
                  • Dedicated desks for regulars
                </li>
                <li style={styles.serviceListItem}>
                  • Private offices for teams
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
                <MapPin size={48} color="#0edb61" />
              </div>
              <h3 style={styles.serviceTitle}>Virtual Office Solutions</h3>
              <p style={styles.serviceDescription}>
                Professional business address and administrative support without
                the overhead of a physical office.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  • Business address registration
                </li>
                <li style={styles.serviceListItem}>• Mail handling services</li>
                <li style={styles.serviceListItem}>
                  • Professional receptionist support
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
                <Network size={48} color="#0edb61" />
              </div>
              <h3 style={styles.serviceTitle}>Startup Environment</h3>
              <p style={styles.serviceDescription}>
                Access to resources, workshops, and a network of like-minded
                innovators to accelerate your business growth.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>• Networking events</li>
                <li style={styles.serviceListItem}>
                  • Skill-building workshops
                </li>
                <li style={styles.serviceListItem}>• Mentor connections</li>
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
                <Award size={48} color="#0edb61" />
              </div>
              <h3 style={styles.serviceTitle}>Student Pods</h3>
              <p style={styles.serviceDescription}>
                Special discounted zones designed for thesis writing, online
                learning, and academic collaboration.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  • Quiet study environments
                </li>
                <li style={styles.serviceListItem}>
                  • Student-friendly pricing
                </li>
                <li style={styles.serviceListItem}>
                  • Academic support resources
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={styles.featuresSection}>
        <div style={styles.container2}>
          <h2 style={styles.sectionTitle}>Premium Workspace Features</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featureItem}>
              <Wifi size={32} color="#0edb61" />
              <h3 style={styles.featureTitle}>High-Speed Internet</h3>
              <p style={styles.featureDescription}>
                Ultra-fast, reliable WiFi to keep you connected and productive.
              </p>
            </div>

            <div style={styles.featureItem}>
              <Coffee size={32} color="#0edb61" />
              <h3 style={styles.featureTitle}>Complimentary Refreshments</h3>
              <p style={styles.featureDescription}>
                Free coffee, tea, and snacks to keep you energized throughout
                the day.
              </p>
            </div>

            <div style={styles.featureItem}>
              <Clock size={32} color="#0edb61" />
              <h3 style={styles.featureTitle}>24/7 Access</h3>
              <p style={styles.featureDescription}>
                Work on your schedule with round-the-clock access to the space.
              </p>
            </div>

            <div style={styles.featureItem}>
              <Briefcase size={32} color="#0edb61" />
              <h3 style={styles.featureTitle}>Meeting Rooms</h3>
              <p style={styles.featureDescription}>
                Professional meeting spaces available for client meetings and
                team calls.
              </p>
            </div>

            <div style={styles.featureItem}>
              <Users size={32} color="#0edb61" />
              <h3 style={styles.featureTitle}>Community Events</h3>
              <p style={styles.featureDescription}>
                Regular networking events and workshops to build professional
                connections.
              </p>
            </div>

            <div style={styles.featureItem}>
              <Target size={32} color="#0edb61" />
              <h3 style={styles.featureTitle}>Business Support</h3>
              <p style={styles.featureDescription}>
                Access to business coaching and startup mentorship programs.
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
              <h3 style={styles.clientTitle}>Professionals & Freelancers</h3>
              <ul style={styles.clientList}>
                <li style={styles.clientListItem}>
                  • Remote workers seeking professional space
                </li>
                <li style={styles.clientListItem}>
                  • Freelancers building their business
                </li>
                <li style={styles.clientListItem}>
                  • Consultants meeting with clients
                </li>
                <li style={styles.clientListItem}>
                  • Digital nomads needing temporary workspace
                </li>
              </ul>
            </div>

            <div style={styles.clientCategory}>
              <h3 style={styles.clientTitle}>Entrepreneurs & Startups</h3>
              <ul style={styles.clientList}>
                <li style={styles.clientListItem}>
                  • Early-stage startups building MVP
                </li>
                <li style={styles.clientListItem}>
                  • Entrepreneurs developing business plans
                </li>
                <li style={styles.clientListItem}>
                  • Small teams needing collaborative space
                </li>
                <li style={styles.clientListItem}>
                  • Innovators seeking networking opportunities
                </li>
              </ul>
            </div>

            <div style={styles.clientCategory}>
              <h3 style={styles.clientTitle}>Students & Academics</h3>
              <ul style={styles.clientList}>
                <li style={styles.clientListItem}>
                  • Graduate students writing thesis
                </li>
                <li style={styles.clientListItem}>
                  • Online learners needing study space
                </li>
                <li style={styles.clientListItem}>
                  • Research groups collaborating
                </li>
                <li style={styles.clientListItem}>
                  • Academic professionals preparing publications
                </li>
              </ul>
            </div>

            <div style={styles.clientCategory}>
              <h3 style={styles.clientTitle}>Small Businesses</h3>
              <ul style={styles.clientList}>
                <li style={styles.clientListItem}>
                  • Companies needing virtual office address
                </li>
                <li style={styles.clientListItem}>
                  • Teams requiring meeting spaces
                </li>
                <li style={styles.clientListItem}>
                  • Businesses seeking mail handling services
                </li>
                <li style={styles.clientListItem}>
                  • Organizations hosting workshops
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" style={styles.ctaSection}>
        <div style={styles.container2}>
          <h2 style={styles.ctaTitle}>Ready to Elevate Your Workspace?</h2>
          <p style={styles.ctaDescription}>
            Whether you're building a startup, finishing your research, or
            growing your business, 8ConSpace gives you a professional and
            collaborative environment designed for success. Join our community
            of innovators, entrepreneurs, and achievers.
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
              Book Your Space Today
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
              Schedule a Tour
            </button>
          </div>
          <div style={styles.ctaHighlight}>
            <strong>
              Experience the difference a professional workspace makes—where
              productivity meets community, and ideas become reality!
            </strong>
          </div>
        </div>
      </section>
    </div>
  );
};

// Styling with alternating background colors and responsive design
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

  // About Section (White background)
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
    color: "#000000",
    textAlign: "center",
    marginBottom: "3rem",
  },

  aboutContent: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "3rem",
    alignItems: "center",
  },

  aboutText: {
    maxWidth: "600px",
  },

  aboutDescription: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    marginBottom: "1.5rem",
    color: "#000000",
  },

  aboutStats: {
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

  // Features Section (White background)
  featuresSection: {
    background: "#ffffff",
    padding: "80px 20px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },

  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },

  featureItem: {
    textAlign: "center",
    padding: "2rem",
    borderRadius: "15px",
    border: "2px solid #0edb61",
    transition: "all 0.3s ease",
  },

  featureTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#000000",
    margin: "1rem 0 0.5rem",
  },

  featureDescription: {
    fontSize: "1rem",
    color: "#000000",
    lineHeight: "1.6",
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
    aboutContent: {
      gridTemplateColumns: "1fr",
      gap: "2rem",
    },

    aboutStats: {
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

export default ConSpace;
