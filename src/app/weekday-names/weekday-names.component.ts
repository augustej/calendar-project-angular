import { Component } from '@angular/core';

@Component({
  selector: 'app-weekday-names',
  templateUrl: './weekday-names.component.html',
  styleUrls: ['./weekday-names.component.scss'],
})
export class WeekdayNamesComponent {
  weekdays: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  innerWidth: any;
  weekNamesToDisplay: string[] = [];

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 600) {
      this.weekNamesToDisplay = this.getModifiedWeekdaysArray('desktop');
    } else {
      this.weekNamesToDisplay = this.getModifiedWeekdaysArray('mobile');
    }
  }

  getModifiedWeekdaysArray(deviceType: string) {
    let modifiedWeekdayArray = this.weekdays.map((name) => {
      let returnValue =
        deviceType === 'desktop' ? name.substring(0, 3) : name.substring(0, 1);
      return returnValue;
    });
    let sunday = modifiedWeekdayArray.splice(0, 1)[0];
    modifiedWeekdayArray.push(sunday);
    return modifiedWeekdayArray;
  }
}
