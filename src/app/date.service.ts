import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  d = new Date();
  day: number = this.d.getDate();
  month: number = this.d.getMonth();
  year: number = this.d.getFullYear();

  buildFormatedId(): string {
    return `${this.year}-${(this.month + 1).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    })}-${this.day}`;
  }

  setToday(): void {
    this.day = this.d.getDate();
    this.month = this.d.getMonth();
    this.year = this.d.getFullYear();
  }

  getArrayOfDaysToDisplay(): string[] {
    let daysArrayToRepresent = [];

    let daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    let weekdayOfFirstDay = new Date(
      `${this.year}-${this.month + 1}-01`
    ).getDay();
    let weekdayOfLastDay = new Date(
      `${this.year}-${this.month + 1}-${daysInMonth}`
    ).getDay();

    // get number of days in previous month which needs to be displayed
    let previousMonth = this.month !== 0 ? this.month - 1 : 11;
    let yearOfPreviousMonth = previousMonth !== 11 ? this.year : this.year - 1;
    let daysInPreviousMonth = new Date(
      yearOfPreviousMonth,
      previousMonth + 1,
      0
    ).getDate();
    let nrOfPreviousMonthDays =
      weekdayOfFirstDay === 0 ? 6 : weekdayOfFirstDay - 1;

    // get number of days in next month which needs to be displayed
    let nextMonth = this.month !== 11 ? this.month + 1 : 0;
    let yearOfNextMonth = nextMonth !== 0 ? this.year : this.year + 1;
    let nrOfNextMonthDays = weekdayOfLastDay === 0 ? 0 : 7 - weekdayOfLastDay;

    // add days of the previous month
    for (let i = 0; i < nrOfPreviousMonthDays; i++) {
      let newDay = `${yearOfPreviousMonth}-${(previousMonth + 1).toLocaleString(
        'en-US',
        { minimumIntegerDigits: 2 }
      )}-${daysInPreviousMonth - nrOfPreviousMonthDays + i + 1}`;
      daysArrayToRepresent.push(newDay);
    }

    // add days of current month
    for (let i = 0; i < daysInMonth; i++) {
      let newDay = `${this.year}-${(this.month + 1).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
      })}-${i + 1}`;
      daysArrayToRepresent.push(newDay);
    }

    // add days of next month
    for (let i = 0; i < nrOfNextMonthDays; i++) {
      let newDay = `${yearOfNextMonth}-${(nextMonth + 1).toLocaleString(
        'en-US',
        { minimumIntegerDigits: 2 }
      )}-${i + 1}`;
      daysArrayToRepresent.push(newDay);
    }
    return daysArrayToRepresent;
  }
}
