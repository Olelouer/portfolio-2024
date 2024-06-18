import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'lib-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  public sendEmail(e: Event) {
    e.preventDefault();

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
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }
}
