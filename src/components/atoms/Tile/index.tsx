import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { MouseEventHandler, MouseEvent, useContext } from 'react';
import AppContext from '../../../contexts/app.context';
import { TileState } from '../../../types';

import styles from './Tile.module.css';

interface TileProps {
  index: number;
}

const Tile = (props: TileProps) => {
  const appContext = useContext(AppContext);

  const onTileClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const index = event.currentTarget.getAttribute('data-index');
    if (index != null)
      appContext.handleTileClick(+index);
  };

  const tileSize = appContext.options.gridSize == '4x4' ? 'large' : 'small';
  const tile = appContext.board[props.index];

  return (
    <div onClick={onTileClick} data-index={props.index}
      className={`${styles.tile} ${styles[tileSize]} ${tile.selected && styles.selected || ''} ${tile.opened && styles.opened || ''}`}>
      <div className={styles.content}>
        {appContext.options.theme == 'numbers' && (tile.opened || tile.selected) && <p>{tile.value}</p>}
        {appContext.options.theme == 'icons' && (tile.opened || tile.selected) && <FontAwesomeIcon icon={tile.icon} />}
      </div>
    </div>
  );
};

export default Tile;