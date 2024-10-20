export default {
  info(message: string) {
    const { context: { correlationId } } = useEvent();
    console.log(JSON.stringify({ level: 'INFO', message, correlationId }));
  },
  error(message: string) {
    const { context: { correlationId } } = useEvent();
    console.error(JSON.stringify({ level: 'ERROR', message, correlationId }));
  }
};