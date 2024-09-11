import { Component } from '@angular/core';
import { IUser } from '../iuser';

@Component({
  selector: 'app-management-user',
  templateUrl: './management-user.component.html',
  styleUrl: './management-user.component.css'
})
export class ManagementUserComponent {
  users: IUser[] = [];

  agregarUsuario(user:IUser):void{
    this.users.push(user);
  }
}