import React from 'react';
import './RightHero.css';

interface RightHeroProps {
  title?: string;
  description?: string;
  buttonText?: string;
  imageUrl?: string;
}

const RightHero: React.FC<RightHeroProps> = ({
  title = 'Originals, Not Souvenirs',
  description = 'Budweiser originals you actually wear, hats and shirts built for daily use. Shop the rest of the lineup: hoodies, jackets, beanies, bags, and more.',
  buttonText = 'Shop',
  imageUrl = 'https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2F7fd13bd84bb44641827e8febc58991c7?format=webp&width=800&height=1200',
}) => {
  return (
    <section className="right-hero">
      <div className="right-hero-content-container">
        <div className="right-hero-content">
          <h2 className="right-hero-title">{title}</h2>
          <p className="right-hero-description">{description}</p>
          <button className="right-hero-cta">{buttonText}</button>
        </div>
      </div>
      <div className="right-hero-image-container">
        <img src={imageUrl} alt="Budweiser Merch" className="right-hero-image" />
      </div>
    </section>
  );
};

export default RightHero;
