import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Book} from '../../../shared/classes/book';
import {SearchService} from '../../services/search.service';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {Observable,  Subject, fromEvent} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private presentedBooks: Book[];
  private pageIndex: number;
  @ViewChild('searchBox') searchBox: ElementRef;

  constructor(private searchService: SearchService) {
    this.presentedBooks = [];
  }

  ngOnInit() {
   let input = fromEvent(this.searchBox.nativeElement, 'keyup');
   let inputEvent = input.pipe(map((evt: any) => evt.target.value));
   let debouncedInput = inputEvent.pipe(debounceTime(300));
   let subscribe = debouncedInput.subscribe(searchText => this.search(searchText));
  }

  search(searchText: string) {
    this.presentedBooks = [];
    this.searchService.searchQuery(searchText, 0, 20).subscribe(
      bookResults => {
        let totalItems = bookResults.totalItems;
        let allBooks = (<any[]>bookResults.items);
        allBooks.forEach(currBookResult => {
          let currPresentedBook = new Book();
          currPresentedBook.title = currBookResult.volumeInfo.title;
          if (currBookResult.volumeInfo.authors != null){
            currBookResult.volumeInfo.authors.forEach(currAuthor => {
              currPresentedBook.authors.push(currAuthor);
            });
          }
          if (currBookResult.volumeInfo.publisher != null){
            currPresentedBook.publisher = currBookResult.volumeInfo.publisher;
          }
          if (currBookResult.volumeInfo.imageLinks){
            currPresentedBook.imgSrc = currBookResult.volumeInfo.imageLinks.smallThumbnail;
          }
          currPresentedBook.printType = currBookResult.volumeInfo.printType;
          currPresentedBook.language = currBookResult.volumeInfo.language;
          console.log(currPresentedBook);
          this.presentedBooks.push(currPresentedBook);
        })});
  }
}
