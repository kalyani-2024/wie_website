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
  { label: 'Partner', href: '/contact/' },
  { label: 'Join', href: '/join/' },
] as const;

export type NavLabel = (typeof nav)[number]['label'];

/** Google Form URL — to be supplied by the chapter. */
export const FORM_URL = '#';

export const placeholders = {
  email: '[email placeholder]',
  instagram: '[Instagram placeholder]',
  members: 'XXX',
  eventsRun: 'XX',
  partners: 'XX',
  founded: '20XX',
};
