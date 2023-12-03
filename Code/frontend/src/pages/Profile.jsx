import { useContext } from "react";
import { Button, ButtonGroup, ButtonToolbar, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import Itinerary from "../components/Itinerary";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";
import Error from "./Error";

const fetchUserDetails = async (token) => {
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const res = await axios.get(`${VITE_BACKEND_URL}api/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  res.data.itineraries.map((element) => {
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

export default function Profile({ handleUser }) {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const { isLoading, isError, error, data } = useQuery(
    "userDetails",
    () => fetchUserDetails(user.token),
    {
      staleTime: Infinity,
    }
  );

  if (isLoading) {
    return (
      <div className="m-2 text-center min-vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (isError) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      handleUser({
        user: false,
        token: null,
      });
      navigate("/login");
    }
    console.log(error);
    return (
      <div className="min-vh-100">
        <Error message={error.message} />
      </div>
    );
  }

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    handleUser({
      user: false,
      token: null,
    });
    navigate("/");
  };

  const handleIti = (e, id) => {
    e.preventDefault();
    navigate(`/itinerary/${id}`);
  };

  const smallProfilePhotoStyle = {
    padding: "15px",
    width: "250px",
    height: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#3498db",
  };
  const formSectionStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  };

  const functionbutton = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  };

  return (
    <div>
      <div className="container d-flex flex-column min-vh-100 p-5 justify-content-around align-items-center gap-4">
        <div className="d-flex flex-wrap justify-content-center align-items-center border border-secondary">
          <img
            // src="https://ca.slack-edge.com/T0266FRGM-U2Q173U05-g863c2a865d7-512"
            src={profile}
            alt="Profile"
            className="profile-photo"
            style={smallProfilePhotoStyle}
          />
          <div className="d-flex flex-column justify-content-around">
            <div className="d-flex justify-content-around border p-3 w-100">
              <div className="fw-bold text-end  py-3 px-1 w-100">Name: </div>
              <div className="text-start  py-3 px-1 w-100">{data.name}</div>
            </div>
            <div className="d-flex justify-content-around border p-3 w-100">
              <div className="fw-bold text-end  py-3 px-1 w-100">Email: </div>
              <div className="text-start  py-3 px-1 w-100">{data.email}</div>
            </div>
            <div className="d-flex justify-content-around border p-3 w-100">
              <div className="fw-bold text-end py-3 px-1 w-100 ">
                Current city:{" "}
              </div>
              <div className="text-start  py-3 px-1 w-100">
                {data.currentCity}
              </div>
            </div>
            <div style={functionbutton}>
              <ButtonToolbar aria-label="Toolbar with button groups">
                {/* <ButtonGroup className="me-2" aria-label="Second group">
                  <Button
                    onClick={() => navigate("/editprofile")}
                    variant="secondary"
                    type="reset"
                  >
                    Edit Profile
                  </Button>
                </ButtonGroup> */}

                <ButtonGroup className="me-2" aria-label="Third group">
                  <Button
                    onClick={(e) => handleLogOut(e)}
                    variant="danger"
                    type="reset"
                  >
                    Log Out
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column align-element-center justify-content-around">
          <div className="fw-bold fs-1 text-center py-3 px-1 w-100">
            Your Itineraries
          </div>
          <div className="d-flex justify-content-center flex-wrap align-items-center gap-2">
            {data.itineraries.map((element) => {
              return (
                <div
                  onClick={(e) => handleIti(e, element._id)}
                  key={element._id}
                >
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
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
