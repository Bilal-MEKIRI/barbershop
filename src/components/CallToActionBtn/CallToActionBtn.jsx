import './CallToActionBtn.scss';

export default function CallToActionBtn({ linkTo, content, isSubmitButton }) {
  if (isSubmitButton) {
    return (
      <button type="submit" className="call-to-action-btn submit-btn">
        <p className="content">{content}</p>
      </button>
    );
  }

  return (
    <a href={linkTo} className="call-to-action-btn"><p className="content">{content}</p></a>
  );
}
