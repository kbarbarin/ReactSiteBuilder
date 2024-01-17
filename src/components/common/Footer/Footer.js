import React from 'react';
import './Footer.css';

const Footer = ({ style, className }) => {
  return (
    <div className={`footer-component ${className}`} style={style}>
      <div className="footer-options">
        <p>© 2024 Mon Application. Tous droits réservés.</p>
        <p>Contactez-nous : contact@monapplication.com</p>
      </div>
    </div>
  );
};

export default Footer;
