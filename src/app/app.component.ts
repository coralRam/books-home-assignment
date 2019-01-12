import { Component } from '@angular/core';
import {Globals} from './shared/classes/globals';
import {BookManagerService} from './shared/services/book-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private bookManagerService: BookManagerService) {}

  public welcomeString: string  = 'WELCOME';

  public userName: string = '';
  // public title = this.glo.HEADLINE;
}
