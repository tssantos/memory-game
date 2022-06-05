import React from 'react';

import styles from './ScoreCard.module.css';

interface ScoreCardProps {
  label: string;
  value: string | React.ReactNode;
  current?: boolean;
  multiplayer?: boolean;
}

const ScoreCard = (props: ScoreCardProps) => {
  return (
    <div className={`${styles.card} ${props.current && styles.current || ''}`}>
      {props.multiplayer && <div className={styles.arrow}/>}
      <div className={styles.content}>
        <p className={styles.label}>{props.label}</p>
        <p className={styles.value}>{props.value}</p>
      </div>
      {props.multiplayer && <p className={styles.turn}>Current Turn</p>}
    </div>
  );
}

export default ScoreCard;