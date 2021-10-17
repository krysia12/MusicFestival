import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FestivalService } from './festival.service';
import { NgpSortModule } from "ngp-sort-pipe";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgpSortModule
  ],
  providers: [
    FestivalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
