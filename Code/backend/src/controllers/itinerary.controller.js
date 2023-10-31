export default function(
    itineraryRepository,
    itineraryRepositoryImplementation,
    itineraryService,
    itineraryServiceImplementation,
) {
    const dbRepository = itineraryRepository(itineraryRepositoryImplementation);
    const service = itineraryService(itineraryServiceImplementation);

    const addNewItinerary = async (req, res, next) => {
        try {
            const { payload } = req.userId;
            const { name, city, country, startDate, endDate, activities } = req.body;
            
        } catch (err) {
            next(err);
        }
    }
}