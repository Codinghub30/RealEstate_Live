import React from 'react';
import '../Component/css/Contact.css';
import Header from "../Component/Header"
import contactImg from "../Component/Images/contact.png"
import joinImg from "../Component/Images/office.jpg"
import Loader from '../Component/Loading';
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading,selectLoading } from "../redux/loadingSlice"; 
import { useEffect, useState } from 'react';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    
    setIsLoading(true);
    dispatch(startLoading());
    const timer = setTimeout(() => {
      dispatch(stopLoading());
      setIsLoading(false);
    }, 1000); // Simulating a 2-second loading time
    console.log("loading");
    

    return () => clearTimeout(timer); // Cleanup the timer
  }, [dispatch]);

  return (
    <div className="container-contact">
      { isLoading && <Loader />}
      <div className="header">
      <Header />
        {/* <h1>Contact TMVC Real Estate</h1> */}
      </div>

      {/* <img className='Contact-img' src={joinImg}  alt='not found'  /> */}

      <div className='Contact-img'>
      <div className="overlay-text">Building a better tomorrow.</div>
      </div>

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
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.2592755504973!2d80.24109267418862!3d12.896709983921153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c3429875d35%3A0x9f17f1b193858c9e!2sTecci%20Park!5e0!3m2!1sen!2sin!4v1696482589923!5m2!1sen!2sin"
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
