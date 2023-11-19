import { Component, useEffect, useState } from "react";
import "../css/itineraryOption3.css"
import { useLocation, useNavigate } from "react-router-dom";

function ItineraryOption3() {

    const { state } = useLocation();
    const navigate = useNavigate();

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);

    const handleNext = (e) => {
        e.preventDefault();
        navigate("/createItinerary4", { state: { ...state, check1, check2 } });
    }

    const handleBack = (e) => {
        e.preventDefault();
        navigate("/createItinerary2", { state: { ...state } });
    }

        return (
            <>
                <div className="mainDiv1 d-flex flex-column justify-content-between">
                <div className="header3">
                    <h1>How can we help you?</h1>
                    <h3 className="st3">Start Date: </h3>
                    <h3 className="end">End Date: </h3>
                </div>

                <div className="info-container3">
                    <div className="info3 info1">
                        <h2 className="t13">Transportation</h2>
                        <p className="p13">Please select the check box if you have already booked transportation</p>
                        <div className="chk">
                            <input className="form-check-input" type="checkbox" id="transportationCheckbox" onClick={() => setCheck1(!check1)} />
                        </div>
                        <div className="chk1">
                        {
                            check1 && 
                            
                            <div id="transportationInput" style={{ display: "flex"}}>
                                <div className="c3">
                                    <div className="c13">
                                        <label id="startDate">Start Date:</label>
                                        <input type="datetime-local" id="startDate" /><br/>
                                    </div>
                                    <div className="c1">
                                        <label id="endDate">End Date:</label>
                                        <input type="datetime-local" id="endDate" />
                                    </div>
                                </div>
                            </div>
                        
                    }
                    </div>
                    </div>
                    <div className="info3">
                        <h2 className="t13">Accommodation</h2>
                        <p className="p13">Please select the check box if you have already booked accommodation.</p>
                        <input className="form-check-input" type="checkbox" id="transportationCheckbox2" onClick={() => setCheck2(!check2)} />
                        
                    </div>
                    <div className="info3">
                        <h2 className="t13">Things to Do</h2>
                        <p className="p13">Information about things to do goes here.</p>
                    </div>
                </div>
                <div className="container13">
                    <div className="back4" onClick={(e) => handleBack(e)}> <button id="i14">back</button></div>
                    <div className="next4" onClick={(e) => handleNext(e)}> <button id="i24">next</button></div>
                </div>
                </div>
            </>
        )
    };

export default ItineraryOption3;