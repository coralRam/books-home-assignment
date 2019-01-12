import {Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Book} from '../../../shared/classes/book';
import {debounceTime,  map} from 'rxjs/operators';
import {fromEvent} from 'rxjs';
import {BookManagerService} from '../../../shared/services/book-manager.service';
import {BookDetailsDialogComponent} from '../book-details-dialog/book-details-dialog.component';
import {DataTable} from 'primeng/primeng';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public displayDialog: boolean;
  public searchText: string;
  first: number = 0;
  /*@ViewChild('dv') dataView: DataTable;*/
  @ViewChild('searchBox') searchBox: ElementRef;

  constructor(public bookManagerService: BookManagerService,
              private entry: ViewContainerRef,
              private componentResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    const input = fromEvent(this.searchBox.nativeElement, 'input');
    const inputEvent = input.pipe(map((evt: any) => evt.target.value));
    const debouncedInput = inputEvent.pipe(debounceTime(350));
    const subscribe = debouncedInput.subscribe(searchText => this.bookManagerService.searchBooks(searchText, 0 , 20));
    this.searchText = '';
    if (this.bookManagerService.booksMapSearchResult.size > 0) {
      this.searchText = this.bookManagerService.currSearchText;
    }
  }

  selectBook(event: Event, book: Book) {
    this.entry.clear();
   const componentRef = this.entry.createComponent(this.componentResolver.resolveComponentFactory(BookDetailsDialogComponent));
    (<BookDetailsDialogComponent>componentRef.instance).book = book;
    (<BookDetailsDialogComponent>componentRef.instance).displayDialog = true;
    (<BookDetailsDialogComponent>componentRef.instance).addBookToWishList.subscribe
                 (bookToAdd => this.bookManagerService.addBookToWishList(bookToAdd));
  }

  loadData(event) {
   this.bookManagerService.searchBooks(this.searchText, event.first.toString() , 20);
    this.first =  event.first;
  }

  changeToFirstPage(event) {
    this.first = 0;
  }
}
