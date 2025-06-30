import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import SubBrand from "./SubBrand";
import ScrollUp from "./ScrollUp";
import AboutUs from "./AboutUs";

// import EightConStruct from "./components/EightConStruct";
import {
  Facebook,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  Clock,
  Goal,
  Eye,
  Atom,
  HeartHandshake,
  ChevronDown,
  Menu,
  X,
  Scroll,
  MoveRight,
  Paperclip,
} from "lucide-react";
import "../App.css";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <div className="faq-summary" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <ChevronDown className="faq-icon" />
      </div>
      <div
        className="faq-answer-wrapper"
        style={{
          maxHeight: isOpen ? "200px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <p className="faq-answer">{answer}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  //Modal
  const [showModal, setShowModal] = useState();
  const [selectedPosition, setSelectedPosition] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  // Form state
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+63");
  const [resumeFile, setResumeFile] = useState(null);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const isPDF = file.type === "application/pdf";
      const isTooLarge = file.size > 10 * 1024 * 1024; // 10MB

      if (!isPDF) {
        alert("Only PDF files are allowed.");
        e.target.value = null;
      } else if (isTooLarge) {
        alert("File must be less than 10MB.");
        e.target.value = null;
      } else {
        setResumeFile(file); // Save the file to state
      }
    }
  };
  const testimonials = [
    {
      image: "/assets/images/image.png",
      text: "Thanks to 8Con Academy, I went from a beginner to a confident trader with consistent profits!",
      author: "Jhames, Graduate",
    },
    {
      image: "/assets/images/image.png",
      text: "The Enrollment to Employment program helped me get hired immediately after the course.",
      author: "CJ, Alumni",
    },
    {
      image: "/assets/images/image.png",
      text: "The comprehensive curriculum and hands-on training gave me the confidence to start my own trading business.",
      author: "Grace, Entrepreneur",
    },
    {
      image: "/assets/images/image.png",
      text: "8Con Academy's mentorship program helped me develop not just trading skills but also financial discipline.",
      author: "Ryan, Professional Trader",
    },
    {
      image: "/assets/images/image.png",
      text: "The real-time market simulations prepared me for actual trading scenarios. Highly recommended!",
      author: "Ana, Day Trader",
    },
    {
      image: "/assets/images/image.png",
      text: "From zero knowledge to profitable trades in just 16 weeks. The instructors are world-className!",
      author: "Carlos, New Graduate",
    },
  ];

  const totalSlides = testimonials.length;
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to Top Button

  const faqs = [
    {
      question: "How can I enroll in the Forex Derivative Course?",
      answer:
        "You may visit us personally at 8Con Academy, Meycauayan, Bulacan, or message us on our official Facebook fan page. We highly recommend attending our FREE Forex Workshop every Saturday as a first step before enrolling.",
    },
    {
      question: "Do you offer scholarships?",
      answer:
        "Yes! We currently offer FULL SCHOLARSHIPS to all OJT interns and Private Scholars. However, Cooperative (Coop) Scholarships are on hold until further notice.",
    },
    {
      question: "How long does it take to finish the Forex Derivatives course?",
      answer:
        "The course runs for a total of 276 hours. Most students complete it within 2 to 3 months, depending on your schedule and commitment.",
    },
    {
      question: "What are the requirements to start learning forex?",
      answer:
        "You just need basic comprehension skills and the tools for digital trading, such as a mobile phone with data or a laptop with internet connection.",
    },
    {
      question: "What is your Enrollment to Employment program?",
      answer:
        "All 8Con graduates are eligible for our Enrollment to Employment program. You can explore our available career paths by visiting the Career section of our website.",
    },
    {
      question:
        "Can I enroll even if I don’t have any background in finance or trading?",
      answer:
        "Yes! Our course is designed for beginners, so no prior experience is required.",
    },
    {
      question: "What are your payment options?",
      answer:
        "We accept cash, bank transfer, and credit card payments via PayPal.",
    },
    {
      question: "Do I get a certificate after finishing the course?",
      answer:
        "Yes, a Certificate of Completion is issued to all successful graduates of the course.",
    },
    {
      question: "Can I have a consultation before enrolling?",
      answer:
        "Absolutely! We encourage all prospective students to attend our FREE Forex Workshop and schedule a consultation to better understand the course.",
    },
    {
      question: "Do you offer corporate training?",
      answer:
        "Yes, we offer corporate training packages. We require a minimum of 10 participants per batch.",
    },
  ];

  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  // First, let's debug your handleApplyClick function:
  const handleApplyClick = (position) => {
    console.log("Position:", position); // Add this to see what position is being passed
    setSelectedPosition(position);
    setShowModal(true);

    // Add these to debug the state changes
    console.log("showModal set to:", true);
    console.log("selectedPosition set to:", position);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    // Reset form when closing
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setPhoneNumber("+63");
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("middleName", middleName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("phoneNumber", phoneNumber);
    formData.append("resumeFile", resumeFile);
    formData.append("selectedPosition", selectedPosition);

    try {
      const res = await fetch("http://localhost:3001/apply", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (res.ok) {
        alert(result.message);
        handleCloseModal();
      } else {
        alert(result.error || "Application failed");
      }
    } catch (error) {
      console.error(error);
      alert("Submission error");
    }
  };

  // End of Modal
  const handleContactSubmit = async (e) => {
    e.preventDefault(); // prevents default form submission behavior

    const payload = {
      name,
      email: contactEmail,
      message,
    };

    try {
      const response = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="app-container">
      <main className="main-content">
        {/* Header */}
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
          <div className="header-container">
            {/* Logo */}
            <a href="#home" className="logo">
              <img
                src="/assets/logo/8con Academy Logo White.png"
                alt="8Con Academy Logo"
                className="logo-img"
              />
            </a>

            {/* Desktop Navigation */}

            <nav className="desktop-nav">
              <Link to="/#home" className="nav-link">
                Home
              </Link>

              <div className="dropdown">
                <Link to="/#core-brand" className="nav-link">
                  Brands ▾
                </Link>
                <div className="dropdown-content">
                  <Link to="/#core-brand" className="dropdown-link">
                    Core Brands
                  </Link>
                  <Link to="/sub-brands" className="dropdown-link">
                    Sub-brands
                  </Link>
                </div>
              </div>

              <Link to="/#news" className="nav-link">
                Newsletters
              </Link>

              <div className="dropdown">
                <Link to="/#internship" className="nav-link">
                  Careers ▾
                </Link>
                <div className="dropdown-content">
                  <Link to="/#internship" className="dropdown-link">
                    Internship
                  </Link>
                  <Link to="/#careerpath" className="dropdown-link">
                    Career Paths
                  </Link>
                </div>
              </div>

              <Link to="/#about" className="nav-link">
                About Us
              </Link>
            </nav>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <nav className="mobile-nav">
              <a
                href="#home"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>

              {/* Brands Dropdown */}
              <a
                href="#core-brand"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Core Brands
              </a>
              <a
                href="#sub-brands"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sub-brands
              </a>

              <a
                href="#news"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Newsletters
              </a>

              {/* Careers Dropdown */}
              <a
                href="#internship"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Internship
              </a>
              <a
                href="#careerpaths"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Career Paths
              </a>

              <a
                href="#about"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </a>
            </nav>
          )}
        </header>

        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-container">
            <div className="hero-image-container">
              <img
                src="/assets/logo/8conwhite.png"
                alt="8Con Academy Logo"
                className="hero-image"
              />
            </div>

            <div className="hero-content">
              <h1 className="hero-title">
                Empowering Every Filipino Household with a Skilled and
                Profitable Forex Trader
              </h1>

              <div className="hero-buttons">
                <a href="#core-brand" className="btn-primary">
                  Learn Forex Today
                </a>
                <a href="#contact" className="btn-secondary">
                  Connect With Us
                </a>
              </div>

              {/* 🟩 Move the card container here */}
              <div className="card-container">
                <a href="#about" className="card-link">
                  <div className="card">
                    <div className="first-content">
                      <img src="../assets/images/workshop5.jpg" alt="Photo" />
                    </div>
                    <div className="second-content">
                      <img src="../assets/images/workshop5.jpg" alt="Photo" />
                      <span className="overlay-text">WORKSHOP</span>
                    </div>
                  </div>
                </a>

                <Link to="/sub-brands" className="card-link">
                  <div className="card">
                    <div className="first-content">
                      <img src="/assets/images/logoFour.png" alt="Photo" />
                    </div>
                    <div className="second-content">
                      <img src="/assets/images/logoFour.png" alt="Photo" />
                      <span className="overlay-text">SUB-BRANDS</span>
                    </div>
                  </div>
                </Link>

                <a href="#core-brand" className="card-link">
                  <div className="card">
                    <div className="first-content">
                      <img src="/assets/images/Jim Gwapo.jpg" alt="Photo" />
                    </div>
                    <div className="second-content">
                      <img src="/assets/images/Jim Gwapo.jpg" alt="Photo" />
                      <span className="overlay-text">TESTIMONIALS</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          id="core-brand"
          className="section section-cream core-brand-section"
        >
          <div className="section-container-narrow core-brand-container">
            <h2 className="section-title core-brand-title">
              Forex Derivative Trading Level II
            </h2>

            {/* Flex container for core brand and testimonials */}
            <div className="core-brand-content-wrapper">
              {/* Left Side - Core Brand List */}
              <div className="core-brand-left">
                <ul className="core-brand-list">
                  <p className="core-brand-description">
                    An{" "}
                    <span className="text-red-highlight">Advanced Course</span>{" "}
                    designed to equip students with comprehensive knowledge and
                    hands-on skills in{" "}
                    <span className="text-red-highlight">Forex Trading</span> to
                    become profitable traders.
                  </p>
                  <li>
                    In-depth curriculum covering market analysis, strategies,
                    and risk management.
                  </li>
                  <li>Hands-on training with real-time market simulations.</li>
                  <li>
                    Access to proprietary Forex tools and trading platforms.
                  </li>
                  <li>
                    Enrollment to Employment program ensuring job placement
                    assistance.
                  </li>
                  <div className="enroll-button-container">
                    <a href="#core-brand" className="intapply-btn">
                      Enroll Now!
                    </a>
                  </div>
                </ul>
              </div>

              {/* Right Side - Testimonials */}
              <div className="core-brand-right">
                <div id="core-testimonials" className="testimonials-section">
                  <div className="testimonials-container">
                    <div className="testimonials-carousel-wrapper">
                      <div className="testimonials-carousel">
                        <button
                          className="carousel-button carousel-button-prev"
                          onClick={prevSlide}
                          aria-label="Previous testimonial"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M15 18L9 12L15 6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>

                        <div className="testimonials-track">
                          <div
                            className="testimonials-slider"
                            style={{
                              transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                          >
                            {testimonials.map((testimonial, index) => (
                              <div key={index} className="testimonial-slide">
                                <div className="testimonial-card">
                                  <div className="testimonial-content">
                                    <div className="quote-icon"></div>
                                    <p className="testimonial-text">
                                      "{testimonial.text}"
                                    </p>
                                    <div className="testimonial-footer">
                                      <div className="testimonial-avatar">
                                        <img
                                          src={testimonial.image}
                                          alt={testimonial.author}
                                          onError={(e) => {
                                            e.target.src = `https://ui-avatars.com/api/?name=${
                                              testimonial.author.split(",")[0]
                                            }&background=10b981&color=fff&size=64`;
                                          }}
                                        />
                                      </div>
                                      <div className="testimonial-info">
                                        <span className="testimonial-author">
                                          {testimonial.author}
                                        </span>
                                        <div className="testimonial-rating">
                                          {[...Array(5)].map((_, i) => (
                                            <svg
                                              key={i}
                                              width="16"
                                              height="16"
                                              viewBox="0 0 24 24"
                                              fill="currentColor"
                                            >
                                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                            </svg>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button
                          className="carousel-button carousel-button-next"
                          onClick={nextSlide}
                          aria-label="Next testimonial"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M9 18L15 12L9 6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="carousel-indicators">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            className={`indicator ${
                              index === currentIndex ? "active" : ""
                            }`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Brand */}

        {/* Sub-Brands */}

        {/* <section id="sub-brands" className="sub-brands-section">
          <div className="section-container-sub">
            <h2 className="section-title">Sub-Brands</h2>
            <div className="brands-grid">
              {[
                {
                  name: "8ConStruct",
                  desc: "Research and statistical consultancy to empower decision-making.",
                },
                {
                  name: "8ConQuest",
                  desc: "Thesis and career coaching for students and professionals.",
                },
                {
                  name: "8ConVerse",
                  desc: "Language certification courses to broaden opportunities.",
                },
                {
                  name: "8ConLift",
                  desc: "Scholarship and training programs for deserving students.",
                },
                {
                  name: "8ConNect",
                  desc: "Entrepreneur networking hub to grow business relationships.",
                },
                {
                  name: "8ConEdge",
                  desc: "Proprietary Forex tools to enhance trading efficiency.",
                },
                {
                  name: "8ConEdge",
                  desc: "Proprietary Forex tools to enhance trading efficiency.",
                },
                {
                  name: "8ConEdge",
                  desc: "Proprietary Forex tools to enhance trading efficiency.",
                },
              ].map((brand, index) => (
                <div key={index} className="card-sub" style={{ "--i": index }}>
                  <div
                    className="bg bg-hover"
                    style={{ backgroundImage: `url(${brand.image})` }}
                  >
                    <div className="overlay"></div>
                    <div className="brand-info">
                      <h3 className="brand-title">{brand.name}</h3>
                      <p className="brand-desc">{brand.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section id="internship" className="section section-internship">
          <div className="internship-title">
            <h1>INTERNSHIP</h1>
            <p>Join our team and kickstart your career</p>
          </div>

          <div className="intcards-container">
            <div className="intcard">
              <div className="intcontent">
                <h3 className="intcard-title">MARKETING</h3>
                <p className="intcard-description">
                  Dive into the world of digital marketing, social media
                  campaigns, and brand strategy. Learn to create compelling
                  content, analyze market trends, and develop innovative
                  marketing solutions that drive business growth.
                </p>
                <div className="intbutton-container">
                  <button
                    className="intapply-btn"
                    onClick={() => handleApplyClick("Marketing")}
                  >
                    APPLY NOW
                  </button>
                </div>
              </div>
            </div>

            <div className="intcard">
              <div className="intcontent">
                <h3 className="intcard-title">IT</h3>
                <p className="intcard-description">
                  Explore cutting-edge technology, software development, and
                  system administration. Gain hands-on experience with
                  programming languages, database management, and cybersecurity
                  while working on real-world projects.
                </p>
                <div className="intbutton-container">
                  <button
                    className="intapply-btn"
                    onClick={() => handleApplyClick("IT")}
                  >
                    APPLY NOW
                  </button>
                </div>
              </div>
            </div>

            <div className="intcard">
              <div className="intcontent">
                <h3 className="intcard-title">ACCOUNTING</h3>
                <p className="intcard-description">
                  Master financial analysis, bookkeeping, and tax preparation.
                  Learn industry-standard accounting software, financial
                  reporting, and budgeting while supporting our finance team
                  with day-to-day operations.
                </p>
                <div className="intbutton-container">
                  <button
                    className="intapply-btn"
                    onClick={() => handleApplyClick("Accounting")}
                  >
                    APPLY NOW
                  </button>
                </div>
              </div>
            </div>

            <div className="intcard">
              <div className="intcontent">
                <h3 className="intcard-title">MULTIMEDIA</h3>
                <p className="intcard-description">
                  Join our team and support the development of engaging visual
                  and audiovisual content across digital platforms. This role is
                  ideal for students or recent graduates passionate about
                  storytelling, design, and digital media production.
                </p>
                <div className="intbutton-container">
                  <button
                    className="intapply-btn"
                    onClick={() => handleApplyClick("Accounting")}
                  >
                    APPLY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {/* Application Modal */}
        {showModal && (
          <div className="modal-backdrop" id="applicationModal">
            <div className="modal-dialog">
              <h2>Apply for {selectedPosition} Team</h2>
              <button className="modal-close-btn" onClick={handleCloseModal}>
                &times;
              </button>
              <div className="modal-body">
                <div className="application-form-wrapper">
                  <div className="application-form">
                    {/* First Name */}
                    <div className="form-field">
                      <label className="field-label">First Name</label>
                      <input
                        className="form-input"
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) =>
                          setFirstName(capitalizeFirstLetter(e.target.value))
                        }
                        required
                      />
                    </div>
                    {/* Middle Name */}
                    <div className="form-field">
                      <label className="field-label">Middle Name</label>
                      <input
                        className="form-input"
                        type="text"
                        name="middleName"
                        value={middleName}
                        onChange={(e) =>
                          setMiddleName(capitalizeFirstLetter(e.target.value))
                        }
                      />
                    </div>
                    {/* Last Name */}
                    <div className="form-field">
                      <label className="field-label">Last Name</label>
                      <input
                        className="form-input"
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) =>
                          setLastName(capitalizeFirstLetter(e.target.value))
                        }
                        required
                      />
                    </div>
                    {/* Email */}
                    <div className="form-field">
                      <label className="field-label">Email</label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@example.com"
                        required
                      />
                    </div>
                    {/* Address */}
                    <div className="form-field">
                      <label className="field-label">Address</label>
                      <input
                        className="form-input"
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="House#/Street/Barangay/City/Province"
                        required
                      />
                    </div>
                    {/* Phone Number */}
                    <div className="form-field">
                      <label className="field-label" htmlFor="phoneNumber">
                        Phone number:
                      </label>
                      <input
                        className="form-input"
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onFocus={() => {
                          if (phoneNumber === "") {
                            setPhoneNumber("+639");
                          }
                        }}
                        onChange={(e) => {
                          const input = e.target.value;
                          const digitsOnly = input.replace(/\D/g, "");
                          // Ensure it starts with "639"
                          if (!digitsOnly.startsWith("639")) {
                            setPhoneNumber("+639");
                            return;
                          }
                          // Extract only up to 10 digits after "639"
                          const rest = digitsOnly.slice(3, 13);
                          setPhoneNumber(`+639${rest}`);
                        }}
                        placeholder="+639XXXXXXXXX"
                        title="Enter a valid Philippine phone number (e.g. +639123456789). Only 10 digits after +63."
                        maxLength={13} // Total: +639XXXXXXXXX
                        required
                      />
                    </div>
                    {/* Resume Upload */}
                    <div className="form-field">
                      <label className="field-label" htmlFor="resumeFile">
                        Resume (PDF only, max 10MB):
                      </label>
                      <div className="upload-resume">
                        <label htmlFor="resumeFile" className="upload-button">
                          <Paperclip className="icon" size={16} />
                          <span className="upload-text">Upload File </span>
                        </label>
                        <input
                          id="resumeFile"
                          name="resumeFile"
                          type="file"
                          accept=".pdf"
                          onChange={handleResumeChange}
                          style={{ display: "none" }}
                        />
                        {resumeFile && (
                          <div className="file-actions">
                            <a
                              href={URL.createObjectURL(resumeFile)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="file-name clickable"
                            >
                              {resumeFile.name}
                            </a>
                            <button
                              type="button"
                              className="remove-button"
                              onClick={() => setResumeFile(null)}
                            >
                              <X size={15} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Submit Button */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button onClick={handleSubmit} className="intapply-btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <section id="careerpath" className="section section-careerpath">
          <div className="careerpath-title">
            <h1>CAREER PATH</h1>
            <p>Join our team and kickstart your career</p>
          </div>

          <div className="careerpath-cards">
            <div className="career-card">
              <div className="career-content">
                <h3 className="career-title">FUNDED TRADER</h3>
                <p className="career-description">
                  Become a professionally funded trader by mastering advanced
                  strategies, risk management, and trading psychology. Unlock
                  the opportunity to trade real capital and grow your portfolio.
                </p>
              </div>
            </div>

            <div className="career-card">
              <div className="career-content">
                <h3 className="career-title">WORKSHOP SPEAKER</h3>
                <p className="career-description">
                  Share your expertise with aspiring traders through interactive
                  sessions. Inspire and educate by delivering impactful
                  workshops on forex, finance, and personal development.
                </p>
              </div>
            </div>

            <div className="career-card">
              <div className="career-content">
                <h3 className="career-title">FOREX COACH</h3>
                <p className="career-description">
                  Guide new learners through their trading journey. Provide
                  mentorship, personalized feedback, and help them develop
                  consistent strategies for long-term success in the forex
                  market.
                </p>
              </div>
            </div>

            <div className="career-card">
              <div className="career-content">
                <h3 className="career-title">8CON FRANCHISEE</h3>
                <p className="career-description">
                  Take your entrepreneurial journey to the next level by owning
                  an 8CON franchise. You'll gain access to a proven business
                  model, ongoing support, and exclusive tools to build a
                  thriving training center and inspire the next generation of
                  traders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="about-section">
          <div className="about-container">
            <div className="about-header">
              <h1 className="aboutUsTitle">About Us</h1>
              <p className="subTitle">Confidence is Confluence</p>
            </div>

            <div className="content-grid">
              <div className="image-container">
                <img
                  src="assets/images/aboutus.jpg"
                  alt="8Con Logo"
                  className="aboutus-logo-img"
                />
              </div>
              <div className="text-content">
                <h3 className="whoWeAre">WHO WE ARE</h3>
                <h2 className="weAre">8Con Academy</h2>
                <p className="weAreParagraph">
                  <span className="text-green-highlight">8CON Academy</span> is
                  a pioneering financial education institution in Meycauayan,
                  Bulacan, Philippines. We specialize in forex trading education
                  with a mission to make{" "}
                  <span className="text-red-highlight">Forex Trading</span>{" "}
                  knowledge accessible, practical, and life-changing for every
                  Filipino household. Founded in 2021, we have quickly become a
                  trusted center for both aspiring and experienced traders,
                  offering a unique blend of theoretical learning and hands-on
                  application.
                </p>
                <div style={{ display: "flex", justifyContent: "left" }}>
                  <Link
                    to="/aboutus"
                    className="intapply-btn"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    Read More
                    <MoveRight size={18} style={{ marginLeft: "8px" }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="contact-container">
            <h2 className="section-title">Contact Us</h2>

            <div className="contact-top">
              {/* Contact Form (Left) */}
              <form onSubmit={handleContactSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="fullname" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input"
                    onChange={(e) =>
                      setName(capitalizeFirstLetter(e.target.value))
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                    onChange={(e) =>
                      setContactEmail(capitalizeFirstLetter(e.target.value))
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="form-textarea"
                    onChange={(e) =>
                      setMessage(capitalizeFirstLetter(e.target.value))
                    }
                  ></textarea>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button className="intapply-btn">Submit</button>
                </div>
              </form>

              {/* Right Side: Map + Contact Info */}
              <div className="contact-right">
                <div className="map-section">
                  <p
                    style={{
                      textAlign: "center",
                      marginBottom: "16px",
                      color: "#ffffff",
                    }}
                  >
                    <strong>Where you can find us?</strong>
                  </p>
                  <div className="map-placeholder">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.6238108973216!2d120.96140770000001!3d14.733848199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b386f399c96b%3A0x485afd33f61c132c!2s8Con%20Academy%20-%20Forex%20Trading%20%26%20Financial%20Literacy%20School!5e0!3m2!1sen!2sph!4v1750479622554!5m2!1sen!2sph"
                      width="100%"
                      height="256"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="8Con Academy Google Map"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section – Now Separate */}
        <section id="faq" className="faq-section">
          <div className="contact-container">
            <h3 className="faq-title">Frequently Asked Questions</h3>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <ScrollUp />
      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Partnership */}
            <div>
              <h4 className="footer-title">Partnership</h4>
              <ul className="footer-list">
                <div className="footer-logo">
                  <img
                    src="/assets/logo/tickmill.png"
                    alt="8Con Logo"
                    className="footer-logo-img"
                  />
                  <img
                    src="/assets/logo/dupoin.png"
                    alt="8Con Logo"
                    className="footer-logo-img"
                  />
                </div>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-container">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-list">
                <li>
                  <a href="#core-brand" className="quick-link">
                    Brands
                  </a>
                </li>
                <li>
                  <a href="" className="quick-link">
                    Newsletters
                  </a>
                </li>
                <li>
                  <a href="#internship" className="quick-link">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#about" className="quick-link">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Programs */}
            <div className="footer-container">
              <h4 className="footer-title">Programs</h4>
              <ul className="footer-list">
                <li>
                  <a href="#core-brand" className="program-link">
                    Core brands
                  </a>
                </li>
                <li>
                  <a href="#sub-brands" className="program-link">
                    Sub-brands
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-container">
              <h4 className="footer-title">Contact Info</h4>
              <div className="footer-contact-info">
                <p>
                  <Phone
                    size={18}
                    style={{ marginRight: "8px", verticalAlign: "middle" }}
                  />
                  +63 954 996 1125
                </p>
                <p>
                  <Mail
                    size={18}
                    style={{ marginRight: "8px", verticalAlign: "middle" }}
                  />
                  8ConAcademy@gmail.com
                </p>
                <p style={{ marginBottom: "16px" }}>
                  <Clock
                    size={18}
                    style={{ marginRight: "8px", verticalAlign: "middle" }}
                  />
                  Mon–Fri 11:00 AM – 8:00 PM
                </p>
                <div className="footer-social">
                  <a
                    href="https://www.facebook.com/8ConAcademy"
                    className="fb-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook size={18} style={{ marginRight: "8px" }} />
                  </a>
                  <a
                    href="https://www.instagram.com/8conacademy/"
                    className="ig-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={18} style={{ marginRight: "8px" }} />
                  </a>
                  <a
                    href="https://ph.linkedin.com/company/8con-academy"
                    className="li-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={18} style={{ marginRight: "8px" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>
                &copy; 2025 <strong>8Con Academy</strong>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
};

export default Home;
