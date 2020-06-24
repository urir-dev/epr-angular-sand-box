import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
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
