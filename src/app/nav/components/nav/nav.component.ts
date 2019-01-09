import { Component, OnInit } from '@angular/core';
import {UserLoginService} from '../../../login/services/user-login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public userLogin: UserLoginService) { }

  ngOnInit() {
  }

}
