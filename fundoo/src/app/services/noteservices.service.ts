import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {

  baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private httpclient: HttpClient) { }

  createNote(arr) {
    return this.httpclient.post(this.baseUrl + 'createNote', arr);
  }

  editNotes(arr) {
    return this.httpclient.post(this.baseUrl + 'editNotes', arr);
  }

}
