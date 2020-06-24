import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Lesson3Module } from '../lesson3/lesson3.module';
import { RouterModule } from '@angular/router';
import { ServiceLandModule } from 'src/service-land/service-land.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    Lesson3Module,
    ServiceLandModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
