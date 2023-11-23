import z from 'zod';

export const HelloWordSchemaValidator = z.object({
  saludo: z.string()
}).strict();
