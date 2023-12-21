import Image from 'next/image';
import { Metadata } from 'next';

import fetchAlbum from '../fetchAlbum';
import styles from './page.module.css'

interface PhotoRouteParams {
  albumName: string;
  fileName: string;
}

export async function generateMetadata(
  { params: { albumName, fileName } }: { params: PhotoRouteParams}
): Promise<Metadata> {
  const photos = await fetchAlbum(albumName);
  const photoItem = photos.find(item => item.file === fileName);

  return {
    title: photoItem?.title
  }
}

export default async function Photo({ params: { albumName, fileName } }: { params: PhotoRouteParams}) {
  // TODO: derive screen width from user agent header with Next.js middleware
  const screenWidth = '3840';
  const photos = await fetchAlbum(albumName);
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
