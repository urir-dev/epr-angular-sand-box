import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SonComponent } from './son/son.component';
import { ParentComponent } from './parent/parent.component';
import { ServiceLandRoutingModule } from './service-land-routing.module';
import { LupaComponent } from './lupa/lupa.component';



@NgModule({
  declarations: [SonComponent, ParentComponent, LupaComponent],
  imports: [
    CommonModule,
    ServiceLandRoutingModule
  ]
})
export class ServiceLandModule { }
