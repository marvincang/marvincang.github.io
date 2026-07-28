import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSidemap } from './game-sidemap';

describe('GameSidemap', () => {
  let component: GameSidemap;
  let fixture: ComponentFixture<GameSidemap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameSidemap],
    }).compileComponents();

    fixture = TestBed.createComponent(GameSidemap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
