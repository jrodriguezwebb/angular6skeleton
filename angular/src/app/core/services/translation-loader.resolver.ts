import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/internal/operators/map';

import { TranslationLoader } from './translation-loader.service';
import { TranslateModule, TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Injectable()
export class TranslationLoaderResolver implements Resolve<any> {
  translations: Array<any> = [];
  currentSource: Array<any>;

  constructor(
    private http: Http,
    private translateService: TranslateService
  ) {
    this.translateService.onLangChange.subscribe(
      (lang: LangChangeEvent) => {
        console.log(lang);
        this.langChange(lang);
      }
    );
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    switch (route.url[0].path) {
    case 'screen': // screen/home and screen/eforms routes
      this.currentSource = [`./app/+${route.url[1].path}/assets/i18n/`];
      break;
    default: // form routes e.g. e-2017-2-ka347
      const p = route.url[0].path.split('-');
      this.currentSource = [
        // Here we add all the routes of each module
        // TODO: try to improve this
        `./app/+home/assets/i18n/`,
       /*  `./app/+eforms/assets/i18n/`,
        `./app/+eforms/${p[1]}/assets/i18n/`,
        `./app/+eforms/${p[1]}/${p[3].substr(0, 3)}/assets/i18n/`,
        `./app/+eforms/${p[1]}/${p[3].substr(0, 3)}/${p[2]}/assets/i18n/`,
        `./app/+eforms/${p[1]}/${p[3].substr(0, 3)}/${p[2]}/+${p[3]}/assets/i18n/` */
      ];
    }
    /* console.log(this.translateService.currentLang);
    console.log(this.currentSource); */
    return this.resolveTranslation(this.translateService.currentLang, this.currentSource);
  }

  langChange(event: LangChangeEvent) {
    this.resolveTranslation(event.lang, this.currentSource).subscribe();
  }

  resolveTranslation(lang: string, source: Array<any>): Observable<any> {
    const key = source.join() + lang;

    // TODO: dont' know how works the firs if
    if (this.translations[key]) {
      return of(this.translations[key]).pipe(map(trans => {
        this.translateService.setTranslation(lang, trans, true);
        return '';
      }));
    } else {
      // Always enter here now

      // this read the json file and converts it into an object
      const loader: TranslationLoader = new TranslationLoader(this.http, source);

      return loader.getTranslation(lang).pipe(map(trans => {
        // this applys the json file converted
        this.translateService.setTranslation(lang, trans[0], true);
        this.translations[key] = trans[0];
          // work around for bug in ngRx Translate or Angular (make sure to apply translations)
          /* setTimeout(() => {
              this.translateService.setTranslation(lang, trans, true);
          }, 500); */
        return '';
      }));
    }
  }

}
