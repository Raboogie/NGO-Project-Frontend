import { Component, OnInit } from '@angular/core';
import {Event} from "../event";
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../event.service";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  id?: number;
  event!: Event;
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.event = new Event();
    if (this.id != null) {
      this.eventService.getEventById(this.id).subscribe(data => {
        this.event = data;
      })
    }
  }
}
