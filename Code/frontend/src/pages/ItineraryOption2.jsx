import { Component } from "react";
import "../css/itineraryOption2.css"

class ItineraryOption2 extends Component{

    

    render() {
        return(
            <>
                <div id="header">
      <h1>Select duration for your cities</h1>
      <h3 className="st">Start Date: </h3>
      <h3>End Date:</h3>
  </div>

  <div id="input-blocks">
      <div className="input-block">
          <label for="start">Enter Starting City:</label>
          <input type="text" id="start" name="start" placeholder="Enter starting location" className="box1" />
      </div>

      <div className="input-block">
          <label for="destination">Enter Destination City:</label>
          <input type="text" id="destination" name="destination" placeholder="Enter destination location" className="box1" />
      </div>

      <div className="box">
          <label className="a1"for="copyData">I'm coming back to Starting city:</label>
          <input type="checkbox" id="copyData" name="copyData" />
      </div>

      <div className="input-block">
          <label for="return">Enter Returning City:</label>
          <input type="text" id="return" name="return" placeholder="Enter return location" className="box1" />
      </div>
  </div>
  <div className="container1">
    <div className="back"> <button id="i1">back</button></div>
    <div className="next"> <button id="i2">next</button></div>
    </div>

            </>
        )
    }
};

export default ItineraryOption2;