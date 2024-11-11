import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cleanLocaleLink(
  pathname: string
) {
  return pathname.replace(/^\/(en|vi)/, '');
}
