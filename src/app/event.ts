// Going to hold the response from the rest api
import {Time} from "@angular/common";

export class Event {
  eventID: number | undefined;
  eventName: string | undefined;
  category: string | undefined;
  location: string | undefined;
  adultTicketPrice: number | undefined;
  childTicketPrice: number | undefined;
  startDate: Date = new Date();
  endDate: Date = new Date();
  /*startTime: Time = {
    hours: number,
    minutes: number
  };*/



}
