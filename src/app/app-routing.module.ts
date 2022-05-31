import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {EventListComponent} from "./event-mgmt/event-list.component";
import {CreateEventComponent} from "./create-event/create-event.component";
import {UpdateEventComponent} from "./update-event/update-event.component";
import {EventDetailsComponent} from "./event-details/event-details.component";

const routes: Routes = [
  {path: "events", component: EventListComponent},
  {path: "", redirectTo: "events", pathMatch: "full"},
  {path: "createEvent", component: CreateEventComponent},
  {path: "update-event/:id", component: UpdateEventComponent},
  {path: "event-details/:id", component: EventDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
