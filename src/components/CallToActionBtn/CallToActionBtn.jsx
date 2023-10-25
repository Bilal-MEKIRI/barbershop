import { Link } from 'react-router-dom';
import './CallToActionBtn.scss'

export default function CallToActionBtn({ linkTo, content }) {
  return (
    <a href={linkTo} className="call-to-action-btn"><p className="content">{content}</p></a>
  );
}
