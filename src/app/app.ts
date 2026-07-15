import { afterNextRender, Component, ElementRef, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from 'src/components/header/header';
import { NavLink, Sidemap } from 'src/components/sidemap/sidemap';
import { Footer } from 'src/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Sidemap, Footer],
  templateUrl: './app.html',
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
