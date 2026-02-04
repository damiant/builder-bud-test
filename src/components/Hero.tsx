import React from 'react';
import './Hero.css';

interface HeroProps {
  heroImageUrl?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  heroImageUrl,
  title = 'The Great American Lager Since 1876',
  subtitle = "From steam-powered breweries to today's neighborhood bars, we've served generations through boom times, quiet years, and everything in between.",
  ctaText = 'Find Near You',
  ctaLink,
}) => {
  const handleCTAClick = () => {
    if (ctaLink) {
      window.open(ctaLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="hero">
      <div className="hero-banner-container">
        <div className="hero-banner-content">
          <h1 className="hero-banner-title">{title}</h1>
          <p className="hero-banner-description">{subtitle}</p>
          <button className="hero-banner-cta" onClick={handleCTAClick}>
            {ctaText}
          </button>
        </div>
      </div>
      <div className="hero-content-container">
        {heroImageUrl && <img src={heroImageUrl} alt="Hero Visual" className="hero-image" />}
      </div>
    </section>
  );
};

export default Hero;
