import React from 'react';
import './Header.css';

const Header = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav className="container">
        <div className="logo">BrandName</div>
        <ul className="nav-links">
          <li>
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, 'features')}
            >
              Features
            </a>
          </li>
          <li>
            <a 
              href="#benefits" 
              onClick={(e) => handleNavClick(e, 'benefits')}
            >
              Benefits
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

