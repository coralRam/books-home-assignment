import { Component, OnInit } from '@angular/core';
import {User} from '../../../shared/classes/user';
import {UserLoginService} from '../../services/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: User;
  constructor(private userLogin: UserLoginService) {
    this.model = new User();
  }

  ngOnInit() {
  }
  onSubmit() {
    if (this.model != null) {
      this.userLogin.login(this.model);
    }
  }
}
