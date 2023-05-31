import {ReactNode} from 'react';
import styles from './Container.module.scss'
import cn from "classnames";

interface ContainerProps {
  children: ReactNode
  className?: string
  min?: boolean
}

const Container = ({children, min, className}: ContainerProps) => {
  return (
    <div className={cn( styles.container, min && styles.min, className)}>
      {children}
    </div>
  );
};

export default Container;