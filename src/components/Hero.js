import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleCTAClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <h1 id="hero-title">Transform Your Business Today</h1>
        <p id="hero-subtitle">
          Discover the power of innovation and take your 
          business to the next level
        </p>
        <a 
          href="#contact" 
          className="cta-button" 
          id="hero-cta"
          onClick={handleCTAClick}
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default Hero;

