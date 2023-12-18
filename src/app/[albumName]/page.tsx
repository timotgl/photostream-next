interface AlbumRouteParams {
  albumName: string
}

export default function Album({ params: { albumName } }: { params: AlbumRouteParams}) {
  return (
    <div>
      <h1>[albumName] route</h1>
      <p>albumName: {albumName}</p>
    </div>
  )
};
