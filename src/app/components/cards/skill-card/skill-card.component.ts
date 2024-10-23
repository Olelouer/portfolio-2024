import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-skill-card',
  templateUrl: './skill-card.component.html',
})
export class SkillCardComponent {
  @Input() skill: {
    title?: string;
    logo?: {
      src?: string;
      alt?: string;
    };
    level?: string;
    barLevel?: string;
  } = {};
}
