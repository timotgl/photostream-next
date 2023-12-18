import Image from 'next/image'
import styles from './page.module.css'

const imageSrc = "https://timotaglieber.de/photos/albums/highlights/3840/south-tufa.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next.js dummy app</h1>
      <h2>Main app page</h2>
      <p>Pushing a commit to main on GitHub should deploy this app</p>
      <p>
        Using the <code>&lt;Image&gt;</code> component with an image from:<br/>
        <code>{imageSrc}</code>
      </p>
      <Image
        src={imageSrc}
        alt="South Tufa"
        width={1024}
        height={768}
        priority
      />
    </main>
  )
}
