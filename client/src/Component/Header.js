import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom"; // Added useLocation
import img from "../Component/Images/MPC.png";
import "./css/Header.css";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { Button } from "@mui/material";
import { FaPhone, FaSearch } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [activeItem, setActiveItem] = useState('');
  const [icon, setIcon] = useState(false);
  const [iconSearch, setIconSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Current location

useEffect(() => {

    const path = location.pathname.replace('/','');
    setActiveItem(path || 'home');

},[location])
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchInput.trim()) {
      navigate(`/services`);
      setSearchInput('');
      closeMenu();
    }
  };

  const handleRequestButton = () => {
    navigate("/contact");
  };

  return (
    <header>
      <div className="container-navbar">
        <div className="logo">
          <img src={img} alt="Not found" />
        </div>
        <div className="search-container-header">
          <input
            type="text"
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Search Services"
          />
          <Button
            variant="outlined" size="sm"
            onMouseEnter={() => setIconSearch(true)}
            onMouseLeave={() => setIconSearch(false)}
            onClick={handleSearchSubmit}
            endIcon={iconSearch && <FaSearch />}
          >
            Search
          </Button>
        </div>
        <Button variant="outlined"    onMouseEnter={() => setIcon(true)}
            onMouseLeave={() => setIcon(false)}
            onClick={handleRequestButton}
            endIcon={icon && <FaPhone />}>Request a Call</Button>
        <div className="request">
          {/* <Button
            variant="outlined"
            onMouseEnter={() => setIcon(true)}
            onMouseLeave={() => setIcon(false)}
            onClick={handleRequestButton}
            endIcon={icon && <FaPhone />}
          >
            Request a Call
          </Button> */}
      
        </div>
        <nav className={`navigation ${isOpen ? "nav-active" : ""}`}>
          <div className="close-btn" onClick={closeMenu}>
            &times;
          </div>
          <ul className="nav-list">
            <li className={`nav-item ${activeItem === 'home' ? 'active' : ''}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`nav-item ${activeItem === 'about' ? 'active' : ''}`}>
              <Link to="/about">About</Link>
            </li>
            <li className={`nav-item ${activeItem === 'services' ? 'active' : ''}`}>
              <Link to="/services">Services</Link>
            </li>
            <li className={`nav-item ${activeItem === 'contact' ? 'active' : ''}`}>
              <Link to="/contact">Contact</Link>
            </li>
            <li className={`nav-item ${activeItem === 'career' ? 'active' : ''}`}>
              <Link to="/career">Career</Link>
            </li>
            <li className={`nav-item ${activeItem === 'dashboard' ? 'active' : ''}`}>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <div className="header-footer">
            <div className="header-footer-button">
              <Button variant="contained" color="primary" onClick={() => alert("FAQ Button Clicked")}>FAQ</Button>
              <Button variant="contained" color="primary" onClick={() => alert("Help Button Clicked")}>Help</Button>
            </div>
            <p>MPC © {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          <HiOutlineSquares2X2 />
        </div>
      </div>
    </header>
  );
};

export default Header;
