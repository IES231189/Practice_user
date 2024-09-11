import { Component, OnInit } from '@angular/core';
import { IUser } from '../iuser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})

export class UserDashboardComponent implements OnInit{
  users: IUser[]=[];

  constructor(private userService:UserService){}

  ngOnInit(): void {
      this.userService.getUsers().subscribe((data :IUser[])=>{
        this.users = data
      });
  }

}
