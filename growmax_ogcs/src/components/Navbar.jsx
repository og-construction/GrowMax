// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/growmaxlogo11.png';
import OGCS_logo from '../assets/OGCS_logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="GrowMax Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li className="dropdown">
          <span className="span">Event ▼</span>
          <ul className="dropdown-menu">
            <li><Link to="/event/upcoming">Upcoming Events</Link></li>
            <li><Link to="/event/completedevent">Completed Events</Link></li>
          </ul>
        </li>
        <li><Link to="/booking">Book Here</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="navbar-logo">
        <Link to="/">
          <img src={OGCS_logo} alt="OGCS Logo" /> {/* Correct variable usage */}
        </Link>
        </div>
    </nav>
  );
};

export default Navbar;