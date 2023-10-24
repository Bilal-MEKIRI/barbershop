import './StaffMembers.scss';

export default function StaffMembers({img, name}) {
  return (
    <div className="staff-card">
      <img src={img} alt="Barber portrait" className="portrait" />
      <p className="name">{name}</p>
    </div>
  );
}
