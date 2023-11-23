import React from 'react';
import '../css/ItineraryOption4_2.css';
import { FaPerson} from "react-icons/fa6";
import {PiPersonSimpleBold} from "react-icons/pi";

function ItineraryOption4_2() {
  return (
    <div className="App42">
      <header className="App-header42">
        <h1>How many of you are traveling?</h1>
        <h3>start date: </h3>
        <h3>end date: </h3>
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
        <div className="back42"> <button id="i142">back</button></div>
       <div className="next42"> <button id="i242">next</button></div>
        </div>
      </div>
      
  );
}

export default ItineraryOption4_2;



