import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../services/theme-service';
import { PageNav } from '../../types/NavLink';
import { RouterLink } from '@angular/router';
import { ConfigService } from '../../services/config-service';

export const PAGES: PageNav[] = [
  {
    label: 'Home',
    href: '/',
    background: {
      light: '/main-bg-light.svg',
      dark: '/main-bg-dark.svg',
    },
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Posts',
    href: '/ciabday-27/posts',
    disabled: true,
  },
  {
    label: 'Game',
    href: '/ciabday-27/game',
    disabled: true,
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
  themeService = inject(ThemeService);
  configService = inject(ConfigService);
  PAGES = computed(() => this.configService.getEnabledHeaders());

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  isActive(nav: PageNav) {
    return location.pathname === nav.href;
  }
}
