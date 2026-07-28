import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../services/theme-service';
import { PageNav } from '../../types/NavLink';
import { RouterLink } from '@angular/router';

export const PAGES: PageNav[] = [
  {
    label: 'Home',
    href: '/',
    // background: {
    //   light: '/main-bg-light.svg',
    //   dark: '/main-bg-dark.svg',
    // },
  },
  // {
  //   label: 'Projects',
  //   href: '/projects',
  // },
  {
    label: 'Game',
    href: '/ciabday-27/game',
  },
];

@Component({
  selector: 'app-header',
  imports: [ButtonModule, CommonModule, RouterLink],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.css',
})
export class Header {
  PAGES = PAGES;
  themeService = inject(ThemeService);

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  isActive(nav: PageNav) {
    return location.pathname === nav.href;
  }
}
