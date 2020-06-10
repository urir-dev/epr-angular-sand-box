import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  title = {
    title: 'Lesson 3'
  };
  constructor() {
    console.log('CONSTRUCTOR');

  }


  ngOnInit() {
    console.log('NG ON INIT');

  }
  ngAfterViewInit(): void {
    console.log('NG ON AFTER VIEW INIT');

  }


  ngOnDestroy(): void {
    console.log('Bey Bey Home');

  }

}
