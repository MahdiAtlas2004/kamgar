import React from 'react';
import './SocialMediaIcons.css'; // You can style your icons in this file

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <a href="https://t.me/Hamid_Kamgar" target="_blank" rel="noopener noreferrer" className="social-icon telegram">
        <i className="fab fa-telegram"></i>
      </a>
      <a href="https://wa.me/0798478850" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="https://www.facebook.com/hamidullah.feizi?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
        <i className="fab fa-facebook-f"></i>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
