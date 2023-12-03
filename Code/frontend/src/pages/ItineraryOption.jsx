import React, { useContext } from "react";
import { Button, Dropdown, Form, Placeholder } from "react-bootstrap";
import "../css/itineraryOption.css";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";

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

const fetchUserDetails = async (token) => {
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const res = await axios.get(`${VITE_BACKEND_URL}api/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("user details: ", res.data);
  res.data.itineraries.map((element) => {
    element.activities.some((activity) => {
      if(activity.photo) {
        element.photo = activity.photo;
        return true;
      }
      return false;
    })
    element._id = element._id.toString();
    const startDateFormatted = new Date(element.startDate).toISOString().split("T")[0];
    const endDateFormatted = new Date(element.endDate).toISOString().split("T")[0];
    element.startDate = startDateFormatted;
    element.endDate = endDateFormatted;
  })

  return res.data;
};

function ItineraryOption() {
  const [query, setQuery] = useState(""); //user.currentCity
  const [destination, setDestination] = useState({});
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const { data: suggestions, error, isLoading } = useQuery(
    ["suggestions", query],
    () => fetchSuggestions(query),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: userDetails } = useQuery("userDetails", () =>
    fetchUserDetails(user.token)
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
      startDate: startDate.toISOString().split("T")[0],
    });
  };

  const handleEndDateChange = (e) => {
    e.preventDefault();
    const endDate = new Date(e.target.value);
    setDestination({
      ...destination,
      endDate: endDate.toISOString().split("T")[0],
    });
  };

  const [errors, setErrors] = useState({ destination: '', startDate: '', endDate: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { destination: '', startDate: '', endDate: '' };

    // Check if the destination field is empty
    if (query.trim() === '') {
      newErrors.destination = 'Please enter a destination.';
    }

    // Check if the start date is selected
    if (!destination.startDate) {
      newErrors.startDate = 'Please select a start date.';
    }

    // Check if the end date is selected
    if (!destination.endDate) {
      newErrors.endDate = 'Please select an end date.';
    }

    // If there are errors, update the state and return
    if (newErrors.destination || newErrors.startDate || newErrors.endDate) {
      setErrors(newErrors);
      return;
    }
    
    navigate("/createItinerary2", { state: { ...destination, currentCity: userDetails.currentCity} }) // user.currentCity
  };

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Add leading zeros if needed
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
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
              placeholder="Search Destination"
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
            ) : suggestions.length === 0 ? (
              <Dropdown.Item>No results found</Dropdown.Item>
            ) : (
              suggestions.map((venue) => {
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

      <div className="p-2 date-inputs w-75" style={{ width: "auto", maxWidth: "500px" }}>
        {errors.destination && <p className="text-danger error-message ">{errors.destination}</p>}
        start date :
        <input type="date" onChange={(e) => handleStartDateChange(e)} min={getCurrentDate()} value={destination.startDate || ''}/>
        {errors.startDate && <p className="text-danger error-message">{errors.startDate}</p>}
        end date :
        <input type="date" onChange={(e) => handleEndDateChange(e)} min={getCurrentDate()} value={destination.endDate || ''}/>
        {errors.endDate && <p className="text-danger error-message">{errors.endDate}</p>}
      </div>
      <Button variant="dark" onClick={(e) => handleSubmit(e)}>submit</Button>
    </div>
  );
}

export default ItineraryOption;
