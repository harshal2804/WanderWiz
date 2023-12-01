import { useNavigate, useParams } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Activity from "../components/Activity";
import getDate from "../utils/getDate";
import { useQuery } from "react-query";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import dateArray from "../utils/dateArray";

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
  const [dayIndex, setDayIndex] = useState(0);
  const [activityOrder, setActivityOrder] = useState([]);
  const user = useContext(UserContext);
  const { id } = useParams();
  const { isLoading, isError, error, data, refetch } = useQuery(["itinerary", id], () =>
    fetchItinerary(id, user.token), {
      staleTime: Infinity,
      onSuccess: (data) => {
        setDayIndex(new Date(data.startDate).getDay());
        setActivityOrder(data.activities);
      }
    }
  );
  const navigate = useNavigate();

  useEffect(() => {
    // Update the order of activities when data changes
    setActivityOrder(data.activities);
  }, [data]);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    // Update the order of activities in the state
    const newOrder = Array.from(activityOrder);
    const [removed] = newOrder.splice(result.source.index, 1);
    newOrder.splice(result.destination.index, 0, removed);

    setActivityOrder(newOrder);

    // Update the order in your API
    axios.post(`http://localhost:3001/api/updateActivityOrder/${id}`, {
      newOrder: newOrder.map(activity => activity._id),
    })
    .then(() => {
      // Refetch the data to reflect the changes
      refetch();
    })
    .catch((error) => {
      console.error("Error updating activity order:", error);
    });
  };

  if (isLoading) {
    return <div className="min-vh-100">Loading...</div>;
  }

  if (isError) {
    return <div className="min-vh-100">Error: {error.message}</div>;
  }

  const activityData = divideArrayIntoChunks(activityOrder);

  const handleActivityClick = (e, fsq_id) => {
    e.preventDefault();
    navigate(`/placeinfo/${fsq_id}`);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="activityColumns" direction="horizontal">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="d-flex justify-content-left overflow-auto w-100"
          >
            {activityData.map((activityColumn, index) => (
              <Droppable key={index} droppableId={`column-${index}`} direction="vertical">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="d-flex flex-column gap-3 p-3"
                  >
                    <p className="p-1 fw-bold fs-4 text-center">
                      Day - {index + 1}
                    </p>
                    {activityColumn.map((activity, index) => (
                      <Draggable
                        key={activity._id}
                        draggableId={activity._id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
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
                              open={activity.hours_popular.length === 0 ? null
                                : activity.hours_popular[((dayIndex + index) % 7)].open
                              }
                              close={activity.hours_popular.length === 0 ? null
                                : activity.hours_popular[((dayIndex + index) % 7)].close
                              }
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
