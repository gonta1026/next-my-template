import Link from 'next/link'

import { LatestUser } from '@/app/components/user'
import { api, HydrateClient } from '@/trpc/server'
import styles from './index.module.css'
export const metadata = {
  title: 'e2e lesson',
}

export default async function Home() {
  const hello = await api.user.hello({ text: 'from tRPC' })

  // void api.user.first.prefetch()

  return (
    <HydrateClient>
      <main className={styles.main}>
        <h1>Hello World🚀</h1>
        <div className={styles.container}>
          <h2 className={styles.title}>
            Create <span className={styles.pinkSpan}>T3</span> App
          </h2>
          <div className={styles.cardRow}>
            <Link className={styles.card} href="https://create.t3.gg/en/usage/first-steps" target="_blank">
              <h3 className={styles.cardTitle}>First Steps →</h3>
              <div className={styles.cardText}>
                Just the basics - Everything you need to know to set up your database and authentication.
              </div>
            </Link>
            <Link className={styles.card} href="https://create.t3.gg/en/introduction" target="_blank">
              <h3 className={styles.cardTitle}>Documentation →</h3>
              <div className={styles.cardText}>
                Learn more about Create T3 App, the libraries it uses, and how to deploy it.
              </div>
            </Link>
          </div>
          <div className={styles.showcaseContainer}>
            <p className={styles.showcaseText}>{hello ? hello.greeting : 'Loading tRPC query...'}</p>
          </div>

          <LatestUser />
        </div>
      </main>
    </HydrateClient>
  )
}
