import { TRPCError } from '@trpc/server'
import { TRPC_ERROR_CODES_BY_KEY, type TRPC_ERROR_CODES_BY_NUMBER } from '@trpc/server/unstable-core-do-not-import'

type TrpcCode = keyof typeof TRPC_ERROR_CODES_BY_KEY
type TrpcStatusCode = keyof typeof TRPC_ERROR_CODES_BY_NUMBER

export class CustomTRPCError extends TRPCError {
  statusCode: number
  name: 'CustomTRPCError'
  constructor(message: string, code: TrpcCode, statusCode: TrpcStatusCode) {
    super({
      code,
      message,
      cause: new Error(message),
    })
    this.name = 'CustomTRPCError'
    this.statusCode = statusCode
  }
}

export const ERROR_EXIST_EMAIL = new CustomTRPCError(
  'メールアドレスはすでに使用されています。',
  'CONFLICT',
  TRPC_ERROR_CODES_BY_KEY.CONFLICT,
)
