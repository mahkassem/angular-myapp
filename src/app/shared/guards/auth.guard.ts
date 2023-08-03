import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  return inject(UserService).isLoggedIn()
}
