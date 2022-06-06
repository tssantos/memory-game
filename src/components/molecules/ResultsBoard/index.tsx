import React, { useContext } from 'react';
import AppContext from '../../../contexts/app.context';
import { FormatTime } from '../../../utils';
import ResultCard from '../../atoms/ResultCard';

import styles from './ResultsBoard.module.css';

interface ResultsBoardProps { }


const ResultsBoard = (props: ResultsBoardProps) => {
  const appContext = useContext(AppContext);

  const players = Object.values(appContext.players);
  players.sort((a, b) => b.pairs - a.pairs);
  const winPairs = players[0].pairs;
  const winners = players.filter(p => p.pairs == winPairs).length;

  const title = players.length == 1 ? `You did it!` : winners > 1 ? `It's a tie!` : `Player ${players[0].index + 1} Wins!`;

  const subtitle = players.length == 1 ?
    `Game over! Here's how you got on ...` :
    'Game over! Here are the results ...';

  return (
    <div className={styles.board}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div className={styles.summary}>
        {players.length == 1 && <>
          <ResultCard label='Time Elapsed' value={FormatTime(appContext.state.elapsedTime)} />
          <ResultCard label='Moves Taken' value={`${appContext.state.moves} Moves`} />
        </>
        }
        {players.length > 1 && <>
          {Object.entries(players).map(([index, player]) =>
            <ResultCard
              key={`player-${+player.index + 1}`}
              label={`Player ${+player.index + 1}`}
              winner={winPairs == player.pairs}
              value={`${player.pairs} Pairs`}
            />
          )}
        </>
        }
      </div>
    </div>
  );
};

export default ResultsBoard;