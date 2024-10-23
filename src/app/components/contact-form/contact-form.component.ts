import { Component, ViewChild, ElementRef } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'lib-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  username: string = '';
  email: string = '';
  message: string = '';

  isSuccess: boolean = false;
  isError: boolean = false;
  isSubmitted: boolean = false;
  isSubmitting: boolean = false;

  @ViewChild('spinner', { static: false }) spinner!: ElementRef;
  public sendEmail(e: Event, form: NgForm) {
    this.isSubmitting = true;

    const isValid = this.validateForm();
    if (!isValid) {
      return;
    }

    this.isSubmitting = false;

    e.preventDefault();
    this.showSpinner();

    emailjs
      .sendForm(
        'service_ru377wb',
        'template_wzc1lae',
        e.target as HTMLFormElement,
        {
          publicKey: 'fswc5TGBdmUbcFneB',
        }
      )
      .then(
        () => {
          this.hideSpinner();
          form.reset();
          this.isSuccess = true;
          this.isError = false;
          this.isSubmitted = true;
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          this.hideSpinner();
          this.isSuccess = false;
          this.isError = true;
          this.isSubmitted = true;
        }
      );
  }
  validateForm(): boolean {
    // Check if username is empty
    if (!this.username.trim()) {
      return false;
    }

    // Check if email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)) {
      return false;
    }

    // Check if message is empty
    if (!this.message.trim()) {
      return false;
    }

    return true; // All checks passed
  }

  // Show and animate the spinner
  showSpinner(): void {
    this.spinner.nativeElement.classList.add('animate-spin', 'opacity-1');
    this.spinner.nativeElement.classList.remove('opacity-0');
  }

  // Hide and stop the spinner
  hideSpinner(): void {
    this.spinner.nativeElement.classList.remove('animate-spin', 'opacity-1');
    this.spinner.nativeElement.classList.add('opacity-0');
  }
}
