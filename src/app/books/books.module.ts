import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchModule} from '../search/search.module';
import {WishListModule} from '../wish-list/wish-list.module';
import { BooksMainComponent } from './books-main/books-main.component';

@NgModule({
  declarations: [BooksMainComponent],
  imports: [
    CommonModule, SearchModule, WishListModule
  ],
  exports: [BooksMainComponent]
})
export class BooksModule { }
