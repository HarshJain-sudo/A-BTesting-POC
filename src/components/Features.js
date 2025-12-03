import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Fast Performance',
      description: 'Experience lightning-fast speeds that keep ' +
                   'your business running smoothly'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Your data is protected with enterprise-grade ' +
                   'security measures'
    },
    {
      icon: '💡',
      title: 'Easy to Use',
      description: 'Intuitive interface designed for users of all ' +
                   'technical levels'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

