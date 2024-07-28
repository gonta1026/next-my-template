import type { QueryCallBackArg } from '@/server/api/routers/user/type'
import { UserRepository } from '@/server/repository/user'

export const firstCallback = async ({ ctx }: QueryCallBackArg) => {
  const userRepository = new UserRepository(ctx.db)
  return await userRepository.first()
}
