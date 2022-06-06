import React, { useEffect } from 'react';

import styles from './Timer.module.css';

interface TimerProps {
  tick: () => void;
}

const Timer = (props: TimerProps) => {
  let interval: NodeJS.Timer;

  useEffect(() => {
    interval = setInterval(props.tick, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  
  return (
    <>
    </>
  );
}

export default Timer;