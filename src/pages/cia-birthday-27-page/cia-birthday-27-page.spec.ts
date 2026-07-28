import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiaBirthday27Page } from './cia-birthday-27-page';

describe('CiaBirthday27Page', () => {
  let component: CiaBirthday27Page;
  let fixture: ComponentFixture<CiaBirthday27Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiaBirthday27Page],
    }).compileComponents();

    fixture = TestBed.createComponent(CiaBirthday27Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
