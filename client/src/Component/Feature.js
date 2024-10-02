// src/Feature.js
import React from "react";
// import "./Feature.css"; // Import the CSS file for styling

const Feature = () => {
  const data = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
      PropName: "Name1",
      location: "Location1",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
      PropName: "Name2",
      location: "Location2",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
      PropName: "Name3",
      location: "Location3",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
      PropName: "Name4",
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

export default Feature;
