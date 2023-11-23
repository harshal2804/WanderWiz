import React from 'react';
import '../css/ItineraryOption4.css';
import { IoAccessibility } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { MdFamilyRestroom} from "react-icons/md";
import { GiThreeFriends} from "react-icons/gi";
import { useLocation, useNavigate } from 'react-router-dom';
import getDate from '../utils/getDate';
import ItineraryOption4_1 from './ItineraryOption4_1';

function ItineraryOption4() {

  const { state } = useLocation();
  const { startDate, endDate } = state;
  const startingDate = getDate(startDate);
  const endingDate = getDate(endDate);
  const navigate = useNavigate();

  const handleNext  = (e) => {
    e.preventDefault();
    navigate("/createItinerary5", { state: { ...state, check1, check2 } });
  }
  
  const handleBack = (e) => {
    e.preventDefault();
    navigate("/createItinerary3", { state: { ...state } });
  }

  return (
    <div className="App4 min-vh-100 d-flex flex-column justify-content-between">
      <header className="App-header4">
        <h1>Who are you traveling with?</h1>
        <h3>start date: {startingDate}</h3>
        <h3>end date: {endingDate}</h3>
      </header>
      <div className="row4">
        <div className="box4">
        <IoAccessibility className="icon4">Icon1</IoAccessibility>
          <p className="para4">Wandering solo</p>
        </div>
        <div className="box4">
          <BsPeopleFill className="icon4">Icon 2</BsPeopleFill>
          <p className="para4">Holidaying as couple</p>
        </div>
        <div className="box4">
          <MdFamilyRestroom className="icon4">Icon 3</MdFamilyRestroom>
          <p className="para4">Vacatinoing with family</p>
        </div>
        <div className="box4">
          <GiThreeFriends className="icon4">Icon 4</GiThreeFriends>
          <p className="para4">traveling with friends</p>
        </div>
      </div>

      <div className="container14">
      <div className="back4" onClick={(e) => handleBack(e)}> <button id="i14">back</button></div>
      <div className="next4" onClick={(e) => handleNext(e)}> <button id="i24">next</button></div>
      </div>
    </div>
  );
}

export default ItineraryOption4;
