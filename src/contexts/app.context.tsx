import { GameOptionGridSize, GameOptionPlayers, GameOptions, GameOptionTheme, GameState, GameTileIconsMap, IAppContext, PlayerState, TileState } from '../types';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { CreateShuffledTiles } from '../utils';

const defaultGameOptions: GameOptions = {
  theme: 'numbers',
  players: 1,
  gridSize: '4x4'
};

const defaultGameState: GameState = {
  status: 'new',
  elapsedTime: 0,
  moves: 0,
  currPlayer: 0,
  firstChoice: undefined,
  secondChoice: undefined
};

const defaultState: IAppContext = {
  options: defaultGameOptions,
  state: defaultGameState,
  board: [],
  players: [],
  setTheme: (value: GameOptionTheme) => { },
  setPlayers: (value: GameOptionPlayers) => { },
  setGridSize: (value: GameOptionGridSize) => { },
  startGame: () => { },
  handleTileClick: (index: number) => { },
};

const AppContext = React.createContext<IAppContext>(defaultState);

export type AppContextGetter = 'options.theme' | 'options.players' | 'options.gridSize';

export type AppContextSetter = 'setTheme' | 'options.players' | 'options.gridSize';

export const AppProvider = (props: PropsWithChildren<{}>) => {

  const [options, setOptions] = useState(defaultGameOptions);
  const [state, setState] = useState(defaultGameState);
  const [board, setBoard] = useState([] as Record<number, TileState>);
  const [players, setPlayers] = useState([] as Record<number, PlayerState>);
  let interval: NodeJS.Timer;

  const setThemeOption = (newTheme: GameOptionTheme) => {
    setOptions(options => ({ ...options, theme: newTheme }));
  };

  const setPlayersOption = (newPlayers: GameOptionPlayers) => {
    setOptions(options => ({ ...options, players: newPlayers }));
  };

  const setGridSizeOption = (newGridSize: GameOptionGridSize) => {
    setOptions(options => ({ ...options, gridSize: newGridSize }));
  };

  const startGame = () => {
    const players: PlayerState[] = [];
    for (let index = 0; index < options.players; index += 1) {
      players[index] = { pairs: 0 };
    }
    const tiles = CreateShuffledTiles(options.gridSize == '4x4' ? 16 : 36);
    const board: TileState[] = [];
    tiles.forEach((value, index) => {
      board[index] = {
        index,
        value: value,
        icon: GameTileIconsMap[value],
        selected: false,
        opened: false
      };
    });
    setPlayers(players);
    setBoard(board);
    setState({
      status: 'running',
      moves: 0,
      elapsedTime: 0,
      currPlayer: 0,
      firstChoice: undefined,
      secondChoice: undefined,
    });
  };

  const setTileProperty = (index: number, partial: Partial<TileState>) => {
    setBoard(board => ({
      ...board,
      [index]: {
        ...board[index],
        ...partial,
      }
    }));
  };

  const handleTileClick = (index: number) => {
    if (!board[index].opened && !board[index].selected) {
      if (state.firstChoice == undefined) {
        setState(state => ({ ...state, firstChoice: index }));
        setTileProperty(index, { selected: true });
      } else if (state.secondChoice == undefined) {
        setState(state => ({ ...state, secondChoice: index }));
        setTileProperty(index, { selected: true });
      }
    }
  };

  const nextPlayer = () => state.currPlayer == options.players - 1 ? 0 : state.currPlayer + 1;

  const evaluateTurn = () => {
    if (state.firstChoice != undefined && state.secondChoice != undefined) {
      const isPair = board[state.firstChoice].value == board[state.secondChoice].value;
      setTileProperty(state.firstChoice, { opened: isPair, selected: false });
      setTileProperty(state.secondChoice, { opened: isPair, selected: false });
      setPlayers(currPlayers => ({
        ...currPlayers,
        [state.currPlayer]: {
          ...currPlayers[state.currPlayer],
          pairs: currPlayers[state.currPlayer].pairs + (isPair ? 1 : 0)
        }
      }));
      const closedTiles = Object.values(board).filter(tile => !tile.opened).map(tile => tile.index);
      const isFinished = (closedTiles.length == 2 &&
          (closedTiles.find(tile => tile == state.firstChoice) != undefined) &&
          (closedTiles.find(tile => tile == state.secondChoice) != undefined))
      setState(state => ({
        ...state,
        status: isFinished ? 'finished' : 'running',
        currPlayer: isPair ? state.currPlayer : nextPlayer(),
        moves: state.moves + 1,
        firstChoice: undefined,
        secondChoice: undefined
      }));
    }
  };

  // const timerTick = () => {
  //   setState(state => ({ ...state, elapsedTime: state.elapsedTime + (state.status == 'running' ? 1 : 0) }));
  // };

  useEffect(() => {
    if (state.firstChoice != undefined && state.secondChoice != undefined) {
      setTimeout(evaluateTurn, 500);
    }
    // interval = setInterval(timerTick, 1000);
    // return () => {
      // clearInterval(interval);
    // };
  });

  return (
    <AppContext.Provider value={{
      options,
      state,
      board,
      players,
      setTheme: setThemeOption,
      setPlayers: setPlayersOption,
      setGridSize: setGridSizeOption,
      startGame,
      handleTileClick,
    }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
