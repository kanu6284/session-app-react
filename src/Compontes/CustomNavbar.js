import React, { useState } from 'react';
import { FaBell, FaEnvelope, FaGlobe, FaUserCircle, FaSearch, FaBars } from 'react-icons/fa';
import './Navbar.css';

const MyCustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`custom-navbar ${isOpen ? 'open' : ''}`}>
      <div className="orange-circle"></div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        <FaBars />
      </button>
      <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
        <form className="search-form">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><FaSearch /></span>
            </div>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </form>
        <div className="navbar-center">
          <span className="navbar-heading">Offers & Details</span>
        </div>
        <div className="navbar-links">
          <a href="#bell"><FaBell /></a>
          <a href="#envelope"><FaEnvelope /></a>
          <a href="#globe"><FaGlobe /></a>
          <a href="#profile"><FaUserCircle /></a>
        </div>
      </div>
    </nav>
  );
};

export default MyCustomNavbar;
