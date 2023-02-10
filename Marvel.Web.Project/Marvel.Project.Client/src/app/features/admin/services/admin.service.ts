import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export class User {
  constructor(
    public username: string,
    public password: string,
    public loggedIn: boolean
  ) {}
}
@Injectable({ providedIn: 'root' })
export class AdminService {
  user: User = new User('', '', false);
  username = 'dimakatso';
  password = 'Dima@Bafedil3';
  userEmitter = new BehaviorSubject<User>(new User('', '', false));
  //   constructor() {
  //     this.user = {
  //       username: '',
  //       password: '',
  //       loggedIn: false,
  //     };
  //   }
  logUser(username: string, password: string) {
    if (username !== this.username && password !== this.password) {
      return;
    }

    this.userEmitter.next(
      (this.user = {
        username: username,
        password: password,
        loggedIn: true,
      })
    );
  }
}
