// src/Feature.js
import React from "react";
// import "./Feature.css"; // Import the CSS file for styling

const Feature3 = () => {
  const data = [
    {
      image: "https://via.placeholder.com/300x200",
      PropName: "Name13",
      location: "Location1",
    },
    {
      image: "https://via.placeholder.com/300x200",
      PropName: "Name14",
      location: "Location2",
    },
    {
      image: "https://via.placeholder.com/300x200",
      PropName: "Name15",
      location: "Location3",
    },
    {
      image: "https://via.placeholder.com/300x200",
      PropName: "Name16",
      location: "Location4",
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

export default Feature3;
