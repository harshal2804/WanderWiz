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
import Itineraries from './pages/itineraries';
import { UserContext } from './context/UserContext';
import Edit_Profile from './pages/EditProfile';


function App() {

  const queryClient = new QueryClient();

  const [user, setUser] = useState({user: false, token: null});
  const updateUser = (user) => {
    setUser(user);
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
            <Route path="/profile" element={<Edit_Profile />} />
            <Route path="/createItinerary" element={user.user ? <ItineraryOption /> : 
              <Login handleUser={(user) => updateUser(user)} />} 
            />
            <Route path="/itineraries" element={user.user ? <Itineraries /> :
              <Login handleUser={(user) => updateUser(user)} />}
            />
          </Routes>
        <Footer />
        </BrowserRouter>
        </UserContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  )
}

export default App
