import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-upcoming-event-tile",
  templateUrl: "./upcoming-event-tile.component.html",
  styleUrls: ["./upcoming-event-tile.component.css"]
})
export class UpcomingEventTileComponent implements OnInit {
  @Input() title: String;
  constructor() {}

  ngOnInit() {}
}
