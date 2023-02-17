import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysNotesComponent } from './todays-notes.component';

describe('TodaysNotesComponent', () => {
  let component: TodaysNotesComponent;
  let fixture: ComponentFixture<TodaysNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
