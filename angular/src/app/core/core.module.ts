import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TranslationLoaderResolver } from './services/translation-loader.resolver';
import { CoreService } from './services/core.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// posiblemente habra que importar el router
// import { Routes, RouterModule } from '@angular/router';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    })
  ],
  // solo los que se desean mostrar para que otros modulos los utilicen
  exports: [ NavbarComponent ],
  declarations: [ NavbarComponent ],
  providers: [
    CoreService,
    TranslationLoaderResolver
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('ERROR: CoreModule is already loaded. Import it in the AppModule only!');
    }
  }
}
