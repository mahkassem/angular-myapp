import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  name: string = '';
  password: string = '';
  error: boolean = false;
  message: string = '';

  constructor(private _userService: UserService) { }

  login(): void {
    this.clearError();
    const isAuthenticated = this._userService.login({
      name: this.name,
      password: this.password
    });

    if (!isAuthenticated) {
      this.setError('Invalid credentials');
    } else {
      this.setSuccess('Logged in successfully');
    }
  }

  setError(message: string): void {
    this.error = true;
    this.message = message;
  }

  clearError(): void {
    this.error = false;
    this.message = '';
  }

  setSuccess(message: string): void {
    this.error = false;
    this.message = message;
  }
}
