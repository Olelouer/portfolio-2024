import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'lib-skill-card',
  templateUrl: './skill-card.component.html',
})
export class SkillCardComponent implements AfterViewInit {
  @Input() skill: {
    title?: string;
    logo?: {
      src?: string;
      alt?: string;
    };
    level?: string;
    barLevel?: string;
  } = {};

  @ViewChild('progressBar') progressBar!: ElementRef;

  ngAfterViewInit(): void {
    if (this.skill.barLevel) {
      setTimeout(() => {
        this.progressBar.nativeElement.style.width = `${this.skill.barLevel}%`;
      }, 900);
    }
  }
}
