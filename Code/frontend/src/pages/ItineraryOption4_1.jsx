import React from 'react';
import '../css/itineraryOption4_1.css';
import { IoIosPerson} from "react-icons/io";
import { MdPerson3 } from "react-icons/md";
import { FaPersonCane} from "react-icons/fa6";
import { BsGenderMale} from "react-icons/bs";
import { BsGenderFemale} from "react-icons/bs";
import {LiaFemaleSolid} from "react-icons/lia";
import { SlUserFemale} from "react-icons/sl";
import { BiFemale} from "react-icons/bi";

function ItineraryOption4_1() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Which age group do you fall in?</h1>
        <h3>start date: </h3>
        <h3>end date: </h3>
      </header>

      <div className="container">
      <h2>male</h2>
      <BsGenderMale className='icons'></BsGenderMale>
      </div>
      <div className="row1"> 
        <div className="box">
       <IoIosPerson className="icon">icon1</IoIosPerson>
          <p >18 - 30</p>
        </div>
        <div className="box">
          <MdPerson3 className="icon">Icon 2</MdPerson3>
          <p>31 - 50</p>
        </div>
        <div className="box">
          <FaPersonCane className="icon">Icon 3</FaPersonCane>
          <p>51 and above</p>
        </div>
      </div>

      <div className="container">
      <h2>female</h2>
      <BsGenderFemale className='icons'></BsGenderFemale>
      </div>
      <div className="row2">
        <div className="box">
        <LiaFemaleSolid className="icon">Icon1</LiaFemaleSolid>
          <p >18 - 30</p>
        </div>
        <div className="box">
          <BiFemale className="icon">Icon 2</BiFemale>
          <p>31 - 50</p>
        </div>
        <div className="box">
          <SlUserFemale className="icon">Icon 3</SlUserFemale>
          <p>51 and above</p>
        </div>
        
      </div>
      <div className="container1">
        <div className="back"> <button id="i1">back</button></div>
       <div className="next"> <button id="i2">next</button></div>
        </div>
    </div>
  );
}

export default ItineraryOption4_1;
