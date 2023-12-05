import { Injectable } from '@angular/core';
import {Role, UserModel} from '../model/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    new UserModel(1, 1, 'urmom', 'bitch', 'whore', 'bitchwhore@email.com', new Role('slut',70)),
    new UserModel(2, 2, 'password', 'john', 'dumb', 'email@email.com', new Role('bruh',60))
  ];


  public getUser(id: string): UserModel {
    // tslint:disable-next-line:radix
    return <UserModel>this.users.find(user => user.id === Number.parseInt(id));
  }

  public addBook(b: UserModel): void {
    this.users.push(b);
  }
}