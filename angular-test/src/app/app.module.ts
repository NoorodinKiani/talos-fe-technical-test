import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from "./app.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { PostComponent } from "./components/post/post.component";

@NgModule({
  declarations: [AppComponent, PostsComponent, PostComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "posts", component: PostsComponent },
      { path: "**", component: PostsComponent },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
