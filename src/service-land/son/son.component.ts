import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FamilyService } from '../service/family.service';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent implements OnInit {
  name: string;
  public get lastname(): string {
    return this.family.lastname;
  }
  constructor(private family: FamilyService) {
    this.name = this.family.getSpecificName();
  }

  ngOnInit() {
    this.family.wronglastname = 'Kemickzze';

    // this.family.lastname = 'Kemickzze';
  }


}
