import './OpeningHours.scss';

export default function OpeningHours() {
  return (
    <div className="container">
      <div className="schedule">
        <p className="day">Monday</p>
        <p className="hours">9:00 AM - 7:00 PM</p>
      </div>
      <div className="schedule">
        <p className="day">Tuesday</p>
        <p className="hours">9:00 AM - 7:00 PM</p>
      </div>
      <div className="schedule">
        <p className="day">Wednesday</p>
        <p className="hours">10:00 AM - 8:00 PM</p>
      </div>
      <div className="schedule">
        <p className="day">Thursday</p>
        <p className="hours">9:00 AM - 7:00 PM</p>
      </div>
      <div className="schedule">
        <p className="day">Friday</p>
        <p className="hours">9:00 AM - 8:00 PM</p>
      </div>
      <div className="schedule">
        <p className="day">Saturday</p>
        <p className="hours">8:00 AM - 5:00 PM</p>
      </div>
      <div className="schedule">
        <p className="day">Sunday</p>
        <p className="hours">Closed</p>
      </div>
    </div>
  );
}
