import { Injectable } from '@angular/core';
import {Book} from '../classes/book';
import {Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';
import {Globals} from '../classes/globals';
import {ConvertorService} from './convertor.service';
import {ServerConnectorService} from './server-connector.service';

@Injectable({
  providedIn: 'root'
})
export class BookManagerService {
  readonly serverUrl = Globals.SERVER_URL;
  private _wishListBooksMap: Map<string, Book>;
  private _booksMapSearchResult: Map<string, Book>;
  private _currSearchText: string;
  private _totalBooksItems: number;

  constructor(private serverConnector: ServerConnectorService, private convertorService: ConvertorService) {
    this._booksMapSearchResult = new Map();
    this._wishListBooksMap = new Map();
  }

  get booksMapSearchResult(): Map<string, Book> {
    return this._booksMapSearchResult;
  }

  get wishListBooksMap(): Map<string, Book> {
    return this._wishListBooksMap;
  }

  get currSearchText(): string {
    return this._currSearchText;
  }

  get totalBooksItems(): number {
    return this._totalBooksItems;
  }

  getBooksSearchResultArray(): Book[] {
    return Array.from(this._booksMapSearchResult.values());
  }

  getWishListArray(): Book[] {
    return Array.from(this._wishListBooksMap.values());
  }

  searchBooks(searchText: string, startIndex: number, maxResults: number): void {
    const tempMap: Map<string, Book>  = new Map();
    this._currSearchText = searchText;
    if (searchText !== Globals.EMPTY_STRING) {
      this.searchQuery(searchText, startIndex,  maxResults).subscribe(
        bookResults => {
          this._totalBooksItems = bookResults.totalItems;
          const allBooks = (<any[]>bookResults.items);
          if (allBooks != null) {
            allBooks.forEach(currBookResult => {
              const currPresentedBook = this.convertorService.convertToGuiBook(currBookResult);
              tempMap.set(currPresentedBook.id, currPresentedBook);
            });
            this._booksMapSearchResult = tempMap;
          }
        });
    } else {
      this._booksMapSearchResult.clear();
    }
  }

  searchQuery(searchText: string, startIndex: number, maxResults: number): Observable<any> {
    let searchParams = new HttpParams();
    searchParams = searchParams.set('q', searchText );
    searchParams = searchParams.set('startIndex', startIndex.toString() );
    searchParams = searchParams.set('maxResults', maxResults.toString() );
    const params = { params: searchParams};
    return this.serverConnector.getData(this.serverUrl, params);
  }

  addBookToWishList(book: Book): void {
      this._wishListBooksMap.set(book.id, book);
  }

  removeBookFromWishList(bookId: string): void {
    this._wishListBooksMap.delete(bookId);
  }
}
