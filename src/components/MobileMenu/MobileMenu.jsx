import './MobileMenu.scss';

export default function MobileMenu({setIsBurgerMenuActive, isBurgerMenuActive, burgerMenuState}) {
  const handleNavClick = () => {
    setIsBurgerMenuActive(false);
  };

  return (
    <div className={`mobile-nav-container ${isBurgerMenuActive ? 'active' : ''}`}>
      <div className="burger-menu-container">
        <img src="/assets/icons/logo-white-on-transparent-background.png" className="logo" alt="Website logo" />
        <p className="phone-number">+1 (555) 123-4567</p>
        <img src="/assets/icons/icons8-close-50.png" className="burger-menu-icon" alt="Burger enu icon" onClick={() => {burgerMenuState()}} />
      </div>
      <ul className="mobile-nav">
        <li className="mobile-nav-element"><a href="#about-section" className="link" onClick={handleNavClick}>About Us</a></li>
        <li className="mobile-nav-element"><a href="#services-section" className="link" onClick={handleNavClick}>Services</a></li>
        <li className="mobile-nav-element"><a href="#staff-section" className="link" onClick={handleNavClick}>Staff</a></li>
        <li className="mobile-nav-element"><a href="#reviews-section" className="link" onClick={handleNavClick}>Reviews</a></li>
        <li className="mobile-nav-element"><a href="#location-section" className="link" onClick={handleNavClick}>Where To Find Us</a></li>
        <li className="mobile-nav-element"><a href="#contact-section" className="link" onClick={handleNavClick}>Contact Us</a></li>
      </ul>
    </div>
  );
}
