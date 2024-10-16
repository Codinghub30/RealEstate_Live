// src/Feature.js
import React from "react";
// import "./Feature.css"; // Import the CSS file for styling
import img1 from './Images/services13.jpg';
import apart1 from './Images/apart1.jpg';
import apart2 from './Images/Apart2.jpg';
import plot1 from './Images/plot1.jpg';


const Feature = () => {
  const data = [
    {
      image: img1,
      PropName: "Spring Plot",
      location: "Patia",
    },
    {
      image: plot1,
      PropName: "Greenfield Estate",
      location: "Khorda",
    },
    {
      image: apart1,
      PropName: "Apartment in Chandrasekarpur",
    location: "Chandrasekarpur",
    },
    {
      image: apart2,
      PropName: "Apartment in Laxmisagar",
      location: "Laxmisagar",
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

export default Feature;
