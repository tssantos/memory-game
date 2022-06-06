import React from 'react';
import ScoreBoard from '../../molecules/ScoreBoard';

import styles from './Footer.module.css';

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <ScoreBoard/>
    </footer>
  );
}

export default Footer;