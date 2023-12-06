import React from 'react';

const ContactUsPage = () => {

  const textStyle = {
    width: '50vw', // 50% of viewport width
    textAlign: 'left',
    padding: '0 2vw', // 2% padding horizontally
    //backgroundColor : 'White',
    borderRadius : '3vh',
  }; 

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: '0 auto',
      padding: '40px 20px',
      textAlign: 'center',
      color: '#444',
      backgroundColor : '#DDF2D1',
    },
    heading: {
      fontSize: '3em', // Increased font size for heading
      color: '#2A9D8F',
      marginBottom: '20px',
      textTransform: 'uppercase',
      //fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif",
      fontSize : "6vh",
      fontweight : "bold",
      textAlign : 'center',
      fontFamily: "Montserrat, serif",
      fontweight : "bold",
    },
    mission: {

      fontSize: '2em', // Increased font size for mission
      color: '#2A9D8F',
      marginBottom: '15px',
      textAlign : 'center',
      fontFamily: "Montserrat, serif",
      fontweight : "bold",
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
      fontSize: '1.7em', // Increased font size for paragraph
      marginBottom: '20px', // Added margin bottom for separation
      fontFamily: "Montserrat, serif",
      
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
      {/* <h2 style={styles.heading}>Welcome to WonderWiz</h2>
      <div style={styles.paragraph}>
      <p >
            At WonderWiz, we believe that travel should be an enriching and stress-free experience from start to finish. Our goal is to empower every traveler by offering a robust and intuitive platform that streamlines the complexities of trip planning. 

      </p>
      </div>
      
      <h3 style={styles.mission}>Our Goal</h3>
      <p style={styles.paragraph}>
        At WanderWiz, our mission is to inspire and empower travelers to explore the world, creating memories that last a lifetime. 
        We strive to provide personalized travel experiences that cater to your preferences and offer expert advice for your journey.
      </p> */}

      <div className="my-4 d-flex flex-column align-items-center gap-5">
      <div style={textStyle}>
        <h2 style={styles.heading}>Welcome to WonderWiz</h2>
        <p style={{fontSize : '3.5vh',alignContent :'center'}}>
        We are WonderWiz, sparking your love for travel. Our goal is To be your reliable guide in uncovering amazing places. Let us make your travel dreams real with personalized attention.
        </p>
      </div>


      <div style={textStyle}>
        <h2 style={styles.mission}>Our Goal</h2>
        <p style={{fontSize : '3.5vh',alignContent :'center'}}>
        At WanderWiz, our mission is to inspire and empower travelers to explore the world, creating memories that last a lifetime. 
        We strive to provide personalized travel experiences that cater to your preferences and offer expert advice for your journey.        </p>
      </div>

      </div>
      <br/>
      
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

