import './ServicesCard.scss';

export default function ServicesCard({title, description, duration, imgUrl}) {
  return (
    <div className="card">
      <div className="info">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        <p className="service-duration">{duration}</p>
      </div>
      <img src={imgUrl} alt="Classic hair cut" className="service-photo" />
    </div>
  );
}
