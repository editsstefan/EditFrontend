import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StefanComponent } from './stefan/stefan.component';
import { HomeComponent } from './home/home.component';


import { SearchbarComponent } from './searchbar/searchbar.component';
/* tutorijal*/
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [

    AppComponent,
    StefanComponent,
    HomeComponent,
    
    AppComponent,
    SearchbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* tutorijal*/
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
