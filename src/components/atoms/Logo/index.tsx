import React from 'react';

import styles from './Logo.module.css';

interface LogoProps {
  dark?: boolean;
}

const Logo = (props: LogoProps) => {
  return (
    <div className={`${styles.logo} ${props.dark && styles.dark}`}>
      memory
    </div>
  );
}

export default Logo;