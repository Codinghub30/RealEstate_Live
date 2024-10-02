// Footer.js

import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul className="social-media">
            <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i> Facebook</a></li>
            <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Subscribe</h4>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MPC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
