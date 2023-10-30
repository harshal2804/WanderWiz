import React from 'react';

function Middle() {
  const centeredTextContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(70vh - 45px)',
    background: `url("/public/Photo3.jpg") center/cover no-repeat`,
    backgroundSize: '100% auto',
    color: 'white',
    flexDirection: 'column',
    textAlign: 'center',
  };

  const centeredText = {
    fontSize: '36px',
    fontWeight: 'bold',
    color: 'white',
  };

  const butonStyle = {
    backgroundColor: 'teal',
    color: 'white',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    marginTop: '40px',
    borderRadius: '8px',
  };

  const aboutUsSection = {
    //background: 'teal',
    color: 'black',
    padding: '40px',
    textAlign: 'center',
  };

  return (
    <>
    <div style={centeredTextContainer}>
      <div className="p-3" style={centeredText}>
        World Smartest Vacation Planner
        <br />
        <h4>WonderWiz - Trips, Tales & Trust</h4>
      </div>
      <button style={butonStyle}> Add Itineraries </button>

    </div>

<div style={aboutUsSection}>
<h1>About Us</h1>
<p>
Welcome to WonderWiz, your ultimate travel companion. We are dedicated to helping you plan your dream vacations with ease and precision. Our mission is to provide you with the smartest tools and insights to make your trips memorable. Whether it's finding the best places to visit, planning itineraries, or discovering hidden gems, we've got you covered. With WonderWiz, it's not just about traveling; it's about creating stories, making memories, and building trust.
</p>
</div>

</>

    
  );
}

export default Middle;
