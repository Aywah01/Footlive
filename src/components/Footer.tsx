import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/about" className="footer-link">
            About Us
          </a>
          <a href="/contact" className="footer-link">
            Contact
          </a>
          <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>
        </div>
        <div className="social-media">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            Instagram
          </a>
        </div>
        <div className="text-center">© 2024 FootLive</div>
      </div>
    </footer>
  );
};

export default Footer;
