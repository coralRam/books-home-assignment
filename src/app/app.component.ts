import { Component } from '@angular/core';
import {Globals} from './shared/classes/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}

  public welcomeString: string  = 'WELCOME';

  public userName: string = '';
  // public title = this.glo.HEADLINE;
}
