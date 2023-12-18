import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next.js dummy app</h1>
      <h2>Main app page</h2>
      <p>Using the <code>&lt;Image&gt;</code> component:</p>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      />
    </main>
  )
}
