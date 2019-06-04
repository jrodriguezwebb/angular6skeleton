import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature1Component } from './feature1.component';
import { SubfeatureComponent } from './subfeature/subfeature.component';

const routes: Routes = [
  { 
    path: 'feature1', 
    component: Feature1Component,
    children: [
      {
          path: 'subfeature',
          component: SubfeatureComponent
      }
    ]
  }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class Feature1RoutingModule {}
