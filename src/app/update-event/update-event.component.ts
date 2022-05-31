import { Component, OnInit } from '@angular/core';
import {EventService} from "../event.service";
import {Event} from "../event";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  event: Event = new Event();

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) { }

  id?: number;
  ngOnInit(): void {
    // assigned the id from route to this id property
    this.id = this.route.snapshot.params['id']; // how you get an id from its specific route
    if (this.id != null) {
      this.eventService.getEventById(this.id).subscribe(data => {
        this.event = data;
      }, error => console.log(error));
    }
  }

  onSubmit() {
    if (this.id != null) {
      this.eventService.updateEvent(this.id, this.event).subscribe(data => {
        this.goToEventList();
      }, error => console.log(error));
    }
  }

  private goToEventList() {
    this.router.navigate(["/events"]);
  }
}
