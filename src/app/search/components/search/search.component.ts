import {Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Book} from '../../../shared/classes/book';
import {debounceTime,  map} from 'rxjs/operators';
import {fromEvent} from 'rxjs';
import {BookManagerService} from '../../../shared/services/book-manager.service';
import {BookDetailsDialogComponent} from '../book-details-dialog/book-details-dialog.component';
import {DataTable, Paginator} from 'primeng/primeng';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  /*private presentedBooks: Book[];*/
  private pageIndex: number;
  public displayDialog: boolean;
  /*public selectedBook: Book;*/
  public searchText: string;
  public first: number = 0;

  @ViewChild('dv') dataView: DataTable;
  @ViewChild('searchBox') searchBox: ElementRef;

  constructor(public bookManagerService: BookManagerService,
              private entry: ViewContainerRef,
              private componentResolver: ComponentFactoryResolver) {
    /*this.presentedBooks = [];*/
  }

  ngOnInit() {
    const input = fromEvent(this.searchBox.nativeElement, 'input');
    const inputEvent = input.pipe(map((evt: any) => evt.target.value));
    const debouncedInput = inputEvent.pipe(debounceTime(350));
    const subscribe = debouncedInput.subscribe(searchText => this.bookManagerService.searchBooks(searchText, 0 , 20));
    this.searchText = '';
    if (this.bookManagerService.booksMapSearchResult.size > 0) {
      this.searchText = this.bookManagerService.currSearchText;
    }
    this.first = 20;

 /*   Paginator.prototype.changePageToFirst = function (event) {
      /!*if (!this.isFirstPage()) {*!/
      this.changePage(4, event);
      /!* }*!/
    };*/
  }

  selectBook(event: Event, book: Book) {
   /* this.selectedBook = book;
    this.displayDialog = true;
    event.preventDefault();*/
    this.entry.clear();
   const componentRef = this.entry.createComponent(this.componentResolver.resolveComponentFactory(BookDetailsDialogComponent));
    (<BookDetailsDialogComponent>componentRef.instance).book = book;
    (<BookDetailsDialogComponent>componentRef.instance).displayDialog = true;
  }

  paginate(event) {
    /*//event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages*/
    console.log("gggggggggggggggggggggggggggggggggggggggggggggggg");
  }

  loadData(event) {
    this.bookManagerService.searchBooks(this.searchText, event.first.toString() , 20)
    console.log( event.first);
    /*this.setCurrentPage(4);*/
  }

  /*search(searchText: string) {
    this.presentedBooks = [];
    if (searchText !== '') {
    this.searchService.searchQuery(searchText, 0, 20).subscribe(
      bookResults => {
        const totalItems = bookResults.totalItems;
        const allBooks = (<any[]>bookResults.items);
        allBooks.forEach(currBookResult => {
          const currPresentedBook = new Book();
          currPresentedBook.title = currBookResult.volumeInfo.title;
          if (currBookResult.volumeInfo.authors != null) {
            currBookResult.volumeInfo.authors.forEach(currAuthor => {
              currPresentedBook.authors.push(currAuthor);
            });
          }
          if (currBookResult.volumeInfo.publisher != null) {
            currPresentedBook.publisher = currBookResult.volumeInfo.publisher;
          }
          if (currBookResult.volumeInfo.imageLinks) {
            currPresentedBook.imgSrc = currBookResult.volumeInfo.imageLinks.smallThumbnail;
          }
          currPresentedBook.printType = currBookResult.volumeInfo.printType;
          currPresentedBook.language = currBookResult.volumeInfo.language;
          console.log(currPresentedBook);
          this.presentedBooks.push(currPresentedBook);
        });
      });
  }
  }*/

/*  setCurrentPage(n: number) {
    const paging = {
      first: ((n - 1) * this.dataView.rows),
      rows: this.dataView.rows
    };
    this.dataView.paginate(paging);
  }*/
}
