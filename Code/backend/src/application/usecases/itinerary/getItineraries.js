export default function getItineraries(
    lim,
    pageNum,
    itineraryRepository
) {
    return itineraryRepository.getAll(lim, pageNum);
}