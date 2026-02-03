import React from 'react';
import './OurBeer.css';

interface OurBeerProps {
  title: string;
  description: string;
  abv?: string;
  imageUrl: string;
  details?: string;
}

const OurBeer: React.FC<OurBeerProps> = ({ title, description, abv, imageUrl, details }) => {
  return (
    <div className="our-beer-card">
      <div className="beer-image-wrapper">
        <img src={imageUrl} alt={title} className="beer-overlay-image" />
      </div>
      <div className="beer-card-content">
        <h2 className="beer-card-title">{title}</h2>
        <p className="beer-card-description">{description}</p>
        {abv && <p className="beer-card-abv">{abv}</p>}
        {details && <p className="beer-card-details">{details}</p>}
      </div>
    </div>
  );
};

export default OurBeer;
