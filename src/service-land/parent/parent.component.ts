import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FamilyService } from '../family.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  name: string;
  constructor(private family: FamilyService) {
    this.name = this.family.getSpecificName();
  }

  ngOnInit() {
    this.family.wronglastname = 'Kemickzze';

    // this.family.lastname = 'Kemickzze';
  }


}
