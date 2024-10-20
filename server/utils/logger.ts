export default {
  info(message: string, context: Record<string, any> = {}) {
    console.log(JSON.stringify({ level: 'INFO', message, ...context }));
  },
  error(message: string, context: Record<string, any> = {}) {
    console.error(JSON.stringify({ level: 'ERROR', message, ...context }));
  }
};