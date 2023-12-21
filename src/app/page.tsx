import Image from 'next/image'
import styles from './page.module.css'

const imageSrc = "https://timotaglieber.de/photos/albums/highlights/3840/south-tufa.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next.js version of photostream app</h1>
      <p>This component should not be rendered at all, the server side should redirect to the default album instead.</p>
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
