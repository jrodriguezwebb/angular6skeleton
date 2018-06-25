import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslationLoaderResolver } from './core/services/translation-loader.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './+home/home.module#HomeModule', resolve: { trans: TranslationLoaderResolver  } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
