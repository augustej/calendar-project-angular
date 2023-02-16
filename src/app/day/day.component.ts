import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
})
export class DayComponent {
  dayNr: string = '';
  longDay: string = '';

  get dayNrGetter(): string {
    return this.dayNr;
  }
  get longDayGetter(): string {
    return this.longDay;
  }

  @Input()
  set day(value: string) {
    this.longDay = value;
    this.dayNr = value.split('-')[2];
  }
}
