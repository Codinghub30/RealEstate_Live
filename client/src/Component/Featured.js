import React from "react";
import "./css/Featured.css";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Featured = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const properties = [
    { price: "₹1.30 Cr", size: "1304 sqft", location: "Doddaballapur Main Road, Bangalore", bhk: "2 BHK" },
    { price: "₹80 Lac", size: "1140 sqft", location: "Panathur, Bangalore", bhk: "2 BHK" },
    { price: "₹2.78 Cr", size: "1693 sqft", location: "Dodda Nekkundi Extension, Kartik Nagar, Bangalore", bhk: "3 BHK" },
    { price: "₹1.05 Cr", size: "1275 sqft", location: "Bellandur, Outer Ring Road, Bangalore", bhk: "2 BHK" },
    // Add more properties as needed
  ];

  return (
    <div className="main">
      <h2>
        <span className="highlight">P</span>roperty Services
      </h2>
      <div className="seeAll1">
        <Link to="/services">

          <button>See all services ^</button>
        </Link>
      </div>
      <div className="button-container">
        <div className="button-line"></div>
      </div>
      <div className="card-container">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Placeholder"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Card Title</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Placeholder"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Card Title</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Placeholder"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Place one</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Featured;




