import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingGame } from './typing-game';

describe('TypingGame', () => {
  let component: TypingGame;
  let fixture: ComponentFixture<TypingGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypingGame],
    }).compileComponents();

    fixture = TestBed.createComponent(TypingGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
