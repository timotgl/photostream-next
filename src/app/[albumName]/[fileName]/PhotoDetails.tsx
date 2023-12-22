import React, { useEffect, useState } from 'react';

import styles from './PhotoDetails.module.css';
import { PhotoItem } from '../interfaces';

interface PhotoDetailsProps extends PhotoItem {
  showAfter: number;
}

const PhotoDetails = ({ title, location, date, caption, showAfter }: PhotoDetailsProps) => {
  const [className, setClassName] = useState('willFadeIn');
  useEffect(() => {
    setTimeout(() => {
      setClassName((cn) => `${cn} fadeIn`);
    }, showAfter);
  }, [showAfter]);
  return (
    <div id="PhotoDetails" className={`${styles.PhotoDetails} ${className}`}>
      <h1 id="title">{title}</h1>
      <h2 id="locationAndDate">
        {location || date ? (
          <span>
            {location} &middot; {date}
          </span>
        ) : (
          ''
        )}
      </h2>
      <p id="caption">{caption}</p>
    </div>
  );
};

export default PhotoDetails;
