import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = new BehaviorSubject<User[]>([
    { name: 'John', age: 25, password: '123' },
    { name: 'Jane', age: 24, password: 'secret' },
    { name: 'Jack', age: 26, password: '123456' }
  ]);

  currentUser = new BehaviorSubject<User | null>(null);

  constructor() { }

  getUsers(): User[] {
    return this.users.value;
  }

  addUser(user: User): void {
    this.users.next([...this.users.value, user]);
  }

  deleteUser(user: User): void {
    this.users.next(this.users.value.filter(u =>
      u.name !== user.name &&
      u.age !== user.age
    ));
  }

  login(user: Partial<User>): boolean {
    const authUser = this.users.value.find(
      u => u.name === user.name &&
        u.password === user.password
    )

    if (authUser) {
      this.setCurrentUser(authUser);
      return true;
    }

    return false;
  }

  setCurrentUser(user: User): void {
    this.currentUser.next(user);
  }

  logOut(): void {
    this.currentUser.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.currentUser.value;
  }
}
