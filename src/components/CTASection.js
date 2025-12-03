import React from 'react';
import './CTASection.css';

const CTASection = () => {
  const handleSignUpClick = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign up clicked');
  };

  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <h2>Ready to Get Started?</h2>
        <p>Join us today and see the difference</p>
        <a 
          href="#" 
          className="cta-button-secondary" 
          id="footer-cta"
          onClick={handleSignUpClick}
        >
          Sign Up Free
        </a>
      </div>
    </section>
  );
};

export default CTASection;

