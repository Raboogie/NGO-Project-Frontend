import { Component, OnInit } from '@angular/core';
import {Event} from "../event";
import {EventService} from "../event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events?: Event[];
  // Inject event service into event-list component
  // Router route info
  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.getEvents();
  }
// hard code sample data used for testing
  /*public events: { eventID: number, event: string, category: string, location: string, startDate: string, endDate: string }[] = [
    { "eventID": 1, "event": "bible study", "category": "Saideep", "location": "Tech Lead", "startDate": " 1/11/11/2022", "endDate": "5/10/2022" },
    { "eventID": 2, "event": "Thought to be thoughtful", "category": "Karthik", "location": "Manager", "startDate": " 1/11/11/2022", "endDate": "5/10/2022" },
    { "eventID": 3, "event": "Meditation", "category": "Kiran", "location": "Senior Systems Engineer", "startDate": " 1/11/11/2022", "endDate": "5/10/2022" },
    { "eventID": 4, "event": "ideal Parenting", "category": "Revanth", "location": "Technology Analyst", "startDate": " 1/11/11/2022", "endDate": "5/10/2022" },
    { "eventID": 5, "event": "Other", "category": "Ravi", "location": "Systems Engineer", "startDate": " 1/11/11/2022", "endDate": "5/10/2022" }
  ];*/

  private getEvents() {
    // gets the response date from event service, which gets its data from the rest api
    this.eventService.getEventList().subscribe(data => {
      console.log(data);
      this.events = data;
    });
  }

  updateEvent(id?: any) {
    this.router.navigate(['update-event', id]);
  }

  addEvent() {
    console.log("Adding an event!")
    this.router.navigate(['createEvent'])
  }

  deleteEvent(id?: number) {
    if (id != null) {
      this.eventService.deleteEvent(id).subscribe(data => {
        console.log(data);
        this.getEvents();
      })
    }
  }

  eventDetails(id?: number) {
    this.router.navigate(['event-details', id]);
  }
}
