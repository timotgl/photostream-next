interface AlbumRouteParams {
  albumName: string
}

export default function Album({ params: { albumName } }: { params: AlbumRouteParams}) {
  return (
    <div>
      <h1>[albumName] route</h1>
      <p>albumName: {albumName}</p>
      <p>This component should not be visible at all, the server side should redirect to the first photo of the album instead.</p>
    </div>
  )
};
