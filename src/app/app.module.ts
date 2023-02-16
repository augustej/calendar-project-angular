import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarDisplayComponent } from './calendar-display/calendar-display.component';
import { DayComponent } from './day/day.component';
import { MonthYearDisplayComponent } from './month-year-display/month-year-display.component';
import { CalendarControlComponent } from './calendar-control/calendar-control.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { SportCalendarComponent } from './sport-calendar/sport-calendar.component';
import { FoodCalendarComponent } from './food-calendar/food-calendar.component';
import { AddNoteBtnComponent } from './add-note-btn/add-note-btn.component';
import { NoteModalComponent } from './note-modal/note-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarDisplayComponent,
    DayComponent,
    MonthYearDisplayComponent,
    CalendarControlComponent,
    EventsCalendarComponent,
    SportCalendarComponent,
    FoodCalendarComponent,
    AddNoteBtnComponent,
    NoteModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
