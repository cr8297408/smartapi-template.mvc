import z from 'zod';

export const CreateHelloWordSchemaValidator = z.object({
  body: z.object({
    saludo: z.string()
  }),
  query: z.object({}),
  params: z.object({}),
}).strict();
