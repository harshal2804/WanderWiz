import { useParams } from "react-router-dom";
import Activity from "../components/Activity";
import getDate from "../utils/getDate";
import { useQuery } from "react-query";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const fetchItinerary = async (id, token) => {
    const res = await axios.get(`http://localhost:3001/api/itinerary/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};

function divideArrayIntoChunks(array) {
    const result = [];
    const chunkSize = 4;
  
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
  
    return result;
}

export default function ItineraryDisplay() {

    const user = useContext(UserContext);
    const { id } = useParams();
    const { isLoading, isError, error, data } = useQuery(["itinerary", id], () => fetchItinerary(id, user.token));


    if(isLoading) {
        return <div className="min-vh-100">Loading...</div>;
    }

    if(isError) {
        return <div className="min-vh-100">Error: {error.message}</div>;
    }

    const activityData = divideArrayIntoChunks(data.activities);
    const startDay = new Date(data.startDate).getDay();
    const endDate = new Date(data.endDate).getDay();

    return (
        <div>

            <div className="d-flex flex-column align-items-center justify-content-around min-vh-100">
                <div>
                    <h1 className="p-4">Itinerary Name</h1>
                </div>
                <div className="d-flex">
                    {activityData.map((activityColumn, index) => {
                        return ( <div key={index} className="d-flex flex-column gap-3 p-3">
                            <p className="p-1 fw-bold fs-4 text-center">Day - {index+1}</p>
                            {activityColumn.map((activity) => {
                                return <Activity
                                            key={activity._id}
                                            photo={activity.photo? activity.photo : activity.categories[0].icon}
                                            cat_icon={activity.categories[0].icon}
                                            cat_name={activity.categories[0].name}
                                            name={activity.name}
                                            photoType={activity.photo? "fsq" : "cat"}
                                        />
                            })}
                        </div>)
                    })}
                </div>
            </div>

        </div>
    );
}