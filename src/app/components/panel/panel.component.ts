import { Component, ElementRef, ViewChild } from '@angular/core';
import * as focusTrap from 'focus-trap';

@Component({
  selector: 'lib-panel',
  templateUrl: './panel.component.html',
})
export class PanelComponent {
  isOpen = false;
  private trap: any;

  @ViewChild('panel', { static: false }) panelElement!: ElementRef;

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
}
