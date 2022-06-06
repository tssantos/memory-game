import { useRouter } from 'next/router';
import React, { MouseEventHandler, MouseEvent, useContext } from 'react';
import AppContext from '../../../contexts/app.context';
import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';

import styles from './Header.module.css';

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const appContext = useContext(AppContext);
  const router = useRouter();

  const onLogoClicked: MouseEventHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    router.push('/');
  }

  const onNewGameClicked: MouseEventHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    router.push('/');
  }

  const onRestartGameClicked: MouseEventHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    appContext.startGame();
  }

  return (
    <header className={styles.header}>
      <Logo onClick={onLogoClicked} dark/>
      <Button variant='primary' onClick={onRestartGameClicked}>Restart</Button>
      <Button variant='secondary' onClick={onNewGameClicked}>New Game</Button>
    </header>
  );
}

export default Header;