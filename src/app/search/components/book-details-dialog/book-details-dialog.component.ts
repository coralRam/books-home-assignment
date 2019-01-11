import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../../shared/classes/book';
import {BookManagerService} from '../../../shared/services/book-manager.service';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {

  @Input() book: Book;
  @Input() public displayDialog: boolean;
  /*@Output() removeBookFromWishList = new EventEmitter<Book>();*/

  constructor(private bookManagerService: BookManagerService) { }

  ngOnInit() {}

  addToWishList() {
    this.bookManagerService.addBookToWishList(this.book);
  }
}

