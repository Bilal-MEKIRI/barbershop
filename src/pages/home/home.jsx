import { Link } from 'react-router-dom';
import ServicesCard from '../../components/ServicesCard/ServicesCard';
import StaffMembers from '../../components/StaffMembers/StaffMembers';
import ClientReviews from '../../components/ClientReviews/ClientReviews';
import OpeningHours from '../../components/OpeningHours/OpeningHours';
import ContactForm from '../../components/ContactForm/ContactForm';
import './home.scss';

export default function Home() {
  return (
    <main>
      <section className="about" id="about-section">
        <div className="about-content-container">
          <h2 className="section-title">About Us</h2>
          <div className="content">
            <p className="info">At Corner Barber, we're not just a barbershop; we're a community of skilled barbers dedicated to crafting your perfect style. Nestled in your neighborhood, our cozy corner is where precision meets comfort. Join us and experience the art of grooming in a warm and friendly atmosphere.</p>
            <img src="assets/images/about_us.jpg" alt="Barbershop entrance" className="about-img" />
          </div>
        </div>
      </section>
      <section className="services" id="services-section">
        <div className="services-content-container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-cards-container">
            <ServicesCard title="Classic Hair Cut - 25$" description="Our signature haircut includes a precision trimand styling to suit your individual preferences." duration="Approx. 30 minutes" imgUrl="/assets/images/classic_hair_cut.jpg" />
            <ServicesCard title="Skin Fade - $35" description="Get a trendy skin fade haircut for a modern and stylish appearance." duration="Approx. 30 minutes" imgUrl="assets/images/skin_fade_cut.jpg" />
            <ServicesCard title="Beard Trim - $15" description="Keep your beard looking sharp with a professional trim and sculpting." duration="Approx. 15 minutes" imgUrl="assets/images/beard_trim.jpg" />
            <ServicesCard title="Hot Towel Shave - $30" description="Experience the ultimate in relaxation and grooming with a classic hot towel shave." duration="Approx. 30 minutes" imgUrl="assets/images/hot_towel_shave.jpg" />
          </div>
          <div className="gallery-link">
            <Link to="/gallery#gallery-page" className="link"><p className="see-our-work-link">See our work</p><img src='/assets/icons/double_right_chevron.png' className="double-chevron-right-icon" alt="double chevron right icon" /></Link>
          </div>
        </div>
      </section>

      <section className="staff" id="staff-section">
        <div className="staff-content-container">
          <h2 className="section-title">Our Staff</h2>
          <div className="staff-cards-container">
            <StaffMembers img="assets/images/barber_1.jpg" name="Ethan Martinez" />
            <StaffMembers img="assets/images/barber_2.jpg" name="Samuel Thompson" />
            <StaffMembers img="assets/images/barber_3.jpg" name="Benjamin Patel" />
          </div>
        </div>
      </section>

      <section className="reviews" id="reviews-section">
        <div className="reviews-content-container">
          <h2 className="section-title">Our Clients Reviews</h2>
          <div className="reviews-cards-container">
            <ClientReviews review="Corner Barber is the spot for guys like me. Great cuts, great service. Highly recommended." client="James S."/>
            <ClientReviews review="These barbers know their stuff. Always leave with a fresh haircut and a smile. Top-notch!" client="Mark B." />
            <ClientReviews review="The atmosphere here is unmatched. Every visit feels like catching up with old friends while getting a stellar trim." client="Daniel L." />
          </div>
        </div>
      </section>

      <section className="location" id="location-section">
        <div className="location-content-container">
          <h2 className="section-title">Where To Find Us</h2>
          <div className="address-container">
            <img src='assets/icons/location_icon_50.png' alt="location icon" className="location-icon"></img>
            <p className="address">123 Barber Lane Stylsville, HB 78901</p>
          </div>
          <div className="location-cards-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988761643!2d-0.2664059157476487!3d51.52873980477459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sfr!4v1698172211093!5m2!1sen!2sfr" className="map" style={{border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="googlemap" />
          </div>
        </div>
      </section>

      <section className="contact" id="contact-section">
        <div className="contact-content-container">
          <h2 className="section-title">Contact us</h2>
          <div className="contact-info">
            <div className="details">
              <p className="contact-modes">The easiest way to book an appointment is by calling us directly, or fill the form below and we'll call you back.</p>
              <div className="phone-number-container">
                <img src="assets/icons/phone_icon_30.png" alt="location icon" className="phone-icon" />
                <a href="tel:+15551234567" className="phone-number">+1 (555) 123-4567</a>
              </div>
            </div>
            <OpeningHours />
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
