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
import Itineraries from './pages/itineraries';
import { UserContext } from './context/UserContext';
import Edit_Profile from './pages/EditProfile';
import Timeline from './pages/timeline';
import Profile from './pages/Profile';

function App() {

  const queryClient = new QueryClient();

  const [user, setUser] = useState({user: false, token: null});
  const updateUser = (user) => {
    setUser(user);
  }

  const token = localStorage.getItem("token");
  if(token && !user.user) {
    updateUser({
      user: true,
      token: token,
    })
  }
  

  return (
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
              <Login habdleUser={(user) => updateUser(user)} />}
            />
            <Route path="/createItinerary" element={user.user ? <ItineraryOption /> : 
              <Login handleUser={(user) => updateUser(user)} />} 
            />
            <Route path="/createItinerary2" element={<ItineraryOption2 />} />
            <Route path="/createItinerary3" element={<ItineraryOption3 />} />
            <Route path="/createItinerary4" element={<ItineraryOption4 />} />
            <Route path="/itineraries" element={user.user ? <Itineraries /> :
              <Login handleUser={(user) => updateUser(user)} />}
            />
            <Route path='/test' element={<ItineraryOption4_1 />} />
          </Routes>
        <Footer />
        </BrowserRouter>
        </UserContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  )
}

export default App
