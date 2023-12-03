export default function placeService(service){
    const placeDetails = (placeId) => {
        return service.placeDetails(placeId);
    }

    return {
        placeDetails
    }
}