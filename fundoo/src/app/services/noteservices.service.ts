import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {
  baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private httpclient: HttpClient) { }



  CreateNote(arr) {
    let token = localStorage.getItem('token');
    return this.httpclient.post<any>(this.baseUrl + "createNote", arr, { headers: { Authorization: token } });
  }
  getnotes() {
    let token = localStorage.getItem('token');
    return this.httpclient.get<any>(this.baseUrl + "getNotes" , { headers:  localStorage.token } ) ;
  }

  getPin()
  {
    let token =localStorage.getItem('token');
    return this.httpclient.get<any>(this.baseUrl + "/getPin", { headers:  localStorage.token }  );
  }
  getUnPin()
  {
    let token =localStorage.getItem('token');
    return this.httpclient.get<any>(this.baseUrl + "/getUnPin", { headers:  localStorage.token }  );
  }
  

}
