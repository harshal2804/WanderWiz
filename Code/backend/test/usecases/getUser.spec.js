import getUser from 'application/usecases/user/getUser';
import { jest } from '@jest/globals';

describe('getUser', () => {
    it('calls userRepository.getById with the correct id and returns its result', () => {
        const mockGetById = jest.fn();
        const userRepository = { getById: mockGetById };
        const id = 'test-id';

        mockGetById.mockReturnValueOnce('test-user');

        const result = getUser(id, userRepository);

        expect(mockGetById).toHaveBeenCalledWith(id);
        expect(result).toBe('test-user');
    });
});