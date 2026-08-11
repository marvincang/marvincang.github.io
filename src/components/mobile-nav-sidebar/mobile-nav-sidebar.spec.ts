import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavSidebar } from './mobile-nav-sidebar';

describe('MobileNavSidebar', () => {
  let component: MobileNavSidebar;
  let fixture: ComponentFixture<MobileNavSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNavSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileNavSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
