import React from 'react';
import './Hero.css';

interface HeroProps {
  heroImageUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ heroImageUrl }) => {
  return (
    <section className="hero">
      <div className="hero-banner-container">
        <div className="hero-banner-content">
          <h1 className="hero-banner-title">The Great American Lager Since 1876</h1>
          <p className="hero-banner-description">
            From steam-powered breweries to today's neighborhood bars, we've served generations
            through boom times, quiet years, and everything in between.
          </p>
          <button className="hero-banner-cta">Find Near You</button>
        </div>
      </div>
      <div className="hero-content-container">
        {heroImageUrl && <img src={heroImageUrl} alt="Hero Visual" className="hero-image" />}
      </div>
    </section>
  );
};

export default Hero;
