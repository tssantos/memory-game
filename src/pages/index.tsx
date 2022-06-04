import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { MouseEventHandler, MouseEvent, useContext } from 'react';
import Button from '../components/atoms/Button';
import Logo from '../components/atoms/Logo';
import Options from '../components/organisms/Options';

import styles from './Home.module.css';

const Home: NextPage = () => {
  const router = useRouter();

  const OnStartGameClickHandler: MouseEventHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    router.push('/game');
  }

  return (
    <div className={styles.home}>
      <Head>
        <title>Frontend Mentor | Memory Game</title>
        <meta name="description" content="Frontend Mentor | Memory Game Challenge" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className={styles.main}>
        <Logo />
        <div className={styles.content}>
          <Options/>
          <Button variant='primary' large onClick={OnStartGameClickHandler}>Start Game</Button>
        </div>
      </main>
    </div>
  );
};

export default Home;
