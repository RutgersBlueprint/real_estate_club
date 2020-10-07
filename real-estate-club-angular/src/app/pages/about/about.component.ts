import { Component, OnInit } from '@angular/core';
import { faBullseye, faTrophy, faHandshake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faBullseye = faBullseye;
  faTrophy = faTrophy;
  faHandshake = faHandshake;
  constructor() { }

  ngOnInit() {
  }

}
