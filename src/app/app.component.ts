import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  currentUser = this._userService.currentUser;

  constructor(private _userService: UserService, private router: Router) { }

  isLoggedIn(): boolean {
    return this._userService.isLoggedIn();
  }

  logOut(): void {
    this._userService.logOut();
    this.router.navigate(['/']);
  }
}
