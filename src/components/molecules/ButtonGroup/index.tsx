import React, { MouseEventHandler, MouseEvent, useState, useContext } from 'react';
import slugify from 'slugify';
import AppContext, { AppContextGetter, AppContextSetter } from '../../../contexts/app.context';
import Button from '../../atoms/Button';

import styles from './ButtonGroup.module.css';

interface ButtonGroupProps {
  label: string;
  current: any;
  set: (value: any) => void;
  options: Record<any, string>;
}

const ButtonGroup = (props: ButtonGroupProps) => {
  const appContext = useContext(AppContext);

  const onButtonClicked: MouseEventHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const selectedValue = event.currentTarget.getAttribute('data-value');
    if (selectedValue) {
      props.set(selectedValue);
    }
  };
  return (
    <div className={styles.buttonGroup}>
      <div className={styles.label}>{props.label}</div>
      <div className={`${styles.options} ${Object.entries(props.options).length > 2 ? styles.small : styles.large}`}>
        {
          Object.entries(props.options).map(([key, value]) => {
            return (<Button
              onClick={onButtonClicked}
              variant='option'
              key={slugify(key)}
              selected={props.current == key}
              value={key}
            >{value}
            </Button>);
          })}
      </div>
    </div>
  );
};

export default ButtonGroup;