import type { NextPage } from 'next';
import Head from 'next/head';
import React, { MouseEventHandler, MouseEvent, useContext } from 'react';
import Header from '../../components/organisms/Header';
import AppContext from '../../contexts/app.context';

import styles from './Game.module.css';

const Game: NextPage = () => {
  const appContext = useContext(AppContext);

  return (
    <div className={styles.game}>
      <Head>
        <title>Frontend Mentor | Memory Game</title>
        <meta name="description" content="Frontend Mentor | Memory Game Challenge" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Header/>
      <main className={styles.main}>
      </main>
    </div>
  );
};

export default Game;
