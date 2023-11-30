import React, { useContext } from "react";
import "../css/PlaceInformation.css";
import 'bootstrap/dist/css/bootstrap.css';// https://blog.hubspot.com/website/react-bootstrap-css
import  LikeButton from "./LikeButton.jsx"
import { FaStar, FaStarHalf, FaArrowRight, FaArrowLeft,FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { Button, Carousel } from "react-bootstrap";
import { useQuery } from "react-query";
import { UserContext } from "../context/UserContext.js";
import { useParams } from "react-router-dom";
import axios from "axios";

const fetchPlaceDetails = async (fsq_id, token) => {
  const res = await axios.get(`http://localhost:3001/api/place/${fsq_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  
  return res.data;
}

export default function PlaceInformation() {

  const [index, setIndex] = React.useState(1);
  const user = useContext(UserContext);
  const { id } = useParams();
  const fsq_id = id;

  const { isLoading, isError, error, data } = useQuery(["placeDetails", fsq_id], () => fetchPlaceDetails(fsq_id, user.token), {
    staleTime: Infinity,
    onSuccess: (data) => {
      console.log("place details: ", data);
    },
  });

  if(isLoading) return <div>Loading...</div>;
  if(isError) return <div>{error.message}</div>;

  const maxRating = 5;
  const ratingOn5Scale = (data.rating / 2); // Assuming the rating is on a scale of 0 to 10

  // Create an array to render stars
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    if (i <= ratingOn5Scale) {
      stars.push(<FaStar key={i} color="#F6BE00" style={{height : '30px' }}/>);
    } else if (i - 0.5 <= ratingOn5Scale) {
      stars.push(<FaStarHalf key={i} color="#F6BE00" style={{height : '30px' }} />);
    } else {
      stars.push(<FaStar key={i} color="gray" style={{height : '30px' }}/>);
    }
  }

  return (
    <div className="min-vh-100">
      <div className="d-flex justify-content-center">
        {/* First Div: Image */}

        <Carousel interval={1500} className="d-flex border border-secondary border-4 rounded m-4" style={{ height: "400px", width: "400px"}}>
          {data && data.photos && data.photos.map((photo) => (
            <Carousel.Item key={photo.id}>
              <img
                className="d-block"
                src={photo.prefix +"400x400"+ photo.suffix}
                alt="Place Photo"
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Second Div: Place Information */}
        <div className="place-info m-4 border rounded">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <div className="d-flex gap-2 best-time">
            <p className="fw-bold">Best Time to Visit : </p> <p>{data.hours.display}</p>
          </div>
          <div className="d-flex gap-2 address">
            <p className="fw-bold">Address : </p> <p>{data.location.formatted_address}, {data.location.postcode}</p>
          </div>
          <div className="rating">
        <span>Rating: {stars}</span>
      </div>

      

        </div>
       
      </div>
      {/* <div className="d-flex justify-content-center mx-auto Des" style={{ height: '9vw', background: '#f0f0f0', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', textAlign: 'center', fontSize: '1.2vw', width: '80vw' }}>
  {data.description}
</div> */}



      {/* add this classes if you want alert message alert alert-warning alert-dismissible fade show */}
      <h2 className="p-4">Top Reviews</h2>
      <div className="reviews">
        {data.tips.map((review) => (
          <div className="d-flex flex-column review p-3 border rounded"  key={review.id}>
            <div className="review-text fs-6">{review.text}</div>
            <div className="fw-bold fs-6 review-date align-self-end">
              {new Date(review.created_at).toDateString()}

            </div>
          {/* <LikeButton/>
           */}
           <div className="p-2 d-flex gap-2 align-items-center">
            <FaArrowCircleUp onClick={(e) => console.log()}/>
              <div className="">
                {review.agree_count - review.disagree_count}
              </div>
            <FaArrowCircleDown/>
           </div>
          </div>
        ))}
      </div>
    </div>
  )
}
