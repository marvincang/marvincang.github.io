import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidemap } from './sidemap';

describe('Sidemap', () => {
  let component: Sidemap;
  let fixture: ComponentFixture<Sidemap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidemap],
    }).compileComponents();

    fixture = TestBed.createComponent(Sidemap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
