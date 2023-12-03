import "../css/itineraryOption2.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getDate from "../utils/getDate";

function ItineraryOption2() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { startDate, endDate, display_name, currentCity } = state;
  const startingDate = new Date(startDate).toLocaleDateString("en-CA");
  const endingDate = new Date(endDate).toLocaleDateString("en-CA");

  const [destination, setDestination] = useState(display_name);
  const [startingCity, setStartingCity] = useState(currentCity);
  const [endingCity, setEndingCity] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const [startingCityError, setStartingCityError] = useState("");
  const [endingCityError, setEndingCityError] = useState("");

  useEffect(() => {
    if (checkbox) {
      setEndingCity(startingCity);
    } else {
      setEndingCity("");
    }
  }, [checkbox, startingCity]);

  const handleNext = (e) => {
    e.preventDefault();
  
    // Validate starting city
    if (!startingCity) {
      setStartingCityError("Please enter the starting city");
    } else {
      setStartingCityError("");
    }
  
    // Validate returning city
    if (!checkbox && !endingCity) {
      setEndingCityError("Please enter the returning city");
    } else {
      setEndingCityError("");
    }
  
    // Navigate only if there are no errors and both cities are specified
    if (!startingCityError && !endingCityError && (startingCity || endingCity)) {
      navigate("/createItinerary3", { state: { ...state, startingCity, endingCity } });
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/createItinerary", { state: { ...state } });
  };

  return (
    <>
      <div className="maindiv d-flex flex-column justify-content-between">
        <div id="header12">
          <h1>Duration for your trip</h1>
          <h5 className="st12">Start Date: {startingDate} </h5>
          <h5>End Date: {endingDate}</h5>
        </div>

        <div id="input-blocks12">
          <div className="input-block12">
            <label className="labelname" htmlFor="start">
              Enter Starting City:
            </label>
            <input
              type="text"
              value={startingCity}
              id="start"
              name="start"
              placeholder="Enter starting location"
              className="box12"
              onChange={(e) => setStartingCity(e.target.value)}
            />
            {startingCityError && (
              <p className="error-message">{startingCityError}</p>
            )}
          </div>

          <div className="input-block12">
            <label className="labelname" htmlFor="destination">
              Your Destination City:
            </label>
            <input
              type="text"
              value={destination}
              id="destination"
              name="destination"
              className="box12"
              disabled
            />
          </div>

          <div className="box012">
            <label className="labelname" id="a1" htmlFor="copyData">
              I'm coming back to Starting city:
            </label>
            <input
              className="bg-primary form-check-input dark"
              type="checkbox"
              id="copyData"
              name="copyData"
              onChange={(e) => setCheckbox(!checkbox)}
            />
          </div>

          <div className="input-block12">
            <label className="labelname" htmlFor="return">
              Enter Returning City:
            </label>
            <input
              type="text"
              id="return"
              name="return"
              placeholder="Enter return location"
              className="box12"
              value={endingCity}
              onChange={(e) => setEndingCity(e.target.value)}
            />
            {endingCityError && (
              <p className="error-message">{endingCityError}</p>
            )}
          </div>
        </div>

        <div className="container1">
          <div className="back4" onClick={(e) => handleBack(e)}>
            {" "}
            <button id="i112">back</button>
          </div>
          <div className="next4" onClick={(e) => handleNext(e)}>
            {" "}
            <button id="i212">next</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItineraryOption2;
