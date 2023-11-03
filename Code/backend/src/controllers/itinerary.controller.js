import addItinerary from "application/usecases/itinerary/add";

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

    return {
        addNewItinerary
    }

}