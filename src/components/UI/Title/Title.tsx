import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import cn from 'classnames'
import styles from './Title.module.scss'


interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
  children: ReactNode
}

const Title = ({children, className}: TitleProps) => {
  return (
    <h2 className={cn(styles.title, className)}>
      {children}
    </h2>
  );
};

export default Title;