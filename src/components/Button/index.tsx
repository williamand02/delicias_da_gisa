import React from 'react';
import styles from './Button.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    children?: React.ReactNode,
    onClick?: () => void
  }


function Button({children, type, onClick}:Props) {
  return (
    <button onClick={onClick} className={styles.button}>{children}</button>
  )
}

export default Button