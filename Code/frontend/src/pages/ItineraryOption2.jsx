import "../css/itineraryOption2.css"
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getDate from "../utils/getDate";

function ItineraryOption2(){

    const navigate = useNavigate();
    const { state } = useLocation();
    // console.log(state);
    const { startDate, endDate, display_name, currentCity } = state;
    const startingDate = getDate(startDate);
    const endingDate = getDate(endDate);


    const [ destination, setDestination ] = useState(display_name);
    const [ startingCity, setStartingCity ] = useState(currentCity); // user.currentCity
    const [ endingCity, setEndingCity ] = useState(""); 
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        if(checkbox){
            setEndingCity(startingCity);
        }
        else{
            setEndingCity("");
        }
    }, [checkbox, startingCity]);

    const handleNext = (e) => {
        e.preventDefault();
        navigate("/createItinerary3", { state: { ...state, startingCity, endingCity } });
    }

    const handleBack = (e) => {
        e.preventDefault();
        navigate("/createItinerary", { state: { ...state } });
    }

    return(
            <>
            <div className="maindiv d-flex flex-column justify-content-between">
      <div id="header12">
      <h1>Duration for your trip</h1>
      <h3 className="st12">Start Date: {startingDate} </h3>
      <h3>End Date: {endingDate}</h3>
  </div>

  <div id="input-blocks12">
      <div className="input-block12">
          <label className="labelname" htmlFor="start">Enter Starting City:</label>
          <input type="text" value={startingCity} id="start" name="start" placeholder="Enter starting location" className="box12"
            onChange={(e) => setStartingCity(e.target.value)} 
          />
      </div>

      <div className="input-block12">
          <label className="labelname" htmlFor="destination">Your Destination City:</label>
          <input type="text" value={destination} id="destination" name="destination" className="box12" disabled/>
      </div>

      <div className="box012">
          <label className="labelname" id="a1" htmlFor="copyData">I'm coming back to Starting city:</label>
          <input className="bg-primary form-check-input dark" type="checkbox" id="copyData" name="copyData" onChange={(e) => setCheckbox(!checkbox)}/>
      </div>

      <div className="input-block12">
          <label className="labelname" htmlFor="return">Enter Returning City:</label>
          <input type="text" id="return" name="return" placeholder="Enter return location" className="box12" 
            value={endingCity}
            onChange={(e) => setEndingCity(e.target.value)}
          />
      </div>
  </div>
  <div className="container1">
    <div className="back4" onClick={(e) => handleBack(e)}> <button id="i14">back</button></div>
    <div className="next4" onClick={(e) => handleNext(e)}> <button id="i24">next</button></div>
    </div>
    </div>

            </>
        )
};

export default ItineraryOption2;
