import placeController from "controllers/place.controller";
import placeRepository from "application/repositories/place.repository";
import placeRepositoryMongoDB from "frameworks/database/mongodb/repositories/place.repository.mongodb";
import placeService from "application/services/place.service";
import placeServiceImplementation from "frameworks/services/place.service";
import authMiddleware from "frameworks/server/middlewares/authMiddleware";

export default function placeRouter(express) {
    const router = express.Router();
    const controller = placeController(placeRepository, placeRepositoryMongoDB, placeService, placeServiceImplementation);

    //GET /place
    router.get('/:id', authMiddleware, controller.getPlace);

    return router;
}