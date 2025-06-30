import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      id: "8construct",
      name: "8ConStruct",
      route: "/8construct",
      desc: "Research and statistical consultancy to empower decision-making.",
      icon: <Brain size={24} />,
    },
    {
      id: "8conquest",
      name: "8ConQuest",
      route: "/8conquest",
      desc: "Thesis and career coaching for students and professionals.",
      icon: <Target size={24} />,
    },
    {
      id: "8converse",
      name: "8ConVerse",
      route: "/8converse",
      desc: "Language certification courses to broaden opportunities.",
      icon: <Globe size={24} />,
    },
    {
      id: "8conlift",
      name: "8ConLift",
      route: "/8conlift",
      desc: "Scholarship and training programs for deserving students.",
      icon: <Award size={24} />,
    },
    {
      id: "8connect",
      name: "8ConNect",
      route: "/8connect",
      desc: "Entrepreneur networking hub to grow business relationships.",
      icon: <Network size={24} />,
    },
    {
      id: "8conedge",
      name: "8ConEdge",
      route: "/8conedge",
      desc: "Proprietary Forex tools to enhance trading efficiency.",
      icon: <TrendingUp size={24} />,
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

  return (
    <div style={styles.container}>
      {/* Header - Navigation */}
      <header
        style={
          scrolled
            ? { ...styles.header, ...styles.headerScrolled }
            : styles.header
        }
      >
        <div style={styles.headerContainer}>
          {/* Logo */}
          <a
            href="/"
            style={styles.logo}
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <img
              src="/assets/logo/8con Academy Logo White.png"
              alt="8Con Academy Logo"
              style={styles.logoImg}
            />
          </a>

          {/* Desktop Navigation */}
          <nav style={styles.desktopNav}>
            <a
              href="/"
              style={styles.navLink}
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Home
            </a>

            {/* Sub-brands Dropdown */}
            <div
              style={styles.dropdown}
              onMouseEnter={() => setSubBrandsDropdownOpen(true)}
              onMouseLeave={() => setSubBrandsDropdownOpen(false)}
            >
              <span style={styles.navLink}>Sub-brands ▾</span>
              {subBrandsDropdownOpen && (
                <div style={styles.dropdownContent}>
                  {subBrandsData.map((brand, index) => (
                    <div key={index} style={styles.dropdownBrandGroup}>
                      <a
                        href={`/sub-brands#${brand.id}`}
                        style={styles.dropdownLinkMain}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/sub-brands");
                        }}
                      >
                        {brand.name} - Overview
                      </a>
                      {brand.route && (
                        <a
                          href={brand.route}
                          style={styles.dropdownLinkDetail}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(brand.route);
                          }}
                        >
                          {brand.name} - Full Details
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={styles.mobileMenuToggle}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav style={styles.mobileNav}>
            <a
              href="/"
              style={styles.mobileNavLink}
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setMobileMenuOpen(false);
              }}
            >
              Home
            </a>

            {/* Mobile Sub-brands Dropdown */}
            <div style={styles.mobileDropdown}>
              <button
                style={styles.mobileDropdownToggle}
                onClick={() =>
                  setMobileSubBrandsDropdownOpen(!mobileSubBrandsDropdownOpen)
                }
              >
                Sub-brands{" "}
                <ChevronDown
                  size={16}
                  style={mobileSubBrandsDropdownOpen ? styles.rotateIcon : {}}
                />
              </button>
              {mobileSubBrandsDropdownOpen && (
                <div style={styles.mobileDropdownContent}>
                  {subBrandsData.map((brand, index) => (
                    <div key={index} style={styles.mobileBrandGroup}>
                      <a
                        href={`/sub-brands#${brand.id}`}
                        style={styles.mobileNavSublink}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/sub-brands");
                          setMobileMenuOpen(false);
                          setMobileSubBrandsDropdownOpen(false);
                        }}
                      >
                        {brand.name} - Overview
                      </a>
                      {brand.route && (
                        <a
                          href={brand.route}
                          style={styles.mobileNavSublinkDetail}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(brand.route);
                            setMobileMenuOpen(false);
                            setMobileSubBrandsDropdownOpen(false);
                          }}
                        >
                          {brand.name} - Full Details
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </nav>
        )}
      </header>

      {/* Header Section */}
      <header style={styles.heroSection}>
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
      </header>

      {/* Leadership Section */}
      <section style={styles.leadershipSection}>
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
      <section style={styles.servicesSection}>
        <div style={styles.container2}>
          <h2 style={styles.sectionTitle}>Our Services</h2>
          <div style={styles.servicesGrid}>
            <div style={styles.serviceCard}>
              <h3 style={styles.serviceTitle}>
                Statistical Analysis for Research
              </h3>
              <p style={styles.serviceDescription}>
                Comprehensive statistical services tailored to support academic
                and corporate research.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  Academic Research: Thesis, dissertations, and journal articles
                </li>
                <li style={styles.serviceListItem}>
                  Corporate Research: Data-driven business strategies and market
                  analysis
                </li>
                <li style={styles.serviceListItem}>
                  Advanced statistical modeling and predictive analysis
                </li>
              </ul>
            </div>

            <div style={styles.serviceCard}>
              <h3 style={styles.serviceTitle}>
                Data Refinement and Management
              </h3>
              <p style={styles.serviceDescription}>
                Transform raw data into meaningful insights through
                comprehensive data management.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  Data Cleaning: Remove inconsistencies and ensure accuracy
                </li>
                <li style={styles.serviceListItem}>
                  Data Transformation: Structure data for analysis and reporting
                </li>
                <li style={styles.serviceListItem}>
                  Data Visualization: Create intuitive charts and dashboards
                </li>
              </ul>
            </div>

            <div style={styles.serviceCard}>
              <h3 style={styles.serviceTitle}>Research Consultancy</h3>
              <p style={styles.serviceDescription}>
                Personalized guidance for students, academics, and businesses.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  Topic selection and research proposal writing
                </li>
                <li style={styles.serviceListItem}>
                  Literature review for strong theoretical foundation
                </li>
                <li style={styles.serviceListItem}>
                  Survey and experiment design assistance
                </li>
              </ul>
            </div>

            <div style={styles.serviceCard}>
              <h3 style={styles.serviceTitle}>
                Customized Workshops and Training
              </h3>
              <p style={styles.serviceDescription}>
                Tailored workshops to enhance research and data analysis skills.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  Statistical tools training (SPSS, STATA, Excel, R)
                </li>
                <li style={styles.serviceListItem}>
                  Data interpretation and hypothesis validation
                </li>
                <li style={styles.serviceListItem}>
                  Effective presentation of research findings
                </li>
              </ul>
            </div>

            <div style={styles.serviceCard}>
              <h3 style={styles.serviceTitle}>Technical Writing Support</h3>
              <p style={styles.serviceDescription}>
                Professional assistance in writing and structuring research
                materials.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  Research papers, reports, and presentations
                </li>
                <li style={styles.serviceListItem}>
                  Focus on clarity, coherence, and academic rigor
                </li>
                <li style={styles.serviceListItem}>
                  APA, MLA, Chicago formatting compliance
                </li>
              </ul>
            </div>

            <div style={styles.serviceCard}>
              <h3 style={styles.serviceTitle}>
                Specialized Support for Companies
              </h3>
              <p style={styles.serviceDescription}>
                Data-driven solutions for strategic business decisions.
              </p>
              <ul style={styles.serviceList}>
                <li style={styles.serviceListItem}>
                  Market Research: Trends and competitive analysis
                </li>
                <li style={styles.serviceListItem}>
                  Operational Efficiency Studies: Workflow optimization
                </li>
                <li style={styles.serviceListItem}>
                  Employee Insights: Organizational culture improvement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={styles.whyChooseSection}>
        <div style={styles.container2}>
          <h2 style={styles.sectionTitle}>Why Choose 8ConStruct?</h2>
          <div style={styles.benefitsGrid}>
            <div style={styles.benefitCard}>
              <h3 style={styles.benefitTitle}>Expert Leadership</h3>
              <p style={styles.benefitDescription}>
                Years of experience in academic research and corporate
                consulting with Doc May L. Francisco's deep understanding of
                research methodologies.
              </p>
            </div>

            <div style={styles.benefitCard}>
              <h3 style={styles.benefitTitle}>Comprehensive Support</h3>
              <p style={styles.benefitDescription}>
                End-to-end support from initial research design to final
                presentation of results, ensuring a seamless process.
              </p>
            </div>

            <div style={styles.benefitCard}>
              <h3 style={styles.benefitTitle}>Tailored Solutions</h3>
              <p style={styles.benefitDescription}>
                Every project is unique, and our approach is customized to meet
                specific needs of students, academics, or businesses.
              </p>
            </div>

            <div style={styles.benefitCard}>
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
      <section style={styles.clientsSection}>
        <div style={styles.container2}>
          <h2 style={styles.sectionTitle}>Our Target Clients</h2>
          <div style={styles.clientsGrid}>
            <div style={styles.clientCategory}>
              <h3 style={styles.clientTitle}>Students & Academics</h3>
              <ul style={styles.clientList}>
                <li style={styles.clientListItem}>
                  Undergraduate and postgraduate students
                </li>
                <li style={styles.clientListItem}>
                  Faculty members conducting independent research
                </li>
                <li style={styles.clientListItem}>
                  Researchers working on theses and dissertations
                </li>
              </ul>
            </div>

            <div style={styles.clientCategory}>
              <h3 style={styles.clientTitle}>Companies</h3>
              <ul style={styles.clientList}>
                <li style={styles.clientListItem}>
                  SMEs and large organizations
                </li>
                <li style={styles.clientListItem}>
                  Teams requiring employee satisfaction surveys
                </li>
                <li style={styles.clientListItem}>
                  Organizations seeking data-driven strategic decisions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
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
          <div style={styles.ctaHighlight}>
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

// Plain JavaScript styling objects
const styles = {
  container: {
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: "1.6",
    color: "#333",
    margin: 0,
    padding: 0,
  },
  // Navigation Styles
  header: {
    backgroundColor: "transparent",
    boxShadow: "none",
    position: "sticky",
    top: 0,
    zIndex: 600,
    padding: "10px",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    fontWeight: 900,
    textTransform: "uppercase",
    transition:
      "background-color 0.8s ease, box-shadow 0.8s ease, backdrop-filter 0.3s ease",
  },
  headerScrolled: {
    backgroundColor: "rgb(0, 0, 0)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    marginRight: "auto",
  },
  logoImg: {
    height: "40px",
    width: "auto",
  },
  desktopNav: {
    display: "flex",
    alignItems: "center",
    gap: "2px",
    fontSize: "14px",
    fontWeight: 600,
    position: "relative",
  },
  navLink: {
    textDecoration: "none",
    color: "rgb(255, 255, 255)",
    padding: "0px 15px",
    borderRadius: "6px",
    transition:
      "background-color 0.3s ease, color 0.3s ease, transform 0.3s ease",
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
  },
  dropdown: {
    position: "relative",
  },
  dropdownContent: {
    display: "block",
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "white",
    padding: "5px 0",
    minWidth: "200px",
    zIndex: 1000,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },
  dropdownBrandGroup: {
    borderBottom: "1px solid #f0f0f0",
    padding: "5px 0",
  },
  dropdownLinkMain: {
    display: "block",
    padding: "8px 15px",
    color: "#068c3b",
    textDecoration: "none",
    transition: "background-color 0.3s ease, color 0.3s ease",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
    fontWeight: 900,
    textTransform: "uppercase",
  },
  dropdownLinkDetail: {
    display: "block",
    padding: "5px 15px 8px 25px",
    color: "#666",
    textDecoration: "none",
    transition: "background-color 0.3s ease, color 0.3s ease",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "11px",
    fontWeight: 600,
    textTransform: "uppercase",
    fontStyle: "italic",
  },
  mobileMenuToggle: {
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    color: "white",
    display: "none",
  },
  mobileNav: {
    backgroundColor: "white",
    borderTop: "1px solid #e5e7eb",
    marginTop: "16px",
    padding: 0,
    display: "none",
  },
  mobileNavLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 8px",
    textDecoration: "none",
    color: "#121411",
    borderBottom: "1px solid #f3f4f6",
    background: "none",
    border: "none",
    width: "100%",
    textAlign: "left",
    fontSize: "1rem",
    cursor: "pointer",
  },
  mobileDropdown: {
    position: "relative",
  },
  mobileDropdownToggle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "12px 8px",
    textDecoration: "none",
    color: "#121411",
    borderBottom: "1px solid #f3f4f6",
    background: "none",
    border: "none",
    textAlign: "left",
    fontSize: "1rem",
    cursor: "pointer",
  },
  mobileDropdownContent: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "0.5rem",
    margin: "0.5rem 1rem",
  },
  mobileBrandGroup: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    padding: "3px 0",
  },
  mobileNavSublink: {
    display: "block",
    padding: "0.6rem 1rem",
    color: "rgba(0, 0, 0, 0.7)",
    textDecoration: "none",
    fontSize: "0.85rem",
    borderBottom: "none",
  },
  mobileNavSublinkDetail: {
    display: "block",
    padding: "0.4rem 1rem 0.6rem 1.5rem",
    color: "rgba(0, 0, 0, 0.6)",
    textDecoration: "none",
    fontSize: "0.8rem",
    fontStyle: "italic",
  },
  rotateIcon: {
    transform: "rotate(180deg)",
  },
  container2: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  heroSection: {
    background: "linear-gradient(135deg, #068c3b 0%, #0edb61 100%)",
    color: "white",
    padding: "120px 20px 80px",
    textAlign: "center",
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-4%",
  },
  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  companyTitle: {
    fontSize: "4rem",
    fontWeight: "700",
    marginBottom: "1rem",
    textShadow: "0 4px 8px rgba(0,0,0,0.3)",
  },
  heroSubtitle: {
    fontSize: "1.8rem",
    fontWeight: "300",
    marginBottom: "1.5rem",
    opacity: "0.9",
  },
  heroDescription: {
    fontSize: "1.2rem",
    lineHeight: "1.7",
    maxWidth: "600px",
    margin: "0 auto",
    opacity: "0.95",
  },
  leadershipSection: {
    background: "#e4eed3",
    padding: "80px 20px",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#068c3b",
    textAlign: "center",
    marginBottom: "2rem",
  },
  leadershipText: {
    fontSize: "1.2rem",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
    color: "#555",
    lineHeight: "1.8",
  },
  strongText: {
    color: "#068c3b",
    fontWeight: "700",
  },
  servicesSection: {
    background: "white",
    padding: "80px 20px",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },
  serviceCard: {
    background: "white",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    border: "1px solid #e4eed3",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  serviceTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#068c3b",
    marginBottom: "1rem",
  },
  serviceDescription: {
    fontSize: "1rem",
    color: "#666",
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
    color: "#555",
    marginBottom: "0.8rem",
    paddingLeft: "1.5rem",
    position: "relative",
  },
  whyChooseSection: {
    background: "linear-gradient(135deg, #f8f9fa 0%, #e4eed3 100%)",
    padding: "80px 20px",
  },
  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },
  benefitCard: {
    background: "white",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
    border: "2px solid transparent",
    transition: "all 0.3s ease",
  },
  benefitTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#068c3b",
    marginBottom: "1rem",
  },
  benefitDescription: {
    fontSize: "1rem",
    color: "#666",
    lineHeight: "1.7",
  },
  clientsSection: {
    background: "white",
    padding: "80px 20px",
  },
  clientsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "3rem",
    marginTop: "3rem",
  },
  clientCategory: {
    background: "#f8f9fa",
    padding: "2.5rem",
    borderRadius: "15px",
    border: "2px solid #e4eed3",
  },
  clientTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#068c3b",
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
    color: "#555",
    marginBottom: "1rem",
    paddingLeft: "1.5rem",
    position: "relative",
  },
  ctaSection: {
    background: "linear-gradient(135deg, #068c3b 0%, #0edb61 100%)",
    color: "white",
    padding: "80px 20px",
    textAlign: "center",
  },
  ctaTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "2rem",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  ctaDescription: {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    maxWidth: "800px",
    margin: "0 auto 2rem",
    opacity: "0.95",
  },
  ctaHighlight: {
    background: "rgba(255,255,255,0.1)",
    padding: "1.5rem",
    borderRadius: "10px",
    fontSize: "1.3rem",
    maxWidth: "700px",
    margin: "0 auto",
    border: "2px solid rgba(255,255,255,0.2)",
    backdropFilter: "blur(10px)",
  },
};

// Add responsive behavior
if (typeof window !== "undefined") {
  const updateMobileNavDisplay = () => {
    const isMobile = window.innerWidth <= 1024;
    if (isMobile) {
      styles.desktopNav.display = "none";
      styles.mobileMenuToggle.display = "block";
    } else {
      styles.desktopNav.display = "flex";
      styles.mobileMenuToggle.display = "none";
    }
  };

  window.addEventListener("resize", updateMobileNavDisplay);
  updateMobileNavDisplay();
}

export default ConStruct;
