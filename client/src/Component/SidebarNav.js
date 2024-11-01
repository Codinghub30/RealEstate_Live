// src/SidebarNav.js
import React from 'react';
import './css/Sidebar.css'; // Import the CSS file for styling

const SidebarNav = ({ isOpen, closeMenu }) => {
  return (
    <nav className={`sidebar ${isOpen ? 'sidebar-active' : ''}`}>
      <div className="close-btn" onClick={closeMenu}>
        &times;
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <a href="/" onClick={closeMenu}>Home</a>
        </li>
        <li className="sidebar-item">
          <a href="/about" onClick={closeMenu}>About</a>
        </li>
        <li className="sidebar-item">
          <a href="/services" onClick={closeMenu}>Services</a>
        </li>
        <li className="sidebar-item">
          <a href="/contact" onClick={closeMenu}>Contact</a>
        </li>
        <li className="sidebar-item">
          <a href="/career" onClick={closeMenu}>Career</a>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNav;
