import { randomUUID } from 'crypto';
import { setCookie } from "#imports";

export default defineEventHandler((event) => {
  // Add a random correlationId to the event context
  const correlationId = randomUUID();
  event.context.correlationId = correlationId;

  setCookie("correlationId", correlationId);
});