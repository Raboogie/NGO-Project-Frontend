import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "./event";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // change later to match aws rds server path
  private baseURL = "http://localhost:8080/getAllEvents"

  // inject HttpClient module from the app.module
  constructor(private httpClient: HttpClient) { }

  getEventList(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(`${this.baseURL}`)
  }
}
