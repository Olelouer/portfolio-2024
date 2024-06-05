import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'snip-main-button',
  templateUrl: './main-button.component.html'
})
export class MainButtonComponent {
  @Input() buttonText: string = "";
  @ViewChild('linkElement') linkElement!: ElementRef;

  constructor (private animationService: AnimationService) {};

  onHover() {
    let textArray = this.linkElement.nativeElement.textContent.split("");
    this.animationService.reverseAnimation(textArray, this.linkElement);
  }
}
