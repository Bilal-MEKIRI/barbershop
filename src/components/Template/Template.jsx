import { Outlet, useLocation, Link } from 'react-router-dom';
import './Template.scss';
import '../../../utils/reset.scss';
import CallToActionBtn from '../CallToActionBtn/CallToActionBtn';

export default function Template() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/gallery' && (
      <header className="header" id="header-section">
        <div className="hero-section">
          <div className="hero-content-container">
            <h1 className="buisness-title">Your Corner, Your Barber: Corner Barber</h1>
            <p className="buisness-description">Experience the best in barbering at Corner Barber. Precision cuts, warm atmosphere, and unmatched style await. Book your appointment today.</p>
            <CallToActionBtn linkTo="/#contact-section" content="Book your appointment" />
          </div>
        </div>
      </header>
      )}
      <Outlet />
      <footer className="footer">
        <section className="footer-content-container">
          <a href="/#header-section" className="logo-link"> <img src="assets/icons/logo-white-on-transparent-background.png" alt="Website logo" className="logo"/></a>
          <div className="info">
            <ul className="navigation">
              <li className="nav-elements"><a href="/#about-section" className="nav-link">About Us</a></li>
              <li className="nav-elements"><a href="/#services-section" className="nav-link">Services</a></li>
              <li className="nav-elements"><a href="/#reviews-section" className="nav-link">Reviews</a></li>
              <li className="nav-elements"><a href="/#staff-section" className="nav-link">Staff</a></li>
              <li className="nav-elements"><a href="/#location-section" className="nav-link">Location</a></li>
              <li className="nav-elements"><Link to="/gallery" className="nav-link">Gallery</Link></li>
              <li className="nav-elements"><a href="/#contact-section" className="nav-link">Contact</a></li>
            </ul>
            <p className="copyrights">© Corner Barber 2023</p>
          </div>
        </section>
      </footer>
    </>
  );
}
