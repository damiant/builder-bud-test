import React, { useState } from 'react';
import './AgeGate.css';

const AGE_GATE_KEY = 'budweiser_age_gate_status';

const AgeGate: React.FC = () => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [status, setStatus] = useState<string | null>(() => {
    return typeof window !== 'undefined' ? localStorage.getItem(AGE_GATE_KEY) : null;
  });
  const [error, setError] = useState('');

  const calculateAge = (m: number, d: number, y: number) => {
    const today = new Date();
    const birthDate = new Date(y, m - 1, d);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleEnter = (e: React.FormEvent) => {
    e.preventDefault();
    const m = parseInt(month);
    const d = parseInt(day);
    const y = parseInt(year);

    if (isNaN(m) || isNaN(d) || isNaN(y) || m < 1 || m > 12 || d < 1 || d > 31 || y < 1900) {
      setError('Please enter a valid date of birth.');
      return;
    }

    const age = calculateAge(m, d, y);
    if (age >= 21) {
      localStorage.setItem(AGE_GATE_KEY, 'verified');
      setStatus('verified');
      window.location.reload(); // Force reload to show content
    } else {
      localStorage.setItem(AGE_GATE_KEY, 'blocked');
      setStatus('blocked');
      setError('You must be 21 or older to enter this site.');
    }
  };

  if (status === 'verified') {
    return null;
  }

  return (
    <div className="age-gate-overlay">
      <div className="age-gate-container">
        <div className="age-gate-form-side">
          <div className="age-gate-content">
            <h1 className="age-gate-title">Are You Over 21?</h1>
            <p className="age-gate-subtitle">
              You can enjoy this website if you're of legal drinking age. Your data won't be stored
              or shared.
            </p>
            <p className="age-gate-instruction">Please enter your date of birth.</p>

            <form onSubmit={handleEnter} className="age-gate-form">
              <div className="age-gate-inputs">
                <div className="input-group">
                  <label htmlFor="month">Month</label>
                  <input
                    id="month"
                    type="text"
                    placeholder="MM"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    maxLength={2}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="day">Day</label>
                  <input
                    id="day"
                    type="text"
                    placeholder="DD"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    maxLength={2}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="year">Year</label>
                  <input
                    id="year"
                    type="text"
                    placeholder="YYYY"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    maxLength={4}
                  />
                </div>
              </div>

              {error && <p className="age-gate-error">{error}</p>}
              {status === 'blocked' && (
                <p className="age-gate-blocked-msg">Sorry, you do not meet the age requirement.</p>
              )}

              <button type="submit" className="age-gate-submit">
                Enter
              </button>
            </form>

            <div className="age-gate-footer">
              <h2 className="age-gate-footer-title">Enjoy Responsibly</h2>
              <p className="age-gate-legal">
                ©2026 Anheuser-Busch, Budweiser® Lager Beer, St. Louis MO. By submitting this form,
                you agree to be bound by the <a href="#">Terms of Service</a> and{' '}
                <a href="#">Privacy Policy</a>. <a href="https://google.com">Do Not Sell My Personal Information</a>{' '}
                <a href="#">Limit The Use Of My Sensitive Personal Information</a>
              </p>
              <p className="age-gate-warning">DO NOT SHARE THIS CONTENT WITH THOSE UNDER 21.</p>
            </div>
          </div>
        </div>
        <div className="age-gate-image-side">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F02c8915fddb94a1bb00e9fe3d6b7cc9a%2F5fb41e7a112c44f6a6c641ada2379073?format=webp&width=800&height=1200"
            alt="Budweiser Collage"
            className="age-gate-bg-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AgeGate;
