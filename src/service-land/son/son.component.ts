import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent implements OnInit {
  name: string;
  constructor(private router: Router) {
    this.getSpecificName();
  }

  ngOnInit() {
  }
  getSpecificName() {
    const { url, routerState } = this.router;
    console.log(url);
    this.name = url.replace('/', '');
  }

}