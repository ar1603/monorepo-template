import { IconHc } from '@template/common';

export const NAVIGATION_BAR_ = 2;

export const NAVIGATION_LINKS: {
  name: string;
  link: string;
  icon: IconHc;
}[] = [
  {
    name: 'Home',
    link: '/',
    icon: IconHc.HOME,
  },
  {
    name: 'More',
    link: '/all-projects',
    icon: IconHc.DOWN_ARROW,
  },
];
