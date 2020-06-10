import { Component } from '@angular/core';
export interface INav {
  path: string;
  label: string;
  icon?: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navs: INav[] = [
    { path: 'home', label: 'My Epr' },
    { path: 'list', label: 'Employees' },
    { path: 'yonatan', label: 'Yonatan' },
  ];
  title = 'sand-box';
}
