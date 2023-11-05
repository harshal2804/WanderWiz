import React, { Component, useContext } from 'react'
import Itinerary from '../components/Itinerary';
import { useQuery } from 'react-query';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const fetchItineraries = async ({ queryKey }) => {
  const res = await axios.get("http://localhost:3001/api/itinerary", {
    headers: {
      Authorization: `Bearer ${queryKey[1].token}`,
    }
  });
  res.data.map((element) => {
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
}

export default function Itineraries() {

    const user = useContext(UserContext);
    const { isLoading, isError, error, data } = useQuery(["itineraries", user], fetchItineraries);

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>{error.message}</div>

    return (
      <div className="container my-3">
        <h2>Top Itineraries</h2>
            <div className="row">
                {data.map((element)=>{
                 return <div className="col-md-4" key={element._id}>
                    <Itinerary title={element.name} description={Math.floor((Date.parse(element.endDate) - Date.parse(element.startDate))/86400000) + 1} imageUrl={element.photo} newsUrl={element.url}/>
                </div>
                })
            }
            {/* <div className="container d-flex justify-content-between my-3">
            <button disable={this.state.page<=1}type="button" className="btn btn-primary" onClick={this.handlePrevclick}> &larr;Previous</button>
            <button disable={this.state.page + 1 > Math.ceil(this.state.totalResults/20)}type="button" className="btn btn-primary" onClick={this.handleNextclick}>Next &rarr;</button>
            </div> */}
            </div>

      </div>
    )
  }
