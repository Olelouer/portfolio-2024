import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'lib-project-card',
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent implements AfterViewInit {
  @Input() project: {
    title?: string;
    button?: {
      link?: string;
      title?: string;
    };
    text?: string;
    excerpt?: string;
    types?: string[];
    image?: string;
  } = {};

  constructor() {}

  ngAfterViewInit(): void {}
}
