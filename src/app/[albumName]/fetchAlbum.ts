import { PhotoItem } from './interfaces';
import { BASE_URL, ALBUM_METADATA_FILENAME } from '../constants';

export default async function fetchAlbum(albumName: string): Promise<Array<PhotoItem>> {
  const albumMetaDataUrl = `${BASE_URL}/${albumName}/${ALBUM_METADATA_FILENAME}`;
  return (await fetch(albumMetaDataUrl)).json();
};
