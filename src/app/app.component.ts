import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedLang: string;
  fr = 'fr';
  en = 'en';

  constructor(private translate: TranslateService) {
    const userLang = getNavigatorLanguage();
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(defaultLang);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(userLang);
    this.selectedLang = userLang;
  }

  selectLang(lang: string) {
    this.translate.use(lang);
    this.selectedLang = lang;
  }
}

const defaultLang = 'en';

function getNavigatorLanguage(): string {
  if (navigator.language) {
    return navigator.language.split('-')[0] || defaultLang;
  }

  return defaultLang;
}
