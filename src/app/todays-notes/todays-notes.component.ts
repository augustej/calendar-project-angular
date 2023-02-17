import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-todays-notes',
  templateUrl: './todays-notes.component.html',
  styleUrls: ['./todays-notes.component.scss'],
})
export class TodaysNotesComponent {
  @Input() activeDay?: string = '';
  @Input() calendarType?: string = '';
  @Input() refreshDay?: boolean;
  notes?: any;
  dayId: string = '';
  @Output() noteDeleted = new EventEmitter();

  constructor(public notesService: NotesService) {}

  deleteNote(noteId: any) {
    this.notesService.DataService('DELETE', this.dayId, '', noteId);
    this.notes = this.notesService.DataService('READ', this.dayId, '', '');
    this.noteDeleted.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dayId = `${this.calendarType}-${this.activeDay}`;
    this.notes = this.notesService.DataService('READ', this.dayId, '', '');
  }
}
