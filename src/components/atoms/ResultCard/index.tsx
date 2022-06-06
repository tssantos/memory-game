import React from 'react';

import styles from './ResultCard.module.css';

interface ResultCardProps {
  label: string;
  value: string | React.ReactNode;
  winner?: boolean;
}

const ResultCard = (props: ResultCardProps) => {
  return (
    <div className={`${styles.card} ${props.winner && styles.winner || ''}`}>
      <div className={styles.content}>
        <p className={styles.label}>{props.label + `${props.winner ? ' (Winner!)': ''}`}</p>
        <p className={styles.value}>{props.value}</p>
      </div>
    </div>
  );
}

export default ResultCard;