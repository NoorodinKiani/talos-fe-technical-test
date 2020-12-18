import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { PostComponent } from "./components/post/post.component";
import { HeaderComponent } from "./components/header/header.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NewPostComponent } from "./pages/new-post/new-post.component";
import { ViewPostComponent } from "./pages/view-post/view-post.component";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    HeaderComponent,
    NotFoundComponent,
    NewPostComponent,
    ViewPostComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: PostsComponent },
      { path: "posts", component: PostsComponent },
      { path: "posts/:id", component: ViewPostComponent },
      { path: "new-post", component: NewPostComponent },
      { path: "**", component: NotFoundComponent },
    ]),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
