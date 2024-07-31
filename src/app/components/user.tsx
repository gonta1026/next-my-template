'use client'

import { type FC, useState } from 'react'

import { api } from '@/trpc/react'
import styles from '../index.module.css'
import { errorHandler } from '@/lib/error/errorHandler'
import type { User } from '@prisma/client'

type Props = {
  latestUser: User
}

export const LatestUser: FC<Props> = ({ latestUser }) => {
  // const { data: latestUser } = api.user.first.useQuery()
  const utils = api.useUtils()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const createPost = api.user.create.useMutation({
    onSuccess: async () => {
      await utils.user.invalidate() // 再取得
      setName('')
      setEmail('')
    },
    onError: errorHandler,
  })

  return (
    <div className={styles.showcaseContainer}>
      {latestUser ? (
        <p className={styles.showcaseText}>Your most recent post: {latestUser.name}</p>
      ) : (
        <p className={styles.showcaseText}>You have no posts yet.</p>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault()
          createPost.mutate({
            name,
            email,
            hashedPassword: '33zj64kn4vcqlil8mbp0an0h3vw5dn3d6i6c3yh4tizw0aus9f404d1kc8k04ukz',
          })
        }}
        className={styles.form}
      >
        <input
          type="text"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.submitButton} disabled={createPost.isPending}>
          {createPost.isPending ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}
