import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarDisplayComponent } from './calendar-display/calendar-display.component';
import { DayComponent } from './day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarDisplayComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
