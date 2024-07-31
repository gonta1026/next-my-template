import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { ERROR_EXIST_EMAIL } from '@/server/libs/error'
import { UserRepository } from '@/server/repository/user'
import type { CreateSchemaInput } from '@/server/api/routers/user/request/create'
import type { MutationCallBackArg } from '@/server/api/routers/user/type'

export const createCallback = async ({ ctx, input }: MutationCallBackArg<CreateSchemaInput>) => {
  try {
    const userRepository = new UserRepository(ctx.db)
    return await userRepository.create(input.name, input.email, input.hashedPassword)
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === 'P2002') throw ERROR_EXIST_EMAIL
    }
    throw err
  }
}
