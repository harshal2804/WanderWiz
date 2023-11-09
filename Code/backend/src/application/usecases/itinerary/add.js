import itinerary from "../../../entities/itinerary"

export default function addItinerary(
    name,
    country,
    startDate,
    endDate,
    activities,
    user,
    itineraryRepository
) {
    const newItinerary = itinerary(name, country, startDate, endDate, activities, user);
    return itineraryRepository.create(newItinerary);
}