import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import img from "../Component/Images/MPC.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle isOpen state
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <header>
      <div className="container-navbar">
        <div className="logo">
          <img src={img} alt="Not found" />
        </div>
        <nav className={`navigation ${isOpen ? "nav-active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" onClick={closeMenu}>Home</a>
            </li> 
            <li className="nav-item">
              <a href="/about" onClick={closeMenu}>About</a>
            </li>
   
           
           <li className="nav-item">
              <a href="/services" onClick={closeMenu}>Service</a>
            </li>
            <li className="nav-item">
              <a href="/contact" onClick={closeMenu}>Contact</a>
            </li>
            <li className="nav-item">
              <a href="/career" onClick={closeMenu}>Career</a>
            </li>
          </ul>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
