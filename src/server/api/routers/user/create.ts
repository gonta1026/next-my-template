import { publicProcedure } from '@/server/api/trpc'
import { createSchema } from '@/server/api/routers/user/request/create'
import { createCallback } from '@/server/api/routers/user/usecase/create'

export const create = () => {
  return publicProcedure.input(createSchema).mutation(createCallback)
}
