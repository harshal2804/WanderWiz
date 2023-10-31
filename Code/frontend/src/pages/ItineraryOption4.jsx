import React from 'react';
import '../css/ItineraryOption4.css';
import { IoAccessibility } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { MdFamilyRestroom} from "react-icons/md";
import { GiThreeFriends} from "react-icons/gi";

function ItineraryOption4() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Who are you traveling with?</h1>
        <h3>start date: </h3>
        <h3>end date: </h3>
      </header>
      <div className="row">
        <div className="box">
        <IoAccessibility className="icon">Icon1</IoAccessibility>
          <p >Wandering solo</p>
        </div>
        <div className="box">
          <BsPeopleFill className="icon">Icon 2</BsPeopleFill>
          <p>Holidaying as couple</p>
        </div>
        <div className="box">
          <MdFamilyRestroom className="icon">Icon 3</MdFamilyRestroom>
          <p>Vacatinoing with family</p>
        </div>
        <div className="box">
          <GiThreeFriends className="icon">Icon 4</GiThreeFriends>
          <p>traveling with friends</p>
        </div>
      </div>

      <div className="container1">
      <div className="back"> <button id="i1">back</button></div>
      <div className="next"> <button id="i2">next</button></div>
      </div>
    </div>
  );
}

export default ItineraryOption4;
