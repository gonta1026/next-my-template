import { z } from 'zod'

export type HelloSchemaInput = z.infer<typeof helloSchema>

export const helloSchema = z.object({ text: z.string(), id: z.number() })
