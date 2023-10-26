export default async function login(
    email,
    password,
    userRepository, 
    authService
){
    if(!email || !password) throw new Error("Email and password are required");
    try{
        const user = await userRepository.getByEmail(email);
        if(!user) throw new Error("User not found");
        // if(!authService.comparePassword(password, user.password)) throw new Error("Password is incorrect");
        if(password !== user.password) throw new Error("Password is incorrect");
        const id = user._id;
        return authService.generateToken(id);
    }catch(err){
        throw err;
    }
}