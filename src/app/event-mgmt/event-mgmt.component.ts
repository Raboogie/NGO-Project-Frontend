import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-mgmt',
  templateUrl: './event-mgmt.component.html',
  styleUrls: ['./event-mgmt.component.css']
})
export class EventMgmtComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  public events: { event: string, category: string, location: string, startDate: string, endDate: string }[] = [
    { "event": "bible study", "category": "Saideep", "location": "Tech Lead", "startDate": " 1/11/11/2022", "endDate": "5/10/2022" },
    { "event": "Thought to be thoughtful", "category": "Karthik", "location": "Manager", "startDate": " 1/11/11/2022", "endDate": "5/10/2022" },
    { "event": "Meditation", "category": "Kiran", "location": "Senior Systems Engineer", "startDate": " 1/11/11/2022", "endDate": "5/10/2022" },
    { "event": "ideal Parenting", "category": "Revanth", "location": "Technology Analyst", "startDate": " 1/11/11/2022", "endDate": "5/10/2022" },
    { "event": "Other", "category": "Ravi", "location": "Systems Engineer", "startDate": " 1/11/11/2022", "endDate": "5/10/2022" },
  ];


  addEvent() {
    console.log("Adding an event!")
  }
}
