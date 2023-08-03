import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users: Observable<User[]> = this._userService.users;

  constructor(private _userService: UserService) { }

  deleteUser(user: User): void {
    this._userService.deleteUser(user);
  }
}
