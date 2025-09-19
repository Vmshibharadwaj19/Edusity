import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/img/msg-icon.png';
import mail_icon from '../../assets/img/mail-icon.png';
import phone_icon from '../../assets/img/phone-icon.png';
import location_icon from '../../assets/img/location-icon.png';
import white_arrow from '../../assets/img/white-arrow.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    // ✅ Your real Web3Forms access key
    formData.append("access_key", "7daaebad-4d00-4894-9f95-c89eee6f8a2b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully! I will get back to you soon.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("❌ " + data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send me a message <img src={msg_icon} alt="message icon" /></h3>
        <p>Fill out the form and I’ll respond to your email.</p>
        <ul>
          <li><img src={mail_icon} alt="mail icon" /> vamshibharadwaj19@gmail.com</li>
          <li><img src={phone_icon} alt="phone icon" /> +91-9390195498</li>
          <li><img src={location_icon} alt="location icon" />
            <p>Bangalore, India</p>
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter Your Name" required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter Your Email" required />

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter Your Mobile Number" required />

          <label>Message</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="White arrow Icon" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
