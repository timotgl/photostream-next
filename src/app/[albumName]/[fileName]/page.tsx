interface PhotoRouteParams {
  albumName: string;
  fileName: string;
}

export default function Photo({ params: { albumName, fileName } }: { params: PhotoRouteParams}) {
  return (
    <div>
      <h2>[fileName] route</h2>
      <p>albumName: {albumName}</p>
      <p>fileName: {fileName}</p>
    </div>
  );
}
