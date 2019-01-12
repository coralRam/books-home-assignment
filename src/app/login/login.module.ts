import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule, CheckboxModule, CodeHighlighterModule, InputTextModule, RadioButtonModule, TabViewModule} from 'primeng/primeng';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    TabViewModule,
    CodeHighlighterModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
