import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Airbnb</div>
      <ul className="navbar__links">
        <li>Home</li>
        <li>Experiences</li>
        <li>Online Experiences</li>
      </ul>
      <div className="navbar__menu">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
