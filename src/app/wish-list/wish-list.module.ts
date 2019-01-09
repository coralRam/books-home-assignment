import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './components/wish-list/wish-list.component';
import {SearchComponent} from '../search/components/search/search.component';

@NgModule({
  declarations: [WishListComponent],
  imports: [
    CommonModule
  ],
  exports:[WishListComponent]
})
export class WishListModule { }
