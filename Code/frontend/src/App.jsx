import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import MyNavbar from './components/myNavbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ItineraryOption from './pages/ItineraryOption';
import ItineraryOption2 from './pages/ItineraryOption2';
import ItineraryOption3 from './pages/ItineraryOption3';
import ItineraryOption4 from './pages/ItineraryOption4';
import ItineraryOption4_1 from './pages/ItineraryOption4_1';
import ItineraryOption4_2 from './pages/ItineraryOption4_2';
import ItineraryOption4_3 from './pages/ItineraryOption4_3';
import Itineraries from './pages/itineraries';
import { UserContext } from './context/UserContext';
import Edit_Profile from './pages/EditProfile';
import Profile from './pages/Profile';
import ItineraryDisplay from './pages/ItineraryDisplay';
import ContactUsPage from './pages/Contactus';
import PlaceInformation from './pages/PlaceInformation';

function App() {

  const queryClient = new QueryClient();
  const [user, setUser] = useState({user: false, token: null});
  const updateUser = (user) => {
    setUser(user);
  }

  const [travelCount, setTravelCount] = useState(0);
  const updateTravelCount = (count) => {
    setTravelCount(count);
  }

  const token = localStorage.getItem("token");
  if(token && !user.user) {
    updateUser({
      user: true,
      token: token,
    })
  }


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={user}>
        <BrowserRouter>
        <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={
              <Login handleUser={(user) => updateUser(user)} />} 
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={user.user ? <Profile handleUser={(user) => updateUser(user)}/> :
              <Login handleUser={(user) => updateUser(user)} />}
            />
            <Route path="/editprofile" element={user.user ? <Edit_Profile handleUser={(user) => updateUser(user)}/> :  
              <Login handleUser={(user) => updateUser(user)} />}
            />
            <Route path="/createItinerary" element={user.user ? <ItineraryOption /> : 
              <Login handleUser={(user) => updateUser(user)} />} 
            />
            <Route path="/createItinerary2" element={<ItineraryOption2 />} />
            <Route path="/createItinerary3" element={<ItineraryOption3 />} />
            <Route path="/createItinerary4" element={travelCount === 0 ? <ItineraryOption4 handleTravelCount={(travelCount) => updateTravelCount(travelCount)} />
                : travelCount === 1 ? <ItineraryOption4_3 handleTravelCount={(travelCount) => updateTravelCount(travelCount)}/>
                : travelCount === 2 ? <ItineraryOption4_1 handleTravelCount={(travelCount) => updateTravelCount(travelCount)}/>
                : travelCount === 3 ? <ItineraryOption4_2 handleTravelCount={(travelCount) => updateTravelCount(travelCount)}/>
                : <ItineraryOption4 />} 
             />

            <Route path="/itinerary/:id" element={<ItineraryDisplay />} />

            <Route path="/itineraries" element={user.user ? <Itineraries /> :
              <Login handleUser={(user) => updateUser(user)} />}
            />
            <Route path='/placeinfo/:id' element={<PlaceInformation />} />
            <Route path="/contactus" element={<ContactUsPage />} />
          </Routes>
        <Footer />
        </BrowserRouter>
        </UserContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      
      
      
      
      </>
      
  )
}

export default App;
