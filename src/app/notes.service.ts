import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor() {}

  DataService(method: string, dayId: string, body: string, idToDelete: string) {
    let currentNotesArrayString = localStorage.getItem(dayId);
    let currentNotesArray = JSON.parse(currentNotesArrayString || '[]');
    let response = [];

    switch (method) {
      case 'CREATE':
        let noteId: string = this.createNoteId();
        const newNoteDict = { [noteId]: body };

        if (!currentNotesArray) {
          let newArray = [];
          newArray.push(newNoteDict);
          localStorage.setItem(dayId, JSON.stringify(newArray));
          break;
        }
        currentNotesArray.push(newNoteDict);
        currentNotesArray.forEach((member: any) => {});
        localStorage.setItem(dayId, JSON.stringify(currentNotesArray));
        break;
      case 'READ':
        response = currentNotesArray;
        console.log(response, 'resp');
        break;

      case 'DELETE':
        let modifiedArray = currentNotesArray.filter((noteObject: any) => {
          if (Object.keys(noteObject)[0] !== idToDelete) {
            return true;
          }
          return false;
        });
        modifiedArray.length === 0
          ? (modifiedArray = null)
          : (modifiedArray = modifiedArray);
        localStorage.setItem(dayId, JSON.stringify(modifiedArray));
        break;
    }
    return response;
  }

  createNoteId(): string {
    let noteId = localStorage.getItem('noteId');
    if (noteId === null) {
      localStorage.setItem('noteId', '0');
      noteId = '0';
    } else {
      noteId = (Number(noteId) + 1).toString();
      localStorage.setItem('noteId', noteId);
    }
    return noteId;
  }
}
