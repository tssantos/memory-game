import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAnchor, faBroom, faBug, faBurger, faCar, faCoins, faDrum, faFlask, faGuitar, faHandSpock, faMicrophoneLines, faMoon, faMotorcycle, faPhone, faSnowflake, faSoccerBall, faSuitcase, faSun } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

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
  state: GameState;
  board: Record<number, TileState>;
  players: Record<number, PlayerState>;

  setTheme: (value: GameOptionTheme) => void;
  setPlayers: (value: GameOptionPlayers) => void;
  setGridSize: (value: GameOptionGridSize) => void;


  startGame: () => void;
  handleTileClick: (index: number) => void;
  
};

export interface PlayerState {
  index: number;
  pairs: number;
}

export type GameStatus = 'new' | 'running' | 'finished';

export interface GameState {
  status: GameStatus;
  elapsedTime: number;
  moves: number;
  currPlayer: number;
  firstChoice: number | undefined;
  secondChoice: number | undefined;
}

export interface TileState {
  index: number;
  value: number;
  icon: IconDefinition;
  selected: boolean;
  opened: boolean;
}

export const GameTileIconsMap: Record<number, IconDefinition> = {
  0: faAnchor,
  1: faSoccerBall,
  2: faFlask,
  3: faSun,
  4: faHandSpock,
  5: faBug,
  6: faMoon,
  7: faSnowflake,
  8: faCar,
  9: faMotorcycle,
  10: faBroom,
  11: faBurger,
  12: faCoins,
  13: faDrum,
  14: faGuitar,
  15: faMicrophoneLines,
  16: faPhone,
  17: faSuitcase,
}
