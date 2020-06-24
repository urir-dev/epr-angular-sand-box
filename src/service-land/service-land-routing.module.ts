import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { SonComponent } from './son/son.component';
import { LupaComponent } from './lupa/lupa.component';

/**
 * Here you declate all the routes that you want to render in
 * `app.component.html:
 * <router-outlet></router-outlet>`
 */

const routes: Routes = [
    {
        path: 'lupa', component: LupaComponent, children: [

            { path: '', pathMatch: 'full', redirectTo: 'mom' },
            { path: 'mom', component: ParentComponent },
            { path: 'dad', component: ParentComponent },
            { path: 'roee', component: SonComponent },
            { path: 'maayan', component: SonComponent },
            { path: '**', redirectTo: 'dad' },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ServiceLandRoutingModule { }
