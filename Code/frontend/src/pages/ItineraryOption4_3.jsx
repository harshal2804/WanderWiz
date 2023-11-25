import React, { useContext } from 'react';
import '../css/ItineraryOption4_3.css';
import { HiOutlineUserGroup} from "react-icons/hi2";
import { MdOutlineGroups } from "react-icons/md";
import { MdGroups2} from "react-icons/md";
import { useLocation } from 'react-router-dom';
import getDate from '../utils/getDate';
import { useItineraryGeneration } from '../hooks/useItineraryGenration';
import { UserContext } from '../context/UserContext';

function ItineraryOption4_3({ handleTravelCount }) {

  const handleBack = (e) => {
    e.preventDefault();
    handleTravelCount(0);
  }

  const { state } = useLocation();

  const { startDate, endDate } = state;
  const startingDate = getDate(startDate);
  const endingDate = getDate(endDate);

  const user  = useContext(UserContext);

  const itiGen = useItineraryGeneration();
  const handleNext = (e) => {
    e.preventDefault();
    itiGen.mutate({ state, token: user.token });
  }

  return (
    <div className="App43 min-vh-100">
      <header className="App-header43">
        <h1>Which age group do you fall in?</h1>
        <h4>start date: {startingDate}</h4>
        <h4>end date: {endingDate}</h4>
      </header>

      <div className="row143"> 
        <div className="box43">
       <HiOutlineUserGroup className="icon43">icon1</HiOutlineUserGroup>
          <p className="para43">18 - 30</p>
        </div>
        <div className="box43">
          <MdOutlineGroups className="icon43">Icon 2</MdOutlineGroups>
          <p className="para43">31 - 50</p>
        </div>
        <div className="box43">
          <MdGroups2 className="icon43">Icon 3</MdGroups2>
          <p className="para43">51 and above</p>
        </div>
      </div>
      
      <div className="container143">
        <div className="back43" onClick={(e) => handleBack(e)}> <button id="i143">back</button></div>
        <div className="next43" onClick={(e) => handleNext(e)}> <button id="i243">next</button></div>
        </div>
    </div>
  );
}

export default ItineraryOption4_3;
