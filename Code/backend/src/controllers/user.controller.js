import addUser from "application/usecases/user/add";
import getUserById from "application/usecases/user/getUser"

export default function userController(
    userRepository,
    userRepositoryImplementation,
    authService,
    authServiceImplementation
){
    const dbRepository = userRepository(userRepositoryImplementation())
    const authServiceImpl = authService(authServiceImplementation())

    const addNewUser = (req, res, next) => {
        const { name, email, password, currentCity } = req.body;
        const encryptedPassword = authServiceImpl.encryptPassword(password);
        addUser(name, email, encryptedPassword, currentCity, dbRepository)
            .then(user => res.status(201).json(user))
            .catch(next);
    }

    const getUser = async (req, res, next) => {
        try{
            const { payload } = req.userId;
            const user = await getUserById(payload, dbRepository);
            if(!user) return res.status(404).json({ message: "User not found" });
            res.status(200).json(user);
        }catch(err){
            next(err);
        }
    }

    return {
        addNewUser,
        getUser
    }
}