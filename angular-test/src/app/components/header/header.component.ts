import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  pathname = "";
  newPostText = "+";

  constructor(private location: Location) {}

  ngOnInit() {
    this.pathname = location.pathname;
  }

  onChangeRoute(path: string) {
    this.location.replaceState(`/${path}`);
  }

  onMouseOver(text: string) {
    this.newPostText = text;
  }
}
