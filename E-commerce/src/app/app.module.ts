import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { FilterPipe } from './filter.pipe';


var routes: Routes = [
  { "path": "login", component: LoginComponent },
  { "path": "home", component: HomeComponent },
  { "path": "cart", component: CartComponent },
  {"path":"", redirectTo : 'login' ,  pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CartComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
