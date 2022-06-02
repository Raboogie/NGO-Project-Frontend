import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../board-admin/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  user: user = new user;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
  }
  saveUser() {
    this.userService.addEmployee(this.user).subscribe(data => {
      console.log(data);
      this.goToUserList
    },
      error => console.log(error));
  }

  goToUserList() {
    this.router.navigate(["admin"]);
  }

  onSubmit(){
    //this.saveUser();
    this.router.navigate(["admin"]);
  }

}
