import React, { Fragment, useContext } from 'react'
import Itinerary from '../components/Itinerary';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { Button, Spinner } from 'react-bootstrap';

const fetchItineraries = async ({ queryKey, pageParam }) => {
  const res = await axios.get(`http://localhost:3001/api/itinerary?_lim=3&_pageNum=${pageParam}`, {
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
    const { isLoading, isError, error, data, hasNextPage, fetchNextPage } = useInfiniteQuery(
      ["itineraries", user],
      fetchItineraries,
      {
        getNextPageParam: (lastPage) => {
          return lastPage.length > 0 ? lastPage[lastPage.length - 1]._id : undefined;
        }
      }
    )


    if(isError) return <div>{error.message}</div>

    return (
      <div className="container my-3">
        <h2>Top Itineraries</h2>
            <div className="row">
                {data?.pages.map((group, index)=>{
                  return (
                    <Fragment key={index}>
                      {group.map((element) => {
                        return <div className="col-md-4" key={element._id}>
                        <Itinerary title={element.name} description={Math.floor((Date.parse(element.endDate) - Date.parse(element.startDate))/86400000) + 1} imageUrl={element.photo} newsUrl={element.url}/>
                    </div>
                      })}
                    </Fragment>
                  )
                })
            }
            {/* <button 
                onClick={fetchNextPage}
                disabled={!hasNextPage}
            >
                Load More
            </button> */}
            <div className='w-100 text-center mt-3 mb-3'>
            {isLoading ? 
               <Spinner animation="border" role="status">
               <span className="visually-hidden">Loading...</span>
             </Spinner> :
            <Button className="" variant="primary" onClick={fetchNextPage} disabled={!hasNextPage}>
              Load More
            </Button>
            }
            </div>
            </div>

      </div>
    )
  }
