import addPlace from "application/usecases/place/add";
import getPlaceDetail from "application/usecases/place/getPlaceDetail";

export default function placeController(
    placeRepository,
    placeRepositoryImplementation,
    placeService,
    placeServiceImplementation
){
    const dbRepository = placeRepository(placeRepositoryImplementation());
    const placeServiceImpl = placeService(placeServiceImplementation());

    const getPlace = async (req, res, next) => {
        
        try{
            const { id } = req.params;
            const fsq_id = id;
            const place = await getPlaceDetail(fsq_id, dbRepository);
            if(!place){
                const placeDetails = await placeServiceImpl.placeDetails(fsq_id);
                const { categories, description, hours, hours_popular, location, name, popularity, rating, related_places, social_media, photos, tips, email, website, tel, timezone, stats } = placeDetails;
                const place = await addPlace(fsq_id, categories, description, hours, hours_popular, location, name, popularity, rating, related_places, social_media, photos, tips, email, website, tel, timezone, stats, dbRepository);
                res.status(200).json(place);
            }
            else{
                res.status(200).json(place);
            }
        }catch(err){
            throw err;
        }
    }

    return {
        getPlace
    }
}