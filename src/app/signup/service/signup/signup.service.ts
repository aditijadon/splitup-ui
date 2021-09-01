import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  baseUrl: string = 'splitup';
  constructor(private http: HttpClient) { }

  //signup service hitting the api at port:8080n

  signup(body: any) {
    return this.http.post(`${this.baseUrl}/signup`,body);
  }
}
