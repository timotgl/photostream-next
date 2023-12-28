import { Metadata } from 'next';

import fetchAlbum from '../fetchAlbum';
import PhotoContainer from './PhotoContainer';
import formatPageTitle from '../../../lib/formatPageTitle';

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
    title: formatPageTitle(photoItem?.title || 'Untitled')
  }
}

export default async function Photo({ params: { albumName, fileName } }: { params: PhotoRouteParams}) {
  const photos = await fetchAlbum(albumName);
  return (
    <PhotoContainer albumName={albumName} album={photos} initialFileName={fileName} />
  );
}
