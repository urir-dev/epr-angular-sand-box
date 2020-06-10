import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Lesson3RoutingModule } from './lesson3-routing.module';
import { ListComponent } from './list/list.component';
import { EmployeeComponent } from './employee/employee.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [HomeComponent, ListComponent, EmployeeComponent],
    imports: [
        CommonModule,
        Lesson3RoutingModule],
    providers: []
})
export class Lesson3Module { }
