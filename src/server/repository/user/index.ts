import type { DBPrismaClient } from '@/server/db'
import type { User } from '@prisma/client'

export interface UserRepositoryInterface {
  create: (name: string, email: string, hashedPassword: string) => Promise<User>
  first: () => Promise<User | null>
}

export class UserRepository implements UserRepositoryInterface {
  private db
  constructor(db: DBPrismaClient) {
    this.db = db
  }

  async create(name: string, email: string, hashedPassword: string): Promise<User> {
    return await this.db.user.create({ data: { name, email, hashedPassword } })
  }
  async first(): Promise<User | null> {
    return await this.db.user.findFirst({})
  }
}
