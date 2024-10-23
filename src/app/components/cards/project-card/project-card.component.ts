import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-project-card',
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  @Input() project: {
    title?: string;
    button?: {
      link?: string;
      title?: string;
    };
    text?: string;
    excerpt?: string;
    types?: string[];
    image?: {
      src?: string;
      alt?: string;
    };
  } = {};
}
