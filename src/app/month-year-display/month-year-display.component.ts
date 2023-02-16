import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-month-year-display',
  templateUrl: './month-year-display.component.html',
  styleUrls: ['./month-year-display.component.scss'],
})
export class MonthYearDisplayComponent {
  @Input() month: number = 0;
  @Input() year: number = 0;

  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
}
