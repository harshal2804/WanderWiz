import addItinerary from "application/usecases/itinerary/add";
import getItineraries from "application/usecases/itinerary/getItineraries";
import getItinerary from "application/usecases/itinerary/getItinerary";
import { get } from "mongoose";

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
            addItinerary(itinerary.name, itinerary.country, itinerary.startDate, itinerary.endDate, itinerary.activities, payload, dbRepository)
                .then(itinerary => res.status(201).json(itinerary))
                .catch(next);

        } catch (err) {
            next(err);
        }
    }

    const getAllItineraries = async (req, res, next) => {
        try {
            const pageNum = req.query._pageNum;
            const lim = req.query._lim;
            const itineraries = await getItineraries(lim, pageNum, dbRepository);
            res.status(200).json(itineraries);
        } catch (err) {
            next(err);
        }
    }

    const getItineraryById = async (req, res, next) => {
        try {
            const { payload } = req.userId;
            const { id } = req.params;
            getItinerary(id, dbRepository)
                .then(itinerary => res.status(200).json(itinerary))
                .catch(next);
        } catch (err) {
            next(err);
        }
    }

    return {
        addNewItinerary,
        getAllItineraries,
        getItineraryById
    }

}