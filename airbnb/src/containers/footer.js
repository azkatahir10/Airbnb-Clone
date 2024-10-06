import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__links">
        <li>Support</li>
        <li>Community</li>
        <li>Hosting</li>
        <li>About</li>
      </ul>
      <div className="footer__social">
        <span>Follow us on social media</span>
        {/* Add social media icons */}
      </div>
      <p>&copy; 2024 Airbnb Clone. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
