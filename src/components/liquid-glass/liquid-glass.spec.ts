import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidGlass } from './liquid-glass';

describe('LiquidGlass', () => {
  let component: LiquidGlass;
  let fixture: ComponentFixture<LiquidGlass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiquidGlass]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiquidGlass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
