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
      width: '200px',
      padding: '10px',
      margin: '10px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
    },
    image: {
      width: '100%',
      height: '200px',
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
      fontSize: '1.2em', // Increased font size for card names
      color: '#333',
    },
   

    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },

    '@media (max-width: 768px)': {
      cardContainer: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
    },
    '@media (max-width: 480px)': {
      cardContainer: {
        gridTemplateColumns: '1fr',
      },
      heading: {
        fontSize: '2em', // Adjusted font size for smaller screens
      },
      mission: {
        fontSize: '1.2em', // Adjusted font size for smaller screens
      },
      paragraph: {
        fontSize: '1em', // Adjusted font size for smaller screens
      },
    },
  };

  const handleCardClick = (link) => {
    window.open(link, '_blank');
  };

    const cardData = [
    {
      id: 1,
      name :'Harshal Patel', 
      image: '/harshal.jpeg',
      
      //paragraph:'hello this is test',
      
      link: 'https://www.linkedin.com/in/harshal-patel-0b61aa24b/',
      //<Card.Title>Card Title</Card.Title>
      
    },
    {
      id: 2,
      name :'Shaan Patel',
      image: '/shaan.jpeg',
      //paragraph:'hello this is test',
      link: 'http://www.linkedin.com/in/shaanpatel121',
    },
   
    {
      id: 3,
      name :'Mayank Gadhesariya',
      image: '/mayank.jpeg',
      //paragraph:'Hello this.',
      link: 'https://www.linkedin.com/in/mayank-gadhesariya-564685259/',
    },
    {
      id: 4,
      name :'Dhruv Limbad',
      image: '/dhruv.jpeg',
      
      link: 'https://www.linkedin.com/in/dhruv-limbad-a89a97214/',
    },
    {
      id: 5,
      name :'Pranali Thakkar',
      image: '/pranali.jpeg',
      link: 'https://www.linkedin.com/in/pranali-thakkar-859453273/?trk=contact-info',
    },
    {
      id: 6,
      name :'Vidhi Nakum',
      image: '/vidhi.jpeg',
      link: 'https://www.linkedin.com/in/vidhi-nakum-a123a4268/',
    },
    {
      id: 7,
      name :'Samarth Panchal',
      image: '/samarth.jpeg',
      link: 'https://www.linkedin.com/in/samarth-panchal-b77590254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      id: 8,
      name :'Pushprajsinh Mori',
      image: '/pushprajsinh.jpeg',
      link: 'https://www.linkedin.com/in/pushprajsinh-mori-5072b8261/',
    },

    {
      id: 9,
      name :'Anuj Pasaya',
      image: '/anuj.jpeg',
      link: 'https://www.linkedin.com/in/anuj-pasaya-8729b625a/',
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
      <br></br>
      <h5>Click on the photos to visit our Linkedin Profile</h5>
      <div className='d-flex justify-content-center'>
      <div 
        className='d-flex justify-content-center flex-wrap gap-3'
        style={{ width: "100vh" }}
      >
        
        {cardData.map((card) => (
          <div
            key={card.id}
            style={styles.card}
            onClick={() => handleCardClick(card.link)}
          >
            <div style={styles.cardContent}>
              <img src={card.image} alt={`Card ${card.id}`} style={styles.image} />
              <p style={styles.name}>{card.name}</p>
              <p style={styles.paragraph}>{card.paragraph}</p> {/* Add this line */}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};



export default ContactUsPage;

