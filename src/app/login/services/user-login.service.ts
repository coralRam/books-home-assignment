import { Injectable } from '@angular/core';
import {User} from '../../shared/classes/user';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  private _user: User;

  constructor(private router: Router) {
  }

  login(user: User) {
    this._user = user;
    sessionStorage.setItem('username', this._user.username);
    this.router.navigate(['/books']);
  }

  get user(): string {
    return sessionStorage.getItem('username');
  }
}
