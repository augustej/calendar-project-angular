import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNoteBtnComponent } from './add-note-btn.component';

describe('AddNoteBtnComponent', () => {
  let component: AddNoteBtnComponent;
  let fixture: ComponentFixture<AddNoteBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNoteBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNoteBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
