import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './../../models/user';
import { Group } from './../../models/group';
import { Expense } from '../../models/expense';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl: string = '../splitup';
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/user/all`);
  }

  getAllUsersInGroup(groupId: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/user/groupId?groupId=${groupId}`);
  }

  getGroupByGroupId(groupId: number): Observable<Group> {
    return this.http.get<Group>(`${this.baseUrl}/group/getByGroupId?groupId=${groupId}`);
  }

  getGroupsByUserId(userId: number): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.baseUrl}/group/getByUserId?id=${userId}`);
  }

  createGroup(group: Group): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/group/add`, group);
  }

  createExpense(group: Expense): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/group/add`, group);
  }
}
