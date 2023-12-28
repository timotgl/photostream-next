import { PAGE_TITLE_SUFFIX } from '../app/constants';

export default function formatPageTitle(photoTitle: string): string {
  return `${photoTitle}${PAGE_TITLE_SUFFIX}`;
};
