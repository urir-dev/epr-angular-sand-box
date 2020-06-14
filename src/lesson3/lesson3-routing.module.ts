import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';

/**
 * Here you declate all the routes that you want to render in
 * `app.component.html:
 * <router-outlet></router-outlet>`
 */
const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'yonatan', component: ListComponent },
    { path: 'card', component: CardComponent },
    { path: 'card/:id', component: CardComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class Lesson3RoutingModule { }
