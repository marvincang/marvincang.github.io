import { AppTheme } from './AppTheme';

export type NavLink = {
  label: string;
  href: string;
  icon?: string;
  children?: NavLink[];
};

export type PageNav = {
  label: string;
  href: string;
  icon?: string;
  background?: { [key in AppTheme]: string };
};
