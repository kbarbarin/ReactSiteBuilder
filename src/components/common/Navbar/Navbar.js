import React from 'react';
import './Navbar.css';

const Navbar = ({ style, className }) => {
  return (
    <div className={`navbar-component ${className}`} style={style}>
      <div>Logo</div>
      <div className="navbar-options">
        {/* <a href="#">Accueil</a> */}
        {/* <a href="#">À propos</a> */}
        {/* <a href="#">Contact</a> */}
      </div>
    </div>
  );
};

export default Navbar;
