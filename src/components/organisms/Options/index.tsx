import React, { useContext } from 'react';
import AppContext from '../../../contexts/app.context';
import { GameThemeOptions, GamePlayersOptions, GameGridSizeOptions } from '../../../types';
import ButtonGroup from '../../molecules/ButtonGroup';

import styles from './Options.module.css';

interface OptionsProps { }

const Options = (props: OptionsProps) => {
  const appContext = useContext(AppContext);
  return (
    <div className={styles.options}>
      <ButtonGroup
        label='Select Theme'
        current={appContext.options.theme}
        set={appContext.setTheme}
        options={GameThemeOptions} />
      <ButtonGroup
        label='Number of Players'
        current={appContext.options.players}
        set={appContext.setPlayers}
        options={GamePlayersOptions} />
      <ButtonGroup
        label='Grid Size'
        current={appContext.options.gridSize}
        set={appContext.setGridSize}
        options={GameGridSizeOptions} />
    </div>
  );
};

export default Options;