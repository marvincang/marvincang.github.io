import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '@components/footer/footer';
import { Header } from '@components/header/header';
import { NavLink, Sidemap } from '@components/sidemap/sidemap';

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

  onRouteActivated() {
    setTimeout(() => {
      this.getSections();
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
}
