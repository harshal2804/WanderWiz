import userController from "controllers/user.controller";
import userRepository from "repositories/user.repository";
import userRepositoryMongoDB from "database/mongodb/repositories/user.repository.mongodb";

export default function userRouter(express){
    const router = express.Router();
    const controller = userController(userRepository, userRepositoryMongoDB);

    //GET /users/:id
    router.get('/:id', controller.getUser);

    //POST /users
    router.post('/', controller.addNewUser);

    return router;
}