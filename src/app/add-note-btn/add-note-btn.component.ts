import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-note-btn',
  templateUrl: './add-note-btn.component.html',
  styleUrls: ['./add-note-btn.component.scss'],
})
export class AddNoteBtnComponent {
  showModal: boolean = false;
  @Input() activeDay?: string = '';
  @Input() calendarType?: string = '';

  modalClosed() {
    this.showModal = false;
  }
  showNoteModal() {
    this.showModal = true;
    console.log('show');
  }
}
