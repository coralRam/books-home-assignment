import { Injectable } from '@angular/core';
import {Book} from '../classes/book';
import {Globals} from '../classes/globals';

@Injectable({
  providedIn: 'root'
})
export class ConvertorService {

  constructor() { }

  convertToGuiBook(serverBook: any): Book {
    const newBook = new Book();
    newBook.title = serverBook.volumeInfo.title;
    if (serverBook.volumeInfo.authors != null) {
      serverBook.volumeInfo.authors.forEach(currAuthor => {
        newBook.authors.push(currAuthor);
      });
    }
    if (serverBook.volumeInfo.publisher != null) {
      newBook.publisher = serverBook.volumeInfo.publisher;
    }
    if (serverBook.volumeInfo.imageLinks) {
      newBook.imgSrc = serverBook.volumeInfo.imageLinks.smallThumbnail;
    } else {
      newBook.imgSrc = Globals.DEFAULT_IMG_PATH;
    }
    if (serverBook.volumeInfo.description != null) {
      newBook.description = serverBook.volumeInfo.description;
    } else {
      newBook.description = Globals.NO_DESCRIPTION;
    }
    newBook.id = serverBook.id;
    newBook.printType = serverBook.volumeInfo.printType;
    newBook.language = serverBook.volumeInfo.language;
    newBook.pageCount = serverBook.volumeInfo.pageCount;
    return newBook;
  }
}
