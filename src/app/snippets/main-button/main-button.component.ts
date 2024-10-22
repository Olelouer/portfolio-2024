import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'snip-main-button',
  templateUrl: './main-button.component.html',
})
export class MainButtonComponent {
  @Input() buttonLink: string = '';
  @Input() buttonText: string = '';
  @Input() iconClass: string = '';
  @Input() downloadFile: boolean = false;
  @ViewChild('linkElement') linkElement!: ElementRef;

  constructor() {}
}
