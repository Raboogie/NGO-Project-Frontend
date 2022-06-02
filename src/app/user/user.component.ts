import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  msg!:string;
  selected:number = 1;
  constructor(public userService:UserServiceService, private router: Router ) {}

  ngOnInit(): void {
    this.msg = "This is employee component";
    this.userService.getAllEmployees().subscribe({
        next:(data) => {
          this.userService.data = data;
          console.log(data);
        },
        error:(err) => { alert(err)
       }})
      ;
  }
  getEmployee(id:number) {
    this.userService.getEmployee(id).subscribe(
      {
        next:(data) => {
          this.userService.viewArow(data);
        },
        error:(err) => {alert("There is something wrong!")}
      }
    )
  }

  delEmployee(user:any) {
    this.userService.deleteEmployee(user.userId).subscribe(
      {
        next:(data) => {
          alert("You have successfully deleted an employee!");
          this.userService.deleleArow(user);
        },
        error:(err) => console.log("There is an error!")
      }
    )
  }

}
