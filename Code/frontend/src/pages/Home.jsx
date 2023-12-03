import React from 'react';
import photo5 from "../assets/photo5.jpg"

function Home() {
  const centeredTextContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(70vh - 45px)',
    background: `url("${photo5}") center/cover no-repeat`,
    backgroundSize: '100% auto',
    //color: '#DDF2D1',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor : '#DDF2D1',
   
  };

  const centeredText = {
    fontSize: '5vh',
    fontWeight: 'bold',
    //color: '#9FFFCB',
    //color: '#71CB90',
    // color : '#6c9751',
    color : "#93dc5c",
    backdropFilter: 'blur(5px)',
    
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Adding text shadow
  };
  

  const butonStyle = {
    backgroundColor: '#D4F1F4',
    color: '#05588A',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    marginTop: '40px',
    borderRadius: '8px',
  };

  const aboutUsSection = {
    //background: 'teal',
    //backgroundColor : "rgb(1,49,98)",
    color: 'black',
    padding: '40px',
    textAlign: 'center',
    backgroundColor : '#DDF2D1',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const test2 = {
    //color : '#91E555',
    //color : '#FFF505',
    //color : '#F9A602',
    //color : '#d4af37',
    //color : '#ffc000',
    color : '#e7ee4f',
    // color : '#ccff00',
    // color : '#afb34f',
  }

  

  return (
    <>
    <div style={centeredTextContainer}>
      <div className="rounded p-4" style={centeredText}>
        World's Smartest Vacation Planner
        <br />

        <h4 style={test2}>WonderWiz - Trips, Tales & Trust</h4>
      </div>
      {/* <button style={butonStyle}> Add Itineraries </button> */}

    </div>


    {/* <div style={cardContainerStyle}>
        {bestPlaces.map((place, index) => (
          <Card
            key={index}
            title={place.title}
            description={place.description}
            image={place.image}
          />
        ))}
      </div> */}

<div style={aboutUsSection}>
<h1>About WanderWiz</h1>
<p>
Welcome to WanderWiz, your ultimate travel companion. We are dedicated to helping you plan your dream vacations with ease and precision. Our mission is to provide you with the smartest tools and insights to make your trips memorable. Whether it's finding the best places to visit, planning itineraries, or discovering hidden gems, we've got you covered. With WanderWiz, it's not just about traveling; it's about creating stories, making memories, and building trust.
</p>
</div>

</>

    
  );
}

export default Home;
