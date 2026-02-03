import React from 'react';
import './ClydesdalesHero.css';

interface ClydesdalesHeroProps {
  title?: string;
  description?: string;
  buttonText?: string;
  imageUrl?: string;
}

const ClydesdalesHero: React.FC<ClydesdalesHeroProps> = ({
  title = 'American Icons Since 1933',
  description = 'Go to the Clydesdales page for schedule, tours, and origin details.',
  buttonText = 'Learn More',
  imageUrl = 'https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2F6ec9f624507849c782c2169bd9c44410?format=webp&width=800&height=1200',
}) => {
  return (
    <section className="clydesdales-hero">
      <div className="clydesdales-image-container">
        <img src={imageUrl} alt="Clydesdales Horses" className="clydesdales-image" />
      </div>
      <div className="clydesdales-content-container">
        <div className="clydesdales-content">
          <h2 className="clydesdales-title">{title}</h2>
          <p className="clydesdales-description">{description}</p>
          <button className="clydesdales-cta">{buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default ClydesdalesHero;
