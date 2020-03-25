import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {

  baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private httpclient: HttpClient) { }

  createNote(note: any) {
    console.log(note.value);  
    let noteId = 10;
    console.log(this.baseUrl + 'deleteNote/' +  noteId  );

    let token = sessionStorage.getItem('token');
    return this.httpclient.post(this.baseUrl + 'createNote', note,{ headers: { Authorization: token } });
  }

  editNotes(arr) {
    return this.httpclient.post(this.baseUrl + 'editNotes', arr);
  }

  deleteNote(noteId: number) {

    console.log(this.baseUrl + 'deleteNote/' + { noteId } );

    return this.httpclient.delete(this.baseUrl + 'deleteNote/' + { noteId } ) ; 
  }


}
