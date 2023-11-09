export default function itineraryService(service){
    const placeSearch = async (display_name, country, latitude, longitude, startDate, endDate) => {
        return await service.placeSearch(display_name, country, latitude, longitude, startDate, endDate);
    }

    const placeDetails = (placeId) => {
        return service.placeDetails(placeId);
    }

    const placePhoto = (placeId) => {
        return service.placePhoto(placeId);
    }

    const placeReview = (placeId) => {
        return service.placeReview(placeId);
    }

    return {
        placeSearch,
        placeDetails,
        placePhoto,
        placeReview
    }
}