// Absolute URL of the directory containing photo albums, each in different widths.
export const BASE_URL = 'https://timotaglieber.de/photos/albums';

// Name of the default album to be shown when none is specified in the URL.
export const DEFAULT_ALBUM_NAME = 'highlights';

// Name of the json file listing all photos in an album.
export const ALBUM_METADATA_FILENAME = 'album.json';

// Animation duration to show and hide elements (navigation help, counter, etc.).
export const FADE_IN_DURATION = 3000;

// TODO: use this
// PHOTO_WIDTH = window.screen.width * window.devicePixelRatio >= PHOTO_WIDTH_HD ? PHOTO_WIDTH_4K : PHOTO_WIDTH_HD,
export const PHOTO_WIDTH_HD = 1920;
export const PHOTO_WIDTH_4K = 3840;

// Will be added to the page title whenever a new photo item is rendered.
export const PAGE_TITLE_SUFFIX = ' - Photo by Timo Taglieber';
