import React, { useContext } from 'react';
import '../css/ItineraryOption4.css';
import { IoAccessibility } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { MdFamilyRestroom} from "react-icons/md";
import { GiThreeFriends} from "react-icons/gi";
import { useLocation, useNavigate } from 'react-router-dom';
import getDate from '../utils/getDate';

function ItineraryOption4({ handleTravelCount }) {

  const { state } = useLocation();
  const { startDate, endDate } = state;
  const startingDate = getDate(startDate);
  const endingDate = getDate(endDate);
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/createItinerary3", { state: { ...state } });
  }

  const handleSolo = (e) => {
    e.preventDefault();
    handleTravelCount(1);
  }

  const handlCouple = (e) => {
    e.preventDefault();
    handleTravelCount(2);
  }

  const handleFam = (e) => {
    e.preventDefault();
    handleTravelCount(3);
  }


  return (
    <div className="App4 min-vh-100 d-flex flex-column justify-content-between">
      <header className="App-header4">
        <h1>Who are you traveling with?</h1>
        <h5>start date: {startingDate}</h5>
        <h5>end date: {endingDate}</h5>
      </header>
      <div className="row4">
        <div className="box4" onClick={(e) => handleSolo(e)}>
        <IoAccessibility className="icon4">Icon1</IoAccessibility>
          <p className="para4">Wandering solo</p>
        </div>
        <div className="box4" onClick={(e) => handlCouple(e)}>
          <BsPeopleFill className="icon4">Icon 2</BsPeopleFill>
          <p className="para4">Holidaying as couple</p>
        </div>
        <div className="box4" onClick={(e) => handleFam(e)}>
          <MdFamilyRestroom className="icon4">Icon 3</MdFamilyRestroom>
          <p className="para4">Vacatinoing with family</p>
        </div>
        <div className="box4" onClick={(e) => handleFam(e)}>
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
