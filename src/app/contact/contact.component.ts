import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  email: string = 'professionalcv71@gmail.com';
  whatsapp: string = '+971 55 351 6360';
  address: string = 'Dubai, UAE';

  socials = {
    facebook: 'https://facebook.com/',
    linkedin: 'https://linkedin.com/'
  };

  openWhatsApp(): void {
    const message = encodeURIComponent('Hello, I want a professional CV.');
    window.open(`https://wa.me/${this.whatsapp}?text=${message}`, '_blank');
  }

}