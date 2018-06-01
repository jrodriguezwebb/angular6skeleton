import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {routing} from "./home.routing.module";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
