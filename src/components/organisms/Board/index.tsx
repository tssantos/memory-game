import React, { MouseEvent, useContext } from 'react';
import AppContext from '../../../contexts/app.context';
import Tile from '../../atoms/Tile';

import styles from './Board.module.css';

interface BoardProps {}

const Board = (props: BoardProps) => {
  const appContext = useContext(AppContext);

  const boardSize = appContext.options.gridSize == '4x4' ? 'small' : 'large';

  return (
    <div className={`${styles.board} ${styles[boardSize]}`}>
      {Object.keys(appContext.board).map(index => (
        <Tile key={`tile-${index}`}index={+index}/>
      ))}
    </div>
  );
}

export default Board;