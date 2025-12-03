import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <ul className="footer-links">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <p>&copy; {currentYear} BrandName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

