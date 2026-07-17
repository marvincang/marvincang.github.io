import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../services/theme-service';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, CommonModule],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.css',
})
export class Header {
  themeService = inject(ThemeService);

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
