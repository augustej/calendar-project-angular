import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarDisplayComponent } from './calendar-display/calendar-display.component';
import { DayComponent } from './day/day.component';
import { MonthYearDisplayComponent } from './month-year-display/month-year-display.component';
import { CalendarControlComponent } from './calendar-control/calendar-control.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarDisplayComponent,
    DayComponent,
    MonthYearDisplayComponent,
    CalendarControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
