import userRepository from '../repositories/userRepository';
import logger from '../utils/logger';

export default {
  getUserById(id: string) {
    const user = userRepository.findById(id);
    if (!user) {
      logger.error('User not found');
      throw new Error('User not found');
    }
    logger.info('User retrieved');
    return user;
  },

  createUser(userData: { id: string; name: string; email: string }) {
    // Here you might add validation, business logic, etc.
    const user = userRepository.save(userData);
    logger.info('User created');
    return user;
  }
};