// This would typically interact with a database
const users = new Map<string, { id: string; name: string; email: string }>();

export default {
  findById(id: string) {
    return users.get(id) || null;
  },

  save(user: { id: string; name: string; email: string }) {
    users.set(user.id, user);
    return user;
  }
};