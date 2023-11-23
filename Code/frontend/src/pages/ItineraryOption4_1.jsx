import React, { useContext } from 'react';
import '../css/itineraryOption4_1.css';
import { IoIosPerson} from "react-icons/io";
import { MdPerson3 } from "react-icons/md";
import { FaPersonCane} from "react-icons/fa6";
import { BsGenderMale} from "react-icons/bs";
import { BsGenderFemale} from "react-icons/bs";
import {LiaFemaleSolid} from "react-icons/lia";
import { SlUserFemale} from "react-icons/sl";
import { BiFemale} from "react-icons/bi";
import { useLocation, useNavigate } from 'react-router-dom';
import getDate from '../utils/getDate';
import { useItineraryGeneration } from '../hooks/useItineraryGenration';
import { UserContext } from '../context/UserContext';

function ItineraryOption4_1({ handleTravelCount }) {

  const navigate = useNavigate();
  const { state } = useLocation();
  const itiGen = useItineraryGeneration();

  const handleBack = (e) => {
    e.preventDefault();
    handleTravelCount(0);
  }

  const handleNext = (e) => {
    e.preventDefault();
    itiGen.mutate({ state, token: user.token});
  }



  const { startDate, endDate } = state;
  const startingDate = getDate(startDate);
  const endingDate = getDate(endDate);
  const user = useContext(UserContext);

  return (
    <div className="App41 min-vh-100">
      <header className="App-header41">
        <h1>Which age group do you fall in?</h1>
        <h3>start date: {startingDate}</h3>
        <h3>end date: {endingDate}</h3>
      </header>

      <div className="container41">
      <h2>male</h2>
      <BsGenderMale className='icons41'></BsGenderMale>
      </div>
      <div className="row141"> 
        <div className="box41">
       <IoIosPerson className="icon41">icon1</IoIosPerson>
       <p className="para41">18 - 30</p>
        </div>
        <div className="box41">
          <MdPerson3 className="icon41">Icon 2</MdPerson3>
          <p className="para41">31 - 50</p>
        </div>
        <div className="box41">
          <FaPersonCane className="icon41">Icon 3</FaPersonCane>
          <p className="para41">51 and above</p>
        </div>
      </div>

      <div className="container41">
      <h2>female</h2>
      <BsGenderFemale className='icons41'></BsGenderFemale>
      </div>
      <div className="row241">
        <div className="box41">
        <LiaFemaleSolid className="icon41">Icon1</LiaFemaleSolid>
        <p className="para41">18 - 30</p>
        </div>
        <div className="box41">
          <BiFemale className="icon41">Icon 2</BiFemale>
          <p className="para41">31 - 50</p>
        </div>
        <div className="box41">
          <SlUserFemale className="icon41">Icon 3</SlUserFemale>
          <p className="para41">51 and above</p>
        </div>
        
      </div>
      <div className="container141">
        <div className="back41" onClick={(e) => handleBack(e)}> <button id="i141">back</button></div>
       <div className="next41" onClick={(e) => handleNext(e)}> <button id="i241">next</button></div>
        </div>
    </div>
  );
}

export default ItineraryOption4_1;
