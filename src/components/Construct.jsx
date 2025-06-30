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
} from "lucide-react";

const ConStruct = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [subBrandsDropdownOpen, setSubBrandsDropdownOpen] = useState(false);
  const [mobileSubBrandsDropdownOpen, setMobileSubBrandsDropdownOpen] =
    useState(false);

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

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    setSubBrandsDropdownOpen(false);
    setMobileSubBrandsDropdownOpen(false);
  };

  const handleSmoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      // Use the same approach as your Home.jsx for consistent behavior
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

      {/* Hero Section */}
      <section id="top" style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.companyTitle}>8ConStruct</h1>
          <p style={styles.heroSubtitle}>
            Building Clarity, Confidence, and Results in Data
          </p>
          <p style={styles.heroDescription}>
            Premier provider of statistical analysis, data refinement, and
            research consultancy services, helping students, researchers, and
            companies achieve clarity and actionable insights.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" style={styles.leadershipSection}>
        <div style={styles.container2}>
          <h2 style={styles.sectionTitle}>Led by Expert Leadership</h2>
          <p style={styles.leadershipText}>
            Services led by{" "}
            <strong style={styles.strongText}>Doc May L. Francisco</strong>, an
            expert with extensive experience in academic and business research,
            ensuring precision, reliability, and results that empower clients to
            excel in their respective fields.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={styles.servicesSection}>
        <div style={styles.container2}>
          <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>
            Our Services
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
              <h3 style={styles.serviceTitle}>
                Statistical Analysis for Research
              </h3>
              <p style={styles.serviceDescription}>
                Comprehensive statistical services tailored to support academic
                and corporate research.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  • Academic Research: Thesis, dissertations, and journal
                  articles
                </li>
                <li style={styles.serviceListItem}>
                  • Corporate Research: Data-driven business strategies and
                  market analysis
                </li>
                <li style={styles.serviceListItem}>
                  • Advanced statistical modeling and predictive analysis
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
              <h3 style={styles.serviceTitle}>
                Data Refinement and Management
              </h3>
              <p style={styles.serviceDescription}>
                Transform raw data into meaningful insights through
                comprehensive data management.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  • Data Cleaning: Remove inconsistencies and ensure accuracy
                </li>
                <li style={styles.serviceListItem}>
                  • Data Transformation: Structure data for analysis and
                  reporting
                </li>
                <li style={styles.serviceListItem}>
                  • Data Visualization: Create intuitive charts and dashboards
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
              <h3 style={styles.serviceTitle}>Research Consultancy</h3>
              <p style={styles.serviceDescription}>
                Personalized guidance for students, academics, and businesses.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  • Topic selection and research proposal writing
                </li>
                <li style={styles.serviceListItem}>
                  • Literature review for strong theoretical foundation
                </li>
                <li style={styles.serviceListItem}>
                  • Survey and experiment design assistance
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
              <h3 style={styles.serviceTitle}>
                Customized Workshops and Training
              </h3>
              <p style={styles.serviceDescription}>
                Tailored workshops to enhance research and data analysis skills.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  • Statistical tools training (SPSS, STATA, Excel, R)
                </li>
                <li style={styles.serviceListItem}>
                  • Data interpretation and hypothesis validation
                </li>
                <li style={styles.serviceListItem}>
                  • Effective presentation of research findings
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
              <h3 style={styles.serviceTitle}>Technical Writing Support</h3>
              <p style={styles.serviceDescription}>
                Professional assistance in writing and structuring research
                materials.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  • Research papers, reports, and presentations
                </li>
                <li style={styles.serviceListItem}>
                  • Focus on clarity, coherence, and academic rigor
                </li>
                <li style={styles.serviceListItem}>
                  • APA, MLA, Chicago formatting compliance
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
              <h3 style={styles.serviceTitle}>
                Specialized Support for Companies
              </h3>
              <p style={styles.serviceDescription}>
                Data-driven solutions for strategic business decisions.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  • Market Research: Trends and competitive analysis
                </li>
                <li style={styles.serviceListItem}>
                  • Operational Efficiency Studies: Workflow optimization
                </li>
                <li style={styles.serviceListItem}>
                  • Employee Insights: Organizational culture improvement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" style={styles.whyChooseSection}>
        <div style={styles.container2}>
          <h2 style={styles.sectionTitle}>Why Choose 8ConStruct?</h2>
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
              <h3 style={styles.benefitTitle}>Expert Leadership</h3>
              <p style={styles.benefitDescription}>
                Years of experience in academic research and corporate
                consulting with Doc May L. Francisco's deep understanding of
                research methodologies.
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
              <h3 style={styles.benefitTitle}>Comprehensive Support</h3>
              <p style={styles.benefitDescription}>
                End-to-end support from initial research design to final
                presentation of results, ensuring a seamless process.
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
              <h3 style={styles.benefitTitle}>Tailored Solutions</h3>
              <p style={styles.benefitDescription}>
                Every project is unique, and our approach is customized to meet
                specific needs of students, academics, or businesses.
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
              <h3 style={styles.benefitTitle}>Actionable Insights</h3>
              <p style={styles.benefitDescription}>
                Focus on delivering insights that can be acted upon for academic
                success or business growth, not just data analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Clients Section */}
      <section id="clients" style={styles.clientsSection}>
        <div style={styles.container2}>
          <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>
            Our Target Clients
          </h2>
          <div style={styles.clientsGrid}>
            <div style={styles.clientCategory}>
              <h3 style={styles.clientTitle}>Students & Academics</h3>
              <ul style={styles.clientList}>
                <li style={styles.clientListItem}>
                  • Undergraduate and postgraduate students
                </li>
                <li style={styles.clientListItem}>
                  • Faculty members conducting independent research
                </li>
                <li style={styles.clientListItem}>
                  • Researchers working on theses and dissertations
                </li>
              </ul>
            </div>

            <div style={styles.clientCategory}>
              <h3 style={styles.clientTitle}>Companies</h3>
              <ul style={styles.clientList}>
                <li style={styles.clientListItem}>
                  • SMEs and large organizations
                </li>
                <li style={styles.clientListItem}>
                  • Teams requiring employee satisfaction surveys
                </li>
                <li style={styles.clientListItem}>
                  • Organizations seeking data-driven strategic decisions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" style={styles.ctaSection}>
        <div style={styles.container2}>
          <h2 style={styles.ctaTitle}>The 8ConStruct Advantage</h2>
          <p style={styles.ctaDescription}>
            8ConStruct combines expertise, precision, and a client-centered
            approach to deliver results that drive academic and business
            success. Whether you're navigating the complexities of a
            dissertation or exploring market trends for business growth,
            8ConStruct is your partner in achieving clarity and impactful
            outcomes.
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
              Let 8ConStruct turn your data into actionable insights—bridging
              the gap between research and results!
            </strong>
          </div>
        </div>
      </section>
    </div>
  );
};

// Updated styling with new color palette
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

  leadershipSection: {
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

  leadershipText: {
    fontSize: "clamp(1rem, 3vw, 1.2rem)",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
    color: "#000000",
    lineHeight: "1.8",
  },

  strongText: {
    color: "#ff1f2c",
    fontWeight: "700",
  },

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
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
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
  },

  serviceTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#0edb61",
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
  },

  serviceListItem: {
    fontSize: "0.95rem",
    color: "#000000",
    marginBottom: "0.8rem",
    lineHeight: "1.5",
  },

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

  clientsSection: {
    background: "#000000",
    padding: "80px 20px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },

  clientsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "3rem",
    marginTop: "3rem",
  },

  clientCategory: {
    background: "#ffffff",
    padding: "2.5rem",
    borderRadius: "15px",
    border: "2px solid #0edb61",
  },

  clientTitle: {
    fontSize: "1.5rem",
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
    textShadow: "none",
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

export default ConStruct;
