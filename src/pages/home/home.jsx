import { Link } from 'react-router-dom';
import ServicesCard from '../../components/ServicesCard/ServicesCard';
import StaffMembers from '../../components/StaffMembers/StaffMembers';
import ClientReviews from '../../components/ClientReviews/ClientReviews';
import './home.scss';

export default function Home() {
  return (
    <>
      <section className="about" id="about-section">
        <div className="about-content-container">
          <h1 className="section-title">About Us</h1>
          <div className="content">
            <p className="info">At Corner Barber, we're not just a barbershop; we're a community of skilled barbers dedicated to crafting your perfect style. Nestled in your neighborhood, our cozy corner is where precision meets comfort. Join us and experience the art of grooming in a warm and friendly atmosphere.</p>
            <img src="assets/images/about_us.jpg" alt="Barbershop entrance" className="about-img" />
          </div>
        </div>
      </section>
      <section className="services" id="services-section">
        <div className="services-content-container">
          <h1 className="section-title">Our Services</h1>
          <div className="services-cards-container">
            <ServicesCard title="Classic Hair Cut - 25$" descrption="Our signature haircut includes a precision trimand styling to suit your individual preferences." duration="Approx. 30 minutes" imgUrl="src/assets/images/classic_hair_cut.jpg" />

            <ServicesCard title="Skin Fade - $35" descrption="Get a trendy skin fade haircut for a modern and stylish appearance." duration="Approx. 30 minutes" imgUrl="assets/images/skin_fade_cut.jpg" />

            <ServicesCard title="Beard Trim - $15" descrption="Keep your beard looking sharp with a professional trim and sculpting." duration="Approx. 15 minutes" imgUrl="assets/images/beard_trim.jpg" />

            <ServicesCard title="Hot Towel Shave - $30" descrption="Experience the ultimate in relaxation and grooming with a classic hot towel shave." duration="Approx. 30 minutes" imgUrl="assets/images/hot_towel_shave.jpg" />

          </div>
          <div className="gallery-link">
            <Link to={Home} className="link">See our work &gt;&gt;</Link>
          </div>
        </div>
      </section>

      <section className="staff" id="staff-section">
        <div className="staff-content-container">
          <h1 className="section-title">Our Staff</h1>
          <div className="staff-cards-container">
            <StaffMembers img="assets/images/barber_1.jpg" name="Ethan Martinez" />
            <StaffMembers img="assets/images/barber_2_version_2.jpg" name="Samuel Thompson" />
            <StaffMembers img="assets/images/barber_3_version_2.jpg" name="Benjamin Patel" />
          </div>
        </div>
      </section>

      <section className="reviews" id="reviews-section">
        <div className="reviews-content-container">
          <h1 className="section-title">Our Clients Reviews</h1>
          <div className="reviews-cards-container">
            <ClientReviews review="Corner Barber is the spot for guys like me. Great cuts, great service. Highly recommended." client="James S."/>
            <ClientReviews review="These barbers know their stuff. Always leave with a fresh haircut and a smile. Top-notch!" client="Mark B." />
            <ClientReviews review="The atmosphere here is unmatched. Every visit feels like catching up with old friends while getting a stellar trim. Can't imagine going anywhere else." client="Daniel L." />
          </div>
        </div>
      </section>

    </>
  );
}
