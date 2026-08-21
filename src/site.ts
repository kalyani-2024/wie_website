/**
 * Single source of truth for navigation and the values the chapter has not
 * supplied yet. Placeholders stay visibly bracketed until they are filled in
 * — see "Content placeholders" in the handoff.
 */

export const nav = [
  { label: 'About', href: '/about/' },
  { label: 'Events', href: '/events/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Council', href: '/council/' },
  { label: 'Join', href: '/join/' },
] as const;

export type NavLabel = (typeof nav)[number]['label'];

/** Google Form URL — to be supplied by the chapter. */
export const FORM_URL = '#';

export const placeholders = {
  email: 'wie@dubai.bits-pilani.ac.in',
  instagram: 'https://www.instagram.com/wiebpdc/',
  linkedin: 'https://www.linkedin.com/in/ieee-women-in-engineering-bpdc-a71116224/',
  members: '100+',
  eventsRun: '50+',
  activities: '5+',
  founded: '2021',
};
