import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

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

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
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
