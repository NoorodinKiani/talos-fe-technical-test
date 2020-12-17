import { Component, Input, OnInit } from "@angular/core";
import { Location } from "@angular/common";

import { config as configData } from "../../config";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  @Input() post: string;
  config = configData;

  constructor(private location: Location) {}

  ngOnInit() {}

  onChangeRoute(path) {
    this.location.replaceState(`/${path}`);
  }
}
