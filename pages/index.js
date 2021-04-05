import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Menu } from '../components/menu/menu'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>delPlata</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Menu />
      </main>
    </div>
  )
}
