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

  createLabel(arr){
    return this.httpclient.post<any>(environment.baseUrl + environment.createLabel,arr);
  }
  
  getAllNotes(){
    let token= localStorage.token;
    return this.httpclient.get<any>(environment.baseUrl + environment.getAllNotes + "?token=" + token);
  }

  getPinNotes() {
    let token= localStorage.token;
    return this.httpclient.get<any>(environment.baseUrl + environment.getPinNotes +"?token=" + token);
  }

  getUnPinNotes(){
    let token= localStorage.token;
    return this.httpclient.get<any>(environment.baseUrl + environment.getUnPinNote +"?token=" + token);   
  }

  getTrashNotes() {
    let token= localStorage.token
    return this.httpclient.get<any>(environment.baseUrl + environment.getTrashNotes +"?token=" + token);
  }

  getArchiveNotes() {
    let token= localStorage.token;
    return this.httpclient.get<any>(environment.baseUrl + environment.getArchiveNotes  +"?token=" + token);
  }

  getallLabels(){
    let token= localStorage.token;
    return this.httpclient.get<any>(environment.baseUrl + environment.getLabels  +"?token=" + token);
  }

  getLabelNotes(){
    let token= localStorage.token;
    return this.httpclient.get<any>(environment.baseUrl + environment.getLabelNotes +"?token=" + token);
  }
  
  updatePin(arr) {
    let token = localStorage.getItem('token');
    console.log(environment.baseUrl + environment.updatePin + arr);
    return this.httpclient.post<any>(environment.baseUrl + environment.updatePin, arr);
  }

  updateArchive(arr) {
    let token= localStorage.token;
    return this.httpclient.post<any>(environment.baseUrl + environment.updateArchive, arr);
  }

  updateTrash(arr) {
    return this.httpclient.post<any>(environment.baseUrl + environment.updateTrash, arr);
  }

  deleteNotes(arr) {
    return this.httpclient.post<any>(environment.baseUrl + environment.delete ,arr);
  }

  deleteLabel(arr){
    return this.httpclient.post<any>(environment.baseUrl + environment.deleteLabel, arr);
  }
  updateColor() {
    let token = localStorage.getItem('token');
    return this.httpclient.put<any>(environment.baseUrl + environment.delete, { headers: localStorage.token });
  }
  setColor(arr) {
    console.log(arr);
    return this.httpclient.post<any>(environment.baseUrl + environment.setcolor, arr);

  }

  UpdateNotes(arr){
    return this.httpclient.post<any>(environment.baseUrl + environment.UpdateNotes,arr);
  }

  addReminder(arr){
    return this.httpclient.post<any>(environment.baseUrl + environment.addReminder,arr);
  }
  
  deleteReminder(arr){
      return this.httpclient.post<any>(environment.baseUrl + environment.deleteReminder,arr);
  }
  
}
