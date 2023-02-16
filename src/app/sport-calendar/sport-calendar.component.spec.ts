import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportCalendarComponent } from './sport-calendar.component';

describe('SportCalendarComponent', () => {
  let component: SportCalendarComponent;
  let fixture: ComponentFixture<SportCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
