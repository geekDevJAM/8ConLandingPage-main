import React from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Partnership */}
          <div className="footer-container">
            <h4 className="footer-title">Partnership</h4>
            <ul className="footer-list">
              <div className="footer-logo">
                <img
                  src="/assets/logo/tickmill.png"
                  alt="Tickmill Logo"
                  className="footer-logo-img"
                />
                <img
                  src="/assets/logo/dupoin.png"
                  alt="Dupoin Logo"
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
                <a href="#" className="quick-link">
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
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/8conacademy/"
                  className="ig-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://ph.linkedin.com/company/8con-academy"
                  className="li-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} />
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
  );
};

export default Footer;
