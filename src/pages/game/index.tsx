import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { MouseEventHandler, MouseEvent, useContext, useEffect } from 'react';
import Portal from '../../components/atoms/Portal';
import ResultsBoard from '../../components/molecules/ResultsBoard';
import Board from '../../components/organisms/Board';
import Footer from '../../components/organisms/Footer';
import Header from '../../components/organisms/Header';
import Results from '../../components/organisms/Results';
import AppContext from '../../contexts/app.context';

import styles from './Game.module.css';

const Game: NextPage = () => {
  const appContext = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (Object.entries(appContext.board).length == 0) {
      router.push('/');
    }
  })

  return (
    <div className={styles.game}>
      <Head>
        <title>Frontend Mentor | Memory Game</title>
        <meta name="description" content="Frontend Mentor | Memory Game Challenge" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div id='portal' />
      <Header/>
      <main className={styles.main}>
        { appContext.state.status == 'finished'&& <Portal><Results/></Portal>}
        <Board/>
      </main>
      <Footer/>
    </div>
  );
};

export default Game;
