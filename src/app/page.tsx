import { redirect } from 'next/navigation'

const DEFAULT_ALBUM_NAME = 'highlights';

export default function Home() {
  redirect(`/${DEFAULT_ALBUM_NAME}`);
}
