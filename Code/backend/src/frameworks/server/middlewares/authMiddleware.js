import authServiceImplementation from "frameworks/services/auth.service"
import authService from "application/services/auth.service"

export default function authMiddleware(req, res, next){

    const authServiceImpl  = authService(authServiceImplementation());

    const token = req.header('Authorization');
    if(!token) return res.status(401).json({ message: "Token not found" });
    if(token.split(' ')[0] !== 'Bearer') return res.status(401).json({ message: "Invalid format of token" });
    const tokenValue = token.split(' ')[1];

    try{
        const payload = authServiceImpl.verify(tokenValue);
        req.userId = payload;
        next();
    }catch(err){
        return res.status(401).json({ message: "Unauthorized" });
    }

}