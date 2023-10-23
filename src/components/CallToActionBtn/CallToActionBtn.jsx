import { Link } from 'react-router-dom';
import './CallToActionBtn.scss'

export default function CallToActionBtn({ linkTo, content }) {
  return (
    <Link to={linkTo} className="call-to-action-btn"><p className="content">{content}</p></Link>
  );
}
