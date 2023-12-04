import addUser from 'application/usecases/user/add';
import user from 'entities/user';


jest.mock('entities/user');

describe('addUser', () => {
    let mockUserRepository;

    beforeEach(() => {
        mockUserRepository = {
            create: jest.fn()
        };
    });

    it('should create a new user and add it to the repository', () => {
        const mockUser = {};
        user.mockReturnValue(mockUser);

        const name = 'John Doe';
        const email = 'john.doe@example.com';
        const password = 'password123';
        const currentCity = 'New York';

        addUser(name, email, password, currentCity, mockUserRepository);

        expect(user).toHaveBeenCalledWith(name, email, password, currentCity, []);
        expect(mockUserRepository.create).toHaveBeenCalledWith(mockUser);
    });
});