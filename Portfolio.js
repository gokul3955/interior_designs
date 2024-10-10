import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-gallery">
        <div className="portfolio-item">
          <img src="path-to-your-image1.jpg" alt="Project 1" />
          <p>Modern Living Room</p>
        </div>
        <div className="portfolio-item">
          <img src="path-to-your-image2.jpg" alt="Project 2" />
          <p>Elegant Bedroom</p>
        </div>
        <div className="portfolio-item">
          <img src="path-to-your-image3.jpg" alt="Project 3" />
          <p>Contemporary Office</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

