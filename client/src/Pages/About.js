import React from "react";
import Header from "../Component/Header";
import mainImg from "../Component/Images/about.jpg";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Component/css/About.css";
import Footer from "../Component/Footer";
import About_Slider from "../Component/About_Slider";
import joinImg from "../Component/Images/office.jpg"
import joinImg1 from "../Component/Images/joinus.jpg"
import Image1 from '../Component/Images/img5.jpg';
import Image2 from '../Component/Images/img2.jpg';
import Image3 from '../Component/Images/img1.jpg';
import Image4 from '../Component/Images/img3.jpg';
import Image5 from '../Component/Images/img6.jpg';
const About = () => {
  const properties = [
    {
      price: "₹1.30 Cr",
      size: "1304 sqft",
      location: "Doddaballapur Main Road, Bangalore",
      bhk: "2 BHK",
      image: mainImg,
    },
    {
      price: "₹80 Lac",
      size: "1140 sqft",
      location: "Panathur, Bangalore",
      bhk: "2 BHK",
      image: mainImg,
    },
    {
      price: "₹2.78 Cr",
      size: "1693 sqft",
      location: "Dodda Nekkundi Extension, Kartik Nagar, Bangalore",
      bhk: "3 BHK",
      image: mainImg,
    },
    {
      price: "₹1.05 Cr",
      size: "1275 sqft",
      location: "Bellandur, Outer Ring Road, Bangalore",
      bhk: "2 BHK",
      image: mainImg,
    },
    // Add more properties as needed
  ];

  return (
    <div>
      <Header />

      <div className="content  ">
        <div className="mainImg">
        <img src={mainImg} className="" alt="Main" /> 
       
        </div>
        <div className="Main-content1">
        <h3>Smart Investments </h3>
        </div>

        <div className="Main-content2">
        <h3>for a Brighter Future</h3>
        </div>
        
   
      <div className="secondary">

        
      </div>
      <img src={joinImg1} className="cont-img"  alt="Not Found"   />
      <div className="cont">
        
      <h1 className="heading-about">MVC.com</h1>
        <h6 className="text-about">
          For years, millions of home shoppers have turned to realtor.com® to
          find their dream home. Operated by Move, Inc., realtor.com® offers a
          comprehensive list of for-sale properties, as well as the information
          and tools to make informed real estate decisions. Today, more than
          ever, realtor.com® is The Home of Home Search℠. Realtor.com® also
          offers homeowners a bevy of useful tools and resources through the My
          Home℠ dashboard. My Home℠ dashboard allows property owners to manage
          their home like the important investment it is by tracking their
          home’s value over time, researching and managing home improvements,
          and scouting other similar properties in the neighborhood.
        </h6>
      </div>
    
      </div>
      <div className="slider">
        <About_Slider />
      </div>
        
      <div className="value">
      <img src={joinImg}  alt="Join Image Not found" />
      <div className="content-value">
      <h2>Values</h2>
        <p>Join us and be part of a forward-thinking team that values your unique perspective and expertise. Together, we can achieve great things!</p>
        {/* <button>Join our team</button> */}
      </div>
      
      </div>

      <div className="aboutInfo">
        <div className="moreInfo">
          <img
            src={Image1}
            style={{ width: "20%", position: "absolute", left: "60%" }}
          />
          <h1 style={{ marginRight: "50%", marginTop: "8%", marginLeft: "2%" }}>
            Who We Are ?
          </h1>
          <p style={{ marginRight: "50%", marginLeft: "2%" }}>
            Who We Are With over 5 years of experience, TMVC stands out as a
            leading property service provider in India. Our expertise
            encompasses a broad spectrum of real estate services tailored to
            meet your unique needs, including the sale and purchase of premium
            flats, strategic property management, and personalized real estate
            consultancy.
          </p>
        </div>

        <div
          className="moreInfo2"
          style={{ marginRight: "50%", marginTop: "10%", marginLeft: "2%" }}
        >
          <img
            src={Image2}
            style={{ width: "20%", position: "absolute", left: "60%" }}
          />
          <h1>Why Choose TMVC?</h1>
          <p>
            Expertise and Experience: With more than 5 years in the industry, we
            have a proven track record of delivering exceptional property
            services. Customer-Centric Approach: Our commitment to customer
            satisfaction drives us to provide personalized services that cater
            to your specific needs. Comprehensive Solutions: From property
            transactions to management and consultancy, we offer a complete
            suite of services under one roof.
          </p>
        </div>
      </div>

      
      <div className="join">
    
        <h2>Join Our Team</h2>
        <p>Join us and be part of a forward-thinking team that values your unique perspective and expertise. Together, we can achieve great things!</p>
        <button>Join our team</button>
        {/* <img src={joinImg1}  alt="Not found"  /> */}
      
      </div>

      <div className="last-img" >
      <img src={Image1}  alt="Not found"   />
        <img src={Image3}  alt="Not found"   />
        <img src={Image4}  alt="Not found"   />
        <img src={Image5}  alt="Not found"   />
      </div>

      <Footer />
    </div>
  );
};

export default About;
