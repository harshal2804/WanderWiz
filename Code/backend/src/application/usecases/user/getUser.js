export default function(
    id,
    userRepository
) {
    return userRepository.getById(id);
}