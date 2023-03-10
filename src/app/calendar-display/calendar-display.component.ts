import { Location } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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
  arrayForNrOfWeeks?: number[] = [];
  currentMonth: number = 0;
  currentYear: number = 0;
  calendarType: string = '';
  refreshDay: boolean = false;

  constructor(private dateService: DateService, private location: Location) {}

  ngOnInit() {
    // clean local storage before highlighting days of current month
    localStorage.removeItem('current-month-day');
    this.rebuildCalendar();
  }

  @HostListener('RefreshTodaysNotes', ['$event'])
  onCustomEventCaptured(event: any) {
    this.refreshDay = !this.refreshDay;
  }

  setTodaysDate() {
    this.dateService.setToday();
    this.rebuildCalendar();
  }

  monthChanged(eventData: { moveTo: string }) {
    let nextorprev = eventData.moveTo;
    if (nextorprev === 'prev') {
      if (this.dateService.month === 0) {
        this.dateService.year = this.dateService.year - 1;
        this.dateService.month = 11;
      } else {
        this.dateService.month -= 1;
      }
    } else {
      if (this.dateService.month === 11) {
        this.dateService.year = this.dateService.year + 1;
        this.dateService.month = 0;
      } else {
        this.dateService.month += 1;
      }
    }
    this.rebuildCalendar();
  }

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

  rebuildCalendar(): void {
    localStorage.removeItem('current-month-day');
    let arrayOfSplitedHref = window.location.href.split('/');
    this.calendarType = arrayOfSplitedHref[arrayOfSplitedHref.length - 1];
    this.activeDay = this.dateService.buildFormatedId();
    this.monthDays = this.dateService.getArrayOfDaysToDisplay();
    this.numberOfWeeks = this.monthDays.length / 7;
    this.arrayForNrOfWeeks = Array(this.numberOfWeeks).fill(0);
    this.currentMonth = this.dateService.month;
    this.currentYear = this.dateService.year;
  }

  noteWasDeleted() {
    this.refreshDay = !this.refreshDay;
  }
}
