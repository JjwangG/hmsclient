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

  private users = [
    new UserModel(1, 1, 'urmom', 'bitch', 'whore', 'bitchwhore@email.com', new Role('slut',70)),
    new UserModel(2, 2, 'password', 'john', 'dumb', 'email@email.com', new Role('bruh',60))
  ];

  public getUser(id: string): Observable<UserModel> {
    var x = this.http.get<UserModel>(Url + 'useraccounts/' + id);
    console.log(x);
    return x;
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