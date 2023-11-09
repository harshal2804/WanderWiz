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
import PlaceInformation from './pages/PlaceInformation';
import { UserContext } from './context/UserContext';


function App() {

  const queryClient = new QueryClient();

  // return (
  //     <QueryClientProvider client={queryClient}>
  //       <MyNavbar />
  //       {/* <BrowserRouter>
  //         <Routes>
  //           <Route path="/" element={<Home />} />
  //           <Route path="/login" element={<Login />} />
  //           <Route path='/signup' element={<Signup />} />
  //           <Route path="/createItinerary" element={<ItineraryOption />} />
  //           <Route path="/itineraries" element={<Itineraries />} />
  //         </Routes>
  //       </BrowserRouter> */}

  //       <PlaceInformation/>
  // const [user, setUser] = useState({user: false, token: null});
  // const updateUser = (user) => {
  //   setUser(user);
  // }

  return (
      <QueryClientProvider client={queryClient}>
        <MyNavbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={
              <Login handleUser={(user) => updateUser(user)} />} 
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/createItinerary" element={user.user ? <ItineraryOption /> : 
              <Login handleUser={(user) => updateUser(user)} />} 
            />
            <Route path="/itineraries" element={<Itineraries />}/>
          </Routes>
        <Footer />
        </BrowserRouter>
        </UserContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  )
}

export default App
