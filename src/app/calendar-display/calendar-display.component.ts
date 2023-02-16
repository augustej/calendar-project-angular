import { Component } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-calendar-display',
  templateUrl: './calendar-display.component.html',
  styleUrls: ['./calendar-display.component.scss'],
})
export class CalendarDisplayComponent {
  activeDay?: string = '';
  monthDays?: string[] = [];
  numberOfWeeks?: number = 0;
  fakeArray?: number[] = [];

  dayClicked(day: string): void {
    let [newYear, newMonth, newDay] = day.split('-');
    let newMonthArrayValue = parseInt(newMonth) - 1;
    this.dateService.day = parseInt(newDay);
    this.dateService.year = parseInt(newYear);
    // if clicked on day of other month -> display other month as current
    if (this.dateService.month !== newMonthArrayValue) {
      this.dateService.month = newMonthArrayValue;
      this.rebuildCalendar();
    }
    this.activeDay = this.dateService.buildFormatedId();
  }

  constructor(private dateService: DateService) {}

  ngOnInit() {
    this.activeDay = this.dateService.buildFormatedId();
    this.rebuildCalendar();
  }

  rebuildCalendar(): void {
    this.monthDays = this.dateService.getArrayOfDaysToDisplay();
    this.numberOfWeeks = this.monthDays.length / 7;
    this.fakeArray = Array(this.numberOfWeeks).fill(0);
  }
}
