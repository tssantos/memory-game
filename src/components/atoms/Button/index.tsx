import React, { MouseEventHandler } from 'react';

import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'option';

interface ButtonProps {
  large?: boolean;
  selected?: boolean;
  variant: ButtonVariant;
  children: string;
  value?: any
  onClick?: MouseEventHandler;
}

const Button = (props: ButtonProps) => {
  const classes = [styles.button, styles[props.variant]];
  if (props.selected) classes.push(styles.selected);
  if (props.large) classes.push(styles.large);
  const value = props.value && { 'data-value': props.value } || {}
  return (
    <div
      onClick={props.onClick}
      className={classes.join(' ')}
      { ...value }
    >
      {props.children}
    </div>
  );
}

export default Button;