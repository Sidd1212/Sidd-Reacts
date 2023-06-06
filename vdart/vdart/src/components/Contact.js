import React, { useState } from 'react';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset error message
    setError('');

    // Form data
    const formData = {
      firstName,
      lastName,
      phoneNumber,
      email,
      location,
      message,
    };

    // Perform form submission logic here
    console.log('Form submitted:', formData);

    // Clear form fields
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setLocation('');
    setMessage('');

    // Display success message
    setFormSubmitted(true);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    const phoneNumberRegex = /^[0-9]{0,10}$/; // Allow only numbers with up to 10 digits
    if (phoneNumberRegex.test(inputValue)) {
      setPhoneNumber(inputValue);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '115vh',
    backgroundImage: darkMode
      ? 'url("https://nmsdc.org/wp-content/uploads/2019/05/Delta_0525-1.jpg")' // Replace with the URL of the dark mode background image
      : 'url("https://www.vdart.com/wp-content/uploads/2016/10/syed-ahmed_2.jpg")', // Replace with the URL of the light mode background image
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: darkMode ? '#000' : '#BBB699',
    color: darkMode ? '#FFF' : '#000',
  };

  const formStyle = {
    width: '400px',
    padding: '150px',
    backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.1)' : 'rgba(244, 244, 244, 0.1)',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(1px)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    backdropFilter: 'blur(1px)',
    color: darkMode ? '#FFF' : '#000',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: darkMode ? '#FFF' : '#000',
  };

  const requiredIndicatorStyle = {
    color: 'red',
    marginLeft: '5px',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const successMessageStyle = {
    color: 'green',
    marginTop: '10px',
  };

  const darkModeButtonStyle = {
    position: 'fixed',
    top: '10px',
    right: '10px',
    padding: '5px',
    backgroundColor: darkMode ? '#000' : '#BBB699',
    color: darkMode ? '#000' : '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '20px',
  };

  const sliderContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
  };

  const sliderLabelStyle = {
    marginRight: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: darkMode ? '#FFF' : '#000',
  };

  const sliderStyle = {
    appearance: 'none',
    width: '40px',
    height: '20px',
    borderRadius: '10px',
    outline: 'none',
    opacity: 0.7,
    transition: '0.4s',
    backgroundColor: darkMode ? '#000' : '#BBB699',
  };

  const sliderThumbStyle = {
    appearance: 'none',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: '#fff',
    cursor: 'pointer',
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)',
    transition: '0.4s',
    border: 'none',
    transform: darkMode ? 'translateX(20px)' : 'translateX(0)',
  };

  const sliderCheckedStyle = {
    transform: 'translateX(20px)',
  };

  return (
    <div style={centerStyle}>
      <div style={formStyle}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={labelStyle} htmlFor="firstName">
              First Name<span style={requiredIndicatorStyle}>*</span>
            </label>
            <input
              style={inputStyle}
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="lastName">
              Last Name<span style={requiredIndicatorStyle}>*</span>
            </label>
            <input
              style={inputStyle}
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="phoneNumber">
              Phone Number<span style={requiredIndicatorStyle}>*</span>
            </label>
            <input
              style={inputStyle}
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
          
          <div>
            <label style={labelStyle} htmlFor="email">
              Email<span style={requiredIndicatorStyle}>*</span>
            </label>
            <input
              style={inputStyle}
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="location">
              Location<span style={requiredIndicatorStyle}>*</span>
            </label>
            <input
              style={inputStyle}
              type="text"
              id="location"
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="message">
              Message
            </label>
            <textarea
              style={{ ...inputStyle, resize: 'vertical' }}
              id="message"
              value={message}
              onChange={handleMessageChange}
              required
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
          {formSubmitted && (
            <p style={successMessageStyle}>Form submitted successfully!</p>
          )}
        </form>
      </div>
      <div style={darkModeButtonStyle} onClick={handleDarkModeToggle}>
        {darkMode ? '' : ''}
      </div>
      <div style={{ ...sliderContainerStyle, position: 'fixed', top: '10px', right: '10px' }}>
        <label style={sliderLabelStyle}>Dark Mode</label>
        <label htmlFor="darkModeToggle" style={{ ...sliderStyle, ...(darkMode && sliderCheckedStyle), }}>
          <input
            type="checkbox"
            id="darkModeToggle"
            checked={darkMode}
            onChange={handleDarkModeToggle}
            style={sliderThumbStyle}
          />
        </label>
      </div>
    </div>
  );
};

export default Contact;
