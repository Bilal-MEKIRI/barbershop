import { Link } from 'react-router-dom';
import './MobileMenu.scss';

export default function MobileMenu({isBurgerMenuActive, burgerMenuState}) {
  return (
    <div className={`mobile-nav-container ${isBurgerMenuActive ? 'active' : ''}`}>
      <div className="burger-menu-container">
        <img src="src/assets/icons/icons8-close-50.png" className="burger-menu-icon" alt="Burger enu icon" onClick={() => {burgerMenuState()}} />
      </div>
      <ul className="mobile-nav">
        <li className="mobile-nav-element"><Link to="/Home" className="link">About Us</Link></li>
        <li className="mobile-nav-element"><Link to="/Home" className="link">Services</Link></li>
        <li className="mobile-nav-element"><Link to="/Home" className="link">Staff</Link></li>
        <li className="mobile-nav-element"><Link to="/Home" className="link">Reviews</Link></li>
        <li className="mobile-nav-element"><Link to="/Home" className="link">Where To Find Us</Link></li>
      </ul>
    </div>
  );
}
