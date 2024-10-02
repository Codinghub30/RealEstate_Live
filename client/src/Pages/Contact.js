import React from 'react';
import '../Component/css/Contact.css';
import Header from "../Component/Header"
import contactImg from "../Component/Images/contact.png"
import joinImg from "../Component/Images/office.jpg"

const Contact = () => {

  return (
    <div className="container-contact">
      
      <div className="header">
      <Header />
        {/* <h1>Contact TMVC Real Estate</h1> */}
      </div>

      <img className='Contact-img' src={joinImg}  alt='not found'  />

      <div className="contact-info">
        
        <div className="info-item">
          <h2>Our Address</h2>
          <p>1234 Realty Lane <br /> Cityville, State 56789</p>
        </div>
        <div className="info-item">
          <h2>Call Us</h2>
          <p>(123) 456-7890</p>
        </div>
        <div className="info-item">
          <h2>Email Us</h2>
          <p>info@tmvcrealestate.com</p>
        </div>
        <div className="info-item">
          <h2>Office Hours</h2>
          <p>Monday - Friday: 9 AM - 6 PM<br />Saturday: 10 AM - 4 PM</p>
        </div>
      </div>

      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button className='submit-button' type="submit">Submit</button>
        </form>
      </section>

      <section className="map-section">
        <h2>Find Us Here</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <footer className="footer">
        <h2>Connect with Us</h2>
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
