import login from "application/usecases/auth/login";
import userRepository from "application/repositories/user.repository"
import authService from "application/services/auth.service"

describe('login', () => {
  it('throws an error when no email or password is provided', async () => {
    await expect(login()).rejects.toThrow('Email and password are required');
  });

  it('throws an error when the user is not found', async () => {
    userRepository.getByEmail = jest.fn().mockResolvedValue(null);
    await expect(login('test@example.com', 'password', userRepository, authService)).rejects.toThrow('User not found');
  });

  it('throws an error when the password is incorrect', async () => {
    userRepository.getByEmail = jest.fn().mockResolvedValue({ password: 'wrongpassword' });
    authService.comparePassword = jest.fn().mockReturnValue(false);
    await expect(login('test@example.com', 'password', userRepository, authService)).rejects.toThrow('Password is incorrect');
  });

  it('returns a token when the email and password are correct', async () => {
    userRepository.getByEmail = jest.fn().mockResolvedValue({ _id: '123', password: 'password' });
    authService.comparePassword = jest.fn().mockReturnValue(true);
    authService.generateToken = jest.fn().mockReturnValue('token');
    const token = await login('test@example.com', 'password', userRepository, authService);
    expect(token).toBe('token');
  });
});