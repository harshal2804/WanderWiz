import userController from "controllers/user.controller";
import userRepository from "application/repositories/user.repository";
import userRepositoryMongoDB from "frameworks/database/mongodb/repositories/user.repository.mongodb";
import authMiddleware from "frameworks/server/middlewares/authMiddleware";

export default function userRouter(express){
    const router = express.Router();
    const controller = userController(userRepository, userRepositoryMongoDB);

    //GET /users/:id
    router.get('/', authMiddleware, controller.getUser);

    //POST /users
    router.post('/', controller.addNewUser);

    return router;
}