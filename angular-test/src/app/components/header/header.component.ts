import { Component, OnInit } from "@angular/core";
import {
  Router,
} from "@angular/router";

import { AppService } from "../../app.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  route: string = "";
  newPostText: string = "+";

  constructor(
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit() {
    this.appService.currentRoute.subscribe((route) => (this.route = route));
  }

  onChangeRoute(path: string) {
    this.appService.changeCurrentRoute(`/${path}`);
    this.router.navigate([`/${path}`]);
  }

  onMouseOver(text: string) {
    this.newPostText = text;
  }
}
