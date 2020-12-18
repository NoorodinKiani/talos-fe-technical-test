import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { config } from "../../config";
@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    return this.http
      .get(`${config.baseUrl}posts`)
      .subscribe((response: any) => {
        this.posts = response.reverse();
      });
  }
}
