import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-sticky-wrapper">
      <header className="main-header">
        <div className="header-left">
          <section className="menu-toggle-section">
            <div className="menu-icon-wrapper" onClick={toggleMenu}>
              <div className={`menu-icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
            </div>
          </section>
          <div className="menu-text-button" onClick={toggleMenu} role="button" tabIndex={0}>Main Menu</div>
        </div>

        <a href="https://us.budweiser.com/" className="logo-link">
          <img
            alt="Budweiser Logo"
            loading="lazy"
            src="https://us.budweiser.com/img/Bud-Crown-White.png"
            className="logo-img"
          />
        </a>

        <div className="header-right">
          <a href="https://www.anheuser-busch.com/renewable-electricity" className="nav-link">
            <div className="nav-button">Sustainability</div>
          </a>
          <div className="divider-wrapper">
            <svg className="divider-svg" width="2" height="35" viewBox="0 0 3 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1.14062" y1="0.431641" x2="1.14063" y2="40.8451" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <a href="https://us.budweiser.com/locator" className="nav-link">
            <div className="nav-button">Find Your Bud</div>
          </a>
          <div className="divider-wrapper">
            <svg className="divider-svg" width="3" height="41" viewBox="0 0 3 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1.14062" y1="0.431641" x2="1.14063" y2="40.8451" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <a href="https://www.budweiser.ca/ca_en" className="nav-link">
            <button className="nav-button lang-button">
              <svg className="globe-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1390_38983)">
                  <path d="M15.5801 0.431641C24.1414 0.431641 31.0801 7.37031 31.0801 15.9316C31.0801 24.493 24.1414 31.4316 15.5801 31.4316C7.01875 31.4316 0.0800781 24.493 0.0800781 15.9316C0.0800781 7.37031 7.01875 0.431641 15.5801 0.431641ZM15.5801 28.5254C16.0281 28.5254 17.1604 28.0895 18.4621 25.5949C18.9949 24.5232 19.4006 23.2215 19.7941 21.7441H11.366C11.7051 23.2215 12.1652 24.5232 12.698 25.5949C13.9453 28.0895 15.132 28.5254 15.5801 28.5254ZM10.8877 18.8379H20.2725C20.3693 17.9115 20.4238 16.9367 20.4238 15.9316C20.4238 14.9266 20.3693 13.9518 20.2725 13.0254H10.8877C10.7908 13.9518 10.7363 14.9266 10.7363 15.9316C10.7363 16.9367 10.7908 17.9115 10.8877 18.8379ZM19.7941 10.1191C19.4006 8.6418 18.9949 7.34004 18.4621 6.27139C17.1604 3.77504 16.0281 3.33789 15.5801 3.33789C15.132 3.33789 13.9453 3.77504 12.698 6.27139C12.1652 7.34004 11.7051 8.6418 11.366 10.1191H19.7941ZM23.1969 13.0254C23.2816 13.9639 23.3301 14.9387 23.3301 15.9316C23.3301 16.9246 23.2816 17.8994 23.1969 18.8379H27.8348C28.0588 17.9055 28.1738 16.9307 28.1738 15.9316C28.1738 14.9326 28.0588 13.9578 27.8348 13.0254H23.1969ZM20.7932 4.46467C21.6469 6.0177 22.325 7.94551 22.767 10.1191H26.757C25.4613 7.63066 23.3543 5.63141 20.7932 4.46467ZM10.367 4.46467C7.80586 5.63141 5.70125 7.63066 4.40494 10.1191H8.39316C8.83516 7.94551 9.51328 6.0177 10.367 4.46467ZM2.98633 15.9316C2.98633 16.9307 3.10318 17.9055 3.32357 18.8379H7.96328C7.87852 17.8994 7.83008 16.9246 7.83008 15.9316C7.83008 14.9387 7.87852 13.9639 7.96328 13.0254H3.32357C3.10318 13.9578 2.98633 14.9326 2.98633 15.9316ZM26.757 21.7441H22.767C22.325 23.9178 21.6469 25.8432 20.7932 27.3992C23.3543 26.2307 25.4613 24.2326 26.757 21.7441ZM8.39316 21.7441H4.40494C5.70125 24.2326 7.80586 26.2307 10.367 27.3992C9.51328 25.8432 8.83516 23.9178 8.39316 21.7441Z" />
                </g>
                <defs>
                  <clipPath id="clip0_1390_38983">
                    <rect width="31" height="31" transform="translate(0.0800781 0.431641)" />
                  </clipPath>
                </defs>
              </svg>
              En
            </button>
          </a>
        </div>
      </header>

      <div className={`mega-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mega-menu-content">
          <div className="vertical-menu">
            <a href="#" className="menu-item-link">
              <button className="menu-item-button">Our Beers</button>
              <svg className="arrow-icon" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.77031 0.604214L9.19863 7.33338C9.43222 7.53703 9.53105 7.80265 9.53105 8.06385C9.53105 8.32505 9.43276 8.58979 9.23627 8.79432L2.77031 15.5235C2.35703 15.9498 1.67421 15.9675 1.24296 15.5651C0.807222 15.1609 0.793746 14.4858 1.20253 14.0625L6.96601 8.06385L1.19804 2.06515C0.789522 1.64183 0.804975 0.969448 1.24016 0.5626C1.67421 0.161506 2.35703 0.179214 2.77031 0.604214Z" />
              </svg>
            </a>
            <a href="#" className="menu-item-link">
              <button className="menu-item-button">Campaigns</button>
              <svg className="arrow-icon" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.77031 0.604214L9.19863 7.33338C9.43222 7.53703 9.53105 7.80265 9.53105 8.06385C9.53105 8.32505 9.43276 8.58979 9.23627 8.79432L2.77031 15.5235C2.35703 15.9498 1.67421 15.9675 1.24296 15.5651C0.807222 15.1609 0.793746 14.4858 1.20253 14.0625L6.96601 8.06385L1.19804 2.06515C0.789522 1.64183 0.804975 0.969448 1.24016 0.5626C1.67421 0.161506 2.35703 0.179214 2.77031 0.604214Z" />
              </svg>
            </a>
            <a href="https://us.budweiser.com/About-Us/" className="menu-item-link">
              <button className="menu-item-button">Clydesdales</button>
            </a>
            <div className="menu-divider-wrapper">
              <svg className="menu-divider" width="239" height="3" viewBox="0 0 239 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.33984" y1="1.33105" x2="237.932" y2="1.33105" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <a href="https://us.budweiser.com/history/" className="menu-item-link">
              <button className="menu-item-button">History</button>
            </a>
            <a href="https://www.shopbeergear.com/pages/budweiser" className="menu-item-link">
              <button className="menu-item-button">Shop Merch</button>
            </a>
            <a href="https://www.anheuser-busch.com/renewable-electricity" className="menu-item-link">
              <button className="menu-item-button">Sustainability</button>
            </a>
            <div className="social-links">
              <a href="https://www.facebook.com/BudweiserUSA/" className="social-link">
                <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1317 14.2169L12.8049 9.79422H8.59565V6.92423C8.59565 5.71429 9.18365 4.53489 11.0689 4.53489H12.9825V0.769491C12.9825 0.769491 11.2459 0.470703 9.58559 0.470703C6.11912 0.470703 3.85327 2.58895 3.85327 6.42355V9.79422H0V14.2169H3.85327V24.9083H8.59565V14.2169H12.1317Z" fill="white" />
                </svg>
              </a>
              <a href="https://twitter.com/budweiserusa" className="social-link">
                <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.8589 5.66407C22.8749 5.88958 22.8749 6.11514 22.8749 6.34065C22.8749 13.2191 17.6779 21.1446 8.17944 21.1446C5.25313 21.1446 2.53473 20.2908 0.248047 18.8089C0.66382 18.8572 1.06355 18.8733 1.49532 18.8733C3.90987 18.8733 6.13262 18.0518 7.90759 16.6503C5.63691 16.6019 3.73401 15.1038 3.07838 13.0419C3.39822 13.0902 3.71801 13.1224 4.05385 13.1224C4.51756 13.1224 4.98133 13.058 5.41305 12.9453C3.04643 12.462 1.27141 10.3678 1.27141 7.83876V7.77435C1.95898 8.16096 2.75859 8.40259 3.60603 8.43477C2.21484 7.50044 1.3034 5.9057 1.3034 4.1015C1.3034 3.13499 1.55921 2.24901 2.00697 1.47578C4.54951 4.6331 8.37131 6.69499 12.6568 6.92055C12.5768 6.53394 12.5288 6.13126 12.5288 5.72853C12.5288 2.86114 14.8315 0.525391 17.6938 0.525391C19.181 0.525391 20.5242 1.15363 21.4676 2.16848C22.6349 1.94297 23.7543 1.50801 24.7457 0.912004C24.3619 2.12019 23.5464 3.13504 22.4751 3.77935C23.5145 3.66664 24.5219 3.37662 25.4493 2.97394C24.7458 4.00486 23.8663 4.92302 22.8589 5.66407Z" fill="white" />
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCPCk_8dtVyR1lLHMBEILW4g" className="social-link">
                <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.1281 3.7516C28.7943 2.48169 27.811 1.48155 26.5624 1.14214C24.2994 0.525391 15.2247 0.525391 15.2247 0.525391C15.2247 0.525391 6.15002 0.525391 3.88688 1.14214C2.63833 1.48161 1.65499 2.48169 1.32124 3.7516C0.714844 6.05338 0.714844 10.8558 0.714844 10.8558C0.714844 10.8558 0.714844 15.6583 1.32124 17.9601C1.65499 19.23 2.63833 20.1884 3.88688 20.5279C6.15002 21.1446 15.2247 21.1446 15.2247 21.1446C15.2247 21.1446 24.2993 21.1446 26.5624 20.5279C27.811 20.1884 28.7943 19.23 29.1281 17.9601C29.7345 15.6583 29.7345 10.8558 29.7345 10.8558C29.7345 10.8558 29.7345 6.05338 29.1281 3.7516ZM12.2567 15.2161V6.49557L19.8414 10.8559L12.2567 15.2161Z" fill="white" />
                </svg>
              </a>
              <a href="https://www.instagram.com/accounts/login/?next=%2Fbudweiserusa%2F" className="social-link">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8396 6.76531C8.48062 6.76531 5.77126 9.47528 5.77126 12.835C5.77126 16.1947 8.48062 18.9047 11.8396 18.9047C15.1986 18.9047 17.9079 16.1947 17.9079 12.835C17.9079 9.47528 15.1986 6.76531 11.8396 6.76531ZM11.8396 16.7811C9.66894 16.7811 7.89439 15.0114 7.89439 12.835C7.89439 10.6586 9.66366 8.88891 11.8396 8.88891C14.0155 8.88891 15.7848 10.6586 15.7848 12.835C15.7848 15.0114 14.0103 16.7811 11.8396 16.7811ZM19.5716 6.51703C19.5716 7.30414 18.9378 7.93277 18.1562 7.93277C17.3692 7.93277 16.7407 7.29885 16.7407 6.51703C16.7407 5.73521 17.3745 5.1013 18.1562 5.1013C18.9378 5.1013 19.5716 5.73521 19.5716 6.51703ZM23.5907 7.9539C23.501 6.05745 23.0679 4.37758 21.6789 2.99354C20.2951 1.60951 18.6157 1.17633 16.7196 1.08125C14.7655 0.970313 8.90842 0.970313 6.9543 1.08125C5.06355 1.17105 3.38406 1.60422 1.99505 2.98826C0.606042 4.3723 0.178248 6.05216 0.0831822 7.94861C-0.0277274 9.90317 -0.0277274 15.7616 0.0831822 17.7161C0.172966 19.6126 0.606042 21.2924 1.99505 22.6765C3.38406 24.0605 5.05827 24.4937 6.9543 24.5888C8.90842 24.6997 14.7655 24.6997 16.7196 24.5888C18.6157 24.499 20.2951 24.0658 21.6789 22.6765C23.0626 21.2924 23.4957 19.6126 23.5907 17.7161C23.7016 15.7616 23.7016 9.90845 23.5907 7.9539ZM21.0662 19.8133C20.6543 20.8487 19.8568 21.6464 18.8163 22.0637C17.2583 22.6818 13.5613 22.5391 11.8396 22.5391C10.1179 22.5391 6.41559 22.6765 4.86286 22.0637C3.8277 21.6516 3.03021 20.854 2.61298 19.8133C1.99505 18.2549 2.13765 14.5571 2.13765 12.835C2.13765 11.1129 2.00033 7.40979 2.61298 5.85671C3.02493 4.82132 3.82242 4.02365 4.86286 3.60632C6.42087 2.98826 10.1179 3.13089 11.8396 3.13089C13.5613 3.13089 17.2636 2.99354 18.8163 3.60632C19.8515 4.01837 20.649 4.81604 21.0662 5.85671C21.6841 7.41507 21.5416 11.1129 21.5416 12.835C21.5416 14.5571 21.6841 18.2602 21.0662 19.8133Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>

          <div className="beer-grid-container">
            <div className="beer-grid-header">
              <h5 className="beer-grid-title">Our Beers</h5>
              <hr className="beer-grid-divider" />
            </div>
            <div className="beer-grid">
              <div className="beer-item">
                <a href="https://us.budweiser.com/budweiser" className="beer-link">
                  <img alt="Budweiser" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets%2F2c2f396d58f344ecaa467593ed0ec411%2Fb0d1af3c504a49289a8676b636dd1871" className="beer-img" />
                  <h6 className="beer-name">Budweiser</h6>
                </a>
              </div>
              <div className="beer-item">
                <a href="https://us.budweiser.com/budweiser-zero" className="beer-link">
                  <img alt="Budweiser Zero" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets%2F2c2f396d58f344ecaa467593ed0ec411%2F7e03aec2a33546b7a18ea244873e8542" className="beer-img" />
                  <h6 className="beer-name">Budweiser Zero</h6>
                </a>
              </div>
              <div className="beer-item">
                <a href="https://us.budweiser.com/budweiser-select" className="beer-link">
                  <img alt="Budweiser Select" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets%2F2c2f396d58f344ecaa467593ed0ec411%2Fe7632f4337d849b9b90bf1c447bc96b5" className="beer-img" />
                  <h6 className="beer-name">Budweiser Select</h6>
                </a>
              </div>
              <div className="beer-item">
                <a href="https://us.budweiser.com/budweiser-select-55" className="beer-link">
                  <img alt="Budweiser Select 55" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets%2F2c2f396d58f344ecaa467593ed0ec411%2F5ebe2e9a0e1f4b9fab5bee8ee3272127" className="beer-img" />
                  <h6 className="beer-name">Budweiser Select 55</h6>
                </a>
              </div>
              <div className="beer-item">
                <a href="https://us.budweiser.com/budweiser-chelada" className="beer-link">
                  <img alt="Budweiser Chelada" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets%2F2c2f396d58f344ecaa467593ed0ec411%2Fcc8e40798b694c239fa79ab519534d8a" className="beer-img" />
                  <h6 className="beer-name">Budweiser Chelada</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
