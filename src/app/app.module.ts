import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Lesson3Module } from '../lesson3/lesson3.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    Lesson3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
