import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { Feature1Component } from './feature1.component';
import { Feature1RoutingModule } from './feature1.routing.module';
import { SubfeatureComponent } from './subfeature/subfeature.component';

@NgModule({
  imports: [
    SharedModule,
    Feature1RoutingModule
  ],
  declarations: [
    Feature1Component,
    SubfeatureComponent
  ]
})
export class Feature1Module { }
