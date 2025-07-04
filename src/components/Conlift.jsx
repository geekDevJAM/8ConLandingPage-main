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
} from "lucide-react";

const ConLift = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [subBrandsDropdownOpen, setSubBrandsDropdownOpen] = useState(false);
  const [mobileSubBrandsDropdownOpen, setMobileSubBrandsDropdownOpen] =
    useState(false);
  const [animationTrigger, setAnimationTrigger] = useState(0);
  const [animationsPlayed, setAnimationsPlayed] = useState(new Set());
  const [isAtTop, setIsAtTop] = useState(true);

  // Refs for animation observers
  const heroRef = useRef(null);
  const initiativesRef = useRef(null);
  const benefitsRef = useRef(null);
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
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 0);

      // Check if we're at the very top (within 100px threshold)
      const newIsAtTop = scrollTop <= 100;

      if (newIsAtTop !== isAtTop) {
        setIsAtTop(newIsAtTop);

        // If we're back at the top, reset all animations
        if (newIsAtTop) {
          setAnimationsPlayed(new Set());
          setAnimationTrigger((prev) => prev + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAtTop]);

  // Animation function to apply animations to a section
  const applyAnimation = (sectionName, target) => {
    if (sectionName === "hero") {
      // Reset hero animations
      setAnimationTrigger((prev) => prev + 1);
    } else if (sectionName === "initiatives") {
      // Trigger initiatives animations
      const cards = target.querySelectorAll(".animate-initiative-card");
      const title = target.querySelector(".animate-section-title");

      if (title) {
        title.style.animation = "none";
        title.offsetHeight; // Trigger reflow
        title.style.animation =
          "sectionTitleSlide 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards";
      }

      cards.forEach((card, index) => {
        card.style.animation = "none";
        card.offsetHeight; // Trigger reflow
        card.style.animation = `initiativeCardFloat 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${
          0.1 + index * 0.15
        }s forwards`;
      });
    } else if (sectionName === "benefits") {
      // Trigger benefits animations
      const cards = target.querySelectorAll(".animate-benefit-card");
      const title = target.querySelector(".animate-section-title");

      if (title) {
        title.style.animation = "none";
        title.offsetHeight; // Trigger reflow
        title.style.animation =
          "sectionTitleSlide 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards";
      }

      cards.forEach((card, index) => {
        card.style.animation = "none";
        card.offsetHeight; // Trigger reflow
        card.style.animation = `benefitCardPulse 1.1s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${
          0.15 + index * 0.2
        }s forwards`;
      });
    } else if (sectionName === "whyChoose") {
      // Trigger why choose animations
      const cards = target.querySelectorAll(".animate-why-choose-card");
      const title = target.querySelector(".animate-section-title");

      if (title) {
        title.style.animation = "none";
        title.offsetHeight; // Trigger reflow
        title.style.animation =
          "sectionTitleSlide 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards";
      }

      cards.forEach((card, index) => {
        card.style.animation = "none";
        card.offsetHeight; // Trigger reflow
        card.style.animation = `whyChooseSlideIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${
          0.2 + index * 0.25
        }s forwards`;
      });
    } else if (sectionName === "cta") {
      // Trigger CTA animations
      const elements = {
        title: target.querySelector(".animate-cta-title"),
        description: target.querySelector(".animate-cta-description"),
        buttons: target.querySelector(".animate-cta-buttons"),
        highlight: target.querySelector(".animate-cta-highlight"),
      };

      if (elements.title) {
        elements.title.style.animation = "none";
        elements.title.offsetHeight;
        elements.title.style.animation =
          "ctaTitleGlow 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s forwards";
      }

      if (elements.description) {
        elements.description.style.animation = "none";
        elements.description.offsetHeight;
        elements.description.style.animation =
          "ctaDescriptionSlide 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s forwards";
      }

      if (elements.buttons) {
        elements.buttons.style.animation = "none";
        elements.buttons.offsetHeight;
        elements.buttons.style.animation =
          "ctaButtonsSwing 1.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s forwards";
      }

      if (elements.highlight) {
        elements.highlight.style.animation = "none";
        elements.highlight.offsetHeight;
        elements.highlight.style.animation =
          "ctaHighlightBounce 1.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards";
      }
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          let sectionName = "";

          if (target === heroRef.current) {
            sectionName = "hero";
          } else if (target === initiativesRef.current) {
            sectionName = "initiatives";
          } else if (target === benefitsRef.current) {
            sectionName = "benefits";
          } else if (target === whyChooseRef.current) {
            sectionName = "whyChoose";
          } else if (target === ctaRef.current) {
            sectionName = "cta";
          }

          const shouldAnimate =
            !animationsPlayed.has(sectionName) ||
            (sectionName === "hero" && isAtTop);

          if (shouldAnimate) {
            applyAnimation(sectionName, target);

            if (!(sectionName === "hero" && isAtTop)) {
              setAnimationsPlayed((prev) => new Set([...prev, sectionName]));
            }
          }
        }
      });
    }, observerOptions);

    const refs = [heroRef, initiativesRef, benefitsRef, whyChooseRef, ctaRef];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [animationsPlayed, isAtTop]);

  // ✅ Scroll listener to track top state and reset animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 0);

      const newIsAtTop = scrollTop <= 100;
      if (newIsAtTop !== isAtTop) {
        setIsAtTop(newIsAtTop);
        if (newIsAtTop) {
          setAnimationsPlayed(new Set());
          setAnimationTrigger((prev) => prev + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAtTop]);

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

          /* Enhanced Animation Classes */
          .animate-hero-content {
            animation: heroFadeInUp 1.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            opacity: 0;
            transform: translateY(60px);
          }

          .animate-hero-title {
            animation: heroTitleScale 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s forwards;
            opacity: 0;
            transform: scale(0.7) translateY(40px) rotateX(15deg);
          }

          .animate-hero-subtitle {
            animation: heroSubtitleSlide 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;
            opacity: 0;
            transform: translateX(-60px) rotateY(10deg);
          }

          .animate-hero-description {
            animation: heroDescriptionFade 1.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }

          .animate-hero-buttons {
            animation: heroButtonsBounce 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.1s forwards;
            opacity: 0;
            transform: translateY(50px) scale(0.8) rotateZ(-3deg);
          }

          .animate-section-title {
            animation: sectionTitleSlide 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            opacity: 0;
            transform: translateX(-80px) skewX(-10deg);
          }

          .animate-initiative-card {
            animation: initiativeCardFloat 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            opacity: 0;
            transform: translateY(80px) rotateX(20deg) scale(0.9);
          }

          .animate-initiative-card:nth-child(1) { animation-delay: 0.1s; }
          .animate-initiative-card:nth-child(2) { animation-delay: 0.25s; }
          .animate-initiative-card:nth-child(3) { animation-delay: 0.4s; }
          .animate-initiative-card:nth-child(4) { animation-delay: 0.55s; }

          .animate-benefit-card {
            animation: benefitCardPulse 1.1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            opacity: 0;
            transform: scale(0.6) translateY(60px) rotateZ(-5deg);
          }

          .animate-benefit-card:nth-child(1) { animation-delay: 0.15s; }
          .animate-benefit-card:nth-child(2) { animation-delay: 0.35s; }
          .animate-benefit-card:nth-child(3) { animation-delay: 0.55s; }
          .animate-benefit-card:nth-child(4) { animation-delay: 0.75s; }

          .animate-why-choose-card {
            animation: whyChooseSlideIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            opacity: 0;
            transform: translateX(-120px) skewY(-8deg) scale(0.8);
          }

          .animate-why-choose-card:nth-child(1) { animation-delay: 0.2s; }
          .animate-why-choose-card:nth-child(2) { animation-delay: 0.45s; }

          .animate-cta-content {
            animation: ctaContentZoom 1.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            opacity: 0;
            transform: scale(0.8) translateY(50px) rotateX(10deg);
          }

          .animate-cta-title {
            animation: ctaTitleGlow 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s forwards;
            opacity: 0;
            transform: translateY(-40px) scale(0.9);
          }

          .animate-cta-description {
            animation: ctaDescriptionSlide 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s forwards;
            opacity: 0;
            transform: translateY(40px) rotateX(-5deg);
          }

          .animate-cta-buttons {
            animation: ctaButtonsSwing 1.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s forwards;
            opacity: 0;
            transform: translateY(60px) rotateZ(-8deg) scale(0.9);
          }

          .animate-cta-highlight {
            animation: ctaHighlightBounce 1.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;
            opacity: 0;
            transform: translateY(70px) scale(0.7) rotateX(15deg);
          }

          /* Enhanced Keyframe Animations */
          @keyframes heroFadeInUp {
            0% {
              opacity: 0;
              transform: translateY(60px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes heroTitleScale {
            0% {
              opacity: 0;
              transform: scale(0.7) translateY(40px) rotateX(15deg);
            }
            50% {
              transform: scale(1.1) translateY(-10px) rotateX(-5deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0) rotateX(0);
            }
          }

          @keyframes heroSubtitleSlide {
            0% {
              opacity: 0;
              transform: translateX(-60px) rotateY(10deg);
            }
            100% {
              opacity: 1;
              transform: translateX(0) rotateY(0);
            }
          }

          @keyframes heroDescriptionFade {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes heroButtonsBounce {
            0% {
              opacity: 0;
              transform: translateY(50px) scale(0.8) rotateZ(-3deg);
            }
            60% {
              transform: translateY(-15px) scale(1.05) rotateZ(2deg);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1) rotateZ(0);
            }
          }

          @keyframes sectionTitleSlide {
            0% {
              opacity: 0;
              transform: translateX(-80px) skewX(-10deg);
            }
            100% {
              opacity: 1;
              transform: translateX(0) skewX(0);
            }
          }

          @keyframes initiativeCardFloat {
            0% {
              opacity: 0;
              transform: translateY(80px) rotateX(20deg) scale(0.9);
            }
            70% {
              transform: translateY(-10px) rotateX(-5deg) scale(1.02);
            }
            100% {
              opacity: 1;
              transform: translateY(0) rotateX(0) scale(1);
            }
          }

          @keyframes benefitCardPulse {
            0% {
              opacity: 0;
              transform: scale(0.6) translateY(60px) rotateZ(-5deg);
            }
            60% {
              transform: scale(1.08) translateY(-15px) rotateZ(2deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0) rotateZ(0);
            }
          }

          @keyframes whyChooseSlideIn {
            0% {
              opacity: 0;
              transform: translateX(-120px) skewY(-8deg) scale(0.8);
            }
            100% {
              opacity: 1;
              transform: translateX(0) skewY(0) scale(1);
            }
          }

          @keyframes ctaContentZoom {
            0% {
              opacity: 0;
              transform: scale(0.8) translateY(50px) rotateX(10deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0) rotateX(0);
            }
          }

          @keyframes ctaTitleGlow {
            0% {
              opacity: 0;
              transform: translateY(-40px) scale(0.9);
              text-shadow: 0 0 0 rgba(14, 219, 97, 0);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              text-shadow: 0 0 30px rgba(14, 219, 97, 0.4);
            }
          }

          @keyframes ctaDescriptionSlide {
            0% {
              opacity: 0;
              transform: translateY(40px) rotateX(-5deg);
            }
            100% {
              opacity: 1;
              transform: translateY(0) rotateX(0);
            }
          }

          @keyframes ctaButtonsSwing {
            0% {
              opacity: 0;
              transform: translateY(60px) rotateZ(-8deg) scale(0.9);
            }
            50% {
              transform: translateY(-10px) rotateZ(4deg) scale(1.02);
            }
            100% {
              opacity: 1;
              transform: translateY(0) rotateZ(0) scale(1);
            }
          }

          @keyframes ctaHighlightBounce {
            0% {
              opacity: 0;
              transform: translateY(70px) scale(0.7) rotateX(15deg);
            }
            60% {
              transform: translateY(-15px) scale(1.05) rotateX(-5deg);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1) rotateX(0);
            }
          }

          /* Responsive Animation Adjustments */
          @media (max-width: 768px) {
            .animate-hero-content,
            .animate-hero-title,
            .animate-hero-subtitle,
            .animate-hero-description,
            .animate-hero-buttons {
              animation-duration: 1s;
            }

            .animate-initiative-card,
            .animate-benefit-card,
            .animate-why-choose-card {
              animation-duration: 0.8s;
            }

            .animate-cta-content,
            .animate-cta-title,
            .animate-cta-description,
            .animate-cta-buttons,
            .animate-cta-highlight {
              animation-duration: 0.9s;
            }
          }

          @media (max-width: 480px) {
            .animate-hero-content,
            .animate-hero-title,
            .animate-hero-subtitle,
            .animate-hero-description,
            .animate-hero-buttons {
              animation-duration: 0.8s;
            }

            .animate-initiative-card,
            .animate-benefit-card,
            .animate-why-choose-card {
              animation-duration: 0.6s;
            }

            .animate-cta-content,
            .animate-cta-title,
            .animate-cta-description,
            .animate-cta-buttons,
            .animate-cta-highlight {
              animation-duration: 0.7s;
            }
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
            <a
              href="#initiatives"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("initiatives");
              }}
            >
              Key Initiatives
            </a>
            <a
              href="#benefits"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("benefits");
              }}
            >
              Benefits
            </a>
            <a
              href="#why-choose"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("why-choose");
              }}
            >
              Why Choose Us
            </a>
            <a
              href="#cta"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("cta");
              }}
            >
              Join Us
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
              href="#initiatives"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("initiatives");
              }}
            >
              Key Initiatives
            </a>
            <a
              href="#benefits"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("benefits");
              }}
            >
              Benefits
            </a>
            <a
              href="#why-choose"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("why-choose");
              }}
            >
              Why Choose Us
            </a>
            <a
              href="#cta"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("cta");
              }}
            >
              Join Us
            </a>
          </nav>
        )}
      </header>
      <main>
        {/* Hero Section - Green Background */}
        <section id="top" ref={heroRef} style={styles.heroSection}>
          <div style={styles.heroContent}>
            <h1
              key={`hero-title-${animationTrigger}`}
              className="animate-hero-title"
              style={styles.companyTitle}
            >
              8ConLift
            </h1>
            <p
              key={`hero-subtitle-${animationTrigger}`}
              className="animate-hero-subtitle"
              style={styles.heroSubtitle}
            >
              Lifting Dreams, Transforming Lives
            </p>
            <p
              key={`hero-description-${animationTrigger}`}
              className="animate-hero-description"
              style={styles.heroDescription}
            >
              8ConLift is dedicated to empowering underserved Filipinos by
              providing scholarships, training programs, and pathways to
              financial independence. We believe in creating opportunities for
              individuals to build a better future through education and skill
              development.
            </p>
            <div
              key={`hero-buttons-${animationTrigger}`}
              className="animate-hero-buttons"
              style={styles.heroButtons}
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
                Apply for Scholarship
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

        {/* Key Initiatives Section - Black Background */}
        <section
          id="initiatives"
          ref={initiativesRef}
          style={styles.initiativesSection}
        >
          <div style={styles.container2}>
            <h2
              key={`initiatives-title-${animationTrigger}`}
              className="animate-section-title"
              style={{ ...styles.sectionTitle, color: "#000000" }}
            >
              Key Initiatives Under 8ConLift
            </h2>
            <div style={styles.initiativesGrid}>
              <div
                key={`initiative-card-1-${animationTrigger}`}
                className="animate-initiative-card"
                style={styles.initiativeCard}
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
                <div style={styles.initiativeIcon}>
                  <GraduationCap size={40} color="#0edb61" />
                </div>
                <h3 style={styles.initiativeTitle}>
                  Scholarships for Underserved Filipinos
                </h3>
                <p style={styles.initiativeDescription}>
                  Provide financial assistance to deserving individuals who
                  demonstrate potential and determination but lack resources for
                  quality education.
                </p>
                <ul style={styles.initiativeList}>
                  <li style={styles.initiativeListItem}>
                    • Tuition for Forex Derivative Course
                  </li>
                  <li style={styles.initiativeListItem}>
                    • Access to review programs for licensure exams
                  </li>
                  <li style={styles.initiativeListItem}>
                    • Language certification support
                  </li>
                  <li style={styles.initiativeListItem}>
                    • Comprehensive educational journey support
                  </li>
                </ul>
              </div>

              <div
                key={`initiative-card-2-${animationTrigger}`}
                className="animate-initiative-card"
                style={styles.initiativeCard}
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
                <div style={styles.initiativeIcon}>
                  <Users size={40} color="#0edb61" />
                </div>
                <h3 style={styles.initiativeTitle}>
                  Training Programs & OJT Opportunities
                </h3>
                <p style={styles.initiativeDescription}>
                  Offer students real-world experience through On-the-Job
                  Training programs at 8Con Academy, franchises, or partner
                  companies.
                </p>
                <ul style={styles.initiativeList}>
                  <li style={styles.initiativeListItem}>
                    • Hands-on training programs
                  </li>
                  <li style={styles.initiativeListItem}>
                    • Practical application of learned skills
                  </li>
                  <li style={styles.initiativeListItem}>
                    • Real-world trading challenges
                  </li>
                  <li style={styles.initiativeListItem}>
                    • Business and specialized career preparation
                  </li>
                </ul>
              </div>

              <div
                key={`initiative-card-3-${animationTrigger}`}
                className="animate-initiative-card"
                style={styles.initiativeCard}
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
                <div style={styles.initiativeIcon}>
                  <ArrowRight size={40} color="#0edb61" />
                </div>
                <h3 style={styles.initiativeTitle}>
                  Enrollment to Employment Program
                </h3>
                <p style={styles.initiativeDescription}>
                  Graduates of Forex Derivative Course Level II are guided
                  through career opportunities aligned with their skills and
                  goals.
                </p>
                <ul style={styles.initiativeList}>
                  <li style={styles.initiativeListItem}>
                    • Stand-Alone Trader pathway
                  </li>
                  <li style={styles.initiativeListItem}>
                    • Proprietary Firm Trader positions
                  </li>
                  <li style={styles.initiativeListItem}>
                    • 8Con Trading Hub opportunities
                  </li>
                  <li style={styles.initiativeListItem}>
                    • Private Company Forex Trader roles
                  </li>
                </ul>
              </div>

              <div
                key={`initiative-card-4-${animationTrigger}`}
                className="animate-initiative-card"
                style={styles.initiativeCard}
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
                <div style={styles.initiativeIcon}>
                  <Handshake size={40} color="#0edb61" />
                </div>
                <h3 style={styles.initiativeTitle}>
                  Government Grants & Partnerships
                </h3>
                <p style={styles.initiativeDescription}>
                  Secure government funding to provide broader access to
                  scholarships and training programs for marginalized
                  communities.
                </p>
                <ul style={styles.initiativeList}>
                  <li style={styles.initiativeListItem}>
                    • Government funding initiatives
                  </li>
                  <li style={styles.initiativeListItem}>
                    • LGU collaboration programs
                  </li>
                  <li style={styles.initiativeListItem}>
                    • Deserving beneficiary identification
                  </li>
                  <li style={styles.initiativeListItem}>
                    • Program impact expansion
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - White Background */}
        <section id="benefits" ref={benefitsRef} style={styles.benefitsSection}>
          <div style={styles.container2}>
            <h2
              key={`benefits-title-${animationTrigger}`}
              className="animate-section-title"
              style={styles.sectionTitle}
            >
              Benefits of 8ConLift
            </h2>
            <div style={styles.benefitsGrid}>
              <div
                key={`benefit-card-1-${animationTrigger}`}
                className="animate-benefit-card"
                style={styles.benefitCard}
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
                <div style={styles.benefitIcon}>
                  <Star size={50} color="#0edb61" />
                </div>
                <h3 style={styles.benefitTitle}>Empowering Individuals</h3>
                <p style={styles.benefitDescription}>
                  Provide access to education and training that equips
                  beneficiaries with skills for lifelong success and personal
                  growth.
                </p>
              </div>

              <div
                key={`benefit-card-2-${animationTrigger}`}
                className="animate-benefit-card"
                style={styles.benefitCard}
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
                <div style={styles.benefitIcon}>
                  <DollarSign size={50} color="#ff1f2c" />
                </div>
                <h3 style={styles.benefitTitle}>Creating Career Pathways</h3>
                <p style={styles.benefitDescription}>
                  Through the "Enrollment to Employment" program, graduates
                  seamlessly transition from learning to earning, fostering
                  financial independence.
                </p>
              </div>

              <div
                key={`benefit-card-3-${animationTrigger}`}
                className="animate-benefit-card"
                style={styles.benefitCard}
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
                <div style={styles.benefitIcon}>
                  <Building size={50} color="#0edb61" />
                </div>
                <h3 style={styles.benefitTitle}>Strengthening Communities</h3>
                <p style={styles.benefitDescription}>
                  By uplifting individuals, 8ConLift contributes to the economic
                  and social growth of communities across the Philippines.
                </p>
              </div>

              <div
                key={`benefit-card-4-${animationTrigger}`}
                className="animate-benefit-card"
                style={styles.benefitCard}
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
                <div style={styles.benefitIcon}>
                  <Heart size={50} color="#ff1f2c" />
                </div>
                <h3 style={styles.benefitTitle}>
                  Supporting Underserved Groups
                </h3>
                <p style={styles.benefitDescription}>
                  Scholarships, OJTs, and government grants ensure that even the
                  most disadvantaged individuals have access to quality training
                  and career opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose 8ConLift Section - Black Background */}
        <section
          id="why-choose"
          ref={whyChooseRef}
          style={styles.whyChooseSection}
        >
          <div style={styles.container2}>
            <h2
              key={`why-choose-title-${animationTrigger}`}
              className="animate-section-title"
              style={{ ...styles.sectionTitle, color: "#000000" }}
            >
              Why Choose 8ConLift?
            </h2>
            <div style={styles.whyChooseGrid}>
              <div
                key={`why-choose-card-1-${animationTrigger}`}
                className="animate-why-choose-card"
                style={styles.whyChooseCard}
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
                <h3
                  style={styles.whyChooseTitle}
                  key={`why-choose-title-1-${animationTrigger}`}
                  className="animate-why-choose-title"
                >
                  Comprehensive Support
                </h3>
                <p
                  style={styles.whyChooseDescription}
                  key={`why-choose-desc-1-${animationTrigger}`}
                  className="animate-why-choose-description"
                >
                  Beyond education, beneficiaries receive mentorship, hands-on
                  training, and career placement support throughout their
                  journey.
                </p>
              </div>

              <div
                key={`why-choose-card-2-${animationTrigger}`}
                className="animate-why-choose-card"
                style={styles.whyChooseCard}
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
                <h3 style={styles.whyChooseTitle}>Collaborative Growth</h3>
                <p style={styles.whyChooseDescription}>
                  By partnering with LGUs, businesses, and private firms,
                  8ConLift ensures sustainable support and impactful outcomes
                  for beneficiaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - White Background */}
        <section id="cta" ref={ctaRef} style={styles.ctaSection}>
          <div style={styles.container2}>
            <h2
              key={`cta-title-${animationTrigger}`}
              className="animate-cta-title"
              style={styles.ctaTitle}
            >
              Transforming Lives, One Dream at a Time
            </h2>
            <p
              key={`cta-description-${animationTrigger}`}
              className="animate-cta-description"
              style={styles.ctaDescription}
            >
              At 8ConLift, we believe in the power of education to change lives.
              Through scholarships, OJT opportunities, and our unique Enrollment
              to Employment Program, we are creating a future where financial
              independence and success are within reach for every Filipino.
            </p>
            <div
              key={`cta-buttons-${animationTrigger}`}
              className="animate-cta-buttons"
              style={styles.ctaButtons}
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
                Apply for Program
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
                Partner With Us
              </button>
            </div>
            <div
              key={`cta-highlight-${animationTrigger}`}
              className="animate-cta-highlight"
              style={styles.ctaHighlight}
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
                Join 8ConLift today—where dreams take flight and lives are
                transformed!
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

  // Key Initiatives Section - Black Background
  initiativesSection: {
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

  initiativesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  },

  initiativeCard: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    border: "2px solid #0edb61",
    transition: "all 0.3s ease",
    textAlign: "center",
  },

  initiativeIcon: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "center",
  },

  initiativeTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#0edb61",
    marginBottom: "1rem",
  },

  initiativeDescription: {
    fontSize: "1rem",
    color: "#000000",
    marginBottom: "1.5rem",
    lineHeight: "1.6",
  },

  initiativeList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    textAlign: "left",
  },

  initiativeListItem: {
    fontSize: "0.95rem",
    color: "#000000",
    marginBottom: "0.8rem",
    lineHeight: "1.5",
  },

  // Benefits Section - White Background
  benefitsSection: {
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
    marginTop: "2rem",
  },

  benefitCard: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
    border: "2px solid #f0f0f0",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  benefitIcon: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "center",
  },

  benefitTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#000000",
    marginBottom: "1rem",
  },

  benefitDescription: {
    fontSize: "1rem",
    color: "#000000",
    lineHeight: "1.7",
  },

  // Why Choose 8ConLift Section - Black Background
  whyChooseSection: {
    background: "#ffffff",
    padding: "80px 20px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },

  whyChooseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  },

  whyChooseCard: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
    border: "2px solid #0edb61",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  whyChooseTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#0edb61",
    marginBottom: "1rem",
  },

  whyChooseDescription: {
    fontSize: "1rem",
    color: "#000000",
    lineHeight: "1.7",
  },

  // CTA Section - White Background
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

export default ConLift;
