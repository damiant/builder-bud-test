import React from 'react';
import OurBeer from './OurBeer';
import './OurBeers.css';

const BEERS = [
  {
    title: 'Budweiser',
    description: 'American-Style Lager,',
    abv: '5.0% ABV',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2Fe48cf6d698f54bfa91fdbeecfea95c24?format=webp&width=800&height=1200',
  },
  {
    title: 'Budweiser Zero',
    description: 'Non-Alcoholic,',
    abv: '0.0% ABV',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2Fdc721d7e556744e9950b2e850d08c4d2?format=webp&width=800&height=1200',
  },
  {
    title: 'Budweiser Zero',
    description: 'Light Lager,',
    abv: '4.3% ABV',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2Ff9c09551ee3f4643af036f621ec16a09?format=webp&width=800&height=1200',
  },
  {
    title: 'Budweiser Zero',
    description: 'Ultra Light Lager,',
    abv: '2.4% ABV',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2Fd961c977458a46f7a249aa99ebce1ed6?format=webp&width=800&height=1200',
  },
  {
    title: 'Budweiser Zero',
    description: 'American Golden Lager',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2F90f1a4249adc45ffad9777e0c5bb38f6?format=webp&width=800&height=1200',
  },
  {
    title: 'Budweiser Chelada',
    description: 'Budweiser Chelada With',
    abv: 'Clamato, 5.0% ABV',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2Fd41905c4b43548f490223ac1a95a54df?format=webp&width=800&height=1200',
  },
];

const OurBeers: React.FC = () => {
  return (
    <section className="our-beers-section">
      <div className="our-beers-header">
        <h2 className="our-beers-title">Our Beers</h2>
      </div>
      <div className="our-beers-grid">
        {BEERS.map((beer, index) => (
          <OurBeer key={index} {...beer} />
        ))}
      </div>
    </section>
  );
};

export default OurBeers;
