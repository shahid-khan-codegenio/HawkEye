import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(this.baseUrl + '/login', data);
  }

  changePassword(data: any) {
    return this.http.post(this.baseUrl + '/change-password', data);
  }

  saveForm(data: any) {
    return this.http.post(this.baseUrl + '/contact-us', data);
  }

  getFormData() {
    return this.http.get(this.baseUrl + '/contact-us');
  }
}
