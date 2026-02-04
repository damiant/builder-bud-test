import React from 'react';
import './WhatsNew.css';

const WhatsNew: React.FC = () => {
  return (
    <section className="whats-new-section">
      <div className="whats-new-container">
        <header className="whats-new-header">
          <h2 className="whats-new-title">What's New</h2>
          <p className="whats-new-subtitle">Campaigns</p>
        </header>
        <div className="whats-new-grid">
          <div className="whats-new-item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2F60ca239619354bc793c64b6c251bac70?format=webp&width=800&height=1200"
              alt="Limited Edition Holiday Cans"
              className="whats-new-image"
            />
          </div>
          <div className="whats-new-item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2F23c1b124c09f4d1ea99d56c8265d4b19?format=webp&width=800&height=1200"
              alt="150 Years Anniversary"
              className="whats-new-image"
            />
          </div>
          <div className="whats-new-item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2F069451d35ebe4bc79c732436a243e37d?format=webp&width=800&height=1200"
              alt="Super Bowl Campaign"
              className="whats-new-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
