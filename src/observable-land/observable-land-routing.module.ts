import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CastleComponent } from './castle/castle.component';

/**
 * Here you declate all the routes that you want to render in
 * `app.component.html:
 * <router-outlet></router-outlet>`
 */

const routes: Routes = [
    {
        path: 'castle', component: CastleComponent, children: [

            { path: '', pathMatch: 'full', redirectTo: 'castle' },
            // { path: 'castle', component: CastleComponent },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ObservableLandRoutingModule { }
