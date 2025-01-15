// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/growmaxlogo11.png';

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
        <li><Link to="/event">Event</Link></li>
        <li><Link to="/booking">Book Here</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="GrowMax Logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;