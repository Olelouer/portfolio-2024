import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent implements AfterViewInit {
  @ViewChild('bannerTitle') bannerTitle!: ElementRef;

  ngAfterViewInit(): void {
    let bannerArray: Array<string> = this.bannerTitle.nativeElement.textContent.split("");    
    this.reverseAnimation(bannerArray);
  }

  reverseAnimation(array: Array<string>): void {
    let startIndex = 0;
    let endIndex = array.length - 1;

    let interval = setInterval(() => {
      let temp = array[startIndex];
      array[startIndex] = array[endIndex];
      array[endIndex] = temp;

      startIndex++;
      endIndex--;

      this.bannerTitle.nativeElement.innerHTML = array.join("");          
      
      if (startIndex >= array.length) {
        clearInterval(interval);
      }
    }, 20);
  }
}
