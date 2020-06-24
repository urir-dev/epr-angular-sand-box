import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SonComponent } from './son/son.component';
import { ParentComponent } from './parent/parent.component';
import { ServiceLandRoutingModule } from './service-land-routing.module';



@NgModule({
  declarations: [SonComponent, ParentComponent],
  imports: [
    CommonModule,
    ServiceLandRoutingModule
  ]
})
export class ServiceLandModule { }
