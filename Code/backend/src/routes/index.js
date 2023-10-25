import userRouter from "./user.routes.js";

export default function routes(app, express){
    app.use('/api/users', userRouter(express));
}