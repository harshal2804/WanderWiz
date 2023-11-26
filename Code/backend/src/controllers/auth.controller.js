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
            const user = await dbRepository.getByEmail(email);
            if(!user) return res.status(404).json({ message: "User not found" });
            if(!authServiceImpl.comparePassword(password, user.password)) return res.status(401).json({ message: "Password is incorrect" });
            const token = await login(email, password, dbRepository, authServiceImpl);
            if(!token) return res.status(401).json({ message: "Unauthorized" });
            res.status(200).json({ token });
        }catch(err){
            res.status(500).json({ message: err.message });
        }
    }

    return {
        loginUser
    }
}