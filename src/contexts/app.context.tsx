import { GameOptionGridSize, GameOptionPlayers, GameOptions, GameOptionsKeys, GameOptionTheme, GameState, IAppContext, PlayerState } from '../types';
import React, { PropsWithChildren, useEffect, useState } from 'react';

const defaultGameOptions: GameOptions = {
  theme: 'numbers',
  players: 1,
  gridSize: '4x4'
};

const defaultGameState: GameState = {
  running: false,
  elapsedTime: 0,
  moves: 0,
  currPlayer: 0,
  players: []
};

const defaultState: IAppContext = {
  options: defaultGameOptions,
  state: defaultGameState,
  setTheme: (value: GameOptionTheme) => { },
  setPlayers: (value: GameOptionPlayers) => { },
  setGridSize: (value: GameOptionGridSize) => { },
  startGame: () => {},
};

const AppContext = React.createContext<IAppContext>(defaultState);

export type AppContextGetter = 'options.theme' | 'options.players' | 'options.gridSize';

export type AppContextSetter = 'setTheme' | 'options.players' | 'options.gridSize';

export const AppProvider = (props: PropsWithChildren<{}>) => {

  const [options, setOptions] = useState(defaultGameOptions);
  const [state, setState] = useState(defaultGameState);
  let interval: NodeJS.Timer;

  const setTheme = (newTheme: GameOptionTheme) => {
    setOptions(options => ({ ...options, theme: newTheme }));
  };

  const setPlayers = (newPlayers: GameOptionPlayers) => {
    setOptions(options => ({ ...options, players: newPlayers }));
  };

  const setGridSize = (newGridSize: GameOptionGridSize) => {
    setOptions(options => ({ ...options, gridSize: newGridSize }));
  };

  const startGame = () => {
    const players: PlayerState[] = [];
    for(let index = 0; index < options.players; index += 1) {
      players.push({ index, pairs: 0 });
    }
    setState(state => ({
      running: true,
      moves: 0,
      elapsedTime: 0,
      currPlayer: 0,
      players,
    }))
  }

  const timerTick = () => {
    setState(state => ({ ...state, elapsedTime: state.elapsedTime + (state.running ? 1 : 0)}))
  }

  useEffect(() => {
    interval = setInterval(timerTick, 1000);
    return () => {
      clearInterval(interval);
    }
  })

  return (
    <AppContext.Provider value={{
      options,
      state,
      setTheme,
      setPlayers,
      setGridSize,
      startGame,
    }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
