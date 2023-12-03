import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const postItinerary = async ({ state, token }) => {
    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const res = await axios.post(`${VITE_BACKEND_URL}api/itinerary`, state, {
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