import userModel from "../models/user.model";

export default function userRepositoryMongoDB() {

    return {
        async create(userEntity) {
            const user = {
                name: userEntity.getName(),
                email: userEntity.getEmail(),
                password: userEntity.getPassword(),
                currentCity: userEntity.getCurrentCity(),
                itineraries: userEntity.getItineraries()
            }
            const userCreated = await userModel.create(user);
            return userCreated;
        },
        async findByIdAndUpdate(id, user, options) {
            const userUpdated = await userModel.findByIdAndUpdate(id, user, options);
            return userUpdated;
        },
        async findByIdAndDelete(id) {
            const userDeleted = await userModel.findByIdAndDelete(id);
            return userDeleted;
        },
        async findById(id) {
            const user = await userModel.findById(id).populate('itineraries');
            if(!user) return null;
            return user;
        },
        async findAll() {
            const users = await userModel.find();
            return users;
        },
        async findOne(email) {
            const user = await userModel.findOne(email);
            return user;
        }
    }
}