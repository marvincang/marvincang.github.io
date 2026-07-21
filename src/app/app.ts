import {
  Component,
  ElementRef,
  inject,
  signal,
  ChangeDetectionStrategy,
  computed,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '@components/footer/footer';
import { Header, PAGES } from '@components/header/header';
import { Sidemap } from '@components/sidemap/sidemap';
import { ThemeService } from '../services/theme-service';
import { NavLink, PageNav } from '../types/NavLink';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Sidemap, Footer],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class AppComponent {
  sections = signal<NavLink[]>([]);
  elementRef = inject(ElementRef);
  themeService = inject(ThemeService);
  theme = computed(() => this.themeService.theme());
  PAGES = PAGES;
  currentPage = signal<PageNav>(this.PAGES[0]);

  onRouteActivated() {
    setTimeout(() => {
      this.getSections();
      this.getCurrentPage();
    }, 0);
  }

  getSections() {
    const sections: NavLink[] = [];
    const sectionElements = this.elementRef.nativeElement.querySelectorAll('section[id]');

    sectionElements.forEach((section: Element) => {
      const id = section.getAttribute('id');

      if (id) {
        sections.push({
          label: id
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
          href: `#${id}`,
          icon: section.getAttribute('icon') || undefined,
        });
      }
    });
    this.sections.set(sections);
  }

  getCurrentPage() {
    const curPage = this.PAGES.find((d) => d.href === location.pathname);
    if (curPage) {
      console.log(curPage);
      this.currentPage.set(curPage);
    }
  }
}
