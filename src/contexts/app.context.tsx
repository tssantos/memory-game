import { GameOptionGridSize, GameOptionPlayers, GameOptions, GameOptionsKeys, GameOptionTheme, IAppContext } from '../types';
import React, { PropsWithChildren, useState } from 'react';

const defaultOptions: GameOptions = {
  theme: 'numbers',
  players: 1,
  gridSize: '4x4'

};

const defaultState: IAppContext = {
  options: defaultOptions,
  setTheme: (value: GameOptionTheme) => { },
  setPlayers: (value: GameOptionPlayers) => { },
  setGridSize: (value: GameOptionGridSize) => { },
  get: (key: string) => { }
};

const AppContext = React.createContext<IAppContext>(defaultState);

export type AppContextGetter = 'options.theme' | 'options.players' | 'options.gridSize';

export type AppContextSetter = 'setTheme' | 'options.players' | 'options.gridSize';

export const AppProvider = (props: PropsWithChildren<{}>) => {

  const [options, setOptions] = useState(defaultOptions);

  const setTheme = (newTheme: GameOptionTheme) => {
    setOptions(options => ({ ...options, theme: newTheme }));
  };

  const setPlayers = (newPlayers: GameOptionPlayers) => {
    setOptions(options => ({ ...options, players: newPlayers }));
  };

  const setGridSize = (newGridSize: GameOptionGridSize) => {
    setOptions(options => ({ ...options, gridSize: newGridSize }));
  };

  const get = (getter: string) => {
    const [object, key] = getter.split('.');
    console.log({ getter, object, key});
    if (object == 'options') {
      return options[key as GameOptionsKeys];
    }
    return 
  }

  return (
    <AppContext.Provider value={{
      options,
      setTheme,
      setPlayers,
      setGridSize,
      get
    }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
