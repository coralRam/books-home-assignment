import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [NavComponent]
})
export class NavModule { }
