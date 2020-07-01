import { Component, OnInit } from '@angular/core';


export interface IKnight {
  name: string;
  flagColor: string;
}

@Component({
  selector: 'app-castle',
  templateUrl: './castle.component.html',
  styleUrls: ['./castle.component.scss']
})
export class CastleComponent implements OnInit {
  knights: IKnight[] = [];
  constructor() { }

  ngOnInit() {
  }
  listenAlarm(tower: string) {
    // save the king
    alert(tower);
  }

}
