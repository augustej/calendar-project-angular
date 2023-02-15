import { Component } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-calendar-display',
  templateUrl: './calendar-display.component.html',
  styleUrls: ['./calendar-display.component.scss'],
})
export class CalendarDisplayComponent {
  day?: number = 0;
  monthDays?: string[] = [];
  numberOfWeeks?: number = 0;
  fakeArray?: number[] = [];

  constructor(private dateService: DateService) {}

  ngOnInit() {
    this.day = this.dateService.day;
    this.monthDays = this.dateService.getArrayOfDaysToDisplay();
    this.numberOfWeeks = this.monthDays.length / 7;
    this.fakeArray = Array(this.numberOfWeeks).fill(0);
  }
}
