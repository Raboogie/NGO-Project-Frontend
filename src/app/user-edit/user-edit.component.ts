import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../board-admin/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: user = new user();

  constructor(private eventService: UserService, private route: ActivatedRoute, private router: Router) { }

  id?: number;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; 
  }

  onSubmit() {
    if (this.id != null) {
      this.eventService.updateUser(this.id, this.user).subscribe(data => {
        this.goToEventList();
      }, error => console.log(error));
    }
  }

  private goToEventList() {
    this.router.navigate(["/admin"]);
  }
}

