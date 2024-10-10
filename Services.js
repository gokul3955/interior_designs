import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <h3>Residential Design</h3>
          <p>Create a stylish and functional home.</p>
        </div>
        <div className="service-item">
          <h3>Commercial Design</h3>
          <p>Modern and efficient workspaces.</p>
        </div>
        <div className="service-item">
          <h3>Renovations</h3>
          <p>Upgrade your spaces with contemporary designs.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;

