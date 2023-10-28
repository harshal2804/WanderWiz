import login from "application/usecases/auth/login";

export default function(
    userRepository,
    userRepositoryImplementation,
    authService,
    authServiceImplementation
){
    const dbRepository = userRepository(userRepositoryImplementation());
    const authServiceImpl = authService(authServiceImplementation());

    const loginUser = async (req, res, next) => {
        try{
            const { email, password } = req.body;
            console.log(email, password);
            const token = await login(email, password, dbRepository, authServiceImpl);
            if(!token) return res.status(401).json({ message: "Unauthorized" });
            res.status(200).json({ token });
        }catch(err){
            next(err);
        }
    }

    return {
        loginUser
    }
}