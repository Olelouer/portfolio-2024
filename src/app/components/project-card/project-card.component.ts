import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'lib-project-card',
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent implements AfterViewInit {
  @Input() project: {
    title?: string;
    link?: string;
    text?: string;
    excerpt?: string;
    types?: string[];
    image?: string;
  } = {};

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.project);
  }
}
