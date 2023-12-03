import userRouter from "./user.routes";
import authRouter from "./auth.routes";
import itineraryRouter from "./itinerary.routes";
import placeRouter from "./place.routes";

export default function routes(app, express){
    app.use('/api/user', userRouter(express));
    app.use('/api/auth', authRouter(express));
    app.use('/api/itinerary', itineraryRouter(express));
    app.use('/api/place', placeRouter(express));
}