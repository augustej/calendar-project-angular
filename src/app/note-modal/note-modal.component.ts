import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.scss'],
})
export class NoteModalComponent {
  @Input() activeDay?: string = '';
  @Input() calendarType?: string = '';

  closeModalClicked(): void {
    this.closeModal.emit();
  }

  @Output() closeModal = new EventEmitter();
}
