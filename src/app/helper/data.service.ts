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
    return this.http.post(this.baseUrl + '/public/login', data);
  }

  changePassword(data: any) {
    return this.http.post(this.baseUrl + '/admin/profile/change-password', data);
  }

  saveContactUs(data: any) {
    return this.http.post(this.baseUrl + '/public/contact-us/add', data);
  }
  
  getContactUs() {
    return this.http.get(this.baseUrl + '/admin/contact-us/list');
  }

  saveSubscribers(data: any) {
    return this.http.post(this.baseUrl + '/public/subscriber/add', data);
  }

  getSubscribers(){
    return this.http.get(this.baseUrl + '/admin/subscriber/list');
  }

  getCount(){
    return this.http.get(this.baseUrl + '/admin/subscriber/count');
  }
}
