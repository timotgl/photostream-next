import { headers } from "next/headers";

export default function Album() {
  const headersList = headers();
  const albumName = headersList.get('x-album-name');
  return (
    <div>
      <h1>This is the [albumName] route&apos;s page component!</h1>
      <p>Album name: {albumName}</p>
    </div>
  )
};
