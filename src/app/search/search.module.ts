import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import {DataViewModule} from 'primeng/dataview';
import {CodeHighlighterModule, DataGridModule, DialogModule, DropdownModule, PanelModule, TabViewModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DataViewModule,
    DropdownModule,
    FormsModule,
    DataGridModule,
    PanelModule,
    DialogModule,
    TabViewModule,
    CodeHighlighterModule
  ],
  exports:[SearchComponent]
})
export class SearchModule { }
