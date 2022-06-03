import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "./event";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // change later to match aws rds server path
<<<<<<< HEAD
  private baseURL = "http://localhost:9090/getAllEvents";
  private createEventURL = "http://localhost:9090/addEvent";
  private getEventByIdURL = "http://localhost:9090/getEvent";
  private updateEventURL = "http://localhost:9090/updateEvent"
  private deleteEventURL = "http://localhost:9090/deleteEvent"
=======
  private baseURL = "http://localhost:8080/getAllEvents";
  private createEventURL = "http://localhost:8080/addEvent";
  private getEventByIdURL = "http://localhost:8080/getEvent";
  private updateEventURL = "http://localhost:8080/updateEvent"
  private deleteEventURL = "http://localhost:8080/deleteEvent"
>>>>>>> Amyfrontend

  // inject HttpClient module from the app.module
  constructor(private httpClient: HttpClient) { }

  getEventList(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(`${this.baseURL}`);
  }

  createEvent(event: Event): Observable<Object> {
    return this.httpClient.post(`${this.createEventURL}`, event);
  }

  getEventById(id: number): Observable<Event> {
    return this.httpClient.get<Event>(`${this.getEventByIdURL}/${id}`);
  }

  updateEvent(id: number, event: Event): Observable<Object> {
    return this.httpClient.put(`${this.updateEventURL}/${id}`, event);
  }

  deleteEvent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.deleteEventURL}/${id}`);
  }

}
