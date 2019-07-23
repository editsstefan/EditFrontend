import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StefanComponent } from './stefan/stefan.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { NewService} from 'src/app/new.service';
import { SearchbarComponent } from './searchbar/searchbar.component';
/* tutorijal*/
import { FormsModule } from '@angular/forms';


import { GreenIconComponent } from './green-icon/green-icon.component';


import { RedIconComponent } from './red-icon/red-icon.component';

@NgModule({
  declarations: [
    
    AppComponent,
    StefanComponent,
    HomeComponent,
    SearchbarComponent,

    GreenIconComponent,


    RedIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* tutorijal*/
    FormsModule,
    HttpClientModule
  ],
  providers: [NewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
