import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'lib-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent implements AfterViewInit {
  @ViewChild('bannerTitle') bannerTitle!: ElementRef;
  @ViewChild('lineHighlight') lineHighlight!: ElementRef;

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.lineHighlight.nativeElement.style.width = '100%';
      let textArray = this.bannerTitle.nativeElement.textContent.split('');
      this.animationService.reverseAnimation(textArray, this.bannerTitle);
    }, 500);
  }
}
