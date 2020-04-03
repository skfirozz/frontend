import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {


  private _autoRefresh$ = new Subject();

  constructor(private httpclient: HttpClient) { }

  get autoRefresh$() {
    return this._autoRefresh$;
  }

  createNote(arr) {
    return this.httpclient.post<any>(environment.baseUrl + environment.createNote, arr);
  }
  getnotes() {
    return this.httpclient.get<any>(environment.baseUrl + environment.notes);
  }


  getPin() {
    let token = localStorage.getItem('token');
    return this.httpclient.get<any>(environment.baseUrl + environment.pinNotes, { headers: localStorage.token });
  }

  getUnPin() {
    let token = localStorage.getItem('token');
    return this.httpclient.get<any>(environment.baseUrl + environment.unpinNotes, { headers: localStorage.token });
  }

  getTrashNotes() {
    let token = localStorage.getItem('token');
    return this.httpclient.get<any>(environment.baseUrl + environment.getTrashNotes, { headers: localStorage.token });
  }

  getArchiveNotes() {
    return this.httpclient.get<any>(environment.baseUrl + environment.getArchiveNotes );
  }

  getUnarchiveNotes() {
    let token = localStorage.getItem('token');
    return this.httpclient.get<any>(environment.baseUrl + environment.getTrashNotes, { headers: localStorage.token });
  }

  updatePin(arr) {
    let token = localStorage.getItem('token');
    console.log(environment.baseUrl + environment.updatePin + arr);
    return this.httpclient.post<any>(environment.baseUrl + environment.updatePin, arr);
  }

  updateArchive(arr) {
    return this.httpclient.post<any>(environment.baseUrl + environment.updateArchive, arr);
  }

  updateTrash(arr) {
    return this.httpclient.post<any>(environment.baseUrl + environment.updateTrash, arr);
  }

  deleteNotes(noteId: number) {
    let token = localStorage.getItem('token');
    return this.httpclient.put<any>(environment.baseUrl + environment.delete + noteId, { headers: localStorage.token });
  }

  updateColor() {
    let token = localStorage.getItem('token');
    return this.httpclient.put<any>(environment.baseUrl + environment.delete, { headers: localStorage.token });
  }
  setColor(arr) {
    console.log(arr);
    return this.httpclient.post<any>(environment.baseUrl + environment.setcolor, arr);

  }
}
