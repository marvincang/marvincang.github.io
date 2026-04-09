import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  template: `
    <div class="min-h-screen bg-void relative">
      <!-- Global background grid -->
      <div class="fixed inset-0 bg-grid opacity-100 pointer-events-none"></div>
      <!-- Radial glow center -->
      <div class="fixed inset-0 bg-radial-glow pointer-events-none"></div>
      <!-- Nav -->
      <app-nav />
      <!-- Page content -->
      <main class="relative z-10">
        <router-outlet />
      </main>
    </div>
  `,
})
export class AppComponent {}
