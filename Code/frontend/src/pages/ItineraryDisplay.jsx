import { useNavigate, useParams } from "react-router-dom";
import Activity from "../components/Activity";
import getDate from "../utils/getDate";
import { useQuery } from "react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import dateArray from "../utils/dateArray";
import { Spinner } from "react-bootstrap";
import Distance from "../assets/distance.png";

const fetchItinerary = async (id, token) => {
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const res = await axios
    .get(`${VITE_BACKEND_URL}api/itinerary/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => {
      console.log(err);
    });
  return res.data;
};

const fetchUserDetails = async (token) => {
  const res = await axios.get(`${VITE_BACKEND_URL}api/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

function divideArrayIntoChunks(array, dayIndex) {
  const result = [];
  const chunkSize = 4;

  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  result.map((column) => {
    column.forEach((activity, index) => {
      const open =
        activity.hours_popular.length === 0
          ? null
          : activity.hours_popular[(dayIndex + index) % 7]?.open;
      const close =
        activity.hours_popular.length === 0
          ? null
          : activity.hours_popular[(dayIndex + index) % 7]?.close;
      // console.log(open, close);
      activity.open = open;
      activity.close = close;
    });

    column.sort((a, b) => {
      if (a.open === null) {
        return 1;
      } else if (b.open === null) {
        return -1;
      } else {
        return a.open - b.open;
      }
    });
    return column;
  });

  return result;
}

export default function ItineraryDisplay() {
  const [dayIndex, setDayIndex] = useState(0);
  const user = useContext(UserContext);
  const { id } = useParams();
  const { isLoading, isError, error, data } = useQuery(
    ["itinerary", id],
    () => fetchItinerary(id, user.token),
    {
      staleTime: Infinity,
      onSuccess: (data) => {
        console.log("itinerary: ", data);
        setDayIndex(new Date(data.startDate).getDay());
      },
      onError: (error) => {
        console.log("error: ", error);
      },
    }
  );

  const { data: newUser } = useQuery(
    "userDetails",
    () => fetchUserDetails(user.token),
    {
      staleTime: Infinity,
      onSuccess: (data) => {
        console.log("user: ", data);
      },
    }
  );

  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className="m-2 text-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  if (isError)
    return (
      <div>
        <Error message={error.message} />
      </div>
    );

  const activityData = divideArrayIntoChunks(data.activities, dayIndex);
  const dates = dateArray(data.startDate, data.endDate).map((date) =>
    getDate(date)
  );

  const handleActivityClick = (e, fsq_id) => {
    e.preventDefault();
    navigate(`/placeinfo/${fsq_id}`);
  };

  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-around min-vh-100">
        <div className="d-flex align-items-center">
          <h1 className="p-4">{data.name}</h1>
          <h6 className="p-4">
            (from {dates[0]} to {dates[dates.length - 1]})
          </h6>
        </div>
        <div className="d-flex justify-content-left overflow-auto w-100">
          {activityData.map((activityColumn, index) => {
            return (
              <div key={index} className="d-flex flex-column gap-3 p-3">
                <div
                  className="border rounded d-flex flex-column"
                  style={{ backgroundColor: "#21D375" }}
                >
                  <p className="my-2 fw-bold fs-4 text-center">
                    Day - {index + 1}
                  </p>
                  <p className="text-center">{dates[index]}</p>
                </div>
                {activityColumn.map((activity, index2) => {
                  if (index === 0 && index2 === 0) {
                    return;
                  }
                  if (index === 0 && index2 === 1) {
                    return (
                      <div className="activity d-flex border border-success rounded shadow-lg p-2 gap-3">
                        <img
                          className="border border-secondary rounded-4"
                          src={Distance}
                          style={{
                            width: "100px",
                            height: "100px",
                            background: "white",
                          }}
                        />
                        <div className="d-flex flex-column w-100">
                          <p style={{ fontSize: "15px" }}>
                            Travel from <b>{newUser?.currentCity}</b> to{" "}
                            <b>{data.name}</b>
                          </p>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Activity
                      onClick={(e) => handleActivityClick(e, activity.fsq_id)}
                      key={activity._id}
                      photo={
                        activity.photo
                          ? activity.photo
                          : activity.categories[0].icon
                      }
                      cat_icon={activity.categories[0].icon}
                      cat_name={activity.categories[0].name}
                      name={activity.name}
                      photoType={activity.photo ? "fsq" : "cat"}
                      open={activity.open}
                      close={activity.close}
                    />
                  );
                })}
              </div>
            );
          })}

          <div className="d-flex flex-column gap-3 p-3">
            <div
              className="border rounded d-flex flex-column"
              style={{ backgroundColor: "#21D375" }}
            >
              <p className="my-2 fw-bold fs-4 text-center">Day - {dates.length}</p>
              <p className="text-center">{dates[dates.length - 1]}</p>
            </div>
            {activityData[0].map((activity, index) => {
              if(index === 2) {
                return (
                  <div className="activity d-flex border border-success rounded shadow-lg p-2 gap-3">
                        <img
                          className="border border-secondary rounded-4"
                          src={Distance}
                          style={{
                            width: "100px",
                            height: "100px",
                            background: "white",
                          }}
                        />
                        <div className="d-flex flex-column w-100">
                          <p style={{ fontSize: "15px" }}>
                            Travel from <b>{data.name}</b> to{" "}
                            <b>{newUser?.currentCity}</b>
                          </p>
                        </div>
                      </div>
                )
              }
              if(index === 3) {
                return;
              }
              return (
                <Activity
                  onClick={(e) => handleActivityClick(e, activity.fsq_id)}
                  key={activity._id}
                  photo={
                    activity.photo
                      ? activity.photo
                      : activity.categories[0].icon
                  }
                  cat_icon={activity.categories[0].icon}
                  cat_name={activity.categories[0].name}
                  name={activity.name}
                  photoType={activity.photo ? "fsq" : "cat"}
                  open={activity.open}
                  close={activity.close}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
