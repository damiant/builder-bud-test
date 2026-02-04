import React from 'react';
import './LeftHero.css';

interface LeftHeroProps {
  title?: string;
  description?: string;
  buttonText?: string;
  imageUrl?: string;
}

const LeftHero: React.FC<LeftHeroProps> = ({
  title = 'American Icons Since 1933',
  description = 'Go to the Clydesdales page for schedule, tours, and origin details.',
  buttonText = 'Learn More',
  imageUrl = 'https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2F6ec9f624507849c782c2169bd9c44410?format=webp&width=800&height=1200',
}) => {
  return (
    <section className="left-hero">
      <div className="left-hero-image-container">
        <img src={imageUrl} alt="Clydesdales Horses" className="left-hero-image" />
      </div>
      <div className="left-hero-content-container">
        <div className="left-hero-content">
          <h2 className="left-hero-title">{title}</h2>
          <p className="left-hero-description">{description}</p>
          <button className="left-hero-cta">{buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default LeftHero;
