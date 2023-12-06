import user from "entities/user";

export default function updateUser(
    id,
    name,
    email,
    password,
    currentCity,
    itineraries,
    userRepository
) {
    const updatedUser = user(name, email, password, currentCity, itineraries);
    return userRepository.update(id, updatedUser);
}