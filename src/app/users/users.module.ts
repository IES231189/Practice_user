import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserFormComponent } from './user-form/user-form.component';



@NgModule({
  declarations: [
    UserDashboardComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
