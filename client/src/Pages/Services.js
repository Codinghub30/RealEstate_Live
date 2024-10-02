import React, { useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import ServiceImg from "../Component/Images/services.jpg";
import Service1Img from "../Component/Images/services12.jpg";
import Service2Img from "../Component/Images/services13.jpg";
import Service3Img from "../Component/Images/services14.jpg";
import Service4Img from "../Component/Images/services15.jpg";
import Service5Img from "../Component/Images/services16.jpg";
import Modal from "../Component/Modal/Modal"; // Assuming Modal is a custom component
import "../Component/css/Services.css";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const service_details = [
    {
      img: Service1Img,
      title: "Title 1",
      details: "Example paragraph details which is only used for example. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: Service2Img,
      title: "Title 2",
      details: "Example paragraph details which is only used for example. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: Service3Img,
      title: "Title 3",
      details: "Example paragraph details which is only used for example. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: Service4Img,
      title: "Title 4",
      details: "Example paragraph details which is only used for example. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: Service5Img,
      title: "Title 5",
      details: "Example paragraph details which is only used for example. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  // Function to handle button click and open the modal
  const handleButtonClick = (service) => {
    setSelectedService(service); // Set the selected service details
    setIsModalOpen(true);        // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);       // Close the modal
    setSelectedService(null);    // Clear selected service
  };

  return (
    <div>
      <Header />
      <div className="service-content">
        <img src={ServiceImg} alt="Main Service" />
        <h2>Maximize Your Real Estate Success with Our End-to-End Services—From Market Analysis to Property Sales and Management.</h2>
      </div>
      <div className="card-container-service1">
        {service_details.map((item, index) => (
          <div key={index} className="card-link">
            <div className="card-service">
              <img src={item.img} className="card-image-service" alt={item.title} />
              <div className="card-content-service">
                <h2 className="card-title-service">{item.title}</h2>
                <p className="card-text-service">{item.details}</p>
              </div>
              <button className="service-button" onClick={() => handleButtonClick(item)}>
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <Modal
          service={selectedService}
          closeModal={closeModal}
        />
      )}

      <Footer />
    </div>
  );
};

export default Services;
