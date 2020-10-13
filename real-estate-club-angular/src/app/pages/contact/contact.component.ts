import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faInstragram = faInstagram;
  faFacebookF = faFacebookF;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit() {
  }

}
