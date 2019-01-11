import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './components/wish-list/wish-list.component';
import {SearchComponent} from '../search/components/search/search.component';
import {FormsModule} from '@angular/forms';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ButtonModule} from 'primeng/button';
import {CodeHighlighterModule, DropdownModule, InputTextModule, TabViewModule} from 'primeng/primeng';

@NgModule({
  declarations: [WishListComponent],
  imports: [CommonModule, FormsModule, VirtualScrollerModule, ButtonModule,
    InputTextModule, DropdownModule, TabViewModule, CodeHighlighterModule],
  exports: [WishListComponent]
})
export class WishListModule { }
