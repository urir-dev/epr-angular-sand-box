import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Lesson3RoutingModule } from './lesson3-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [HomeComponent, ListComponent],
    imports: [Lesson3RoutingModule],
    providers: []
})
export class Lesson3Module { }
