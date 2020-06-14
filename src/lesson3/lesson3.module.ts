import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Lesson3RoutingModule } from './lesson3-routing.module';
import { ListComponent } from './list/list.component';
import { EmployeeComponent } from './employee/employee.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        HomeComponent,
        ListComponent,
        EmployeeComponent,
        CardComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        Lesson3RoutingModule],
    providers: []
})
export class Lesson3Module { }
