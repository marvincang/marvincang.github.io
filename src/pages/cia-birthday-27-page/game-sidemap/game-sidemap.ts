import { Component, input } from '@angular/core';
import { LiquidGlass } from '@components/liquid-glass/liquid-glass';
import { GameResult } from '../../../types/GameResults';

@Component({
  selector: 'app-game-sidemap',
  imports: [LiquidGlass],
  templateUrl: './game-sidemap.html',
  styleUrl: './game-sidemap.css',
})
export class GameSidemap {
  results = input.required<GameResult[]>();
}
