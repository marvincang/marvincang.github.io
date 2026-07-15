import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-liquid-glass',
  imports: [],
  templateUrl: './liquid-glass.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './liquid-glass.css',
})
export class LiquidGlass {
  theme = input<'light' | 'dark'>('dark');
  activated = input<boolean>(true);
  styleClass = input<string>('');
}
