import React from 'react';
import './OurBeer.css';

const OurBeer: React.FC = () => {
  return (
    <section className="our-beer-section">
      <div className="our-beer-card">
        <div className="beer-image-wrapper">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2F9d0cb1390ba5438f8d6e863ff4870c5a?format=webp&width=800&height=1200" 
            alt="Budweiser Can" 
            className="beer-overlay-image"
          />
        </div>
        <div className="beer-card-content">
          <h2 className="beer-card-title">Budweiser</h2>
          <p className="beer-card-description">American-Style Lager,</p>
          <p className="beer-card-abv">5.0% ABV</p>
        </div>
      </div>
    </section>
  );
};

export default OurBeer;
