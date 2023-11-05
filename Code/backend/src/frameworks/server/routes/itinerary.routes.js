import itineraryRepository from "application/repositories/itinerary.repository";
import itineraryRepositoryMongoDB from "frameworks/database/mongodb/repositories/itinerary.repository.mongodb";
import itineraryService from "application/services/itineraryGeneration.service";
import itineraryServiceImplementation from "frameworks/services/itinerary.service";
import itineraryController from "controllers/itinerary.controller";
import authMiddleware from "frameworks/server/middlewares/authMiddleware";

export default function itineraryRouter(express){
    const router = express.Router();
    const controller = itineraryController(itineraryRepository, itineraryRepositoryMongoDB, itineraryService, itineraryServiceImplementation);

    //POST /itinerary
    router.post('/', authMiddleware, controller.addNewItinerary);

    //GET /itinerary
    router.get('/', authMiddleware, controller.getAllItineraries);

    //GET /itinerary/:id
    // router.get('/:id', authMiddleware, controller.getItineraryById);

    return router;
}