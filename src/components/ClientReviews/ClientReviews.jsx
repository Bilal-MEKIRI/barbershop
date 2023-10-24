import './ClientReviews.scss';

export default function ClientReviews({review, client}) {
  return (
    <div className="review-container">
      <img src="assets/icons/quote_icon_50.png" alt="quotes icon" className="quote quote-left" />
      <p className="review">{review}</p>
      <p className="client-name">{client}</p>
      <div className="stars-container">
        <img src="assets/icons/star_icon_48.png" alt="star icon" className="star" />
        <img src="assets/icons/star_icon_48.png" alt="star icon" className="star" />
        <img src="assets/icons/star_icon_48.png" alt="star icon" className="star" />
        <img src="assets/icons/star_icon_48.png" alt="star icon" className="star" />
        <img src="assets/icons/star_icon_48.png" alt="star icon" className="star" />
      </div>
      <img src="assets/icons/quote_icon_50.png" alt="quotes icon" className="quote quote-right" />
    </div>
  );
}
