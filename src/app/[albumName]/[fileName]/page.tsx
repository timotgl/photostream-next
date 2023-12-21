import { Metadata } from 'next';

import fetchAlbum from '../fetchAlbum';
import InteractivePhoto from './Photo';

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
  const photos = await fetchAlbum(albumName);
  return (
    <InteractivePhoto albumName={albumName} album={photos} initialFileName={fileName} />
  );
}
