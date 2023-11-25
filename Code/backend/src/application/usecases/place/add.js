import place from "entities/place";

export default function addPlace(
    fsq_id,
    categories, description, hours, hours_popular, location, name, popularity, rating, related_places, social_media, photos, tips, email, website, tel, timezone, stats,
    placeRepository
){
    const placeDetails = place(categories, description, hours, hours_popular, location, name, popularity, rating, related_places, social_media, photos, tips, email, website, tel, timezone, stats);
    return placeRepository.create({...placeDetails, fsq_id: fsq_id});
}