import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: 'teal',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    marginTop: '135px',
  };

  const linkStyle = {
    textDecoration: 'none',
    margin: '0 10px',
    transition: 'color 0.2s',
  };

  return (
    <div style={footerStyle}>
      <a href="#faq" style={linkStyle}>
        FAQ
      </a>
      <a href="#learn-more" style={linkStyle}>
        Learn More
      </a>
      <a href="#about-us" style={linkStyle}>
        About Us
      </a>
      <a href="#contact" style={linkStyle}>
        Contact
      </a>
    </div>
  );
}

export default Footer;
