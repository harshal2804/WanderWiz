export default function userRepository(repository){
    return {
        async create(user){
            const userCreated = await repository.create(user);
            return userCreated;
        },
        async update(id, user){
            const userUpdated = await repository.findByIdAndUpdate(id, user, { new: true });
            return userUpdated;
        },
        async delete(id){
            const userDeleted = await repository.findByIdAndDelete(id);
            return userDeleted;
        },
        async getById(id){
            const user = await repository.findById(id);
            return user;
        },
        async getAll(){
            const users = await repository.findAll();
            return users;
        },
        async getByEmail(email){
            const user = await repository.findOne({ email });
            return user;
        }
    }
}