// Absolute URL of the directory containing photo albums, each in different widths.
export const BASE_URL = 'https://timotaglieber.de/photos/albums';

// Name of the default album to be shown when none is specified in the URL.
export const DEFAULT_ALBUM_NAME = 'highlights';

// Name of the json file listing all photos in an album.
export const ALBUM_METADATA_FILENAME = 'album.json';

// Animation duration to show and hide elements (navigation help, counter, etc.).
export const FADE_IN_DURATION = 3000;

// The photos served under the BASE_URL are available in two sizes:
// 1) with maximum width of 1920px,
// 2) with maximum width of 3840px
// We choose the maximum size here because Next.js's Image Optimization is serving the best size for the device
// automatically. Source: https://nextjs.org/docs/app/building-your-application/optimizing/images
export const PHOTO_WIDTH = 3840;

// Will be added to the page title whenever a new photo item is rendered.
export const PAGE_TITLE_SUFFIX = ' - Photo by Timo Taglieber';
