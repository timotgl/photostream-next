'use client'

import { useState, useCallback } from 'react';

import type { PhotoItem} from '../interfaces';
import { BASE_URL, PHOTO_WIDTH_4K } from '../../constants';
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
  const currentPhotoUrl = `${BASE_URL}/${albumName}/${PHOTO_WIDTH_4K}/${photoItem.file}`;

  const showNextPhoto = useCallback(() => {
    if (currentIndex === 0 ) {
      setCurrentIndex(album.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex, album.length]);

  const showPreviousPhoto = useCallback(() => {
    if ((currentIndex + 1) < album.length ) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }, [currentIndex, album.length]);

  return (
    <div className={styles.PhotoContainer}>
      <Image
        className={styles.Photo}
        src={currentPhotoUrl}
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
        <button onClick={showNextPhoto}>next</button>
        <button onClick={showPreviousPhoto}>previous</button>
      </div>
    </div>)
};
