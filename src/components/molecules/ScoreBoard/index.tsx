import React, { MouseEventHandler, MouseEvent, useState, useContext } from 'react';
import AppContext from '../../../contexts/app.context';
import { FormatTime } from '../../../utils';
import ScoreCard from '../../atoms/ScoreCard';

import styles from './ScoreBoard.module.css';

interface ScoreBoardProps { }

const ScoreBoard = (props: ScoreBoardProps) => {
  const appContext = useContext(AppContext);

  return (
    <div className={styles.board}>
      {appContext.options.players == 1 && <>
        <ScoreCard label='Time' value={FormatTime(appContext.state.elapsedTime)}/>
        <ScoreCard label='Moves' value={appContext.state.moves}/>
      </>
      }
      {appContext.options.players > 1 && <>
        {Object.entries(appContext.players).map(([index, player]) =>
          <ScoreCard
            key={`player-${+index + 1}`}
            multiplayer
            label={`Player ${+index + 1}`}
            value={player.pairs}
            current={appContext.state.currPlayer == +index}
          />
        )}
      </>
      }
    </div>
  );
};

export default ScoreBoard;