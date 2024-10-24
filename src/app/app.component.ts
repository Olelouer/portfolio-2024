import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private defaultLanguage: string = 'fr';
  title: string = '';
  description: string = '';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.defaultLanguage);
    this.translateService.use(
      localStorage.getItem('lang') || this.defaultLanguage
    );

    // Set the title using translation
    this.translateService.get('meta.title').subscribe((res: string) => {
      this.title = res;
      document.title = this.title; // Set the document title
    });

    // Set the meta description using translation
    this.translateService.get('meta.description').subscribe((res: string) => {
      this.description = res;
      this.setMetaDescription(this.description);
    });
  }

  ngOnInit(): void {
    AOS.init();
  }

  private setMetaDescription(description: string): void {
    const metaTag = document.querySelector('meta[name="description"]');
    if (metaTag) {
      metaTag.setAttribute('content', description);
    } else {
      // If the meta tag doesn't exist, create one
      const newMetaTag = document.createElement('meta');
      newMetaTag.name = 'description';
      newMetaTag.content = description;
      document.head.appendChild(newMetaTag);
    }
  }
}
