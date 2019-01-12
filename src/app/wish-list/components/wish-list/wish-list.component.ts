import { Component, OnInit } from '@angular/core';
import {BookManagerService} from '../../../shared/services/book-manager.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  constructor(public bookManagerService: BookManagerService) { }

  ngOnInit() {
  }

  removeBookFromWishList(bookToRemove): void{
    this.bookManagerService.removeBookFromWishList(bookToRemove.id);

    }

}
