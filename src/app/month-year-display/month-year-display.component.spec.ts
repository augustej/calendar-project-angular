import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthYearDisplayComponent } from './month-year-display.component';

describe('MonthYearDisplayComponent', () => {
  let component: MonthYearDisplayComponent;
  let fixture: ComponentFixture<MonthYearDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthYearDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthYearDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
