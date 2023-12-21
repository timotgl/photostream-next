'use client'

import { useState } from 'react';

import type { PhotoItem} from '../interfaces';
import Image from "next/image";
import styles from "./Photo.module.css";

interface Props {
  albumName: string;
  album: Array<PhotoItem>;
  initialFileName: string;
};

export default function Photo({ albumName, album, initialFileName }: Props) {
  const initialIndex = album.findIndex(item => item.file === initialFileName);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const photoItem = album[currentIndex];

  // TODO: derive screen width from user agent header with Next.js middleware
  const screenWidth = '3840';

  const photoUrl = `https://timotaglieber.de/photos/albums/${albumName}/${screenWidth}/${photoItem.file}`;

  const showPreviousImage = () => {
    if (currentIndex === 0 ) {
      setCurrentIndex(album.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const showNextImage = () => {
    if ((currentIndex + 1) < album.length ) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className={styles.PhotoContainer}>
      <Image
        className={styles.Photo}
        src={photoUrl}
        quality={100}
        alt={photoItem?.title || ''}
        fill
        priority
      />
      <div className={styles.PhotoDetails}>
        <p>{photoItem?.title}</p>
        <p>{photoItem?.location}</p>
        <p>{photoItem?.date}</p>
        <p>{photoItem?.caption}</p>
        <button onClick={showPreviousImage}>previous</button>
        <button onClick={showNextImage}>next</button>
      </div>
    </div>)
};
