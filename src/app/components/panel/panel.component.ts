import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as focusTrap from 'focus-trap';

@Component({
  selector: 'lib-panel',
  templateUrl: './panel.component.html',
})
export class PanelComponent {
  isOpen = false;
  private trap: any;

  @ViewChild('panel', { static: false }) panelElement!: ElementRef;

  constructor(private translateService: TranslateService) {}

  get currentLang(): string {
    return this.translateService.currentLang;
  }

  togglePanel() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.activateFocusTrap();
    } else {
      this.deactivateFocusTrap();
    }
  }

  closePanel() {
    this.isOpen = false;
    this.deactivateFocusTrap();
  }

  activateFocusTrap() {
    if (this.panelElement) {
      this.trap = focusTrap.createFocusTrap(this.panelElement.nativeElement, {
        escapeDeactivates: true,
        clickOutsideDeactivates: true,
      });
      this.trap.activate();
    }
  }

  deactivateFocusTrap() {
    if (this.trap) {
      this.trap.deactivate();
    }
  }

  // Save selected language to local storage
  changeLanguage(lang: string): void {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
  }
}
