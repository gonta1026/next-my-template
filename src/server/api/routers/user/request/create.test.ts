import { createSchema } from '@/server/api/routers/user/request/create'
import { describe, it, expect } from 'vitest'

describe('createSchema validation', () => {
  it('should validate correct input', () => {
    const input = {
      name: 'Valid Name',
      email: 'test@example.com',
      hashedPassword: 'hashedPassword123',
    }

    const result = createSchema.safeParse(input)
    expect(result.success).toBe(true)
  })

  it('should fail validation for name with less than 1 character', () => {
    const input = {
      name: '',
      email: 'test@example.com',
      hashedPassword: 'hashedPassword123',
    }

    const result = createSchema.safeParse(input)
    expect(result.success).toBe(false)
    expect(result?.error?.format().name?._errors).toContain('メールアドレスは最低1文字以上で入力をしてください。')
  })

  it('should fail validation for name with more than 10 characters', () => {
    const input = {
      name: 'A very long name',
      email: 'test@example.com',
      hashedPassword: 'hashedPassword123',
    }

    const result = createSchema.safeParse(input)
    expect(result.success).toBe(false)
    expect(result?.error?.format().name?._errors).toContain('メールアドレスは最大10文字です。')
  })

  it('should fail validation for missing email', () => {
    const input = {
      name: 'Valid Name',
      email: '',
      hashedPassword: 'hashedPassword123',
    }

    const result = createSchema.safeParse(input)
    expect(result.success).toBe(false)
    expect(result?.error?.format().email?._errors).toContain('メールアドレスを入力してください。')
  })

  it('should fail validation for missing hashedPassword', () => {
    const input = {
      name: 'Valid Name',
      email: 'test@example.com',
      hashedPassword: '',
    }

    const result = createSchema.safeParse(input)
    expect(result.success).toBe(false)
    expect(result?.error?.format().hashedPassword?._errors).toContain('パスワードを入力してください。')
  })
})
