import { CommonModule } from '@angular/common';
import { Component, effect, HostListener, input, signal } from '@angular/core';
import { LiquidGlass } from '../liquid-glass/liquid-glass';
import { ButtonModule } from 'primeng/button';
import { PIcon } from '@primeicons/angular/p-icon';

export type NavLink = {
  label: string;
  href: string;
  icon?: string;
  children?: NavLink[];
};

@Component({
  selector: 'app-sidemap',
  imports: [CommonModule, LiquidGlass, ButtonModule, PIcon],
  templateUrl: './sidemap.html',
  styleUrl: './sidemap.css',
})
export class Sidemap {
  sections = input<NavLink[]>([]);
  activeSection = signal<string>('');
  icons = ['home', 'star', 'heart', 'bell'];
  selectedIcon = signal<string>('home');

  private offset = 140;

  constructor() {
    effect(() => {
      const currentSections = this.sections();
      if (currentSections.length > 0) {
        this.activeSection.set(currentSections[0].href);
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    const currentSections = this.sections();

    if (currentSections.length === 0) return;

    for (const nav of [...currentSections].reverse()) {
      const id = nav.href.replace('#', '');
      const el = document.getElementById(id);

      if (el && scrollY >= el.offsetTop - this.offset) {
        if (this.activeSection() !== nav.href) {
          this.activeSection.set(nav.href);
        }
        break;
      }
    }
  }

  scrollTo(nav: NavLink) {
    const id = nav.href.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection.set(nav.href);
    }
  }

  isActive(nav: NavLink): boolean {
    return this.activeSection() === nav.href;
  }
}
