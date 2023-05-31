import React, {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';
import styles from './Button.module.scss'
import cn from "classnames";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode

}
const Button = ({className, children, onClick}: ButtonProps) => {
  return (
    <button className={cn(styles.button, className)}>
      {children}
    </button>
  );
};

export default Button;