import { Component, OnInit } from '@angular/core';
import {Event} from "../event";
import {EventService} from "../event.service";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[] | undefined;
  // Inject event service into event-list component
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  /*public events: { event: string, category: string, location: string, startDate: string, endDate: string }[] = [
    { "event": "bible study", "category": "Saideep", "location": "Tech Lead", "startDate": " 1/11/11/2022", "endDate": "5/10/2022" },
    { "event": "Thought to be thoughtful", "category": "Karthik", "location": "Manager", "startDate": " 1/11/11/2022", "endDate": "5/10/2022" },
    { "event": "Meditation", "category": "Kiran", "location": "Senior Systems Engineer", "startDate": " 1/11/11/2022", "endDate": "5/10/2022" },
    { "event": "ideal Parenting", "category": "Revanth", "location": "Technology Analyst", "startDate": " 1/11/11/2022", "endDate": "5/10/2022" },
    { "event": "Other", "category": "Ravi", "location": "Systems Engineer", "startDate": " 1/11/11/2022", "endDate": "5/10/2022" },
  ];*/

  private getEvents() {
    // gets the response date from event service, which gets its data from the rest api
    this.eventService.getEventList().subscribe(data => {
      console.log(data);
      this.events = data;
    });
  }

  addEvent() {
    console.log("Adding an event!")
  }
}
