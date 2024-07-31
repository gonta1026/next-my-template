import { z } from 'zod'

export type CreateSchemaInput = z.infer<typeof createSchema>

export const createSchema = z.object({
  name: z
    .string()
    .min(1, 'メールアドレスは最低1文字以上で入力をしてください。')
    .max(10, 'メールアドレスは最大10文字です。'),
  email: z.string().min(1, 'メールアドレスを入力してください。'),
  hashedPassword: z.string().min(1, 'パスワードを入力してください。'),
})
