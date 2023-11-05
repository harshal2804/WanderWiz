import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import MyNavbar from './components/myNavbar';
import Login from './pages/Login';
import ItineraryOption from './pages/ItineraryOption';
import Itineraries from './pages/itineraries';
import Signup from './pages/Signup';
import PlaceInformation from './pages/PlaceInformation';


function App() {

  const queryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
        <MyNavbar />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path="/createItinerary" element={<ItineraryOption />} />
            <Route path="/itineraries" element={<Itineraries />} />
          </Routes>
        </BrowserRouter> */}

        <PlaceInformation/>
        <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  )
}

export default App
