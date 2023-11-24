import React, { useContext } from 'react';
import '../css/ItineraryOption4_2.css';
import { FaPerson} from "react-icons/fa6";
import {PiPersonSimpleBold} from "react-icons/pi";
import getDate from '../utils/getDate';
import { useLocation } from 'react-router-dom';
import { useItineraryGeneration } from '../hooks/useItineraryGenration';
import { UserContext } from '../context/UserContext';

function ItineraryOption4_2({ handleTravelCount }) {

  const handleBack = (e) => {
    e.preventDefault();
    handleTravelCount(0);
  }

  const { state } = useLocation();

  const { startDate, endDate } = state;
  const startingDate = getDate(startDate);
  const endingDate = getDate(endDate);

  const user = useContext(UserContext)

  const itiGen = useItineraryGeneration();
  const handleNext = (e) => {
    e.preventDefault();
    itiGen.mutate({ state, token: user.token });
  }

  return (
    <div className="App42 min-vh-100">
      <header className="App-header42">
        <h1>How many of you are traveling?</h1>
        <h3>start date: {startingDate}</h3>
        <h3>end date: {endingDate}</h3>
      </header>

      <div className="row142"> 
        <div className="box42">
       <FaPerson className="icon42">icon1</FaPerson>
          <p className="para42">Adults</p>
          <p className='t42'>(16+ years)</p> 
          <input type='text' placeholder='No. of adults' className="In42"></input>
        </div>

        <div className="box42">
        <PiPersonSimpleBold className="icon42" >Icon1</PiPersonSimpleBold>
          <p className="para42">Kids</p>
          <p className='t42'>(0-16 years)</p> 
          <input type='text' placeholder='No. of kids' className="In42"></input>
        </div>
        </div>
        <div className="container142">
        <div className="back42" onClick={(e) => handleBack(e)}> <button id="i142">back</button></div>
       <div className="next42" onClick={(e) => handleNext(e)}> <button id="i242">next</button></div>
        </div>
      </div>
      
  );
}

export default ItineraryOption4_2;



