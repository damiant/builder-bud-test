import React from 'react';
import './WhatsNew.css';

const WhatsNew: React.FC = () => {
  return (
    <section className="whats-new-section">
      <div className="whats-new-content">
        <h2 className="whats-new-title">What's New</h2>
        <p className="whats-new-description">
          Discover our latest collections and stories.
        </p>
      </div>
    </section>
  );
};

export default WhatsNew;
