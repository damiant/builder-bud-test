import React from 'react';
import './OurBeersTop.css';

const OurBeersTop: React.FC = () => {
  return (
    <div className="our-beers-top">
      <img 
        src="https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2F7f30769bac1d41dfae18535f4e773c32?format=webp&width=800&height=1200" 
        alt="Our Beers Top Decoration" 
        className="our-beers-top-image"
      />
    </div>
  );
};

export default OurBeersTop;
