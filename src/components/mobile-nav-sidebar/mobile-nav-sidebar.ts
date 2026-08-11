import { Component, computed, inject, model } from '@angular/core';
import { LiquidGlass } from '@components/liquid-glass/liquid-glass';
import { PIcon } from '@primeicons/angular/p-icon';
import { ConfigService } from '../../services/config-service';
import { RouterLink } from '@angular/router';
import { PageNav } from '../../types/NavLink';

@Component({
  selector: 'app-mobile-nav-sidebar',
  imports: [LiquidGlass, PIcon, RouterLink],
  templateUrl: './mobile-nav-sidebar.html',
  styleUrl: './mobile-nav-sidebar.css',
})
export class MobileNavSidebar {
  configService = inject(ConfigService);
  PAGES = computed(() => this.configService.getEnabledHeaders());
  open = model<boolean>(false);

  isActive(nav: PageNav) {
    return location.pathname === nav.href;
  }
}
