// src/Feature.js
import React from "react";
import apart5 from './Images/apart5.jpg';
import apart6 from './Images/apart6.jpg';
import plot5 from './Images/plot5.jpg';
import plot6 from './Images/plot6.jpg';
import plot7 from './Images/plot7.jpg';
// import "./Feature.css"; // Import the CSS file for styling

const Feature2 = () => {
  const data = [
    {
      image: plot5,
      PropName: "Green Acres Plot",
      location: "Patrapada",
    },
    {
      image: apart6,
      PropName: "Sunset Meadows",
      location: "Kalinga Vihar",
    },
    {
      image: apart5,
      PropName: "Ocean Breeze Apartments",
      location: "Jaydev Vihar",
    },
    {
      image: plot6,
      PropName: "Shanti Vihar Plot",
      location: "Rasulgarh",
    },
    {
      image: plot7,
      PropName: "section 35",
      location: "Bhubaneswar-Puri Road",
    },
  ];

  return (
    <div className="feature-container">
      {data.map((item, index) => (
        <div
          className="card-initial"
          key={index}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="card-content-intial">
            <h2 className="card-title-initial">{item.PropName}</h2>
            <p className="card-description-initial">{item.location}</p>
            {/* <button className="card-button-initial">Click Me</button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature2;
