import { Injectable } from '@angular/core';
import {Role, UserModel} from '../model/user-model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const Url = 'http://localhost:8080/hms-test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient){}

  public getUser(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(Url + 'useraccounts/' + id);
  }

  public addUser(book: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(Url + 'adduser', book);
  }


  // public getUser(id: string): UserModel {
  //   // tslint:disable-next-line:radix
  //   return <UserModel>this.users.find(user => user.id === Number.parseInt(id));
  // }

  // public addBook(b: UserModel): void {
  //   this.users.push(b);
  // }
}