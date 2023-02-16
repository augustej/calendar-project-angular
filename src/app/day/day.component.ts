import { Component, Input, HostListener } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
})
export class DayComponent {
  dayNr: string = '';
  longDay: string = '';
  dayId: string = '';
  notes: any;

  get dayNrGetter(): string {
    return this.dayNr;
  }
  get longDayGetter(): string {
    return this.longDay;
  }
  get dayIdGetter(): string {
    return this.dayId;
  }

  @Input()
  set day(value: string) {
    this.longDay = value;
    this.dayNr = value.split('-')[2];
    let arrayOfSplitedHref = window.location.href.split('/');
    let type = arrayOfSplitedHref[arrayOfSplitedHref.length - 1];
    this.dayId = `${type}-${this.longDay}`;
  }

  refreshThisDay() {
    console.log('refresh', this.dayId);
  }

  ngOnInit() {
    console.log('day init');
    this.notes = this.notesService.DataService('READ', this.dayId, '', '');
    // this.notesService.DataService('CREATE', this.dayId, 'BLA', '');
  }

  constructor(public notesService: NotesService) {}
}
