import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import MyNavbar from './components/myNavbar';
import Login from './pages/Login';
import ItineraryOption from './pages/ItineraryOption';
import Itineraries from './pages/itineraries';


function App() {

  const queryClient = new QueryClient();

<<<<<<< HEAD
      <MyNavbar />
      <ItineraryOption/>
      <Footer />
    </>
=======
  return (
      <QueryClientProvider client={queryClient}>
        <MyNavbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createItinerary" element={<ItineraryOption />} />
            <Route path="/itineraries" element={<Itineraries />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
>>>>>>> 5aa4ea96099dd9c942f7580bfdbcc3e555dcbeb1
  )
}

export default App
