import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {
  private notesList = new Subject<any>();
  private pinNoteList = new Subject<any>();
  private archiveNoteList = new Subject<any>();
  private trashedNoteList = new Subject<any>();
  private searchNoteData=new Subject<any>();

  baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private httpclient: HttpClient) { }

  createNote(note: any) {
    console.log(note.value);  
    let noteId = 10;
    // console.log(this.baseUrl + 'deleteNote/' +  noteId  );

    // let token = sessionStorage.getItem('token');
    return this.httpclient.post(this.baseUrl + 'createNote', note);//,{ headers: { Authorization: token } });
  }

  editNotes(arr) {
    return this.httpclient.post(this.baseUrl + 'editNotes', arr);
  }

  deleteNote(noteId: number) {

    console.log(this.baseUrl + 'deleteNote/' + { noteId } );

    return this.httpclient.delete(this.baseUrl + 'deleteNote/' + { noteId } ) ; 
  }

  pinNotes(note: any) {
    console.log("note id----->" + note);
    return this.httpclient.put(this.baseUrl + '/ispinned/' , note);
  }

  getNotesList(): Observable<any> {
    console.log("getNotesList Service");
    return this.notesList.asObservable();
  }

  getArchiveNotesList(): Observable<any> {
    console.log("getArchive Service Get");
    return this.archiveNoteList.asObservable();
  }
  
  getTrashedNotesList(): Observable<any> {
    console.log("trashNote Service Get");
    return this.trashedNoteList.asObservable();
  }


}
