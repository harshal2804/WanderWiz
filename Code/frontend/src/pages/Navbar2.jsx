// import React from 'react';






// function Navbar() {
//   const navStyle = {
//     position: 'fixed', // Make the navbar fixed
//     top: 0, // Stick it to the top of the viewport
//     width: '100%', // Occupy the full width
//     display: 'flex',
//     alignItems: 'center',
//     background: '#333',
//     color: '#fff',
//     padding: '10px',
//     justifyContent: 'space-between',
//     height: '60px',
//     zIndex: 100, // Ensure it appears above other content
//   };

//   const footerStyle = {
//     backgroundColor: 'teal',
//     color: 'white',
//     padding: '20px',
//     textAlign: 'center',
//     marginTop : '135px',
//   };


//   const groupStyle = {
//     display: 'flex',
//     alignItems: 'center',
//   };

//   const linkStyle = {
//     textDecoration: 'none',
//     margin: '0 10px',
//     transition: 'color 0.2s',
//   };

//   const buttonStyle = {
//     backgroundColor: 'teal',
//     border: 'none',
//     color: 'white',
//     padding: '10px 20px',
//     cursor: 'pointer',
//     transition: 'background-color 0.2s',
//   };

//   const logoStyle = {
//     width: '50px',
//     height: '50px',
//     marginRight: '10px',
//   };

//   const centeredTextContainer = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 'calc(70vh - 45px)', // Slightly increase the height
//     background: `url("/public/Photo3.jpg") center/cover no-repeat`, // Keep "cover" for width
//     backgroundSize: '100% auto', // Maintain full width, adjust the height here
//     color: 'white',
//     flexDirection: 'column',
//     textAlign: 'center',
//   };

//   const aboutUsSection = {
//     //background: 'teal',
//     color: 'black',
//     padding: '40px',
//     textAlign: 'center',
//   };
  
  

//   const centeredText = {
//     fontSize: '36px', // Adjust the font size as needed
//     fontWeight: 'bold', // Adjust the font weight as needed
//     color: 'white', // Adjust the text color as needed
//   }; 

//   const centeredText2 = {
//     fontSize: '27px', // Adjust the font size as needed
//     fontWeight: 'bold', // Adjust the font weight as needed
//     color: 'white', // Adjust the text color as needed
//   };


//   const butonStyle = {
//     backgroundColor: 'teal', // Adjust the button's background color
//     color: 'white',
//     padding: '10px 20px',
//     cursor: 'pointer',
//     transition: 'background-color 0.2s',
//     marginTop: '40px', // Add margin to create space between the text and the button
//     borderRadius: '8px',
//   };
  

//   return (
//     <>
//       <style>
//         {`
//           a {
//             color: white;
//             transition: color 0.2s;
//           }

//           a:hover {
//             color: teal;
//           }

//           button {
//             background-color: teal;
//             border: none;
//             color: white;
//             padding: 10px 20px;
//             cursor: pointer;
//             transition: background-color 0.2s;
//           }

//           button:hover {
//             background-color: #0079b1; // Change to a different color on hover
//           }
//         `}
//       </style>
      // <nav style={navStyle}>
      //   <div style={groupStyle}>
      //     <a href="/" style={logoStyle}>
      //       <img
      //         src="/public/LogoHome.jpg"
      //         alt="WanderWiz Logo"
      //         width="50"
      //         height="50"
      //       />
      //     </a>

      //     <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
      //       <li>
      //         <a href="/" style={linkStyle}>
      //           Trip planner
      //         </a>
      //       </li>
      //       <li>
      //         <a href="/" style={linkStyle}>
      //           Things to do
      //         </a>
      //       </li>
      //       <li>
      //         <a href="/" style={linkStyle}>
      //           Tours
      //         </a>
      //       </li>
      //       <li>
      //         <a href="/" style={linkStyle}>
      //           Itineraries
      //         </a>
      //       </li>
      //     </ul>
      //   </div>

      //   <div style={groupStyle}>
      //     <a href="/" style={linkStyle}>
      //       Login
      //     </a>
      //     <button style={buttonStyle}>Sign Up</button>
      //   </div>
      // </nav>

//       <div style={centeredTextContainer}>
//         <div className="p-3" style={centeredText}>
//           World Smartest Vacation Planner
//           <br />
//           <h4>WonderWiz - Trips, Tales & Trust</h4>
//         </div>
//         <button style={butonStyle}> Add Itineraries </button>
//       </div>

//           <div style={aboutUsSection}>
//             <h1>About Us</h1>
//             <p>
//             Welcome to WonderWiz, your ultimate travel companion. We are dedicated to helping you plan your dream vacations with ease and precision. Our mission is to provide you with the smartest tools and insights to make your trips memorable. Whether it's finding the best places to visit, planning itineraries, or discovering hidden gems, we've got you covered. With WonderWiz, it's not just about traveling; it's about creating stories, making memories, and building trust.
//             </p>
//           </div>


//       {/* <div style={footerStyle}>
//         <a href="#faq" style={linkStyle}>
//           FAQ
//         </a>
//         <a href="#learn-more" style={linkStyle}>
//           Learn More
//         </a>
//         <a href="#about-us" style={linkStyle}>
//           About Us
//         </a>
//         <a href="#contact" style={linkStyle}>
//           Contact
//         </a>
//       </div>
//       <div>
//         &copy; {new Date().getFullYear()} Your Company Name
//       </div> */}
//     </>
//   );
// }

// export default Navbar;









import React from 'react';

function Navbar() {
  const navStyle = {
    //position: 'fixed', // Make the navbar fixed
    top: 0, // Stick it to the top of the viewport
    width: '100%', // Occupy the full width
    display: 'flex',
    alignItems: 'center',
    background: '#333',
    color: '#fff',
    padding: '10px',
    justifyContent: 'space-between',
    height: '60px',
    zIndex: 100, // Ensure it appears above other content
  };

  const groupStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const linkStyle = {
    textDecoration: 'none',
    margin: '0 10px',
    transition: 'color 0.2s',
  };

  const buttonStyle = {
    backgroundColor: 'teal',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  const logoStyle = {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  };

  return (
    <>
      <style>
        {`
          a {
            color: white;
            transition: color 0.2s;
          }

          a:hover {
            color: teal;
          }

          button {
            background-color: teal;
            border: none;
            color: white;
            padding: 10px 20px;
            cursor: pointer;
            transition: background-color 0.2s;
          }

          button:hover {
            background-color: #0079b1;
          }
        `}
      </style>
      <nav style={navStyle}>
        <div style={groupStyle}>
          <a href="/" style={logoStyle}>
            <img
              src="/public/LogoHome.jpg"
              alt="WanderWiz Logo"
              width="50"
              height="50"
            />
          </a>

          <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
            <li>
              <a href="/" style={linkStyle}>
                Trip planner
              </a>
            </li>
            <li>
              <a href="/" style={linkStyle}>
                Things to do
              </a>
            </li>
            <li>
              <a href="/" style={linkStyle}>
                Tours
              </a>
            </li>
            <li>
              <a href="/" style={linkStyle}>
                Itineraries
              </a>
            </li>
          </ul>
        </div>

        <div style={groupStyle}>
          <a href="/" style={linkStyle}>
            Login
          </a>
          <button style={buttonStyle}>Sign Up</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
