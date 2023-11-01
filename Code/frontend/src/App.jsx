import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Footer from './components/Footer';
import { MyNavbar } from './components/myNavbar';
import ItineraryOption from './pages/ItineraryOption';
import ItineraryOption4 from './pages/ItineraryOption4';
import Itineraries from './pages/itineraries';
import ItineraryOption4_1 from './pages/ItineraryOption4_1';
import ItineraryOption4_2 from './pages/ItineraryOption4_2';
import ItineraryOption4_3 from './pages/ItineraryOption4_3';


function App() {

  const queryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
          <MyNavbar />
          <ItineraryOption/>
          <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  )
}

export default App
