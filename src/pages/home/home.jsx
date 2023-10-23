import ServicesCard from '../../components/ServicesCard/ServicesCard';
import './home.scss';

export default function Home() {
  return (
    <>
      <section className="about">
        <div className="about-content-container">
          <h1 className="section-title">About Us</h1>
          <div className="content">
            <p className="info">At Corner Barber, we're not just a barbershop; we're a community of skilled barbers dedicated to crafting your perfect style. Nestled in your neighborhood, our cozy corner is where precision meets comfort. Join us and experience the art of grooming in a warm and friendly atmosphere.</p>
            <img src="assets/images/about_us.jpg" alt="Barbershop entrance" className="about-img" />
          </div>
        </div>
      </section>
      <section className="services">
        <div className="services-content-container">
          <h1 className="section-title">Our Services</h1>
          <div className="services-cards-container">
            <ServicesCard title="Classic Hair Cut - 25$" descrption="Our signature haircut includes a precision trimand styling to suit your individual preferences." duration="Approx. 30 minutes" imgUrl="src/assets/images/classic_hair_cut.jpg" />
          
            <ServicesCard title="Skin Fade - $35" descrption="Get a trendy skin fade haircut for a modern and stylish appearance." duration="Approx. 30 minutes" imgUrl="assets/images/skin_fade_cut.jpg" />

            <ServicesCard title="Beard Trim - $15" descrption="Keep your beard looking sharp with a professional trim and sculpting." duration="Approx. 15 minutes" imgUrl="assets/images/beard_trim.jpg" />

            <ServicesCard title="Hot Towel Shave - $30" descrption="Experience the ultimate in relaxation and grooming with a classic hot towel shave." duration="Approx. 30 minutes" imgUrl="assets/images/hot_towel_shave.jpg" />

          </div>
        </div>
      </section>
    </>
  );
}
