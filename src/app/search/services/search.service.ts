import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Book} from '../../shared/classes/book';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  readonly serverUrl = 'https://www.googleapis.com/books/v1/volumes';

  searchQuery(searchText: string, startIndex: number, maxResults: number): Observable<any> {
    let searchParams = new HttpParams();
    searchParams = searchParams.set('q', searchText );
    searchParams = searchParams.set('startIndex', startIndex.toString() );
    searchParams = searchParams.set('maxResults', maxResults.toString() );
    const params = { params: searchParams};
    return this.http.get(this.serverUrl , params);
  }
}


