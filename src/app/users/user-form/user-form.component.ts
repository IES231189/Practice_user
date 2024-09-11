import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { IUser } from '../iuser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  newUser:IUser={
    id:0,
    name:'',
    username:'',
    phone:'',
    email:''

  };


  constructor(private userService: UserService){}

  onSubmit(){
    this.userService.addUser(this.newUser).subscribe(() => {
      console.log('User added!');
  });
}



}
