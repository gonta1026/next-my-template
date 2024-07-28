import type { TRPCClientErrorLike } from '@trpc/client'
import type { TRPC_ERROR_CODE_KEY, TRPC_ERROR_CODE_NUMBER } from '@trpc/server/unstable-core-do-not-import'
import type { typeToFlattenedError } from 'zod'

export type TRPCCustomError = TRPCClientErrorLike<{
  transformer: boolean
  errorShape: {
    data: {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      zodError: typeToFlattenedError<any> | null
      code: TRPC_ERROR_CODE_KEY
      httpStatus: number
      path?: string
      stack?: string
    }
    message: string
    code: TRPC_ERROR_CODE_NUMBER
  }
}>
