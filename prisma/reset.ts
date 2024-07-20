import type { PrismaClient } from '@prisma/client'

export const reset = async (prisma: PrismaClient) => {
  await prisma.user.deleteMany({})
}
