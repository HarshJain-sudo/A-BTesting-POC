import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    'Increase productivity by 300%',
    'Save time with automated workflows',
    'Scale your business effortlessly',
    '24/7 customer support available'
  ];

  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <div className="benefits-content">
          <div className="benefits-text">
            <h2>Unlock Your Potential</h2>
            <p>
              Join thousands of satisfied customers who have 
              transformed their businesses with our solution.
            </p>
            <ul className="benefit-list">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="benefits-image">
            Visual Content Placeholder
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

