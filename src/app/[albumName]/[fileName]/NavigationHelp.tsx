import { useState, useEffect } from 'react';

import styles from './NavigationHelp.module.css';

interface Props {
  hideAfter: number;
}

const NavigationHelp = ({ hideAfter }: Props) => {
  const [className, setClassName] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setClassName('fadeOut');
    }, hideAfter);
  }, [hideAfter]);
  return (
    <div className={`${styles.navigationHelp} ${className}`}>
      <h1>Use click, swipe left/right, arrow keys, or mouse wheel to browse photos</h1>
    </div>
  );
};

export default NavigationHelp;
