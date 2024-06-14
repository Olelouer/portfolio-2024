import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent implements AfterViewInit {
  @ViewChild('bannerTitle') bannerTitle!: ElementRef;

  ngAfterViewInit(): void {}
}
