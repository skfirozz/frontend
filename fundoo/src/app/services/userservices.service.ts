import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor(private httpclient: HttpClient) { }

  login(arr){
    return this.httpclient.post<any>(environment.baseUrl + environment.login, arr);
  }

  register(arr){
    return this.httpclient.post<any>(environment.baseUrl + environment.login, arr);
  }
}
