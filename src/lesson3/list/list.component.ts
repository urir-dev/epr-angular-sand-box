import { Component, OnInit, OnDestroy } from '@angular/core';
import { IEmployee } from '../employee/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  employees: IEmployee[] = [
    {
      id: 0,
      email: 'yonatan@yaltman.com',
      firstname: 'yonatan',
      lastname: 'yaltman',
    },
    {
      id: 1,
      email: 'maayan@yaltman.com',
      firstname: 'maayan',
      lastname: 'yaltman',
    },
    {
      id: 2,
      email: 'harry@yaltman.com',
      firstname: 'harry',
      lastname: 'harry',
    },
  ];
  constructor(private router: Router) {
    console.log('List Break😂');

  }
  onEmployeeEdit(employee: IEmployee) {
    console.log('edit', employee);
    // nav to
    const url = 'card';
    const url2 = 'card/' + employee.id;
    // this.router.navigate([url, { id: employee.id }]);
    this.router.navigate([url2]);
  }
  ngOnInit() {
  }

  ngOnDestroy() {

  }
}
