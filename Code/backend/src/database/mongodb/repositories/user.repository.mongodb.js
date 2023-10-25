import userModel from "../models/user.model.js";

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
        async update(id, user) {
            const userUpdated = await userModel.findByIdAndUpdate(id, user, { new: true });
            return userUpdated;
        },
        async delete(id) {
            const userDeleted = await userModel.findByIdAndDelete(id);
            return userDeleted;
        },
        async getById(id) {
            const user = await userModel.findById(id);
            return user;
        },
        async getAll() {
            const users = await userModel.find();
            return users;
        },
        async getByEmail(email) {
            const user = await userModel.findOne({ email });
            return user;
        }
    }
}