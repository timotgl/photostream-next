import { redirect } from 'next/navigation'

import { DEFAULT_ALBUM_NAME } from './constants';

export default function Home() {
  redirect(`/${DEFAULT_ALBUM_NAME}`);
}
