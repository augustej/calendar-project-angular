import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdayNamesComponent } from './weekday-names.component';

describe('WeekdayNamesComponent', () => {
  let component: WeekdayNamesComponent;
  let fixture: ComponentFixture<WeekdayNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekdayNamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekdayNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
