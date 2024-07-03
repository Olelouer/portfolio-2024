import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('headerHtml') headerHtml!: ElementRef;
  private previousPosition: number = 0;
  private headerHeight: number = 0;

  ngAfterViewInit(): void {
    this.calculateHeaderHeight();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.headerBehavior();
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.calculateHeaderHeight();
  }

  headerBehavior() {
    let scroll = window.scrollY;
    if (scroll >= this.previousPosition && scroll > 50) {
      this.headerHtml.nativeElement.style.top = `-${this.headerHeight}px`;
    } else {
      this.headerHtml.nativeElement.style.top = '0';
    }
    this.previousPosition = scroll;
  }

  calculateHeaderHeight() {
    this.headerHeight = this.headerHtml.nativeElement.offsetHeight;
  }
}
