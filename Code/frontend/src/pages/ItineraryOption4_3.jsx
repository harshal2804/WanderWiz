import React from 'react';
import '../css/ItineraryOption4_3.css';
import { HiOutlineUserGroup} from "react-icons/hi2";
import { MdOutlineGroups } from "react-icons/md";
import { MdGroups2} from "react-icons/md";
function ItineraryOption4_3() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Which age group do you fall in?</h1>
        <h3>start date: </h3>
        <h3>end date: </h3>
      </header>

      <div className="row1"> 
        <div className="box">
       <HiOutlineUserGroup className="icon">icon1</HiOutlineUserGroup>
          <p >18 - 30</p>
        </div>
        <div className="box">
          <MdOutlineGroups className="icon">Icon 2</MdOutlineGroups>
          <p>31 - 50</p>
        </div>
        <div className="box">
          <MdGroups2 className="icon">Icon 3</MdGroups2>
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

export default ItineraryOption4_3;
