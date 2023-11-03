import React from "react";
import {
  Button,
  Dropdown,
  Form,
  Placeholder,
} from "react-bootstrap";
import "../css/itineraryOption.css";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

const placeSearchAPI = import.meta.env.VITE_DEST_SEARCH_API;

const fetchSuggestions = async (query) => {
  if (query.length < 2) return [];
  const response = await axios.get(
    `${placeSearchAPI}?q=${query}&format=json&limit=3&addressdetails=1`
  );
  response.data?.map((venue) => {
    console.log(venue);
  });
  const uniquePlaces = [];
  const places = response.data?.map((venue) => {
    return {
      place_id: venue.place_id,
      country: venue.address.country,
      display_name: venue.display_name,
      latitude: venue.lat,
      longitude: venue.lon
    };
  });

  places.forEach((place) => {
    if (!uniquePlaces.some((p) => p.display_name === place.display_name)) {
      uniquePlaces.push(place);
    }
  });

  return uniquePlaces;

};

function ItineraryOption() {
  const [query, setQuery] = useState("Gandhinagar"); //user.currentCity
  const [destination, setDestination] = useState({});
  const [isActive, setIsActive] = useState(true);
  const { data, error, isLoading } = useQuery(["suggestions", query], () =>
    fetchSuggestions(query)
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSearchItemClick = (e, venue) => {
      setQuery(venue.display_name);
      setDestination({
        place_id: venue.place_id,
        country: venue.country,
        display_name: venue.display_name,
        latitude: venue.latitude,
        longitude: venue.longitude
      });
    setIsActive(false);
  };

  const handleStartDateChange = (e) => {
    e.preventDefault();
    const startDate = new Date(e.target.value);
    setDestination({
      ...destination,
      startDate: startDate
    });
  };

  const handleEndDateChange = (e) => {
    e.preventDefault();
    const endDate = new Date(e.target.value);
    setDestination({
      ...destination,
      endDate: endDate
    });
  };

  return (
    <div className="main">
      <h1 className="top-center">Build Your Own Customized Trip Plan</h1>
      <h4 className="top-center1">
        Create your travel itinerary. Book your accommodation, tours and flights
      </h4>
      <div className="d-flex dropdown-container">
        <div className="mx-2 fs-5 dropdown-label">Select destination: </div>
        <Dropdown 
          as={Form}
          show={isActive}
          onFocus={() => setIsActive(true)}
        >
          <Form.Group style={{ width: "auto", minWidth: "500px"}} controlId="searchDropdown">
            <Form.Control
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
            />
          </Form.Group>
          <Dropdown.Menu style={{ width: "auto", minWidth: "500px" }}>
            {isLoading ? (
              <>
                <Placeholder as={Dropdown.Item} animation="glow">
                  <Placeholder className="w-75" />
                </Placeholder>
                <Placeholder as={Dropdown.Item} animation="glow">
                  <Placeholder className="w-100" />
                </Placeholder>
                <Placeholder as={Dropdown.Item} animation="glow">
                  <Placeholder className="w-50" />
                </Placeholder>
              </>
            ) : query.length < 2 ? (
              <Dropdown.Item>Enter minimum 2 character</Dropdown.Item>
            ) : data.length === 0 ? (
              <Dropdown.Item>No results found</Dropdown.Item>
            ) : (
              data.map((venue) => {
                return (
                  <Dropdown.Item
                    key={venue.place_id}
                    onClick={(e) => handleSearchItemClick(e, venue)}
                  >
                    {venue.display_name}
                  </Dropdown.Item>
                );
              })
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="date-inputs">
        start date :
        <input
          type="date"
          onChange={(e) => handleStartDateChange(e)}
        />
        end date :
        <input
          type="date"
          onChange={(e) => handleEndDateChange(e)}
        />
      </div>
      <Button variant="dark">submit</Button>
    </div>
  );
}

export default ItineraryOption;
