import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AppService } from "../../app.service";
import { config as configData } from "../../config";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  @Input() post: string;
  route: string = "";
  config: any = configData;

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit() {}

  onChangeRoute(path, id) {
    this.appService.changeCurrentRoute(`/${path}`);
    this.router.navigate([`/${path}/${id}`]);
  }
}
