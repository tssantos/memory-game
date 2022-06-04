import type { NextPage } from 'next'
import Head from 'next/head'
import Logo from '../components/atoms/Logo';

import styles from './Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Memory Game</title>
        <meta name="description" content="Frontend Mentor | Memory Game Challenge" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className={styles.main}>
        <Logo/>
      </main>
    </div>
  )
}

export default Home
