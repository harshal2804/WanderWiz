export default function getPlaceDetail(
    fsq_id,
    placeRepository
){
    return placeRepository.getByApiId(fsq_id);
}