import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-banner-container">
        <div className="hero-banner-content">
          <h1 className="hero-banner-title">
            The Great American Lager Since 1876
          </h1>
          <p className="hero-banner-description">
            From steam-powered breweries to today's neighborhood bars, we've served generations through boom times, quiet years, and everything in between.
          </p>
          <button className="hero-banner-cta">Find Near You</button>
        </div>
      </div>
      <div className="hero-content-container">
        {/* Right side content - user will fill this in later */}
      </div>
    </section>
  );
};

export default HeroSection;
