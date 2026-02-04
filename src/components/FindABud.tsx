import React from 'react';
import './FindABud.css';

const FindABud: React.FC = () => {
  return (
    <section className="find-a-bud-section">
      <h2 className="find-a-bud-title">Find a Bud Near You</h2>
      <div className="find-a-bud-search-container">
        <div className="find-a-bud-input-wrapper">
          <svg
            className="find-a-bud-search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input type="text" className="find-a-bud-input" placeholder="Enter zip code or address" />
        </div>
        <button className="find-a-bud-button">Search Nearby</button>
      </div>
    </section>
  );
};

export default FindABud;
