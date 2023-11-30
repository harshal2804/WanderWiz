// import Container from "react-bootstrap/esm/Container";


// export default function Footer() {
//     return (
//         <>
//         <Container fluid style={{ backgroundColor: "#D4F1F4", width: "100%" , color :"#05588A" }} className="p-3 d-flex justify-content-center align-items-center">
//                     <span className="mx-2">© 2023</span>
//                     <span className="mx-2">WanderWiz</span>
//                     <a href="https://github.com/harshal2804/WanderWiz">
//                     <img src={github} style={{ height: "25px", width: "25px", marginLeft: "10px", marginRight: "10px" }}/>
//                     </a>
//         </Container>
//         </>
//     )
// };

import React from 'react';
import github from "../assets/github.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';


function Footer() {
  const footerStyles = {
    
    backgroundColor: '#D4F1F4', // Background color
    color: '#FFFFFF', // Font color
    overflow: 'hidden',
    marginTop: '50px', // Top margin
    marginBottom: '0',
    paddingBottom: '0',
  };

  const smallStyles = {
    fontSize: 'calc(12px + (15 - 12) * ((100vw - 360px) / (1600 - 360)))',
  };

  const navigate = useNavigate();

  

  return (
    <div style={footerStyles} className="container-fluid pb-0 mb-0 justify-content-center text-dark">
      <footer>
        <div className="row my-3 justify-content-center py-2">
          <div className="col-11">
            <div className="row">
              <div className="col-xl-8 col-md-4 col-sm-4 col-10 my-auto mx-auto a">
                <h3 className="text-muted mb-md-0 mb-5 bold-text">WanderWiz.</h3>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 bold-text"><b>MENU</b></h6>
                <ul className="d-flex flex-column align-item-left list-unstyled">
                  <li className='p-0 btn-link' onClick={() => navigate("/")}>Home</li>
                  <li className='p-0 btn-link' onClick={() => navigate("/itineraries")}>Itineries</li>
                  <li className='p-0 btn-link' onClick={() => navigate("/")}>About Us</li>
                </ul>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                <p className="mb-1">Daiict college, Reliance Cross Rd, Gandhinagar, Gujarat 382007</p>
                
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                <p className="social text-muted mb-0 pb-0 bold-text">
                <span className="mx-2">
                    <a href="https://github.com/harshal2804/WanderWiz" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{ fontSize: '30px' }}/>
                    </a>
                </span>
                <span className="mx-2">
                    <a href="https://github.com/harshal2804/WanderWiz" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '30px' }}/>
                    </a>
                </span>
                <span className="mx-2">
                    <a href="https://github.com/harshal2804/WanderWiz" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '30px' }}/>
                    </a>
                </span>
                <span className="mx-2">
                    <a href="https://github.com/harshal2804/WanderWiz" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '30px' }}/>
                    </a>
                </span>
                </p>
                <span className="mx-2">© 2023 WanderWiz</span>
                
                {/* <small className="rights"><span>&#174;</span> Pepper All Rights Reserved.</small> */}
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end">
                <h6 className="mt-55 mt-2 bold-text"><b>COMPANY</b></h6>
                <small><span><i className="fa fa-envelope" aria-hidden="true"></i></span>WanderWiz@gmail.com</small>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3">
                <h6 className=" bold-text"><b>Harshal Patel</b></h6>
                <small><span><i className="fa fa-envelope" aria-hidden="true"></i></span>202101270@daiict.ac.in</small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;






// import React from 'react';

// function Footer() {
//   const footerStyle = {
//     backgroundColor: '#f0f0f0',
//     padding: '20px',
//     display: 'flex',
//     justifyContent: 'space-between',
//   };

//   const columnStyle = {
//     width: '30%',
//   };

//   const headingStyle = {
//     fontSize: '1.2em',
//     marginBottom: '10px',
//   };

//   return (
//     <footer style={footerStyle}>
//       <div style={columnStyle}>
//         <h3 style={headingStyle}>Column 1</h3>
//         <h1>WanderWiz</h1>
//       </div>
//       <div style={columnStyle}>
//         <h3 style={headingStyle}>Column 2</h3>
//         <p>Content for column 2 goes here.</p>
//       </div>
//       <div style={columnStyle}>
//         <h3 style={headingStyle}>Column 3</h3>
//         <p>Content for column 3 goes here.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

