import { createTRPCRouter } from '@/server/api/trpc'
import { create } from './create'
import { hello } from '@/server/api/routers/hello/hello'
import { first } from '@/server/api/routers/user/first'

export const userRouter = createTRPCRouter({
  hello: hello(),
  create: create(),
  first: first(),
})
