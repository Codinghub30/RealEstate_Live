import React from "react";
import Header from "../Component/Header";
import img1 from "../Component/Images/img1.jpg";
import Money from "../Component/Images/money.png";
import Health from "../Component/Images/Health.png";
import Good from "../Component/Images/Good.png";
import Perks from "../Component/Images/perks.png";
import Integrity from "../Component/Images/Integrity.png";
import Innovative from "../Component/Images/Innovative.png";
import Teamwork from "../Component/Images/Teamwork.png";
import Usercetric from "../Component/Images/Usercetric.png";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import "../Component/css/Career.css";
import Footer from "../Component/Footer";

const Career = () => {
  return (
    <div>
      <Header />
      <div className="container-career">
        <div className="main-Img">
          <div className="career-overlay-text">Join Our Team!</div>
        </div>
        <div className="life">
          <h2>Life At #MPC</h2>
          <p>
            <RiDoubleQuotesL style={{ fontSize: "26px", marginTop: "-36px" }} />
            At MPC Real Estate, supporting our employees is a core part of how
            we do business. We believe in fostering a wholesome individual and
            team balance, emphasizing absolute autonomy at all levels while
            celebrating the process of achieving both individual and group
            goals. We take pride in our supportive and inclusive culture that
            nurtures the creative side of our employees. Therefore, we encourage
            engagement in de-stressing and rejuvenating activities at work.
            <RiDoubleQuotesR style={{ fontSize: "26px", marginTop: "10px" }} />
          </p>
          <img src={img1} alt="Not Found" />
        </div>

        <div className="benefit">
          <h2 className="benefit-heading">Benefits and Perks</h2>
          <p className="benefit-para">
            We are of a strong opinion that our employees are the architects of
            our success and growth. We thus leave no stone unturned to extend
            our gratitude and appreciation to them.
          </p>
          <div className="icons">
            <div className="icon-item">
              <img src={Perks} alt="not found" />
              <h2>Highly Competitive Compensation</h2>
            </div>
            <div className="icon-item">
              <img src={Good} alt="not found" />
              <h2>Health and Insurance</h2>
            </div>
            <div className="icon-item">
              <img src={Health} alt="not found" />
              <h2>Supersonic Growth</h2>
            </div>
            <div className="icon-item">
              <img src={Money} alt="not found" />
              <h2>Other Benefits</h2>
            </div>
          </div>
        </div>

        <div className="core">
          <h2 className="core-heading">Our Core Values</h2>
          <p className="core-para">
            At MPC, our goal is to turn transactions into life-changing
            experiences. We strive to constantly better ourselves through
            self-reflection and keep our ethos as the foundation of our conduct.
          </p>
          <div className="icons">
            <div className="icon-item">
              <img src={Integrity} alt="not found" />
              <h2>Integrity</h2>
            </div>
            <div className="icon-item">
              <img src={Innovative} alt="not found" />
              <h2>Innovation</h2>
            </div>
            <div className="icon-item">
              <img src={Teamwork} alt="not found" />
              <h2>Teamwork</h2>
            </div>
            <div className="icon-item">
              <img src={Usercetric} alt="not found" />
              <h2>User Centric</h2>
            </div>
          </div>
        </div>
      </div>
      <section className="career-form-section">
        <h2>Fill in Your Details</h2>
        <form className="career-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" />

          <label htmlFor="role">Applying for:</label>
          <input type="text" id="role" name="role" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button className="submit-button-career" type="submit">
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Career;
