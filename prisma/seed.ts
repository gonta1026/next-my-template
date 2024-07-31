import { PrismaClient } from '@prisma/client'
import { reset } from './reset'

const prisma = new PrismaClient()

async function main() {
  await reset(prisma)
  await prisma.user.create({
    data: {
      id: 1,
      name: '東京駅内の店',
      email: 'test@example.com',
      hashedPassword: 'ssss',
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
