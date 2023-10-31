import React from 'react';
import '../css/ItineraryOption4_2.css';
import { FaPerson} from "react-icons/fa6";
import {PiPersonSimpleBold} from "react-icons/pi";

function ItineraryOption4_2() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>How many of you are traveling?</h1>
        <h3>start date: </h3>
        <h3>end date: </h3>
      </header>

      <div className="row1"> 
        <div className="box">
       <FaPerson className="icon">icon1</FaPerson>
          <p >Adults</p>
          <p className='t'>(16+ years)</p> 
          <input type='text' placeholder='No. of adults'></input>
        </div>

        <div className="box">
        <PiPersonSimpleBold className="icon" >Icon1</PiPersonSimpleBold>
          <p>Kids</p>
          <p className='t'>(0-16 years)</p> 
          <input type='text' placeholder='No. of kids'></input>
        </div>
        </div>
        <div className="container1">
        <div className="back"> <button id="i1">back</button></div>
       <div className="next"> <button id="i2">next</button></div>
        </div>
      </div>
      
  );
}

export default ItineraryOption4_2;



