import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

import { AppService } from "../../app.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  route: string = "";

  constructor(
    private appService: AppService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.appService.currentRoute.subscribe((route) => (this.route = route));
    this.appService.changeCurrentRoute(this.location.path());
  }

  onChangeRoute(path: string) {
    this.appService.changeCurrentRoute(`/${path}`);
    this.router.navigate([`/${path}`]);
  }
}
