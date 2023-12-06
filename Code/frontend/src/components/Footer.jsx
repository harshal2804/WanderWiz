

import React from 'react';
import github from "../assets/github.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';


function Footer() {
  const footerStyles = {
    
    backgroundColor: '#073B3A', // Background color
    color: '#ffff99', // Font color
    overflow: 'hidden',
    //marginTop: '50px', // Top margin
    marginBottom: '0',
    paddingBottom: '0',
  };

  const smallStyles = {
    fontSize: 'calc(12px + (15 - 12) * ((100vw - 360px) / (1600 - 360)))',
  };

  const text2 = {
    color : '#21D375',
  }
  const navigate = useNavigate();

  

  return (
    <div style={footerStyles} className="container-fluid pb-0 mb-0 justify-content-center text-#e7ee4f">
      <footer>
        <div className="row my-1 justify-content-center py-2">
          <div className="col-11">
            <div className="row">
              <div className="col-xl-8 col-md-4 col-sm-4 col-10 my-auto mx-auto a">
              

                <h3 className="custom-text-color mb-md-0 mb-5 bold-text"  >WanderWiz.</h3>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 bold-text"><b style={text2}>MENU</b></h6>
                <ul className="d-flex flex-column align-item-left list-unstyled">
                  <li className='p-0 btn-link' onClick={() => navigate("/")}>Home</li>
                  <li className='p-0 btn-link' onClick={() => navigate("/itineraries")}>Itineries</li>
                  <li className='p-0 btn-link' onClick={() => navigate("/Contactus")}>About Us</li>
                </ul>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 bold-text mt-sm-0 mt-5"><b style={text2}>ADDRESS</b></h6>
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
                <span className="mx-2" style={text2}>© 2023 WonderWiz</span>
                
                {/* <small className="rights"><span>&#174;</span> Pepper All Rights Reserved.</small> */}
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end">
                <h6 className="mt-55 mt-2 text-muted bold-text"><b style={text2}>COMPANY</b></h6>
                <small><span><i className="fa fa-envelope" aria-hidden="true" ></i></span >Wonderwiz@gmail.com</small>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3">
                <h6 className="text-muted bold-text"><b style={text2}>Harshal Patel</b></h6>
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