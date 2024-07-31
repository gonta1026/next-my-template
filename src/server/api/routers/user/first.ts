import { firstCallback } from '@/server/api/routers/user/usecase/first'
import { publicProcedure } from '@/server/api/trpc'

export const first = () => {
  return publicProcedure.query(firstCallback)
}
