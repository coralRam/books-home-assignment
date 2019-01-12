import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../../shared/classes/book';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {

  @Input() book: Book;
  @Input() public displayDialog: boolean;
  @Output() addBookToWishList = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {}

  addToWishList() {
    this.displayDialog = false;
    this.addBookToWishList.emit(this.book);
  }
}

