import { Component, OnInit } from '@angular/core';
import {UserLoginService} from '../../login/services/user-login.service';

@Component({
  selector: 'app-books-main',
  templateUrl: './books-main.component.html',
  styleUrls: ['./books-main.component.css']
})
export class BooksMainComponent implements OnInit {

 public userName: string;

  constructor(private userLogin: UserLoginService) { }

  ngOnInit() {
    this.userName = this.userLogin.user;
  }

}
