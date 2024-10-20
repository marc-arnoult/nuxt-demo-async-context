import userService from '../../services/userService';

export default defineEventHandler((event) => {
  const id = event.context.params.id;
  const { correlationId } = event.context;
  try {
    const user = userService.getUserById(id);
    return {
      user,
      message: `User with ID ${id} retrieved successfully`
    };
  } catch (error) {
    return {
      statusCode: 404,
      message: `User with ID ${id} not found`
    };
  }
});