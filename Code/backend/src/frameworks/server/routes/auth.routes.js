import authController from "controllers/auth.controller";
import userRepository from "application/repositories/user.repository";
import userRepositoryMongoDB from "frameworks/database/mongodb/repositories/user.repository.mongodb";
import authService from "application/services/auth.service";
import authServiceImplementation from "frameworks/services/auth.service"

export default function authRouter(express){
    const router = express.Router();
    const controller = authController(userRepository, userRepositoryMongoDB, authService, authServiceImplementation);

    //GET /auth/login
    router.get('/login', controller.loginUser);

    return router;
}