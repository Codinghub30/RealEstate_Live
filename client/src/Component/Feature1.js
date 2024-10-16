// src/Feature.js
import React from "react";
// import "./Feature.css"; // Import the CSS file for styling
import apart3 from './Images/apart3.jpg';
import apart4 from './Images/apart4.jpg';
import plot1 from './Images/plot1.jpg';
import plot2 from './Images/plot2.jpg';

const Feature1 = () => {
  const data = [
    {
      image: apart3,
      PropName: "Oceanview Enclave",
      location: "Kalinga Nagar",
    },
    {
      image: plot1,
      PropName: "Shree Vihar Estate",
      location: "Shree Vihar",
    },
    {
      image: plot2,
      PropName: "Harmony Greens Plot",
      location: "Mancheswar",
    },
    {
      image: apart4,
      PropName: "Royal Orchid Residences",
      location: "Jaydev vihar",
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

export default Feature1;
