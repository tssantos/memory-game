import React, { MouseEventHandler } from 'react';

import styles from './Logo.module.css';

interface LogoProps {
  dark?: boolean;
  onClick?: MouseEventHandler;
}

const Logo = (props: LogoProps) => {
  return (
    <div onClick={props.onClick} className={`${styles.logo} ${props.dark && styles.dark} ${props.onClick && styles.link}`}>
      memory
    </div>
  );
}

export default Logo;