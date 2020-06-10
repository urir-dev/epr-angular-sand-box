import { Component, OnInit, OnDestroy } from '@angular/core';
import { IEmployee } from '../employee/employee.model';

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
  constructor() {
    console.log('List Break😂');

  }
  onEmployeeEdit(employee: IEmployee) {
    console.log('edit', employee);

  }
  ngOnInit() {
  }

  ngOnDestroy() {

  }
}
