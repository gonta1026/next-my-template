import { helloSchema } from '@/server/api/routers/user/request/hello'
import { helloCallback } from '@/server/api/routers/user/usecase/hello'
import { publicProcedure } from '@/server/api/trpc'

export const hello = () => {
  return publicProcedure.input(helloSchema).query(helloCallback)
}
