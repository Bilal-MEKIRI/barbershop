import { useState } from 'react';
import './ContactForm.scss';
import { ClipLoader } from "react-spinners";
import CallToActionBtn from '../CallToActionBtn/CallToActionBtn';

export default function ContactForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = () => {
    const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,6}$/;
    if (!emailRegEx.test(email)) return 'Invalid email address';
    return null;
  };

  const validateName = () => { if (name.trim().length === 0) return 'Name Required'; return null; };
  const validatePhoneNumber = () => { const phoneRegEx = /^[0-9]{9}$/; if (phoneNumber.trim().length === 0) return 'Phone number required'; if (!phoneRegEx.test(phoneNumber)) return 'Invalid phone number (only numbers allowed, must be 10 digits)'; return null; };
  const validateDetails = () => { if (details.trim().length === 0) return 'Details required'; return null; };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setErrors((prevError) => ({ ...prevError, name: validateName() }));
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
    setErrors((prevError) => ({ ...prevError, phoneNumber: validatePhoneNumber() }));
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrors((prevError) => ({ ...prevError, email: validateEmail() }));
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
    setErrors((prevError) => ({ ...prevError, details: validateDetails() }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!errors.name && !errors.phoneNumber && !errors.email && !errors.details) {
      // Proceed with form submission logic
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="name" className="label">
        Name
        <input type="text" id="name" className="input" required value={name} onChange={handleNameChange} />
        {errors.name && <p className="error">{errors.name}</p>}
      </label>
      <label htmlFor="phone-number" className="label">
        Phone Number
        <input type="tel" id="phone-number" className="input" required value={phoneNumber} onChange={handlePhoneNumberChange} />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      </label>
      <label htmlFor="email" className="label">
        Email
        <input type="email" id="email" className="input" required value={email} onChange={handleEmailChange} />
        {errors.email && <p className="error">{errors.email}</p>}
      </label>
      <label htmlFor="details" className="label last-field">
        Additional Details
        <textarea type="text" id="details" className="text-area" required value={details} onChange={handleDetailsChange} />
        {errors.details && <p className="error">{errors.details}</p>}
      </label>
      <CallToActionBtn content={isLoading ? <ClipLoader /> : 'Book your appointment'} isSubmitButton="true" />
      {isSuccess ? <p className="success-message">We recieved your message, we'll get in touch with you soon.</p> : ''}
    </form>
  );
}
