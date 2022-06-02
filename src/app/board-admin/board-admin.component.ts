import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { user } from './user';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  user?: user[];
  updatedUser?: user[];
  constructor(private userService: UserService, private router: Router, private token:TokenStorageService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getAllEmployees().subscribe(data => {
      console.log(data);
      this.user = data;
    });
    this.updatedUser = this.token.getUser();
  }

  deleteUser(id?: number) {
    if (id != null) {
      this.userService.deleteEmployees(id).subscribe(data => {
        console.log(data);
        this.getUsers();
      })
    }
  }

  updateEvent(id?: any) {
    this.router.navigate(['update-user', id]);
  }

  addEvent() {
    this.router.navigate(['add-user']);
  }

}