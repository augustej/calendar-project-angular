import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-control',
  templateUrl: './calendar-control.component.html',
  styleUrls: ['./calendar-control.component.scss'],
})
export class CalendarControlComponent {
  @Input() month: number = 0;
  @Input() year: number = 0;

  changeMonthBtnClicked(moveTo: string) {
    this.monthChanged.emit({ moveTo });
  }

  @Output() monthChanged = new EventEmitter<{ moveTo: string }>();
}
