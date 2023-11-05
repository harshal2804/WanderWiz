export default function itineraryRepository(repository){
    return{
        async create(itinerary){
            return await repository.create(itinerary);
        },
        async update(id, itinerary){
            return await repository.findByIdAndUpdate(id, itinerary, { new: true });
        },
        async delete(id){
            return await repository.findByIdAndDelete(id);
        },
        async getById(id){
            return await repository.findById(id);
        }, 
        async getAll(lim, pageNum){
            return await repository.findAll(lim, pageNum);
        },  
        async getByUser(id){
            return await repository.find({ user: id });
        }
    }
}