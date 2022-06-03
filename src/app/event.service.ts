import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "./event";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // change later to match aws rds server path
  /*
  private baseURL = "/api/event/getAllEvents";
  private createEventURL = "http://localhost:9090/api/event/addEvent";
  private getEventByIdURL = "http://localhost:9090/api/event/api/event/getEvent";
  private updateEventURL = "http://localhost:9090/api/event/updateEvent"
  private deleteEventURL = "http://localhost:9090/api/event/deleteEvent"
  */

  private baseURL = "http://ec2-18-119-11-84.us-east-2.compute.amazonaws.com:8080/getAllEvents";
  private createEventURL = "http://ec2-18-119-11-84.us-east-2.compute.amazonaws.com:8080/addEvent";
  private getEventByIdURL = "http://ec2-18-119-11-84.us-east-2.compute.amazonaws.com:8080/getEvent";
  private updateEventURL = "http://ec2-18-119-11-84.us-east-2.compute.amazonaws.com:8080/updateEvent"
  private deleteEventURL = "http://ec2-18-119-11-84.us-east-2.compute.amazonaws.com:8080/deleteEvent"

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
