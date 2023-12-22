import { useEffect, useState } from 'react';

import styles from './Counter.module.css';

interface Props {
  showAfter: number;
  counter: number;
  total: number;
}

const Counter = ({ counter, total, showAfter }: Props) => {
  const [className, setClassName] = useState('willFadeIn');
  useEffect(() => {
    setTimeout(() => {
      setClassName((cn) => `${cn} fadeIn`);
    }, showAfter);
  }, [showAfter]);
  return (
    <div className={`${styles.Counter} ${className}`}>
      {counter}/{total}
    </div>
  );
};

export default Counter;
