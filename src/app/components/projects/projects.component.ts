import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lib-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projectsList: Array<any> = [];
  filters: Array<string> = [];
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.get('projects').subscribe((res: any) => {
      this.projectsList = res.projects;
      this.filters = res.filters;
    });
  }
}
