import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-video-container">
        <div className="video-wrapper">
          <video
            src="https://cdn.builder.io/o/assets%2F2c2f396d58f344ecaa467593ed0ec411%2Fd39f28fdc89d4b5ca300c2a1d856d4ae?alt=media&token=65ab0bb0-e0a2-4dd0-be65-8342272ab5d2&apiKey=2c2f396d58f344ecaa467593ed0ec411"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hero-video"
          />
        </div>
      </div>
      <div className="hero-content-container">
        <div className="hero-text-wrapper">
          <div className="hero-title-wrapper">
            <h2 className="hero-title">American Icons</h2>
          </div>
          <div className="hero-description-wrapper">
            <p className="hero-description">
              Budweiser Clydesdale. American Bald Eagle. Two American icons join
              together to celebrate 150 years of high quality American Lager. Not
              just Made in America, Made of America.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
