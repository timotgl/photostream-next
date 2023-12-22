'use client'

import React, { useState, useCallback } from 'react';
import Image from 'next/image';

import type { PhotoItem} from '../interfaces';
import {BASE_URL, FADE_IN_DURATION, PHOTO_WIDTH_4K} from '../../constants';
import Counter from './Counter';

import styles from "./Photo.module.css";
import PhotoDetails from "@/app/[albumName]/[fileName]/PhotoDetails";
import NavigationHelp from "@/app/[albumName]/[fileName]/NavigationHelp";

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
      <NavigationHelp hideAfter={FADE_IN_DURATION} />
      <Counter showAfter={FADE_IN_DURATION} counter={currentIndex + 1} total={album.length} />
      <PhotoDetails showAfter={FADE_IN_DURATION} {...photoItem} />
    </div>)
};
