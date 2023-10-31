import itinerary from "entities/itinerary";

export default function addItinerary(
    name,
    city,
    country,
    startDate,
    endDate,
    activities,
    itineraryRepository
) {
    const newItinerary = itinerary(name, city, country, startDate, endDate, activities);
    return itineraryRepository.create(newItinerary);
}