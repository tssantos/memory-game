export type Theme = 'light' | 'dark';

export type GameOptionTheme = 'numbers' | 'icons';

export const GameThemeOptions: Record<GameOptionTheme, string> = {
  numbers: 'Numbers',
  icons: 'Icons'
};

export type GameOptionPlayers = 1 | 2 | 3 | 4;

export const GamePlayersOptions: Record<GameOptionPlayers, string> = {
  1: '1',
  2: '2',
  3: '3',
  4: '4'
};

export type GameOptionGridSize = '4x4' | '6x6';

export const GameGridSizeOptions: Record<GameOptionGridSize, string> = {
  '4x4': '4x4',
  '6x6': '6x6'
};

export interface GameOptions {
  theme: GameOptionTheme;
  players: GameOptionPlayers;
  gridSize: GameOptionGridSize;
}

export type GameOptionsKeys = 'theme' | 'players' | 'gridSize';

export type IAppContext = {
  options: GameOptions;

  setTheme: (value: GameOptionTheme) => void;
  setPlayers: (value: GameOptionPlayers) => void;
  setGridSize: (value: GameOptionGridSize) => void;

  state: GameState;
  startGame: () => void;
  
};

export interface PlayerState {
  index: number;
  pairs: number;
}

export interface GameState {
  running: boolean;
  elapsedTime: number;
  moves: number;
  players: PlayerState[];
  currPlayer: number;
}
