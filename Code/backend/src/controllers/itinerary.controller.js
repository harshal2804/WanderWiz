import addItinerary from "application/usecases/itinerary/add";
import getItineraries from "application/usecases/itinerary/getItineraries";

export default function (
    itineraryRepository,
    itineraryRepositoryImplementation,
    itineraryService,
    itineraryServiceImplementation,
) {
    const dbRepository = itineraryRepository(itineraryRepositoryImplementation());
    const service = itineraryService(itineraryServiceImplementation());

    const addNewItinerary = async (req, res, next) => {
        try {
            const { payload } = req.userId;
            const { display_name, country, latitude, longitude, startDate, endDate } = req.body;
            const itinerary = await service.placeSearch(display_name, country, latitude, longitude, startDate, endDate);
            console.log("iti.controller:", itinerary);
            addItinerary(itinerary.name, itinerary.country, itinerary.startDate, itinerary.endDate, itinerary.activities, payload, dbRepository)
                .then(itinerary => res.status(201).json(itinerary))
                .catch(next);

        } catch (err) {
            next(err);
        }
    }

    const getAllItineraries = async (req, res, next) => {
        try {
            const itineraries = await getItineraries(dbRepository);
            res.status(200).json(itineraries);
        } catch (err) {
            next(err);
        }
    }

    const getItineraryById = async (req, res, next) => {
        try {
            const { payload } = req.userId;
            const { id } = req.params;
            const itinerary = await dbRepository.getItineraryById(id, payload);
            res.status(200).json(itinerary);
        } catch (err) {
            next(err);
        }
    }

    return {
        addNewItinerary,
        getAllItineraries
    }

}