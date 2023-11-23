import itineraryModel from "../models/itinerary.model";
import userModel from "../models/user.model";

export default function itineraryRepositoryMongoDB() {

    return{
        async create(itineraryEntity){
            const itinerary = {
                name: itineraryEntity.getName(),
                country: itineraryEntity.getCountry(),
                startDate: itineraryEntity.getStartDate(),
                endDate: itineraryEntity.getEndDate(),
                activities: itineraryEntity.getActivities(),
                user: itineraryEntity.getUser()
            }
            const resItinerary =  await itineraryModel.create(itinerary);
            await userModel.findByIdAndUpdate(itinerary.user, { $push: { itineraries: resItinerary._id } });
            return resItinerary;
        },
        async findByIdAndUpdate(id, itinerary){
            return await itineraryModel.findByIdAndUpdate(id, itinerary, { new: true });
        },
        async findByIdAndDelete(id) {
            return await itineraryModel.findByIdAndDelete(id);
        },
        async findById(id) {
            return await itineraryModel.findById(id);
        },
        async findAll(lim, pageNum){
            return await itineraryModel.find().skip(pageNum * lim).limit(lim);
        },
        async find(id){
            return await itineraryModel.findOne({ user: id });
        }
    }

}