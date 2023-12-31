'use client'

import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

import type { PhotoItem} from '../interfaces';
import { BASE_URL, FADE_IN_DURATION, PHOTO_WIDTH } from '../../constants';
import Counter from './Counter';

import styles from './PhotoContainer.module.css';
import PhotoDetails from './PhotoDetails';
import NavigationHelp from './NavigationHelp';
import PhotoLoadingIndicator from './PhotoLoadingIndicator';
import useArrowKeyNavigation from './navigation/useArrowKeyNavigation';
import useWheelNavigation from './navigation/useWheelNavigation';
import useClickNavigation from './navigation/useClickNavigation';
import useTouchNavigation from './navigation/useTouchNavigation';
import formatPageTitle from '../../../lib/formatPageTitle';

interface Props {
  albumName: string;
  album: Array<PhotoItem>;
  initialFileName: string;
}

export default function PhotoContainer({ albumName, album, initialFileName }: Props) {
  const initialIndex = album.findIndex(item => item.file === initialFileName);
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  const [isPhotoLoading, setIsPhotoLoading] = useState<boolean>(true);
  const hideLoadingIndicator = () => setIsPhotoLoading(false);
  const showLoadingIndicator = () => setIsPhotoLoading(true);
  useEffect(showLoadingIndicator, [currentIndex]);

  const photoItem = album[currentIndex];
  const currentPhotoUrl = `${BASE_URL}/${albumName}/${PHOTO_WIDTH}/${photoItem.file}`;

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

  useArrowKeyNavigation(showPreviousPhoto, showNextPhoto);
  useWheelNavigation(showPreviousPhoto, showNextPhoto);
  useClickNavigation(showPreviousPhoto, showNextPhoto);
  useTouchNavigation(showPreviousPhoto, showNextPhoto);

  useEffect(() => {
    document.title = formatPageTitle(photoItem.title);
  }, [photoItem.title])

  useEffect(() => {
    window.history.pushState({ albumName, fileName: photoItem.file }, '', `/${albumName}/${photoItem.file}`)
  }, [albumName, photoItem]);

  return (
    <div className={styles.PhotoContainer}>
      <Image
        className={styles.Photo}
        src={currentPhotoUrl}
        quality={100}
        alt={photoItem?.title || ''}
        fill
        priority
        key={photoItem.file}
        onLoad={hideLoadingIndicator}
      />
      {isPhotoLoading && <PhotoLoadingIndicator />}
      <Counter showAfter={FADE_IN_DURATION} counter={currentIndex + 1} total={album.length} />
      <PhotoDetails showAfter={FADE_IN_DURATION} {...photoItem} />
      <NavigationHelp hideAfter={FADE_IN_DURATION} />
    </div>)
};
