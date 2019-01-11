import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import {DataViewModule} from 'primeng/dataview';
import {
  ButtonModule,
  CodeHighlighterModule,
  DataGridModule,
  DialogModule,
  DropdownModule, PaginatorModule,
  PanelModule, SplitButtonModule,
  TabViewModule
} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import { BookDetailsDialogComponent } from './components/book-details-dialog/book-details-dialog.component';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [SearchComponent, BookDetailsDialogComponent],
  imports: [CommonModule, HttpClientModule, DataViewModule, DropdownModule, FormsModule,
            DataGridModule, PanelModule, DialogModule, TabViewModule, CodeHighlighterModule,
            BrowserAnimationsModule, BrowserModule, ButtonModule, ToastModule, SplitButtonModule, PaginatorModule],
  exports: [SearchComponent],
  entryComponents: [BookDetailsDialogComponent]
})
export class SearchModule { }
