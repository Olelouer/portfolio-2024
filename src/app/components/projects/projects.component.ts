import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

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

  applyFilter(event: any) {
    const filterValue = event.target.value.toLowerCase();

    this.translate.get('projects').subscribe((res: any) => {
      let filteredList = res.projects.filter((project: { types?: string[] }) =>
        project.types?.some((type) => type.trim().toLowerCase() === filterValue)
      );
      this.projectsList = filteredList;
    });
  }
}
