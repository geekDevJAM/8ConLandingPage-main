import React, { useState, useEffect } from "react";
import ScrollUp from "./ScrollUp";
import Footer from "./Footer";
import { Menu, X, Goal, Eye, Atom, HeartHandshake } from "lucide-react";
import "../App.css";
import ScrollLink from "./ScrollLink";
const AboutUs = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fade-in animation on scroll
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* Header */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          {/* Logo */}
          <a href="/#home" className="logo">
            <img
              src="/assets/logo/8con Academy Logo White.png"
              alt="8Con Academy Logo"
              className="logo-img"
            />
          </a>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
          {/* Desktop Navigation */}

          <nav className="desktop-nav">
            <ScrollLink
              to="/#home"
              className="nav-link"
              style={{ display: "flex", alignItems: "center" }}
              onClick={(e) => e.currentTarget.blur()}
            >
              Home
            </ScrollLink>
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <ScrollLink
              to="/#home"
              className="mobile-nav-link"
              style={{ display: "flex", alignItems: "center" }}
              onClick={(e) => e.currentTarget.blur()}
            >
              Home
            </ScrollLink>

            {/* Brands Dropdown */}
          </nav>
        )}
      </header>

      {/* Main content - Added padding-top to account for fixed header */}
      <main className="about-us-main">
        {/* Hero Section with Background Image */}
        <section className="about-us-hero">
          <div className="about-us-hero-overlay">
            <div className="about-us-image-container">
              <img
                src="/assets/images/aboutus2.jpg"
                alt="8Con Academy Logo"
                className="header-AboutUs"
              />
            </div>
          </div>
        </section>
        <section>
          {/* Content Container */}
          <div className="about-us-content">
            {/* Vision and Mission Section */}
            <div className="about-us-grid">
              {/* Our Vision */}
              <div className="about-us-main-title">
                <h1>Who is 8Con Academy?</h1>
              </div>

              <div className="about-us-card">
                <div className="about-us-card-header fade-in">
                  <h2 className="about-us-card-title fade-in">
                    8CON Academy: Empowering Filipino Families through Financial
                    Education
                  </h2>
                </div>
                <p className="about-us-card-text justified-text fade-in">
                  <span className="text-red-highlight">8Con Academy</span> is a
                  premier trading and financial education institution based in
                  Meycauayan, Bulacan. We specialize in{" "}
                  <span className="text-red-highlight">
                    Forex Derivative Education
                  </span>
                  , empowering aspiring traders through structured,
                  confluence-based strategies rooted in discipline, real-world
                  practice, and continuous coaching.
                </p>
                <br />
                <p className="fade-in">
                  At 8Con, we believe that Confluence Builds Confidence. Our
                  name, <span className="text-red-highlight">8Con</span>{" "}
                  reflects the 8 key confluences traders must master to make
                  sound, profitable decisions, a philosophy that runs through
                  every program we offer.
                </p>

                <h3 className="about-us-card-subtitle fade-in">Our Services</h3>
                <p className="about-us-card-text justified-text fade-in">
                  <strong>Sub-brands:</strong>
                </p>
                <ul className="about-us-card-text justified-list fade-in">
                  <li className="justified-text fade-in">
                    <p className="fade-in">
                      <strong>Forex Derivative Trading Level II:</strong> An
                      Advanced Course designed to equip students with
                      comprehensive knowledge and hands-on skills in{" "}
                      <span className="text-red-highlight">Forex Trading </span>
                      to become profitable traders. decisions.
                    </p>
                  </li>
                </ul>
                <p className="about-us-card-text justified-text fade-in">
                  <strong>Sub-brands:</strong>
                </p>
                <ul className="about-us-card-text justified-list sub-brand-grid fade-in">
                  <li className="justified-text fade-in">
                    <p className="fade-in">
                      <strong>8ConEdge:</strong> Proprietary forex scanner for
                      derivative traders. Provides market sentiment, technical
                      signals, and fundamental analysis in one platform,
                      empowering informed trading decisions.
                    </p>
                  </li>
                  <li className="justified-text fade-in">
                    <p className="fade-in">
                      <strong>8ConLift:</strong> Scholarship and community
                      upliftment arm offering free education, OJT placements,
                      and the "Enrollment to Employment" program. Focused on
                      transforming lives through inclusive learning
                      opportunities.
                    </p>
                  </li>
                  <li className="justified-text fade-in">
                    <p className="fade-in">
                      <strong>8ConStruct:</strong> Offers data analytics,
                      statistical treatment, and research consulting for
                      students, academics, and businesses led by Doc May
                      Francisco. Ideal for theses, dissertations, market
                      research, and business data strategies.
                    </p>
                  </li>
                  <li className="justified-text fade-in">
                    <p className="fade-in">
                      <strong>8ConCise:</strong> Comprehensive review center for
                      LET, Criminology, Civil Service, and College Entrance
                      Exams. Combines academic content, mock exams, and coaching
                      for exam success.
                    </p>
                  </li>
                  <li className="justified-text fade-in">
                    <p className="fade-in">
                      <strong>8ConVerse:</strong> Language proficiency program
                      designed for IELTS, TOEFL, and other English
                      certifications. Supports global career and migration plans
                      through effective communication skills training.
                    </p>
                  </li>
                  <li className="justified-text fade-in">
                    <p className="fade-in">
                      <strong>8ConNect:</strong> Business networking community
                      promoting collaboration, referrals, and entrepreneurial
                      growth. Hosts pitching events, coaching, and partnerships
                      for SMEs and local startups.
                    </p>
                  </li>
                  <li className="justified-text fade-in">
                    <p className="fade-in">
                      <strong>8ConPact:</strong> CSR and LGU partnership program
                      supporting education, livelihood, and employment.
                      Implements LGU-aligned training, scholarships, and job
                      placement initiatives.
                    </p>
                  </li>
                  <li className="justified-text fade-in">
                    <p className="fade-in">
                      <strong>8ConQuest:</strong> Academic coaching and
                      professional mentoring focused on thesis guidance, career
                      planning, and entrepreneurship development. Helps students
                      and professionals achieve academic and career goals with
                      expert support.
                    </p>
                  </li>
                  <li className="justified-text fade-in">
                    <p className="fade-in">
                      <strong>8ConSpace:</strong> A co-working and virtual
                      office hub for freelancers, students, and startups. Offers
                      flexible desk rentals, virtual business registration, and
                      community workshops in a productivity-focused environment.
                    </p>
                  </li>
                  <li className="justified-text fade-in">
                    <p className="fade-in">
                      <strong>8ConSult:</strong> Business development and
                      startup advisory service led by Sir Nigel Santos. Covers
                      business model coaching, sales strategy, growth plans, and
                      investor pitch preparation. Advisory
                    </p>
                  </li>
                </ul>

                <h3 className="about-us-card-subtitle">What Makes Us Unique</h3>
                <p className="about-us-card-text justified-text fade-in">
                  Confluence-Based Strategy Model
                </p>
                <br />
                <p className="fade-in">
                  Our curriculum is built on a multi-layered framework designed
                  to sharpen decision-making and reinforce trading discipline.
                  Rather than relying on just one method or signal, we teach
                  students how to identify aligned market factors or what we
                  call confluences before taking action.
                </p>
                <br />
                <p className="fade-in">
                  This approach helps them avoid guesswork, manage risk better,
                  and execute trades with confidence and clarity.
                </p>
                <br />
                <p className="fade-in">
                  <strong>
                    Internship with Real Value: Interns don’t just observe they
                    evolve. Each intern receives:
                  </strong>
                </p>
                <ul className="about-us-card-text justified-list fade-in">
                  <li className="justified-text fade-in">
                    <p className="fade-in">
                      A Full Scholarship covering Basic to Common Competency.
                    </p>
                  </li>
                  <li className="justified-text fade-in">
                    <p className="fade-in">Thesis & Dissertation Coaching.</p>
                  </li>
                  <li className="justified-text fade-in">
                    <p className="fade-in">1-on-1 Career Mentorship</p>
                  </li>
                  <li className="justified-text fade-in">
                    <p className="fade-in">
                      Extended Support After Graduation: Growth doesn’t stop at
                      graduation. Our Student Satisfactory Program gives
                      qualified graduates an extra month of access to live
                      training, core modules, and mentorship, totally free.
                      Whether they need confidence, clarity, or a second wind,
                      we’ve got their back.
                    </p>
                  </li>
                </ul>
                <br />
                <p className="fade-in">
                  <strong>8ConEdge: Proprietary Market Scanner</strong>
                </p>
                <br />
                <p className="fade-in">
                  We’ve developed 8ConEdge, our in-house market scanning tool
                  built exclusively for 8Con traders and students.
                </p>
                <br />
                <p className="fade-in">
                  Designed to support strategic decision-making, it streamlines
                  key market data into one intuitive dashboard giving users a
                  smarter, more structured view of the market.
                </p>
                <br />
                <p className="fade-in">
                  No hype, no clutter, just a system that speaks the same
                  language we teach: confluence, structure, and confidence.
                </p>
                <br />
                <p className="fade-in">
                  Because at 8Con, even our tech is trained to think like a
                  trader.
                </p>
                <h3 className="about-us-card-subtitle fade-in">
                  Community Engagement
                </h3>
                <ul className="about-us-card-text justified-list fade-in">
                  <p className="about-us-card-text justified-text fade-in">
                    8Con Academy fosters an environment where learning continues
                    beyond the classroom.
                  </p>
                  <p className="about-us-card-text justified-text fade-in">
                    <strong>We actively build connections through:</strong>
                  </p>
                  <li className="justified-text fade-in">
                    <p className="fade-in">
                      Campus workshops and speaking invitations.
                    </p>
                  </li>
                  <li className="justified-text fade-in">
                    <p className="fade-in">
                      Free public orientations and trading webinars.
                    </p>
                  </li>
                  <li className="justified-text fade-in">
                    <p className="fade-in">Live fund management challenges.</p>
                  </li>
                  <li className="justified-text fade-in">
                    <p className="fade-in">
                      Our graduates stay involved, often returning as mentors,
                      speakers, or collaborators. It's a shared journey built on
                      growth, support, and accountability.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="about-us-card">
                <div className="about-us-card-header fade-in">
                  <Eye
                    size={32}
                    style={{ color: "#ff1f2c" }}
                    className="about-us-card-icon"
                  />
                  <h2 className="about-us-card-title fade-in">Our Vision</h2>
                </div>
                <p className="about-us-card-text justified-text fade-in fade-in">
                  To become the most trusted and recognized Forex education hub
                  in the Philippines, producing a ripple effect of empowered
                  traders, impactful coaches, and ethical fund managers who
                  create lasting value in communities here and abroad.
                </p>
              </div>

              {/* Our Mission */}
              <div className="about-us-card">
                <div className="about-us-card-header fade-in">
                  <Goal
                    size={32}
                    style={{ color: "#ff1f2c" }}
                    className="about-us-card-icon"
                  />
                  <h2 className="about-us-card-title fade-in">Our Mission</h2>
                </div>
                <p className="about-us-card-text justified-text fade-in fade-in">
                  To raise disciplined, confident, and financially literate
                  Filipino traders through structured education,
                  confluence-based strategies, and career-focused coaching,
                  supported by data-driven tools and real-world application. We
                  are committed to creating a profitable trader in every
                  Filipino household, one person at a time.
                </p>
              </div>
            </div>

            {/* Core Values and CSR Section */}
            <div className="about-us-grid">
              {/* Core Values */}
              <div className="about-us-card">
                <div className="about-us-card-header fade-in">
                  <Atom
                    size={32}
                    style={{ color: "#ff1f2c" }}
                    className="about-us-card-icon"
                  />
                  <h2 className="about-us-card-title fade-in">Core Values</h2>
                </div>
                <div className="about-us-card-section">
                  <ul className="about-us-card-text justified-list fade-in">
                    <li className="justified-text fade-in">
                      <p className="fade-in">
                        <strong>Empowering Lives Through Education:</strong> We
                        are committed to transforming lives by equipping
                        individuals with the financial literacy and trading
                        expertise they need to achieve independence, resilience,
                        and long-term success. Education is the foundation for
                        creating opportunities and building a better future for
                        individuals and communities alike.
                      </p>
                    </li>
                    <li className="justified-text fade-in">
                      <p className="fade-in">
                        <strong>Innovating for Lasting Impact:</strong> We
                        embrace innovation as a driver of excellence, leveraging
                        cutting-edge technology and adaptive strategies to
                        deliver education that creates enduring value. By
                        staying ahead of industry trends, we ensure our students
                        and stakeholders are prepared for the challenges of
                        tomorrow.
                      </p>
                    </li>
                    <li className="justified-text fade-in">
                      <p className="fade-in">
                        <strong>
                          Strength in Collaboration and Inclusivity:
                        </strong>{" "}
                        We thrive through partnerships, uniting diverse
                        perspectives to create a supportive ecosystem where
                        everyone can succeed. Together, we empower students,
                        trainers, and communities, fostering a culture of mutual
                        growth, inclusivity, and shared achievement.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Corporate Social Responsibility Initiatives */}
              <div className="about-us-card">
                <div className="about-us-card-header fade-in">
                  <HeartHandshake
                    size={32}
                    style={{ color: "#ff1f2c" }}
                    className="about-us-card-icon"
                  />
                  <h2 className="about-us-card-title fade-in">
                    Corporate Social Responsibility
                  </h2>
                </div>
                <div className="about-us-card-section">
                  <p
                    className="about-us-card-text justified-text fade-in fade-in"
                    style={{
                      textAlign: "center", // center the text inside
                      display: "flex", // allow alignment control
                      justifyContent: "center", // horizontal centering
                      alignItems: "center", // vertical centering (if needed in a container)
                    }}
                  >
                    We believe that trading is a tool for transformation.
                  </p>
                  <p className="about-us-card-text justified-text fade-in fade-in">
                    <strong>That’s why we support:</strong>
                  </p>
                  <ul className="about-us-card-text justified-list fade-in">
                    <li className="justified-text fade-in">
                      <p className="fade-in">
                        Free educational outreach in public universities and
                        barangays.
                      </p>
                    </li>
                    <li className="justified-text fade-in">
                      <p className="fade-in">
                        Scholarships for marginalized but talented youth.
                      </p>
                    </li>
                    <li className="justified-text fade-in">
                      <p className="fade-in">
                        Mental health and psychology talks for traders.
                      </p>
                    </li>
                    <li className="justified-text fade-in">
                      <p className="fade-in">
                        Community business mentorships for aspiring
                        entrepreneurs.
                      </p>
                    </li>
                  </ul>
                  <p className="about-us-card-text justified-text fade-in fade-in">
                    Our commitment is to multiply impact, one student, one
                    family, and one community at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ScrollUp />
      <Footer />
    </div>
  );
};

export default AboutUs;
