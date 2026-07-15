import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonDirective } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [ButtonDirective, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  toggleDarkMode() {
    const element = document.querySelector('html');
    element!.classList.toggle('app-dark');
    localStorage.setItem('mv-theme', element!.classList.contains('app-dark') ? 'dark' : 'light');
  }
}
