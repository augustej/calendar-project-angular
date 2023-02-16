import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportCalendarComponent } from './sport-calendar/sport-calendar.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { FoodCalendarComponent } from './food-calendar/food-calendar.component';

const routes: Routes = [
  { path: 'sport', component: SportCalendarComponent },
  { path: 'events', component: EventsCalendarComponent },
  { path: 'food', component: FoodCalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
