import { PrismaClient } from '@prisma/client'

import { env } from '@/env'
import type { DefaultArgs } from '@prisma/client/runtime/library'

export type DBPrismaClient = PrismaClient<
  {
    log: ('query' | 'warn' | 'error')[]
  },
  never,
  DefaultArgs
>

export type CTX = {
  headers: Headers
  db: DBPrismaClient
}

const createPrismaClient = (): DBPrismaClient => {
  return new PrismaClient({
    log: env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })
}

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined
}

export const db = globalForPrisma.prisma ?? createPrismaClient()

if (env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db
}
