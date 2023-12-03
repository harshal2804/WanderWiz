import placeModel from "frameworks/database/mongodb/models/place.model";

export default function placeRepositoryMongoDB() {
    return {
        async create(placeEntity) {
            const place = {
                fsq_id: placeEntity.fsq_id,
                categories: placeEntity.getCategory(),
                description: placeEntity.getDescription(),
                hours: placeEntity.getHours(),
                hours_popular: placeEntity.getHoursPopular(),
                location: placeEntity.getLocation(),
                name: placeEntity.getName(),
                popularity: placeEntity.getPopularity(),
                rating: placeEntity.getRating(),
                related_places: placeEntity.getRelatedPlaces(),
                social_media: placeEntity.getSocialMedia(),
                photos: placeEntity.getPhotos(),
                tips: placeEntity.getTips(),
                email: placeEntity.getEmail(),
                website: placeEntity.getWebsite(),
                tel: placeEntity.getTel(),
                timezone: placeEntity.getTimezone(),
                stats: placeEntity.getStats()
            };
            return await placeModel.create(place);
        },
        async findByIdAndUpdate(id, place) {
            return await placeModel.findByIdAndUpdate(id, place, { new: true });
        },
        async findByIdAndDelete(id) {
            return await placeModel.findByIdAndDelete(id);
        },
        async findById(id) {
            return await placeModel.findById(id);
        },
        async findAll() {
            return await placeModel.find();
        },
        async findByApiId(id) {
            return await placeModel.findOne({ fsq_id: id });
        }
    };
}