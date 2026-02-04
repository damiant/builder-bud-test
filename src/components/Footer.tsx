import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="main-footer-section">
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-brand-section">
            <img
              src="https://us.budweiser.com/img/Bud-Crown-White.png"
              alt="Budweiser Logo"
              className="footer-logo"
            />
            <div className="newsletter-section">
              <p className="stay-connected-text">Stay Connected</p>
              <button className="join-newsletter-button">Join Newsletter</button>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-links-column">
              <h4 className="footer-column-title">Anheuser-Busch</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Social Responsibility</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4 className="footer-column-title">Support</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Consumer Information</a>
                </li>
                <li>
                  <a href="#">Accessibility Statement</a>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4 className="footer-column-title">Legal</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="https://google.com">Do Not Sell My Personal Information</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider-line"></div>

        <div className="footer-bottom-row">
          <div className="footer-disclaimer">
            <p>
              Always enjoy responsibly. Do not share this content with minors. © 2025 Anheuser-Busch
              InBev BRAND ®, St. Louis, MO.
            </p>
          </div>
          <div className="footer-social-links">
            <a href="https://www.facebook.com/BudweiserUSA/" className="social-icon-link">
              <svg
                width="13"
                height="25"
                viewBox="0 0 13 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1317 14.2169L12.8049 9.79422H8.59565V6.92423C8.59565 5.71429 9.18365 4.53489 11.0689 4.53489H12.9825V0.769491C12.9825 0.769491 11.2459 0.470703 9.58559 0.470703C6.11912 0.470703 3.85327 2.58895 3.85327 6.42355V9.79422H0V14.2169H3.85327V24.9083H8.59565V14.2169H12.1317Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="https://twitter.com/budweiserusa" className="social-icon-link">
              <svg
                width="26"
                height="22"
                viewBox="0 0 26 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.8589 5.66407C22.8749 5.88958 22.8749 6.11514 22.8749 6.34065C22.8749 13.2191 17.6779 21.1446 8.17944 21.1446C5.25313 21.1446 2.53473 20.2908 0.248047 18.8089C0.66382 18.8572 1.06355 18.8733 1.49532 18.8733C3.90987 18.8733 6.13262 18.0518 7.90759 16.6503C5.63691 16.6019 3.73401 15.1038 3.07838 13.0419C3.39822 13.0902 3.71801 13.1224 4.05385 13.1224C4.51756 13.1224 4.98133 13.058 5.41305 12.9453C3.04643 12.462 1.27141 10.3678 1.27141 7.83876V7.77435C1.95898 8.16096 2.75859 8.40259 3.60603 8.43477C2.21484 7.50044 1.3034 5.9057 1.3034 4.1015C1.3034 3.13499 1.55921 2.24901 2.00697 1.47578C4.54951 4.6331 8.37131 6.69499 12.6568 6.92055C12.5768 6.53394 12.5288 6.13126 12.5288 5.72853C12.5288 2.86114 14.8315 0.525391 17.6938 0.525391C19.181 0.525391 20.5242 1.15363 21.4676 2.16848C22.6349 1.94297 23.7543 1.50801 24.7457 0.912004C24.3619 2.12019 23.5464 3.13504 22.4751 3.77935C23.5145 3.66664 24.5219 3.37662 25.4493 2.97394C24.7458 4.00486 23.8663 4.92302 22.8589 5.66407Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCPCk_8dtVyR1lLHMBEILW4g"
              className="social-icon-link"
            >
              <svg
                width="30"
                height="22"
                viewBox="0 0 30 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.1281 3.7516C28.7943 2.48169 27.811 1.48155 26.5624 1.14214C24.2994 0.525391 15.2247 0.525391 15.2247 0.525391C15.2247 0.525391 6.15002 0.525391 3.88688 1.14214C2.63833 1.48161 1.65499 2.48169 1.32124 3.7516C0.714844 6.05338 0.714844 10.8558 0.714844 10.8558C0.714844 10.8558 0.714844 15.6583 1.32124 17.9601C1.65499 19.23 2.63833 20.1884 3.88688 20.5279C6.15002 21.1446 15.2247 21.1446 15.2247 21.1446C15.2247 21.1446 24.2993 21.1446 26.5624 20.5279C27.811 20.1884 28.7943 19.23 29.1281 17.9601C29.7345 15.6583 29.7345 10.8558 29.7345 10.8558C29.7345 10.8558 29.7345 6.05338 29.1281 3.7516ZM12.2567 15.2161V6.49557L19.8414 10.8559L12.2567 15.2161Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/accounts/login/?next=%2Fbudweiserusa%2F"
              className="social-icon-link"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8396 6.76531C8.48062 6.76531 5.77126 9.47528 5.77126 12.835C5.77126 16.1947 8.48062 18.9047 11.8396 18.9047C15.1986 18.9047 17.9079 16.1947 17.9079 12.835C17.9079 9.47528 15.1986 6.76531 11.8396 6.76531ZM11.8396 16.7811C9.66894 16.7811 7.89439 15.0114 7.89439 12.835C7.89439 10.6586 9.66366 8.88891 11.8396 8.88891C14.0155 8.88891 15.7848 10.6586 15.7848 12.835C15.7848 15.0114 14.0103 16.7811 11.8396 16.7811ZM19.5716 6.51703C19.5716 7.30414 18.9378 7.93277 18.1562 7.93277C17.3692 7.93277 16.7407 7.29885 16.7407 6.51703C16.7407 5.73521 17.3745 5.1013 18.1562 5.1013C18.9378 5.1013 19.5716 5.73521 19.5716 6.51703ZM23.5907 7.9539C23.501 6.05745 23.0679 4.37758 21.6789 2.99354C20.2951 1.60951 18.6157 1.17633 16.7196 1.08125C14.7655 0.970313 8.90842 0.970313 6.9543 1.08125C5.06355 1.17105 3.38406 1.60422 1.99505 2.98826C0.606042 4.3723 0.178248 6.05216 0.0831822 7.94861C-0.0277274 9.90317 -0.0277274 15.7616 0.0831822 17.7161C0.172966 19.6126 0.606042 21.2924 1.99505 22.6765C3.38406 24.0605 5.05827 24.4937 6.9543 24.5888C8.90842 24.6997 14.7655 24.6997 16.7196 24.5888C18.6157 24.499 20.2951 24.0658 21.6789 22.6765C23.0626 21.2924 23.4957 19.6126 23.5907 17.7161C23.7016 15.7616 23.7016 9.90845 23.5907 7.9539ZM21.0662 19.8133C20.6543 20.8487 19.8568 21.6464 18.8163 22.0637C17.2583 22.6818 13.5613 22.5391 11.8396 22.5391C10.1179 22.5391 6.41559 22.6765 4.86286 22.0637C3.8277 21.6516 3.03021 20.854 2.61298 19.8133C1.99505 18.2549 2.13765 14.5571 2.13765 12.835C2"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
