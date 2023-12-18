export default function Album({ params: { albumName } }) {
  return (
    <div>
      <h1>[albumName] route</h1>
      <p>albumName: {albumName}</p>
    </div>
  )
};
