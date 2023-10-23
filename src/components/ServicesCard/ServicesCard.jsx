import './ServicesCard.scss';

export default function ServicesCard({title, descrption, duration, imgUrl}) {
  return (
    <div className="card">
      <div className="info">
        <h1 className="service-title">{title}</h1>
        <p className="service-description">{descrption}</p>
        <p className="service-duration">{duration}</p>
      </div>
      <img src={imgUrl} alt="Classic hair cut" className="service-photo" />
    </div>
  );
}
