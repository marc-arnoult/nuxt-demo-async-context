import { randomUUID } from 'crypto';
import { setCookie } from "#imports";

export default defineEventHandler((event) => {
  // Add a random correlationId to the event context
  const correlationId = getCookie(event, "correlationId") || randomUUID();
  event.context.correlationId = correlationId;

  setCookie(event, "correlationId", correlationId);
});
