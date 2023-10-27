import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import './StickyNavBar.scss';

export default function StickyNavBar() {
  const [screenWidth, setScreenWidth] = useState(2000);
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);
  const burgerMenuState = () => {
    setIsBurgerMenuActive(!isBurgerMenuActive);
    console.log('Menu Burger State:', isBurgerMenuActive);
  };
  useEffect(() => {
    const screenSize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      console.log('Screen Width: ', width);
    };
    window.addEventListener('resize', screenSize);
    return () => { window.removeEventListener('resize', screenSize); };
  }, []);

  console.log('Is the burger menu active: ', isBurgerMenuActive);

  return (
    <div className="sticky-nav-bar">
      <div className="header-navigation">
        <div className="header-container">
          <a href="/#header-section"><img src="/assets/icons/logo-white-on-transparent-background.png" className="logo" alt="Website logo" /></a>
          <nav className="nav-bar">
            <ul className="nav-list">
              <li className="list-item"><a href="/#about-section" className="link">About Us</a></li>
              <li className="list-item"><a href="/#services-section" className="link">Services</a></li>
              <li className="list-item"><a href="/#staff-section" className="link">Staff</a></li>
              <li className="list-item"><a href="/#reviews-section" className="link">Reviews</a></li>
              <li className="list-item"><a href="/#location-section" className="link">Where To Find Us</a></li>
            </ul>
          </nav>
          <img src="/assets/icons/icons8-menu-50.png" className="burger-menu-icon" alt="Burger enu icon" onClick={() => {burgerMenuState()}} />
          {isBurgerMenuActive ? <MobileMenu setIsBurgerMenuActive={setIsBurgerMenuActive} isBurgerMenuActive burgerMenuState={burgerMenuState} /> : ''}
          <p className="phone-number">+1 (555) 123-4567</p>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
