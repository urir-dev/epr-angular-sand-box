import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'yonatan', component: ListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class Lesson3RoutingModule { }
