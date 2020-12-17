import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppService {
  private routeSource = new BehaviorSubject<string>(undefined);
  currentRoute = this.routeSource.asObservable();

  constructor() {}

  changeCurrentRoute(route: string) {
    this.routeSource.next(route);
  }
}
