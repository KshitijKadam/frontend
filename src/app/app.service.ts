import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': ''
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  
  serverURL = 'http://localhost:8060/'

  constructor(private http: HttpClient) { }

  login(username: any, password: any): Observable<any> {
    return this.http.get<any>(this.serverURL + 'login?username=' + username + '&password=' + password);
  }

}
