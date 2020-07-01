import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.scss']
})
export class TowerComponent implements OnInit {

  @Input() name: string;
  @Output() alarm = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  setAlarm() {
    this.alarm.emit(this.name);
  }
}
