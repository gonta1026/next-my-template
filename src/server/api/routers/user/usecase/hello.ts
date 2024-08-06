import type { MutationCallBackArg } from '@/server/api/routers/user/type'
import type { HelloSchemaInput } from '@/server/api/routers/user/request/hello'

export const helloCallback = async ({ ctx, input }: MutationCallBackArg<HelloSchemaInput>) => {
  console.log('hello !!!!!!!!!!!!!!!')
  return await ctx.db.user.findFirst({ where: { id: input.id } })
}
