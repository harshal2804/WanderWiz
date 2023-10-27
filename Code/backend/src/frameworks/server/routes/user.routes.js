import userController from "controllers/user.controller";
import userRepository from "application/repositories/user.repository";
import userRepositoryMongoDB from "frameworks/database/mongodb/repositories/user.repository.mongodb";
import authService from "application/services/auth.service";
import authServiceImplementation from "frameworks/services/auth.service"
import authMiddleware from "frameworks/server/middlewares/authMiddleware";

export default function userRouter(express){
    const router = express.Router();
    const controller = userController(userRepository, userRepositoryMongoDB, authService, authServiceImplementation);

    //GET /users/:id
    router.get('/', authMiddleware, controller.getUser);

    //POST /users
    router.post('/', controller.addNewUser);

    return router;
}