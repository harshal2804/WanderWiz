import React, { Fragment, useContext } from "react";
import Itinerary from "../components/Itinerary";
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { Button, Spinner, Placeholder, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const fetchItineraries = async ({ queryKey, pageParam = 1 }) => {
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const res = await axios.get(
    `${VITE_BACKEND_URL}api/itinerary?_lim=4&_pageNum=${pageParam}`,
    {
      headers: {
        Authorization: `Bearer ${queryKey[1].token}`,
      },
    }
  );
  res.data.map((element) => {
    element.activities.some((activity) => {
      if (activity.photo) {
        element.photo = activity.photo;
        return true;
      }
      return false;
    });
    element._id = element._id.toString();
    const startDateFormatted = new Date(element.startDate)
      .toISOString()
      .split("T")[0];
    const endDateFormatted = new Date(element.endDate)
      .toISOString()
      .split("T")[0];
    element.startDate = startDateFormatted;
    element.endDate = endDateFormatted;
  });

  return res.data;
};

export default function Itineraries() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const { isLoading, isError, error, data, isFetching, fetchNextPage } =
    useInfiniteQuery(["itineraries", user], fetchItineraries, {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length > 0) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    });

  if (isError) return <div>{error.message}</div>;

  const placeholders = []
  for(let i=0; i<10; i++) {
    placeholders.push(i);
  }

  const handleIti = (e, id) => {
    e.preventDefault();
    navigate(`/itinerary/${id}`);
  }

  return (
    <div className="container my-3 min-vh-100">
      <h2 className="my-5 text-center">Top Itineraries</h2>
      <div className="row">
        {data?.pages.map((group, index) => {
          return (
            <Fragment key={index}>
              {group.map((element) => {
                return (
                  <div onClick={(e) => handleIti(e, element._id)} className="col-md-3" key={element._id}>
                    <Itinerary
                      title={element.name}
                      description={
                        Math.floor(
                          (Date.parse(element.endDate) -
                            Date.parse(element.startDate)) /
                            86400000
                        ) + 1
                      }
                      imageUrl={element.photo}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </Fragment>
          );
        })}
        <div className="w-100 text-center mt-3 mb-3">
          {isFetching ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            <Button
              className=""
              variant="primary"
              onClick={fetchNextPage}
              disabled={data.pages[data.pages.length - 1] == 0}
            >
              Load More
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
