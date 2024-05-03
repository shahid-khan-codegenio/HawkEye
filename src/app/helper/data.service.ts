import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(this.baseUrl + '/login', data);
  }

  changePassword(data: any) {
    return this.http.post(this.baseUrl + '/change-password', data);
  }

  saveQueries(data: any) {
    return this.http.post(this.baseUrl + '/contact-us', data);
  }

  getQueries() {
    return this.http.get(this.baseUrl + '/contact-us');
  }

  getSubscribers(){
    return this.http.get(this.baseUrl + '/subscribers');
  }
}
