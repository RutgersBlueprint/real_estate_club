import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-nav-link",
  templateUrl: "./nav-link.component.html",
  styleUrls: ["./nav-link.component.css"]
})
export class NavLinkComponent implements OnInit {
  @Input() label: String;
  @Input() link: String;
  constructor() {}

  ngOnInit() {}
}
