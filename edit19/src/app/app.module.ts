import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { NewService} from 'src/app/new.service';
import { SearchbarComponent } from './searchbar/searchbar.component';
/* tutorijal*/
import { FormsModule } from '@angular/forms';
import { TokenService} from '/home/ucenik/EditFrontend/edit19/src/app/token.service'

import { GreenIconComponent } from './green-icon/green-icon.component';


import { RedIconComponent } from './red-icon/red-icon.component';

@NgModule({
  declarations: [
    
    AppComponent,
    FooterComponent,
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
  providers: [NewService,TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
