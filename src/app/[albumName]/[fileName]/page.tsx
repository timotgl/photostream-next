import Image from 'next/image';

import type { PhotoItem } from '../interfaces';
import styles from './page.module.css'

interface PhotoRouteParams {
  albumName: string;
  fileName: string;
}

export default async function Photo({ params: { albumName, fileName } }: { params: PhotoRouteParams}) {
  // TODO: derive screen width from user agent header with Next.js middleware
  const screenWidth = '3840';

  // Fetch photo details
  const albumMetaDataUrl = `https://timotaglieber.de/photos/albums/${albumName}/album.json`;
  const photos: Array<PhotoItem> = await (await fetch(albumMetaDataUrl)).json();
  const photoItem = photos.find(item => item.file === fileName);

  const photoUrl = `https://timotaglieber.de/photos/albums/${albumName}/${screenWidth}/${fileName}`;
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
      </div>
    </div>
  );
}
