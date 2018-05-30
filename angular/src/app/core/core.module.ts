import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreService } from './services/core.service';
import { NavbarComponent } from './components/navbar/navbar.component';

//posiblemente habra que importar el router
//import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  //solo los que se desean mostrar para que otros modulos los utilicen
  exports:[ NavbarComponent ],
  declarations: [ NavbarComponent ],
  providers: [ CoreService ]
})
export class CoreModule { }
