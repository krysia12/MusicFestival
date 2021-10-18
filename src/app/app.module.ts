import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FestivalService } from './festival.service';
import { NgpSortModule } from "ngp-sort-pipe";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgpSortModule,
    HttpClientModule
  ],
  providers: [
    FestivalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
