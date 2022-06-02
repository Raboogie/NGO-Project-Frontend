import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {EventListComponent} from "./event-mgmt/event-list.component";
import {CreateEventComponent} from "./create-event/create-event.component";
import {UpdateEventComponent} from "./update-event/update-event.component";
import {EventDetailsComponent} from "./event-details/event-details.component";
import { UserComponent } from "./user/user.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { BoardUserComponent } from "./board-user/board-user.component";
import { BoardModeratorComponent } from "./board-moderator/board-moderator.component";
import { BoardAdminComponent } from "./board-admin/board-admin.component";

const routes: Routes = [
  {path: "events", component: EventListComponent},
  //{path: "", redirectTo: "events", pathMatch: "full"},
  {path: "createEvent", component: CreateEventComponent},
  {path: "update-event/:id", component: UpdateEventComponent},
  {path: "event-details/:id", component: EventDetailsComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
