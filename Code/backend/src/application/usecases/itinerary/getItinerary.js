export default function getItinerary(
    id,
    itineraryRepository
) {
    return itineraryRepository.getById(id);
}