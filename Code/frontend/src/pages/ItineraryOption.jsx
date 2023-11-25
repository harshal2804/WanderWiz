import React from "react";
import { Button, Dropdown, Form, Placeholder } from "react-bootstrap";
import "../css/itineraryOption.css";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const placeSearchAPI = import.meta.env.VITE_HERE_PLACE_SEARCH_API;

const fetchSuggestions = async (query) => {
  if (query.length < 2) return [];
  const response = await axios.get(
    `${placeSearchAPI}geocode?q=${query}&apiKey=${
      import.meta.env.VITE_HERE_API_KEY
    }&lang=en&limit=3`
  );
  // response.data?.items.map((venue) => {
  //   console.log(venue);
  // });
  const uniquePlaces = [];
  const places = response.data.items?.map((venue) => {
    return {
      place_id: venue.id,
      country: venue.address.countryName,
      display_name: venue.title,
      latitude: venue.position.lat,
      longitude: venue.position.lng,
    };
  });

  return places;
};

function ItineraryOption() {
  const [query, setQuery] = useState("Gandhinagar"); //user.currentCity
  const [destination, setDestination] = useState({});
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate();
  const { data, error, isLoading } = useQuery(
    ["suggestions", query],
    () => fetchSuggestions(query),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSearchItemClick = (e, venue) => {
    console.log(venue.latitude, venue.longitude);
    setQuery(venue.display_name);
    setDestination({
      place_id: venue.place_id,
      country: venue.country,
      display_name: venue.display_name,
      latitude: venue.latitude,
      longitude: venue.longitude,
    });
    setIsActive(false);
  };

  const handleStartDateChange = (e) => {
    e.preventDefault();
    const startDate = new Date(e.target.value);
    setDestination({
      ...destination,
      startDate: startDate,
    });
  };

  const handleEndDateChange = (e) => {
    e.preventDefault();
    const endDate = new Date(e.target.value);
    setDestination({
      ...destination,
      endDate: endDate,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/createItinerary2", { state: { ...destination, currentCity: "Gandhinagar"} }) // user.currentCity
  };

  return (
    
    <div className="p-2 main">
      <h1 className="p-2 top-center">Build Your Own Customized Trip Plan</h1>
      <h4 className="p-2 top-center1">
        Create your travel itinerary. Book your accommodation, tours and flights
      </h4>
      <div className="p-2 mx-2 fs-5 dropdown-label">Select destination:</div>
      <div className="p-2 d-flex dropdown-container" id="drop">
        <Dropdown  as={Form} show={isActive} onFocus={() => setIsActive(true)}>
          <Form.Group
            className="drop-form"
      
            style={{ width: "auto", minWidth: "500px" }}
            controlId="searchDropdown"
          >
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
                  <Placeholder className="p-2 w-75" />
                </Placeholder>
                <Placeholder as={Dropdown.Item} animation="glow">
                  <Placeholder className="p-2 w-100" />
                </Placeholder>
                <Placeholder as={Dropdown.Item} animation="glow">
                  <Placeholder className="p-2 w-50" />
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

      <div className="p-2 date-inputs">
        start date :
        <input type="date" onChange={(e) => handleStartDateChange(e)} />
        end date :
        <input type="date" onChange={(e) => handleEndDateChange(e)} />
      </div>
      <Button variant="dark" onClick={(e) => handleSubmit(e)}>submit</Button>
    </div>
  );
}

export default ItineraryOption;
