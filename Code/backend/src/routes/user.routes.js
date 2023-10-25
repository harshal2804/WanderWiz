import userController from "../controllers/user.controller.js";
import userRepository from "../repositories/user.repository.js";
import userRepositoryMongoDB from "../database/mongodb/repositories/user.repository.mongodb.js";

export default function userRouter(express){
    const router = express.Router();
    const controller = userController(userRepository, userRepositoryMongoDB);

    //POST /users
    router.post('/', controller.addNewUser);

    return router;
}