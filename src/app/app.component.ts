import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private defaultLanguage: string = 'en';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.defaultLanguage);
    this.translateService.use(
      localStorage.getItem('lang') || this.defaultLanguage
    );
  }
  title = 'portfolio2024';
}
