import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lib-skills-banner',
  templateUrl: './skills-banner.component.html',
})
export class SkillsBannerComponent {
  skillsList: Array<any> = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.get('components.skills-banner').subscribe((res: any) => {
      this.skillsList = res;
    });
  }
}
