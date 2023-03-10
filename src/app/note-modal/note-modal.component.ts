import {
  Component,
  EventEmitter,
  Input,
  Output,
  ElementRef,
} from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.scss'],
})
export class NoteModalComponent {
  @Input() activeDay?: string = '';
  @Input() calendarType?: string = '';
  id: string = '';
  message: string = '';

  @Output() closeModal = new EventEmitter();

  constructor(
    public notesService: NotesService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.id = `${this.calendarType}-${this.activeDay}`;
  }

  closeModalClicked(): void {
    this.closeModal.emit();
  }

  saveNewNote() {
    this.notesService.DataService('CREATE', this.id, this.message, '');
    this.closeModal.emit();

    const event: CustomEvent = new CustomEvent('RefreshTodaysNotes', {
      bubbles: true,
    });
    this.elementRef.nativeElement.dispatchEvent(event);
  }
}
