import { useRouter } from 'next/router';
import React, { MouseEventHandler, MouseEvent } from 'react';
import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';

import styles from './Header.module.css';

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const router = useRouter();

  const onLogoClicked: MouseEventHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    router.push('/');
  }

  const onNewGameClicked: MouseEventHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    router.push('/');
  }

  return (
    <header className={styles.header}>
      <Logo onClick={onLogoClicked} dark/>
      <Button variant='primary'>Restart</Button>
      <Button variant='secondary' onClick={onNewGameClicked}>New Game</Button>
    </header>
  );
}

export default Header;