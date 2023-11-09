import itineraryModel from "../models/itinerary.model";

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
            return await itineraryModel.create(itinerary);
        },
        async update(id, itinerary){
            return await itineraryModel.findByIdAndUpdate(id, itinerary, { new: true });
        },
        async delete(id){
            return await itineraryModel.findByIdAndDelete(id);
        },
        async getById(id){
            return await itineraryModel.findById(id);
        },
        async getAll(){
            return await itineraryModel.findAll();
        },
        async getByUser(id){
            return await itineraryModel.find({ user: id });
        }
    }

}