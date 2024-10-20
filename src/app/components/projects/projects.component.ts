import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lib-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projectsList: Array<any> = [];
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.get('components.projects').subscribe((res: any) => {
      this.projectsList = res.projects;
    });
  }
}
