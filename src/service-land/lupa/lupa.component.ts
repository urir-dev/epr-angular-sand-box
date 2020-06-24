import { Component, OnInit } from '@angular/core';

export interface INav {
  link: string;
  label: string;
  icon?: string;
}

@Component({
  selector: 'app-lupa',
  templateUrl: './lupa.component.html',
  styleUrls: ['./lupa.component.scss']
})
export class LupaComponent implements OnInit {
  private _navs: INav[] = [
    { link: 'mom', label: 'My Mother' },
    { link: 'dad', label: 'My Father' },
    { link: 'roee', label: 'My Son' },
    { link: 'maayan', label: 'My Doughter' },
  ];
  public get navs(): INav[] {
    return this._navs;
  }
  constructor() { }

  ngOnInit() {
  }

}
