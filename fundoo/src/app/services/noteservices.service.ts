import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {

  constructor(private httpclient: HttpClient) { }

  createNote(arr) {
    let token = localStorage.getItem('token');
    return this.httpclient.post<any>(environment.baseUrl + environment.createNote, arr, { headers: { Authorization: token } });
  }
  getnotes() {
    let token = localStorage.getItem('token');
    return this.httpclient.get<any>(environment.baseUrl + environment.notes , { headers:  localStorage.token } ) ;
  }


  getPin()
  {
    let token =localStorage.getItem('token');
    return this.httpclient.get<any>(environment.baseUrl + environment.pinNotes, { headers:  localStorage.token }  );
  }
  
  getUnPin()
  {
    let token =localStorage.getItem('token');
    return this.httpclient.get<any>(environment.baseUrl + environment.unpinNotes , { headers:  localStorage.token }  );
  }

  getTrashNotes()
  {
    let token =localStorage.getItem('token');
    return this.httpclient.get<any>(environment.baseUrl + environment.getTrashNotes, { headers:  localStorage.token } );
  }

  getArchiveNotes()
  {
    let token =localStorage.getItem('token');
    return this.httpclient.get<any>(environment.baseUrl + environment.getTrashNotes, { headers:  localStorage.token } );
  }
  
  getUnarchiveNotes()
  {
    let token =localStorage.getItem('token');
    return this.httpclient.get<any>(environment.baseUrl + environment.getTrashNotes, { headers:  localStorage.token } );
  }
  
  updatePin(noteId:number,notes){
    let token =localStorage.getItem('token');
    console.log(environment.baseUrl + environment.updatePin + noteId);
    return this.httpclient.put<any>(environment.baseUrl + environment.updatePin + noteId, notes, { headers:  localStorage.token }  );
  }

  updateArchive(noteId:number,notes){
    let token =localStorage.getItem('token');
    return this.httpclient.put<any>(environment.baseUrl + environment.updateArchive + noteId, notes, { headers:  localStorage.token }  );
  }

  updateTrash(noteId:number,notes){
    let token =localStorage.getItem('token');
    return this.httpclient.put<any>(environment.baseUrl + environment.updateTrash + noteId, notes, { headers:  localStorage.token }  );
  }

  deleteNotes(noteId:number){
    let token =localStorage.getItem('token');
    return this.httpclient.put<any>(environment.baseUrl + environment.delete + noteId, { headers:  localStorage.token }  );
  }

  updateColor()
  {
    let token =localStorage.getItem('token');
    return this.httpclient.put<any>(environment.baseUrl + environment.delete , { headers:  localStorage.token }  );
  }
  setColor(noteId:number, colorname){
    let token =localStorage.getItem('token');
    console.log("hihihi");
    return this.httpclient.put<any>(environment.baseUrl + environment.setcolor + noteId,colorname, { headers:  localStorage.token }  );
 
  }
}
