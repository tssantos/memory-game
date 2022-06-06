import router from 'next/router';
import React, { MouseEventHandler, MouseEvent, useContext } from 'react';
import AppContext from '../../../contexts/app.context';
import Button from '../../atoms/Button';
import ResultsBoard from '../../molecules/ResultsBoard';

import styles from './Results.module.css';

interface ResultsProps { }

const Results = (props: ResultsProps) => {
  const appContext = useContext(AppContext);
  
  const onNewGameClicked: MouseEventHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    router.push('/');
  };

  const onRestartGameClicked: MouseEventHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    appContext.startGame();
  };

  return (
    <div className={styles.results}>
      <div className={styles.content}>
        <ResultsBoard />
        <div className={styles.actions}>
          <Button variant='primary' onClick={onRestartGameClicked}>Restart</Button>
          <Button variant='secondary' onClick={onNewGameClicked}>Setup New Game</Button>
        </div>
      </div>
    </div>
  );
};

export default Results;