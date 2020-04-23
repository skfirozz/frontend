import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Note } from '../model/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {


  private _autoRefresh$ = new Subject();

  token: Note = new Note();
  constructor(private httpclient: HttpClient) { }

  get autoRefresh$() {
    return this._autoRefresh$;
  }

  userValues(){
    let token=localStorage.token;
    this.token.token=token;
    return this.httpclient.post<any>(environment.baseUrl + environment.info ,this.token );
  }

  updateProfile(arr){
    return this.httpclient.post<any>(environment.baseUrl + environment.updateProfile ,arr);
    
  }

  createNote(arr) {
    return this.httpclient.post<any>(environment.baseUrl + environment.createNote, arr);
  }

  createLabel(arr){
    return this.httpclient.post<any>(environment.baseUrl + environment.createLabel,arr);
  }
  
  addCollaborator(arr){
    return this.httpclient.post<any>(environment.baseUrl + environment.addCollaborator,arr);
  }
  
  deleteCollaboration(arr){
    return this.httpclient.post<any>(environment.baseUrl + environment.deleteCollaboration,arr);
  }

  getAllNotes(){
    let token= localStorage.token;
    this.token.token=token;
    return this.httpclient.post<any>(environment.baseUrl + environment.getAllNotes,this.token );
  }

  getPinNotes() {
    let token= localStorage.token;
    this.token.token=token;
    return this.httpclient.post<any>(environment.baseUrl + environment.getPinNotes ,this.token );
  }

  getUnPinNotes(){
    let token= localStorage.token;
    this.token.token=token;
    return this.httpclient.post<any>(environment.baseUrl + environment.getUnPinNote ,this.token);   
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
    this.token.token=token;
    return this.httpclient.post<any>(environment.baseUrl + environment.getLabels ,this.token);
  }

  getLabelNotes(){
    let token= localStorage.token;
    this.token.token=token;
    return this.httpclient.post<any>(environment.baseUrl + environment.getLabelNotes ,this.token);
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

  setColor(arr) {
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

  search(arr){
    return this.httpclient.post<any>(environment.baseUrl + environment.searchData,arr);
  }
  
}
