import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default function authService() {
    const encryptedPassword = (password) => {
        return bcrypt.hashSync(password, 10);
    }

    const comparePassword = (password, encryptedPassword) => {
        return bcrypt.compareSync(password, encryptedPassword);
    }

    const generateToken = (payload) => {
        return jwt.sign({ payload }, process.env.JWT_SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
    }

    const verify = (token) => {
        return jwt.verify(token, process.env.JWT_SECRET);
    }

    return {
        encryptedPassword,
        comparePassword,
        generateToken,
        verify
    }
}