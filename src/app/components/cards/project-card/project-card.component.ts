import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-project-card',
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent implements OnInit {
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
  isFlipped = false;
  isMobileOrTablet = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobileOrTablet = window.innerWidth < 1024;
  }

  toggleFlip() {
    if (this.isMobileOrTablet) {
      this.isFlipped = !this.isFlipped;
    }
  }
}
