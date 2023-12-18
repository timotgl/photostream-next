export default function Photo({ params: { albumName, fileName } }) {
  return (
    <div>
      <h2>[fileName] route</h2>
      <p>albumName: {albumName}</p>
      <p>fileName: {fileName}</p>
    </div>
  );
}
