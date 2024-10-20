import { randomUUID } from 'crypto';

export default defineEventHandler((event) => {
  // Add a random correlationId to the event context
  event.context.correlationId = randomUUID();
});