import { Component, HostListener, Input, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isDesktop;
  faInstragram = faInstagram;
  faFacebookF = faFacebookF;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) { // detect screen size change
    if(window.innerWidth < 745){
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }
  }
}
