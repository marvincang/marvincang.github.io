import { Service, signal } from '@angular/core';

@Service()
export class ThemeService {
  theme = signal<'light' | 'dark'>('light');

  constructor() {
    this.init();
  }

  init() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // You can also check localStorage here if you save the user's manual choice later
    const userTheme = localStorage.getItem('mv-theme');

    if (userTheme === 'dark' || (!userTheme && prefersDark)) {
      document.documentElement.classList.add('app-dark');
      this.theme.set('dark');
    } else {
      document.documentElement.classList.remove('app-dark');
      this.theme.set('light');
    }
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element!.classList.toggle('app-dark');

    if (this.theme() === 'light') {
      this.theme.set('dark');
    } else {
      this.theme.set('light');
    }

    localStorage.setItem('mv-theme', element!.classList.contains('app-dark') ? 'dark' : 'light');
  }
}
