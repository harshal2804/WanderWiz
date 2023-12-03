import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const postItinerary = async ({ state, token }) => {
    const res = await axios.post("http://localhost:3001/api/itinerary", state, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
}

export function useItineraryGeneration() {

    const navigate = useNavigate();

    return useMutation({
        mutationFn: postItinerary,
        onSuccess: (data) => {
          console.log(data);
          navigate(`/itinerary/${data._id}`);
        }
    })
}