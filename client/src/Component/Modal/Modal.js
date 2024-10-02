import React, { useState, useEffect } from "react";
import "./App.css";

const Modal = ({ service, closeModal }) => {
  const [modalWidth, setModalWidth] = useState(500); // Initial width of the modal

  useEffect(() => {
    const handleScroll = () => {
      // Calculate new width based on the scroll position
      const scrollY = window.scrollY;
      const newWidth = 500 + scrollY; // Increase width as the user scrolls

      // Update modal width (but cap it at a maximum)
      setModalWidth(newWidth > 800 ? 800 : newWidth); // max width 800px

      // Close the modal if scroll passes a certain threshold (e.g., 200px)
      if (scrollY > 200) {
        closeModal(); // Close modal after a threshold
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [closeModal]);

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ width: `${modalWidth}px` }}>
        <h2>{service?.title}</h2>
        <p>{service?.details}</p>
        <img src={service?.img} alt={service?.title} className="modal-image" />
        <button className="close-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
