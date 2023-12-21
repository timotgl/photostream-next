import { redirect } from "next/navigation";

import type { PhotoItem } from './interfaces'

interface AlbumRouteParams {
  albumName: string
}

export default async function Album({ params: { albumName } }: { params: AlbumRouteParams}) {
  const albumMetaDataUrl = `https://timotaglieber.de/photos/albums/${albumName}/album.json`;
  const photos: Array<PhotoItem> = await (await fetch(albumMetaDataUrl)).json();
  redirect(`/${albumName}/${photos[0].file}`);
};
