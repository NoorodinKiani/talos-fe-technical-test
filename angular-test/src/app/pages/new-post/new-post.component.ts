import { Component, OnInit, NgZone } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

import { config } from "../../config";
import { AppService } from "../../app.service";

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html",
  styleUrls: ["./new-post.component.scss"],
})
export class NewPostComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    tag: new FormControl(""),
    image: new FormControl("", Validators.required),
    tags: new FormControl([], Validators.required),
  });

  fileData: any = null;
  loading: boolean = false;
  imagePath;
  imgURL: any;
  message: string = "No image!";
  constructor(
    private appService: AppService,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private zone: NgZone,
    private router: Router
  ) {}

  ngOnInit() {}

  handleFileInput(files: FileList) {
    this.fileData = files.item(0);
    this.previewImage(files);
  }

  previewImage(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  addTag(tag) {
    if (tag && !this.form.value.tags.find((item) => item === tag)) {
      this.form.value.tags.push(tag);
      this.form.setValue({ ...this.form.value, tag: "" });
    }
  }

  removeTag(tag) {
    const tags = this.form.value.tags.filter((item) => item !== tag);
    this.form.setValue({ ...this.form.value, tags });
  }

  submit() {
    this.loading = true;
    return this.http
      .post(`${config.baseUrl}posts`, this.form.value)
      .subscribe((response) => {
        this.uploadImage(response["id"]);
      });
  }

  uploadImage(id) {
    const uploadForm = new FormData();
    uploadForm.append("image", this.fileData);
    uploadForm.append("id", JSON.stringify(id));

    this.http
      .put(`${config.baseUrl}posts/${id}/picture`, uploadForm)
      .subscribe((res) => {
        this.loading = false;
        this.showSnackbar("Post created successfully!");
      });
  }

  showSnackbar(message: string, action = "success", duration = 7000): void {
    this.zone.run(() => {
      this.snackBar.open(message, action, {
        duration,
        horizontalPosition: "center",
        verticalPosition: "top",
      });

      setTimeout(() => {
        this.appService.changeCurrentRoute(`/`);
        this.router.navigate([`/`]);
      }, 1000);
    });
  }
}
