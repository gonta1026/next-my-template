import { describe, it, expect, beforeEach, vi } from 'vitest'
import type { DBPrismaClient } from '@/server/db'
import { firstCallback } from '@/server/api/routers/user/usecase/first'

const mockUserRepositoryFirst = vi.fn()

vi.mock('@/server/repository/user', () => {
  class MockUserRepository {
    first = mockUserRepositoryFirst
  }
  return {
    UserRepository: MockUserRepository,
  }
})

describe('firstCallback', () => {
  let db: DBPrismaClient

  beforeEach(() => {
    mockUserRepositoryFirst.mockReset()
  })

  it('should call create method with correct parameters and return the result', async () => {
    const expectedResult = {
      id: 1,
      name: 'Valid Name',
      email: 'test@example.com',
      hashedPassword: 'hashedPassword123',
    }
    mockUserRepositoryFirst.mockResolvedValue(expectedResult)
    const res = await firstCallback({ ctx: { headers: new Headers(), db } })
    expect(res).toEqual(expectedResult)
  })
})
