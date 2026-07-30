import { Component, computed, ElementRef, signal, viewChild } from '@angular/core';
import { Gauge } from '@primeicons/angular/gauge';
import { ArrowDown } from '@primeicons/angular/arrow-down';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ArrowUTurnUpLeft } from '@primeicons/angular/arrow-u-turn-up-left';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { Subscription } from 'rxjs';
import { GameSidemap } from '../game-sidemap/game-sidemap';
import { GameResult } from '../../../types/GameResults';

@Component({
  selector: 'app-typing-game',
  imports: [
    Gauge,
    InputTextModule,
    ArrowDown,
    ButtonModule,
    ArrowUTurnUpLeft,
    FormsModule,
    ReactiveFormsModule,
    GameSidemap,
  ],
  templateUrl: './typing-game.html',
  styleUrl: './typing-game.css',
})
export class TypingGame {
  gameStart = signal(false);
  gameDone = signal(false);
  gameInput = viewChild<ElementRef<HTMLInputElement>>('gameInput');
  nameInput = viewChild<ElementRef<HTMLInputElement>>('nameInput');

  nameControl = new FormControl('');
  gameControl = new FormControl('');

  name = toSignal(this.nameControl.valueChanges, { initialValue: '' });
  gameText = toSignal(this.gameControl.valueChanges, { initialValue: '' });

  target = "Michelle Alicia Tedjasukmana's 27th birthday!";
  penaltySecs = signal(0);

  results = signal<GameResult[]>(JSON.parse(localStorage.getItem('game-results') || '[]'));

  private sub!: Subscription;

  ngOnInit() {
    this.sub = this.gameControl.valueChanges.subscribe((value) => {
      if (value?.length && this.elapsedMs() === 0) {
        this.initiateTimer();
      }

      if (value === this.target) {
        this.gameFinished();
      }
    });
  }

  getColor(idx: number) {
    if (!this.gameText() || idx > this.gameText()!.length - 1) {
      return 'text-primary/50';
    }

    if (this.gameText()![idx] === this.target[idx]) {
      return 'text-accent';
    } else {
      if (this.target[idx] === ' ') {
        return 'bg-destructive';
      } else {
        return 'text-destructive';
      }
    }
  }

  getBorder(idx: number) {
    if (!this.gameText()) {
      return '';
    }

    return idx === this.gameText()!.length ? 'border-l border-primary' : '';
  }

  elapsedMs = signal<number>(0);

  private startTime = 0;
  private animFrameId: number | null = null;

  initiateTimer() {
    // Record high-resolution start timestamp
    this.startTime = performance.now() - this.elapsedMs();
    this.tick();
  }

  private tick = () => {
    // Measure actual real-world time elapsed
    const now = performance.now();
    this.elapsedMs.set(now - this.startTime);

    // Sync with display refresh rate (~60fps / 144fps)
    this.animFrameId = requestAnimationFrame(this.tick);
  };

  stopTimer() {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  formattedTime(): string {
    const totalSeconds = Math.floor(this.elapsedMs() / 1000);
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    const millis = Math.floor((this.elapsedMs() % 1000) / 10)
      .toString()
      .padStart(2, '0');

    return `${seconds}.${millis}s`;
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.stopTimer();
  }

  startGame() {
    this.gameDone.set(false);
    this.gameStart.set(true);
    this.penaltySecs.set(0);
    this.gameInput()!.nativeElement.focus();
  }

  restartGame() {
    this.nameInput()!.nativeElement.focus();
    this.stopTimer();
    this.elapsedMs.set(0);
    this.penaltySecs.set(0);
    this.nameControl.setValue('');
    this.gameControl.setValue('');
    this.gameDone.set(false);
    this.gameStart.set(false);
  }

  onBackspace() {
    if (this.gameText() || !this.gameDone()) {
      this.penaltySecs.update((val) => val + 1);
    }
  }

  gameFinished() {
    this.gameDone.set(true);
    this.stopTimer();
    this.writeResultToLocalStorage();
  }

  writeResultToLocalStorage() {
    const results: GameResult[] = JSON.parse(localStorage.getItem('game-results') || '[]');
    results.push({
      name: this.nameControl.value,
      timeInMs: +this.elapsedMs().toFixed(3),
      penaltyInS: this.penaltySecs(),
      totalInMs: +this.elapsedMs().toFixed(3) + this.penaltySecs() * 1000,
    } as GameResult);

    results.sort((a, b) => a.totalInMs - b.totalInMs);

    localStorage.setItem('game-results', JSON.stringify(results));
    this.results.set(results);
  }
}
