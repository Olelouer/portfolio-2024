import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'snip-link',
  templateUrl: './link.component.html',
})
export class LinkComponent {
  @Input() linkText: string = '';
  @Input() linkUrl: string = '';
  @ViewChild('linkElement') linkElement!: ElementRef;

  constructor(private animationService: AnimationService) {}

  onHover() {
    // let textArray = this.linkElement.nativeElement.textContent.split("");
    // this.animationService.reverseAnimation(textArray, this.linkElement);
  }
}
