export default function authService(service){
    const encryptPassword = (password) => {
        return service.encryptPassword(password);
    }

    const comparePassword = (password, encryptedPassword) => {
        return service.comparePassword(password, encryptedPassword);
    }

    const generateToken = (payload) => {
        return service.generateToken(payload);
    }

    const verify = (token) => {
        return service.verify(token);
    }

    return {
        encryptPassword,
        comparePassword,
        generateToken,
        verify
    }
}