import styles from './LazyImage.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import cn from 'classnames';

interface ILazyImageProps {
  fill?: boolean;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const LazyImage = ({alt, src, fill, width, height, className}: ILazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return <Image className={cn(styles.image, isLoaded && styles.imageIsLoaded, className)} src={src} width={width} height={height} fill={fill} alt={alt} onLoadingComplete={() => setIsLoaded(true)} />
}