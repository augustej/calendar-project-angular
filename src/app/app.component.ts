import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calendar';
  href: string = '';

  ngOnInit() {
    let pathElementsArray = window.location.href.split('/');
    this.href = pathElementsArray[pathElementsArray.length - 1];
  }
}
