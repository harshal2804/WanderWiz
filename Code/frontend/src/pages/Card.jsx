// Card.js

import React from 'react';

function Card(props) {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '10px',
    padding: '16px',
    width: '300px',
    height: '300px',
    background: `url(${props.image}) center/cover no-repeat`,
    
    
  };

  const descriptionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '10px',
    borderRadius: '8px',
    position: 'absolute',
    bottom: '10px',
    left: '10px',
  };

  return (
    <div style={cardStyle}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button style={{ backgroundColor: 'transparent', color: 'black', padding: '10px 20px'}}>
        Explore
      </button>
    </div>
  );
}

export default Card;
