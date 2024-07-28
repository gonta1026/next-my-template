import { describe, it, expect, beforeEach, vi } from 'vitest'
import { createCallback } from '@/server/api/routers/user/usecase/create'
import type { DBPrismaClient } from '@/server/db'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { ERROR_EXIST_EMAIL } from '@/server/libs/error'

const mockUserRepositoryCreate = vi.fn()

vi.mock('@/server/repository/user', () => {
  class MockUserRepository {
    create = mockUserRepositoryCreate
  }
  return {
    UserRepository: MockUserRepository,
  }
})

describe('createCallback', () => {
  let db: DBPrismaClient

  beforeEach(() => {
    mockUserRepositoryCreate.mockReset()
  })

  it('should call create method with correct parameters and return the result', async () => {
    const input = {
      name: 'Valid Name',
      email: 'test@example.com',
      hashedPassword: 'hashedPassword123',
    }
    const expectedResult = { name: input.name, email: input.email, hashedPassword: input.hashedPassword }
    mockUserRepositoryCreate.mockResolvedValue(expectedResult)
    const res = await createCallback({ ctx: { headers: new Headers(), db }, input })
    expect(mockUserRepositoryCreate).toHaveBeenCalledWith(input.name, input.email, input.hashedPassword)
    expect(res).toEqual(expectedResult)
  })

  it('should handle PrismaClientKnownRequestError with code P2002', async () => {
    const input = { name: 'Valid Name', email: 'test@example.com', hashedPassword: 'hashedPassword123' }
    mockUserRepositoryCreate.mockImplementation(() => {
      throw new PrismaClientKnownRequestError('Unique constraint failed', {
        code: 'P2002',
        clientVersion: '',
        meta: {},
        batchRequestIdx: 1,
      })
    })

    await expect(createCallback({ ctx: { headers: new Headers(), db }, input })).rejects.toThrow(ERROR_EXIST_EMAIL)
  })
})
