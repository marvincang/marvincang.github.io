import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, CommonModule],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.css',
})
export class Header {
  toggleDarkMode() {
    const element = document.querySelector('html');
    element!.classList.toggle('app-dark');
    localStorage.setItem('mv-theme', element!.classList.contains('app-dark') ? 'dark' : 'light');
  }
}
