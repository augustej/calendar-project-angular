import { ThisReceiver } from '@angular/compiler';
import {
  Component,
  Input,
  HostListener,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
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
  currentMonth: boolean = false;
  showMonth: string = '';
  monthNr: number = 0;

  @Input()
  set day(value: string) {
    this.monthNr = Number(value.split('-')[1]) - 1;
    this.longDay = value;
    this.dayNr = value.split('-')[2];
    let arrayOfSplitedHref = window.location.href.split('/');
    let type = arrayOfSplitedHref[arrayOfSplitedHref.length - 1];
    this.dayId = `${type}-${this.longDay}`;
  }
  @Input() refreshDay!: boolean;

  get dayNrGetter(): string {
    return this.dayNr;
  }
  get longDayGetter(): string {
    return this.longDay;
  }
  get dayIdGetter(): string {
    return this.dayId;
  }
  get monthNrGetter(): number {
    return this.monthNr;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.notes = this.notesService.DataService('READ', this.dayId, '', '');
  }

  ngOnInit() {
    this.notes = this.notesService.DataService('READ', this.dayId, '', '');
    this.currentMonthHighlight();
    let currentMonthClass = localStorage.getItem('current-month-day');
    if (currentMonthClass) {
      this.currentMonth = true;
    }
  }

  currentMonthHighlight() {
    if (this.dayNr === '1') {
      // add/remove current-month class to days of this month
      this.setCurrentMonthInLocalStorage();
      this.showMonth = this.getMonthName();
    }
  }
  setCurrentMonthInLocalStorage() {
    if (!localStorage.getItem('current-month-day')) {
      localStorage.setItem('current-month-day', 'current-month-day');
    } else {
      localStorage.removeItem('current-month-day');
    }
  }
  getMonthName(): string {
    let months: string[] = [
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
    return months[this.monthNr].slice(0, 3);
  }

  constructor(public notesService: NotesService) {}
}
