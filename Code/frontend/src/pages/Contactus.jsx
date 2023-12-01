import React from 'react';

const ContactUsPage = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: '0 auto',
      padding: '40px 20px',
      textAlign: 'center',
      color: '#444',
    },
    heading: {
      fontSize: '3em', // Increased font size for heading
      color: '#2A9D8F',
      marginBottom: '20px',
      textTransform: 'uppercase',
    },
    mission: {
      fontSize: '1.5em', // Increased font size for mission
      color: '#2A9D8F',
      marginBottom: '15px',
    },
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '40px auto',
      maxWidth: '800px',
    },
    card: {
      width: '300px',
      padding: '10px',
      margin: '10px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
    },
    image: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '8px',
    },
    paragraph: {
      lineHeight: '1.6',
      color: '#555',
      fontSize: '1.2em', // Increased font size for paragraph
      marginBottom: '20px', // Added margin bottom for separation
    },
    name: {
      marginTop: '10px',
      fontSize: '1.5em', // Increased font size for card names
      color: '#333',
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
  };

  const handleCardClick = (link) => {
    window.open(link, '_blank');
  };

    const cardData = [
    {
      id: 1,
      name :'card 1', 
      image: '/tryphoto.jpg',
      link: 'https://www.google.com',
      
    },
    {
      id: 2,
      name :'card 2',
      image: 'https://via.placeholder.com/300',
      link: 'https://example.com/link2',
    },
   
    {
      id: 3,
      name :'card 3',
      image: 'https://via.placeholder.com/300',
      link: 'https://example.com/link1',
    },
    {
      id: 4,
      name :'card 4',
      image: 'https://via.placeholder.com/300',
      link: 'https://example.com/link1',
    },
    {
      id: 5,
      name :'card 5',
      image: 'https://via.placeholder.com/300',
      link: 'https://example.com/link1',
    },
    {
      id: 6,
      name :'card 6',
      image: 'https://via.placeholder.com/300',
      link: 'https://example.com/link1',
    },
    {
      id: 7,
      name :'card 7',
      image: 'https://via.placeholder.com/300',
      link: 'https://example.com/link1',
    },
    {
      id: 8,
      name :'card 8',
      image: 'https://via.placeholder.com/300',
      link: 'https://example.com/link1',
    },

    {
      id: 9,
      name :'card 9',
      image: 'https://via.placeholder.com/300',
      link: 'https://example.com/link1',
    },
  ].slice(0,9);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About Us</h2>
      <p style={styles.paragraph}>
        Welcome to our world of adventure! We are passionate about crafting unforgettable travel experiences.
        Join us on this journey as we explore the hidden treasures of the world together.
      </p>
      
      <h3 style={styles.mission}>Our Mission</h3>
      <p style={styles.paragraph}>
        At WanderWiz, our mission is to inspire and empower travelers to explore the world, creating memories that last a lifetime. 
        We strive to provide personalized travel experiences that cater to your preferences and offer expert advice for your journey.
      </p>
      
      <h3 style={styles.mission}>Our Slogan</h3>
      <p style={styles.paragraph}>"Explore Beyond, Journey Within"</p>
      
      <p style={styles.paragraph}>
        Join us on this adventure as we unlock the world's hidden treasures together!
      </p>

      <h1>Our Team Member</h1>

      <div style={styles.cardContainer}>
        {cardData.map((card) => (
          <div
            key={card.id}
            style={styles.card}
            onClick={() => handleCardClick(card.link)}
          >
            <div style={styles.cardContent}>
              <img src={card.image} alt={`Card ${card.id}`} style={styles.image} />
              <p style={styles.name}>{card.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUsPage;

