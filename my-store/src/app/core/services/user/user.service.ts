import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  constructor() { }

  getuser() {
    return this.users;
  }

  addUser(newUser: User) {
    let newUsers: User[] = [];
    newUsers = this.users.filter(item => item.id !== newUser.id)
    this.users = newUsers;
    this.users.push(newUser);
    return this.users;
  }

  clearuser() {
    this.users = [];
  };
}
