import user from "entities/user"

export default function(
    id,
    userRepository
) {
    return userRepository.getById(id);
}