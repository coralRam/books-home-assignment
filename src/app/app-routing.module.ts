import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/components/login/login.component';
import {AuthenticationService} from './login/services/authentication.service';
import {BooksMainComponent} from './books/books-main/books-main.component';
import {SearchComponent} from './search/components/search/search.component';
import {WishListComponent} from './wish-list/components/wish-list/wish-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'books', component: BooksMainComponent, canActivate: [AuthenticationService]},
  {path: 'search', component: SearchComponent, canActivate: [AuthenticationService]},
  {path: 'wishList', component: WishListComponent, canActivate: [AuthenticationService]},
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: '**', redirectTo: '/books'},
 /* {path: '', component: BooksMainComponent},
  {path: 'search', component: SearchComponent},
  {path: 'wishList' , component: WishListComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
