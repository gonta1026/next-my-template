import type { DBPrismaClient } from '@/server/db'

/**
 * @NOTE T: input type
 */
export type MutationCallBackArg<T> = {
  ctx: {
    headers: Headers
    db: DBPrismaClient
  }
  input: T
}

/**
 * @NOTE T: query
 */
export type QueryCallBackArg = {
  ctx: {
    headers: Headers
    db: DBPrismaClient
  }
}
