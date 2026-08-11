import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject, computed, model } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../services/theme-service';
import { PageNav } from '../../types/NavLink';
import { RouterLink } from '@angular/router';
import { ConfigService } from '../../services/config-service';
import { Bars } from '@primeicons/angular/bars';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, CommonModule, RouterLink, Bars, DrawerModule],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.css',
})
export class Header {
  themeService = inject(ThemeService);
  configService = inject(ConfigService);
  PAGES = computed(() => this.configService.getEnabledHeaders());
  mobileNavVisible = model(false);

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  isActive(nav: PageNav) {
    return location.pathname === nav.href;
  }
}
