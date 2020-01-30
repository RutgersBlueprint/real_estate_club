import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-executive-tile",
  templateUrl: "./executive-tile.component.html",
  styleUrls: ["./executive-tile.component.css"]
})
export class ExcutiveTileComponent implements OnInit {
  constructor() {}

  @Input() label: String;
  @Input() image: String;
  ngOnInit() {}
}
