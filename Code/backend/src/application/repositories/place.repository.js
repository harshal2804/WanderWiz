export default function placeRepository(repository){
    return{
        async create(place){
            return await repository.create(place);
        },
        async update(id, place){
            return await repository.findByIdAndUpdate(id, place, { new: true });
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
        async getByApiId(id){
            return await repository.findByApiId(id);
        }
    }
}