import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ButtonModule],
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [style.background-color]="scrolled() ? '#07070e' : 'transparent'"
      [style.border-bottom]="scrolled() ? '1px solid #1e1e35' : 'none'"
      [style.backdrop-filter]="scrolled() ? 'blur(4px)' : 'none'"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center gap-3 group" style="text-decoration:none">
            <div
              class="w-8 h-8 flex items-center justify-center relative clip-corner-sm transition-all duration-300"
              style="border: 1px solid var(--color-cyan)"
            >
              <span
                style="font-family:var(--font-display);color:var(--color-cyan);font-size:0.7rem;font-weight:700"
                >MV</span
              >
            </div>
            <span
              class="hidden sm:block tracking-wider transition-colors duration-200"
              style="font-family:var(--font-mono);font-size:0.875rem;color:var(--color-silver)"
            >
              MVNC
            </span>
          </a>

          <!-- Desktop nav links -->
          <div class="hidden md:flex items-center gap-8">
            @for (link of navLinks; track link.path) {
              <a
                [routerLink]="link.path"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: link.path === '/' }"
                class="nav-link group"
                style="text-decoration:none"
              >
                <span
                  style="color:var(--color-cyan);opacity:0.5;margin-right:0.25rem"
                  class="group-hover:opacity-100 transition-opacity"
                  >{{ link.index }}</span
                >
                {{ link.label }}
                <span
                  class="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style="background-color:var(--color-cyan)"
                ></span>
              </a>
            }
          </div>

          <!-- Status badge + CTA -->
          <div class="hidden md:flex items-center gap-4">
            <div class="flex items-center gap-2">
              <div
                class="w-2 h-2 rounded-full animate-pulse"
                style="background-color:var(--color-jade)"
              ></div>
              <span
                style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.1em;color:var(--color-silver-dim)"
                >AVAILABLE</span
              >
            </div>
            <p-button label="Hire Me" icon="pi pi-send" size="small" routerLink="/contact" />
          </div>

          <!-- Mobile hamburger -->
          <p-button
            class="md:hidden"
            [icon]="menuOpen() ? 'pi pi-times' : 'pi pi-bars'"
            severity="contrast"
            [text]="true"
            (onClick)="toggleMenu()"
            aria-label="Toggle menu"
          />
        </div>
      </div>

      <!-- Mobile menu -->
      @if (menuOpen()) {
        <div
          class="md:hidden border-t"
          style="background:var(--color-surface);border-color:var(--color-border)"
        >
          <div class="px-6 py-4 flex flex-col gap-4">
            @for (link of navLinks; track link.path) {
              <a
                [routerLink]="link.path"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: link.path === '/' }"
                class="nav-link block"
                style="text-decoration:none"
                (click)="closeMenu()"
              >
                <span style="color:var(--color-cyan);opacity:0.5;margin-right:0.5rem">{{
                  link.index
                }}</span>
                {{ link.label }}
              </a>
            }
            <div class="pt-3 border-t" style="border-color:var(--color-border)">
              <p-button
                label="Hire Me"
                icon="pi pi-send"
                styleClass="w-full"
                routerLink="/contact"
                (onClick)="closeMenu()"
              />
            </div>
          </div>
        </div>
      }
    </nav>
  `,
})
export class NavComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  navLinks = [
    { path: '/', label: 'Home', index: '00' },
    { path: '/projects', label: 'Projects', index: '01' },
    { path: '/about', label: 'About', index: '02' },
    { path: '/contact', label: 'Contact', index: '03' },
    { path: '/docs', label: 'Docs', index: '04' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 20);
  }
  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }
  closeMenu() {
    this.menuOpen.set(false);
  }
}
