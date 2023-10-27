import userRouter from "./user.routes";
import authRouter from "./auth.routes";

export default function routes(app, express){
    app.use('/api/user', userRouter(express));
    app.use('/api/auth', authRouter(express));
}