import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from '../../pages/home/home';
import './Template.scss';
import '../../../utils/reset.scss';
import CallToActionBtn from '../CallToActionBtn/CallToActionBtn';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function Template() {
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

  return (
    <>
      <header className="header">
        <div className="header-navigation">
          <div className="header-container">
            <img src="/assets/icons/logo-white-on-transparent-background.png" className="logo" alt="Website logo" />
            <nav className="nav-bar">
              <ul className="nav-list">
                <li className="list-item"><Link to="/Home" className="link">About Us</Link></li>
                <li className="list-item"><Link to="/Home" className="link">Services</Link></li>
                <li className="list-item"><Link to="/Home" className="link">Staff</Link></li>
                <li className="list-item"><Link to="/Home" className="link">Reviews</Link></li>
                <li className="list-item"><Link to="/Home" className="link">Where To Find Us</Link></li>
              </ul>
            </nav>
            <img src="src/assets/icons/icons8-menu-50.png" className="burger-menu-icon" alt="Burger enu icon" onClick={() => {burgerMenuState()}} />
            {isBurgerMenuActive ? <MobileMenu isBurgerMenuActive burgerMenuState={burgerMenuState} /> : ''}
            {screenWidth < 800 ? '' : <CallToActionBtn linkTo="Home" content="+1 (555) 123-4567" />}
          </div>
        </div>
        <div className="hero-section">
          <div className="hero-content-container">
            <h1 className="buisness-title">Your Corner, Your Barber: Corner Barber</h1>
            <p className="buisness-description">Experience the best in barbering at Corner Barber. Precision cuts, warm atmosphere, and unmatched style await. Book your appointment today.</p>
            <CallToActionBtn linkTo={Home} content="Book your appointment" />
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="footer">
        <section className="footer-content-container">
          <img src="assets/icons/logo-white-on-transparent-background.png" alt="Website logo" className="logo" />
          <div className="info">
            <ul className="navigation">
              <li className="nav-elements"><Link to="/" className="nav-link">About Us</Link></li>
              <li className="nav-elements"><Link to="/" className="nav-link">Services</Link></li>
              <li className="nav-elements"><Link to="/" className="nav-link">Reviews</Link></li>
              <li className="nav-elements"><Link to="/" className="nav-link">Staff</Link></li>
              <li className="nav-elements"><Link to="/" className="nav-link">Location</Link></li>
              <li className="nav-elements"><Link to="/" className="nav-link">Gallery</Link></li>
              <li className="nav-elements"><Link to="/" className="nav-link">Contact</Link></li>
            </ul>
            <p className="copyrights">© Corner Barber 2023</p>
          </div>
        </section>
      </footer>
    </>
  );
}
