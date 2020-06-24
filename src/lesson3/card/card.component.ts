import { Component, OnInit, Input } from '@angular/core';
import { IEmployee } from '../employee/employee.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  title = {
    title: 'Employee card works!'
  };

  employee: IEmployee;
  constructor(private router: ActivatedRoute, private http: HttpClient) {
    // 
    this.getAllUserFromIsrael();

  }
  getAllUserFromIsrael() {
    setTimeout(() => {
      console.log('all users');

    }, 6000);
  }

  ngOnInit() {
    this.getUrlParams();

  }
  getUrlParams() {
    this.router.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log('id', id);

      this.getEmployee(Number(id));
    });
    console.log('after params');
  }
  getEmployee(id: number) {
    // get from db or list
  }

}
