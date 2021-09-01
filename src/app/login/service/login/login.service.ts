import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/home/models/user';


export interface UserDetails{
  id: number,
  fullName: string,
  username: string,
  phoneNumber: string,
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = '../splitup';
  //global user object to change name in header and get public id
  user$: BehaviorSubject<UserDetails> = new BehaviorSubject({} as UserDetails);
  constructor(private http: HttpClient) { }


  //login service hitting the api at port:8080
  login(body: any): Observable<UserDetails> {
    return this.http.post<UserDetails>(`${this.baseUrl}/login`,body);
  }

}
