import { Component, OnInit } from '@angular/core';
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faFacebookF = faFacebookF;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit() {
  }

}
