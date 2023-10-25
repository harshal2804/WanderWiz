import addUser from "../usecases/user/add.js";

export default function userController(
    userRepository,
    userRepositoryImplementation
){
    const dbRepository = userRepository(userRepositoryImplementation())
    const addNewUser = (req, res, next) => {
        const { name, email, password, currentCity } = req.body;
        addUser(name, email, password, currentCity, dbRepository)
            .then(user => res.status(201).json(user))
            .catch(next);
    }

    return {
        addNewUser
    }
}