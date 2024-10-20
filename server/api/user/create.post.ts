import userService from '../../services/userService';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id, name, email } = body;

  if (!id || !name || !email) {
    return {
      statusCode: 400,
      message: 'Missing required fields'
    };
  }

  const user = userService.createUser({ id, name, email });
  return {
    user,
    message: 'User created successfully'
  };
});