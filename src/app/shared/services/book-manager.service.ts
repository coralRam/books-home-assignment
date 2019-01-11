import { Injectable } from '@angular/core';
import {Book} from '../classes/book';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookManagerService {
  readonly serverUrl = 'https://www.googleapis.com/books/v1/volumes';
  /*private _booksSearchResult: Book[];*/
  private _wishListBooksMap: Map<string, Book>;
  private _totalBooksItems: number;
  private _booksMapSearchResult: Map<string, Book>;
  private _currSearchText: string;

  constructor(private http: HttpClient) {
    this._booksMapSearchResult = new Map();
    this._wishListBooksMap = new Map();
  }

  get booksMapSearchResult(): Map<string, Book> {
    return this._booksMapSearchResult;
  }

/*  get booksSearchResult(): Book[] {
    return this._booksSearchResult;
  }*/

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


  searchBooks(searchText: string, startIndex: number, maxResults: number) {
    /*this._booksSearchResult = [];*/
    this._booksMapSearchResult.clear();
    this._currSearchText = searchText;
    if (searchText !== '') {
      this.searchQuery(searchText, startIndex,  maxResults).subscribe(
        bookResults => {
          console.log("%%%%%%%%%%%%%%%%%%$$$$$$$$$")
          console.log(bookResults.totalItems)
          this._totalBooksItems = bookResults.totalItems;
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
            } else {
              currPresentedBook.imgSrc = '../assets/images/default_book1.jpg';
            }
            currPresentedBook.id = currBookResult.id;
            currPresentedBook.printType = currBookResult.volumeInfo.printType;
            currPresentedBook.language = currBookResult.volumeInfo.language;
            currPresentedBook.description = currBookResult.volumeInfo.description;
            this._booksMapSearchResult.set(currPresentedBook.id, currPresentedBook);
            // this._booksSearchResult.push(currPresentedBook);
          });
        });
    }
  }

  searchQuery(searchText: string, startIndex: number, maxResults: number): Observable<any> {
    let searchParams = new HttpParams();
    searchParams = searchParams.set('q', searchText );
    searchParams = searchParams.set('startIndex', startIndex.toString() );
    searchParams = searchParams.set('maxResults', maxResults.toString() );
    const params = { params: searchParams};
    return this.http.get(this.serverUrl , params);
  }

  addBookToWishList(book: Book) {
      this._wishListBooksMap.set(book.id, book);
  }
}
