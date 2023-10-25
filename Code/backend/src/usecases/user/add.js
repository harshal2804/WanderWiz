import user from "../../entities/user.js";

export default function addUser(
    name,
    email,
    password,
    currentCity,
    userRepository
) {
    const newUser = user(name, email, password, currentCity, []);
    return userRepository.create(newUser);
}