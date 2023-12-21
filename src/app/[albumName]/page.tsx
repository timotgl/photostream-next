import { redirect } from "next/navigation";

import fetchAlbum from './fetchAlbum';

interface AlbumRouteParams {
  albumName: string
}

export default async function Album({ params: { albumName } }: { params: AlbumRouteParams}) {
  const photos = await fetchAlbum(albumName);
  redirect(`/${albumName}/${photos[0].file}`);
};
