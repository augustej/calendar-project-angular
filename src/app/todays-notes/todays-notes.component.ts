import { Component, Input, SimpleChanges } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-todays-notes',
  templateUrl: './todays-notes.component.html',
  styleUrls: ['./todays-notes.component.scss'],
})
export class TodaysNotesComponent {
  @Input() activeDay?: string = '';
  @Input() calendarType?: string = '';
  notes?: any;
  dayId?: string = '';

  constructor(public notesService: NotesService) {}

  deleteNote(noteId: any) {
    console.log('delete', noteId);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dayId = `${this.calendarType}-${this.activeDay}`;
    this.notes = this.notesService.DataService('READ', this.dayId, '', '');
  }
}
