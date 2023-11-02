import { Component } from "react";
import "../css/itineraryOption2.css"

class ItineraryOption2 extends Component{

    

    render() {
        return(
            <>
            <div className="maindiv">
      <div id="header12">
      <h1>Select duration for your cities</h1>
      <h3 className="st12">Start Date: </h3>
      <h3>End Date:</h3>
  </div>

  <div id="input-blocks12">
      <div className="input-block12">
          <label className="labelname" for="start">Enter Starting City:</label>
          <input type="text" id="start" name="start" placeholder="Enter starting location" className="box12" />
      </div>

      <div className="input-block12">
          <label className="labelname" for="destination">Enter Destination City:</label>
          <input type="text" id="destination" name="destination" placeholder="Enter destination location" className="box12" />
      </div>

      <div className="box0">
          <label className="labelname" id="a1" for="copyData">I'm coming back to Starting city:</label>
          <input className="form-check-input dark" type="checkbox" id="copyData" name="copyData" />
      </div>

      <div className="input-block12">
          <label className="labelname" for="return">Enter Returning City:</label>
          <input type="text" id="return" name="return" placeholder="Enter return location" className="box12" />
      </div>
  </div>
  <div className="container1">
    <div className="back"> <button id="i112">back</button></div>
    <div className="next"> <button id="i212">next</button></div>
    </div>
    </div>

            </>
        )
    }
};

export default ItineraryOption2;