import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../board-admin/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  public employeeForm: any;
  employees: any;
  errorMsg: any;

  user: user = new user();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEvent() {
    this.userService.addUser(this.user).subscribe(data => {
      console.log(data);
      this.goToEventList()
    },
      error => console.log(error));
  }

  goToEventList() {
    this.router.navigate(['/admin']);
  }

  onSubmit(){
    console.log(this.user);
    this.saveEvent();
  }


}
