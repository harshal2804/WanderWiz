import React, { Component } from 'react';
import '../css/itineraryOption.css'; // Import your CSS file

class ItineraryOption extends Component {
  constructor() {
    super();
    this.state = {
      startDate: '',
      endDate: '',
      searchQuery: '',
    };
  }

  handleStartDateChange = (e) => {
    this.setState({ startDate: e.target.value });
  };

  handleEndDateChange = (e) => {
    this.setState({ endDate: e.target.value });
  };

  handleSearchInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSearch = () => {
    // Implement your search functionality here
    // Use this.state.startDate, this.state.endDate, and this.state.searchQuery for your search logic
    console.log('Search Query:', this.state.searchQuery);
    console.log('Start Date:', this.state.startDate);
    console.log('End Date:', this.state.endDate);
  };

  render() {
    return (
      <div className="main">
        <h1 className="top-center" >Build Your Own Customized Trip Plan</h1>
        <h4 className="top-center1">Create your travel itinerary. Book your accommodation, tours and flights</h4>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Where do you want to go?"
            value={this.state.searchQuery}
            onChange={this.handleSearchInputChange}
          />
        </div>
        <div className="date-inputs">
        start date : 
          <input
            type="date"
            value={this.state.startDate}
            onChange={this.handleStartDateChange}
          />
         end date :
          <input
            type="date"
            value={this.state.endDate}
            onChange={this.handleEndDateChange}
          />
        </div>
        <div className="button-container">
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </div>
    );
  }
}

export default ItineraryOption;
