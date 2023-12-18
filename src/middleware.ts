import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const IGNORED_PATH_NAMES = new Set(['_next', 'favicon.ico']);

const parseAlbumNameFromUrl = (url: string): string => {
  const split = url.split('/');
  if (split.length >= 2) {
    const albumName = split[1];
    if (!IGNORED_PATH_NAMES.has(albumName)) {
      return albumName;
    }
  }

  return '';
};

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const albumName = parseAlbumNameFromUrl(request.nextUrl.pathname);
  if (albumName) {
    requestHeaders.set('x-album-name', albumName);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
