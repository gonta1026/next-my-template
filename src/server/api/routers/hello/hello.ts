import { helloUsecase } from '@/server/api/routers/hello/hello.usecase'
import { publicProcedure } from '@/server/api/trpc'
import { z } from 'zod'

export const hello = () => {
  return publicProcedure.input(z.object({ text: z.string() })).query(helloUsecase)
}
