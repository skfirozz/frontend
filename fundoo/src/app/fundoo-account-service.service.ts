import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FundooAccountServiceService {

  baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getRegisterValue(arr) {

    return this.http.post(this.baseUrl + 'register', arr);
  }
  getLoginValue(arr) {

    return this.http.post(this.baseUrl + 'login', arr);
  }
  getForgotValue(arr) {
    return this.http.post(this.baseUrl + 'forgotPassword', arr);
  }

  geSearchValue(arr) {

    return this.http.post(this.baseUrl + 'search', arr);
  }
}
