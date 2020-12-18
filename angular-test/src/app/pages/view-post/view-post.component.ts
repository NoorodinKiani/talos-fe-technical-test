import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { AppService } from "../../app.service";
import { config as configData } from "../../config";

@Component({
  selector: "app-view-post",
  templateUrl: "./view-post.component.html",
  styleUrls: ["./view-post.component.scss"],
})
export class ViewPostComponent implements OnInit {
  postId: any;
  post: any;
  config: any = configData;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private appService: AppService,
    private location: Location
  ) {}

  ngOnInit() {
    this.appService.changeCurrentRoute(this.location.path());
    this.postId = this.route.snapshot.paramMap.get("id");
    this.getPosts(this.postId);
  }

  getPosts(id) {
    return this.http
      .get(`${this.config.baseUrl}posts/${id}`)
      .subscribe((response: any) => {
        this.post = response;
      });
  }
}
