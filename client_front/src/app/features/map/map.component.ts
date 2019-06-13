import { Component, OnInit } from "@angular/core";

@Component({
  selector: "pr-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  public map: any = { lat: 51.678418, lng: 7.809007 };

  constructor() {}

  ngOnInit() {}
}
